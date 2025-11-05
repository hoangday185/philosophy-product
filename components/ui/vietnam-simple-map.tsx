"use client";

import React from "react";
import {
	ComposableMap,
	Geographies,
	Geography,
	Marker,
	Line,
	ZoomableGroup,
} from "react-simple-maps";

// Vietnam GeoJSON URL - using local Vietnam-specific file
const VIETNAM_GEOJSON_URL = "/vietnam.geojson";

interface VietnamSimpleMapProps {
	provinces?: Array<{
		name: string;
		lat: number;
		lng: number;
		students?: number;
		courses?: number;
		resistanceId?: string;
		addressId?: string;
	}>;
	dots?: Array<{
		start: { lat: number; lng: number; label?: string };
		end: { lat: number; lng: number; label?: string };
	}>;
	lineColor?: string;
	onProvinceClick?: (provinceName: string) => void;
	showDotCircles?: boolean;
	useStraightLines?: boolean;
	showIslandBoundaries?: boolean;
}

export default function VietnamSimpleMap({
	provinces = [],
	dots = [],
	lineColor = "#0ea5e9",
	onProvinceClick,
	showDotCircles = true,
	useStraightLines = false,
	showIslandBoundaries = true,
}: VietnamSimpleMapProps) {
	return (
		<div className="w-full h-full flex items-center justify-center">
			<ComposableMap
				projection="geoMercator"
				projectionConfig={{
					center: [106.0, 16.0],
					scale: 2500,
				}}
				width={800}
				height={600}
				className="w-full h-full max-w-full max-h-full"
			>
				<ZoomableGroup zoom={1} center={[106.0, 16.0]}>
					{/* Vietnam Geography */}
					<Geographies geography={VIETNAM_GEOJSON_URL}>
						{({ geographies }) =>
							geographies.map((geo) => (
									<Geography
										key={geo.rsmKey}
										geography={geo}
										style={{
											default: {
												fill: "#f8fafc",
												stroke: "#e2e8f0",
												strokeWidth: 0.75,
												outline: "none",
											},
											hover: {
												fill: "#f1f5f9",
												stroke: "#94a3b8",
												strokeWidth: 1,
												outline: "none",
											},
											pressed: {
												fill: "#e2e8f0",
												stroke: "#64748b",
												strokeWidth: 1,
												outline: "none",
											},
										}}
										onClick={() => {
											if (onProvinceClick && geo.properties) {
												const name = geo.properties.NAME || geo.properties.name || geo.properties.NAME_EN;
												onProvinceClick(name || "");
											}
										}}
									/>
								))
						}
					</Geographies>

					{/* Connection Lines */}
					{dots.map((dot, index) => (
						<Line
							key={`connection-${index}`}
							from={[dot.start.lng, dot.start.lat]}
							to={[dot.end.lng, dot.end.lat]}
							stroke={lineColor}
							strokeWidth={3}
							strokeLinecap="round"
							strokeDasharray={useStraightLines ? "0" : "5,5"}
							style={{
								default: { stroke: lineColor, strokeWidth: 3 },
								hover: { stroke: lineColor, strokeWidth: 4 },
							}}
						/>
					))}

					{/* Province Markers */}
					{provinces.map((province, index) => (
						<Marker
							key={`marker-${province.name}-${index}`}
							coordinates={[province.lng, province.lat]}
						>
							<g>
								{/* Outer glow effect */}
								{showDotCircles && (
									<circle
										r={12}
										fill={lineColor}
										fillOpacity={0.2}
										className="animate-pulse"
									/>
								)}
								{/* Main marker */}
								<circle
									r={showDotCircles ? 8 : 6}
									fill={lineColor}
									stroke="#ffffff"
									strokeWidth={3}
									className="cursor-pointer hover:scale-110 transition-transform duration-200"
									onClick={() => {
										if (onProvinceClick) {
											onProvinceClick(province.name);
										}
									}}
								/>
								{/* Label */}
								<text
									textAnchor="middle"
									y={-16}
									className="fill-gray-900 text-xs font-semibold pointer-events-none select-none"
									style={{ 
										fontSize: "11px",
										textShadow: "1px 1px 2px rgba(255,255,255,0.8)"
									}}
								>
									{province.name}
								</text>
							</g>
						</Marker>
					))}
				</ZoomableGroup>
			</ComposableMap>
		</div>
	);
}
