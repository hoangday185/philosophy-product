"use client";

import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import L from "leaflet";

// Import Leaflet CSS
import "leaflet/dist/leaflet.css";

// Dynamic import để tránh SSR issues
const MapContainer = dynamic(
	() => import("react-leaflet").then((mod) => mod.MapContainer),
	{ ssr: false }
) as any;
const TileLayer = dynamic(
	() => import("react-leaflet").then((mod) => mod.TileLayer),
	{ ssr: false }
) as any;
const Marker = dynamic(
	() => import("react-leaflet").then((mod) => mod.Marker),
	{ ssr: false }
) as any;
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
	ssr: false,
}) as any;
const Polyline = dynamic(
	() => import("react-leaflet").then((mod) => mod.Polyline),
	{ ssr: false }
) as any;
const Tooltip = dynamic(
	() => import("react-leaflet").then((mod) => mod.Tooltip),
	{ ssr: false }
) as any;

interface LeafletMapProps {
	provinces?: Array<{
		name: string;
		lat: number;
		lng: number;
		students?: number;
		courses?: number;
		content?: string; // Thêm content cho từng marker
		originalName?: string; // Tên gốc của chiến dịch
	}>;
	dots?: Array<{
		start: { lat: number; lng: number; label?: string };
		end: { lat: number; lng: number; label?: string };
	}>;
	lineColor?: string;
	onProvinceClick?: (provinceName: string) => void;
	showDotCircles?: boolean;
	useStraightLines?: boolean;
	showIslandLabels?: boolean; // Hiển thị labels tiếng Việt cho các quần đảo
}

