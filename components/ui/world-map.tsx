"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";
import { useTheme } from "next-themes";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

interface MapProps {
	dots?: Array<{
		start: { lat: number; lng: number; label?: string };
		end: { lat: number; lng: number; label?: string };
	}>;
	lineColor?: string;
	provinces?: Array<{
		name: string;
		lat: number;
		lng: number;
		students?: number; // Thêm data để hiển thị trong tooltip
		courses?: number;
	}>;
	onProvinceClick?: (provinceName: string) => void;
	showDotCircles?: boolean; // Option để hiển thị circles ở đầu/cuối đường line
	useStraightLines?: boolean; // Option để dùng đường thẳng thay vì đường cong
}

export default function WorldMap({
	dots = [],
	lineColor = "#0ea5e9",
	provinces = [],
	onProvinceClick,
	showDotCircles = true,
	useStraightLines = false,
}: MapProps) {
	const svgRef = useRef<SVGSVGElement>(null);
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Avoid hydration mismatch by only rendering theme-dependent content after mount
	useEffect(() => {
		setMounted(true);
	}, []);

	const map = useMemo(
		() =>
			new DottedMap({
				height: 100,
				grid: "diagonal",
				region: {
					lat: {
						min: 8,
						max: 24,
					},
					lng: {
						min: 102,
						max: 110,
					},
				},
				countries: ["VNM"],
			}),
		[]
	);

	const svgMap = useMemo(
		() =>
			map.getSVG({
				radius: 0.22,
				color: mounted && theme === "dark" ? "#FFFFFF40" : "#00000040",
				shape: "circle",
				backgroundColor: mounted && theme === "dark" ? "black" : "white",
			}),
		[map, theme, mounted]
	);

	const projectPoint = (lat: number, lng: number) => {
		const minLat = 8;
		const maxLat = 24;
		const minLng = 102;
		const maxLng = 110;

		const x = ((lng - minLng) / (maxLng - minLng)) * 100; // % instead of px
		const y = ((maxLat - lat) / (maxLat - minLat)) * 100;
		return { x, y };
	};

	const projectPointSVG = (lat: number, lng: number) => {
		const minLat = 8;
		const maxLat = 24;
		const minLng = 102;
		const maxLng = 110;

		// Dùng cùng scale với projectPoint để đồng bộ
		const x = ((lng - minLng) / (maxLng - minLng)) * 100;
		const y = ((maxLat - lat) / (maxLat - minLat)) * 100;
		return { x, y };
	};

	const createStraightPath = (
		start: { x: number; y: number },
		end: { x: number; y: number }
	) => {
		return `M ${start.x} ${start.y} L ${end.x} ${end.y}`;
	};

	const createCurvedPath = (
		start: { x: number; y: number },
		end: { x: number; y: number }
	) => {
		const midX = (start.x + end.x) / 2;
		const midY = (start.y + end.y) / 2;

		// Tính độ cong dựa trên khoảng cách
		const dx = end.x - start.x;
		const dy = end.y - start.y;
		const distance = Math.sqrt(dx * dx + dy * dy);

		// Giảm độ cong xuống 10% để line nối sát hơn
		const curveFactor = 0.1;

		// Điểm control nằm vuông góc với midpoint
		const controlX = midX - dy * curveFactor;
		const controlY = midY + dx * curveFactor;

		return `M ${start.x} ${start.y} Q ${controlX} ${controlY} ${end.x} ${end.y}`;
	};

	return (
		<TooltipProvider>
			<div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans h-full">
				<img
					src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
					className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
					alt="vietnam map"
					height="495"
					width="1056"
					draggable={false}
				/>

				{/* SVG for lines and dots */}
				<svg
					ref={svgRef}
					viewBox="0 0 100 100"
					preserveAspectRatio="none"
					className="w-full h-full absolute inset-0 pointer-events-none select-none"
				>
					{dots.map((dot, i) => {
						const startPoint = projectPointSVG(dot.start.lat, dot.start.lng);
						const endPoint = projectPointSVG(dot.end.lat, dot.end.lng);
						const pathData = useStraightLines
							? createStraightPath(startPoint, endPoint)
							: createCurvedPath(startPoint, endPoint);
						return (
							<g key={`path-group-${i}`}>
								{/* Shadow/glow layer */}
								<motion.path
									d={pathData}
									fill="none"
									stroke={lineColor}
									strokeWidth="0.5"
									opacity="0.3"
									filter="url(#glow)"
									initial={{
										pathLength: 0,
									}}
									animate={{
										pathLength: 1,
									}}
									transition={{
										duration: 1,
										delay: 0.5 * i,
										ease: "easeOut",
									}}
								/>
								{/* Main line with gradient */}
								<motion.path
									d={pathData}
									fill="none"
									stroke="url(#path-gradient)"
									strokeWidth="0.25"
									strokeLinecap="round"
									initial={{
										pathLength: 0,
									}}
									animate={{
										pathLength: 1,
									}}
									transition={{
										duration: 1,
										delay: 0.5 * i,
										ease: "easeOut",
									}}
								/>
							</g>
						);
					})}

					<defs>
						{/* Gradient for lines */}
						<linearGradient
							id="path-gradient"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="0%"
						>
							<stop offset="0%" stopColor="white" stopOpacity="0" />
							<stop offset="5%" stopColor={lineColor} stopOpacity="1" />
							<stop offset="95%" stopColor={lineColor} stopOpacity="1" />
							<stop offset="100%" stopColor="white" stopOpacity="0" />
						</linearGradient>

						{/* Glow filter for lines */}
						<filter id="glow">
							<feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
							<feMerge>
								<feMergeNode in="coloredBlur" />
								<feMergeNode in="SourceGraphic" />
							</feMerge>
						</filter>
					</defs>

					{/* Chỉ hiển thị circles nếu showDotCircles = true */}
					{showDotCircles &&
						dots.map((dot, i) => (
							<g key={`points-group-${i}`}>
								<g key={`start-${i}`}>
									<circle
										cx={projectPointSVG(dot.start.lat, dot.start.lng).x}
										cy={projectPointSVG(dot.start.lat, dot.start.lng).y}
										r="0.5"
										fill={lineColor}
									/>
									<circle
										cx={projectPointSVG(dot.start.lat, dot.start.lng).x}
										cy={projectPointSVG(dot.start.lat, dot.start.lng).y}
										r="0.5"
										fill={lineColor}
										opacity="0.5"
									>
										<animate
											attributeName="r"
											from="0.5"
											to="2"
											dur="1.5s"
											begin="0s"
											repeatCount="indefinite"
										/>
										<animate
											attributeName="opacity"
											from="0.5"
											to="0"
											dur="1.5s"
											begin="0s"
											repeatCount="indefinite"
										/>
									</circle>
								</g>
								<g key={`end-${i}`}>
									<circle
										cx={projectPointSVG(dot.end.lat, dot.end.lng).x}
										cy={projectPointSVG(dot.end.lat, dot.end.lng).y}
										r="0.5"
										fill={lineColor}
									/>
									<circle
										cx={projectPointSVG(dot.end.lat, dot.end.lng).x}
										cy={projectPointSVG(dot.end.lat, dot.end.lng).y}
										r="0.5"
										fill={lineColor}
										opacity="0.5"
									>
										<animate
											attributeName="r"
											from="0.5"
											to="2"
											dur="1.5s"
											begin="0s"
											repeatCount="indefinite"
										/>
										<animate
											attributeName="opacity"
											from="0.5"
											to="0"
											dur="1.5s"
											begin="0s"
											repeatCount="indefinite"
										/>
									</circle>
								</g>
							</g>
						))}
				</svg>

				{/* HTML overlay for provinces with Shadcn Tooltip */}
				{provinces.map((province, i) => {
					const point = projectPoint(province.lat, province.lng);
					return (
						<Tooltip key={`province-${i}`}>
							<TooltipTrigger asChild>
								<div
									className="absolute cursor-pointer z-10 hover:scale-125 transition-all duration-300"
									style={{
										left: `${point.x}%`,
										top: `${point.y}%`,
										transform: "translate(-50%, -50%)",
									}}
									onClick={() => onProvinceClick?.(province.name)}
								>
									<div className="relative">
										{/* Main dot */}
										<div
											className="w-3 h-3 rounded-full shadow-lg"
											style={{
												backgroundColor: lineColor,
												boxShadow: `0 0 8px ${lineColor}, 0 0 4px ${lineColor}`,
											}}
										></div>
										{/* Ping animation */}
										<div
											className="absolute inset-0 w-3 h-3 rounded-full animate-ping opacity-50"
											style={{
												backgroundColor: lineColor,
											}}
										></div>
									</div>
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<div className="text-sm">
									<p className="font-bold">{province.name}</p>
									{province.students && (
										<p className="text-xs text-muted-foreground">
											{province.students.toLocaleString()} học viên
										</p>
									)}
									{province.courses && (
										<p className="text-xs text-muted-foreground">
											{province.courses} khóa học
										</p>
									)}
								</div>
							</TooltipContent>
						</Tooltip>
					);
				})}
			</div>
		</TooltipProvider>
	);
}