export default function LeafletMap({
	provinces = [],
	dots = [],
	lineColor = "#0ea5e9",
	onProvinceClick,
	showDotCircles = true,
	useStraightLines = false,
	showIslandLabels = true,
}: LeafletMapProps) {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [animatedMarkers, setAnimatedMarkers] = useState<number[]>([]);
	const timeoutRefs = useRef<NodeJS.Timeout[]>([]);

	// Avoid hydration mismatch and ensure window is available
	useEffect(() => {
		if (typeof window !== "undefined") {
			setMounted(true);
		}

		// Animate markers sequentially
		if (provinces.length > 0) {
			provinces.forEach((_, index) => {
				const timeout = setTimeout(() => {
					setAnimatedMarkers((prev) => [...prev, index]);
				}, index * 300); // 300ms delay between each marker

				timeoutRefs.current.push(timeout);
			});
		}

		// Cleanup timeouts
		return () => {
			timeoutRefs.current.forEach((timeout) => clearTimeout(timeout));
		};
	}, [provinces.length]);

	// Tạo custom marker icon với animation
	const createCustomIcon = (color: string, isAnimated: boolean = false) => {
		return L.divIcon({
			html: `
				<div style="
					width: 12px;
					height: 12px;
					background-color: ${color};
					border: 2px solid white;
					border-radius: 50%;
					box-shadow: 0 0 8px ${color}, 0 0 4px ${color};
					position: relative;
					transform: ${isAnimated ? "scale(1)" : "scale(0)"};
					transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
				">
					<div style="
						position: absolute;
						top: 0;
						left: 0;
						width: 12px;
						height: 12px;
						background-color: ${color};
						border-radius: 50%;
						animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
						opacity: 0.5;
					"></div>
				</div>
				<style>
					@keyframes ping {
						75%, 100% {
							transform: scale(2);
							opacity: 0;
						}
					}
				</style>
			`,
			className: "custom-marker",
			iconSize: [12, 12],
			iconAnchor: [6, 6],
		});
	};

	// Không render cho đến khi component được mount
	if (!mounted) {
		return (
			<div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
				<div className="text-gray-500 dark:text-gray-400">
					Đang tải bản đồ...
				</div>
			</div>
		);
	}

	// Tọa độ và bounds cho Việt Nam (bao gồm các đảo)
	const vietnamCenter: [number, number] = [14.0583, 109.5]; // Trung tâm điều chỉnh để bao gồm quần đảo
	const defaultZoom = 5;

	// Bounds của Việt Nam bao gồm TẤT CẢ các quần đảo (Hoàng Sa, Trường Sa)
	const vietnamBounds: [[number, number], [number, number]] = [
		[8.1790665, 102.14441], // Southwest corner (bao gồm Phú Quốc)
		[23.393395, 117.0], // Northeast corner (bao gồm Hoàng Sa ~112°E, Trường Sa ~115°E)
	];

	// Sử dụng OpenStreetMap cho cả hai theme để đảm bảo hiển thị đầy đủ các quần đảo
	const tileUrl =
		theme === "dark"
			? "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Cũng dùng OSM cho dark mode
			: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

	const attribution =
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

	// Màu sắc dựa trên theme
	const themeColors = {
		popupBg: theme === "dark" ? "#1f2937" : "#ffffff",
		popupText: theme === "dark" ? "#f9fafb" : "#1f2937",
		tooltipBg: theme === "dark" ? "#374151" : "#ffffff",
		tooltipText: theme === "dark" ? "#f9fafb" : "#1f2937",
	};

	// Don't render anything on server-side or if window is not available
	if (!mounted || typeof window === "undefined") {
		return (
			<div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
				<div className="text-gray-500 dark:text-gray-400">
					Đang tải bản đồ...
				</div>
			</div>
		);
	}

	return (
		<div className="w-full h-full rounded-lg overflow-hidden">
			<style jsx global>{`
				.leaflet-popup-content-wrapper {
					background: ${themeColors.popupBg} !important;
					color: ${themeColors.popupText} !important;
					border-radius: 8px !important;
				}
				.leaflet-popup-tip {
					background: ${themeColors.popupBg} !important;
				}
				.leaflet-tooltip {
					background: ${themeColors.tooltipBg} !important;
					color: ${themeColors.tooltipText} !important;
					border: 1px solid ${theme === "dark" ? "#4b5563" : "#e5e7eb"} !important;
					border-radius: 6px !important;
					box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
				}
				.leaflet-tooltip::before {
					border-top-color: ${themeColors.tooltipBg} !important;
				}
				.leaflet-control-zoom a {
					background: ${themeColors.popupBg} !important;
					color: ${themeColors.popupText} !important;
					border: 1px solid ${theme === "dark" ? "#4b5563" : "#e5e7eb"} !important;
				}
				.leaflet-control-zoom a:hover {
					background: ${theme === "dark" ? "#4b5563" : "#f3f4f6"} !important;
				}
				.dark-tile-layer {
					filter: brightness(0.6) contrast(1.2) hue-rotate(200deg) !important;
				}
				.custom-island-label {
					z-index: 1000 !important;
					pointer-events: none !important;
				}
				.custom-island-label div {
					font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
						sans-serif !important;
				}
			`}</style>
			<MapContainer
				center={vietnamCenter}
				zoom={defaultZoom}
				bounds={vietnamBounds}
				maxBounds={vietnamBounds}
				maxBoundsViscosity={1.0}
				minZoom={5}
				maxZoom={12}
				style={{ height: "100%", width: "100%" }}
				className="rounded-lg"
			>
				<TileLayer
					url={tileUrl}
					attribution={attribution}
					className={theme === "dark" ? "dark-tile-layer" : ""}
				/>

				{/* Custom labels cho các quần đảo */}
				{showIslandLabels && (
					<>
						<Marker
							position={[16.8, 112.0]} // Vị trí Hoàng Sa
							icon={L.divIcon({
								html: `<div style="
									background: ${
										theme === "dark"
											? "rgba(31, 41, 55, 0.9)"
											: "rgba(255, 255, 255, 0.9)"
									};
									color: ${theme === "dark" ? "#ef4444" : "#dc2626"};
									font-weight: bold;
									font-size: 12px;
									padding: 4px 8px;
									border-radius: 4px;
									border: 1px solid ${theme === "dark" ? "#ef4444" : "#dc2626"};
									text-align: center;
									white-space: nowrap;
									box-shadow: 0 2px 4px rgba(0,0,0,0.2);
								"> Quần đảo Hoàng Sa</div>`,
								className: "custom-island-label",
								iconSize: [140, 24],
								iconAnchor: [70, 12],
							})}
						/>
						<Marker
							position={[10.0, 114.0]} // Vị trí Trường Sa
							icon={L.divIcon({
								html: `<div style="
									background: ${
										theme === "dark"
											? "rgba(31, 41, 55, 0.9)"
											: "rgba(255, 255, 255, 0.9)"
									};
									color: ${theme === "dark" ? "#ef4444" : "#dc2626"};
									font-weight: bold;
									font-size: 12px;
									padding: 4px 8px;
									border-radius: 4px;
									border: 1px solid ${theme === "dark" ? "#ef4444" : "#dc2626"};
									text-align: center;
									white-space: nowrap;
									box-shadow: 0 2px 4px rgba(0,0,0,0.2);
								"> Quần đảo Trường Sa</div>`,
								className: "custom-island-label",
								iconSize: [140, 24],
								iconAnchor: [70, 12],
							})}
						/>
					</>
				)}

				{/* Hiển thị polylines nối các địa điểm - Tạm thời ẩn */}
				{false &&
					dots.map((dot, index) => (
						<Polyline
							key={`polyline-${index}`}
							positions={[
								[dot.start.lat, dot.start.lng],
								[dot.end.lat, dot.end.lng],
							]}
							pathOptions={{
								color: lineColor,
								weight: 3,
								opacity: 0.8,
								dashArray: useStraightLines ? undefined : "5, 10",
							}}
						/>
					))}

				{/* Hiển thị markers cho các tỉnh/thành phố */}
				{provinces.map((province, index) => (
					<Marker
						key={`province-${index}`}
						position={[province.lat, province.lng]}
						icon={createCustomIcon(lineColor, animatedMarkers.includes(index))}
						eventHandlers={{
							click: () => {
								onProvinceClick?.(province.name);
							},
						}}
					>
						<Tooltip direction="top" offset={[0, -10]} opacity={0.9}>
							<div className="text-xs font-medium">{province.name}</div>
						</Tooltip>
						<Popup>
							<div
								className="text-sm min-w-[200px] max-w-[400px] p-3 rounded-lg"
								style={{
									backgroundColor: themeColors.popupBg,
									color: themeColors.popupText,
									border: `1px solid ${
										theme === "dark" ? "#4b5563" : "#e5e7eb"
									}`,
								}}
							>
								<p
									className="font-bold mb-2 text-base"
									style={{ color: themeColors.popupText }}
								>
									{province.originalName || province.name}
								</p>

								{province.originalName &&
									province.originalName !== province.name && (
										<p className="text-xs mb-2 opacity-70">
											📍 {province.name}
										</p>
									)}

								{province.content ? (
									<div className="text-xs leading-relaxed max-h-32 overflow-y-auto">
										<p className="whitespace-pre-line">
											{province.content.length > 200
												? `${province.content.substring(0, 200)}...`
												: province.content}
										</p>
									</div>
								) : (
									<div>
										{province.students && (
											<p className="text-xs mb-1 flex items-center opacity-80">
												<span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
												{province.students.toLocaleString()} học viên
											</p>
										)}
										{province.courses && (
											<p className="text-xs flex items-center opacity-80">
												<span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
												{province.courses} khóa học
											</p>
										)}
									</div>
								)}
							</div>
						</Popup>
					</Marker>
				))}

				{/* Hiển thị markers cho start/end points của dots nếu showDotCircles = true - Tạm thời ẩn */}
				{false &&
					showDotCircles &&
					dots.map((dot, index) => (
						<div key={`dot-markers-${index}`}>
							<Marker
								position={[dot.start.lat, dot.start.lng]}
								icon={createCustomIcon(lineColor)}
							>
								{dot.start.label && (
									<Popup>
										<div className="text-sm">
											<p className="font-bold">{dot.start.label}</p>
										</div>
									</Popup>
								)}
							</Marker>
							<Marker
								position={[dot.end.lat, dot.end.lng]}
								icon={createCustomIcon(lineColor)}
							>
								{dot.end.label && (
									<Popup>
										<div className="text-sm">
											<p className="font-bold">{dot.end.label}</p>
										</div>
									</Popup>
								)}
							</Marker>
						</div>
					))}
			</MapContainer>
		</div>
	);
}
