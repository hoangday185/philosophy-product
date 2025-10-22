"use client";

import { useRef } from "react";
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
}

export default function WorldMap({
	dots = [],
	lineColor = "#0ea5e9",
	provinces = [],
}: MapProps) {
	const svgRef = useRef<SVGSVGElement>(null);
	const map = new DottedMap({
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
	});

	const { theme } = useTheme();

	const svgMap = map.getSVG({
		radius: 0.22,
		color: theme === "dark" ? "#FFFFFF40" : "#00000040",
		shape: "circle",
		backgroundColor: theme === "dark" ? "black" : "white",
	});

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

		const x = ((lng - minLng) / (maxLng - minLng)) * 800;
		const y = ((maxLat - lat) / (maxLat - minLat)) * 400;
		return { x, y };
	};

	const createCurvedPath = (
		start: { x: number; y: number },
		end: { x: number; y: number }
	) => {
		const midX = (start.x + end.x) / 2;
		const midY = Math.min(start.y, end.y) - 50;
		return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
	};

	return (
		<TooltipProvider>
			<div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans">
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
					viewBox="0 0 800 400"
					className="w-full h-full absolute inset-0 pointer-events-none select-none"
				>
					{dots.map((dot, i) => {
						const startPoint = projectPointSVG(dot.start.lat, dot.start.lng);
						const endPoint = projectPointSVG(dot.end.lat, dot.end.lng);
						return (
							<g key={`path-group-${i}`}>
								<motion.path
									d={createCurvedPath(startPoint, endPoint)}
									fill="none"
									stroke="url(#path-gradient)"
									strokeWidth="1"
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
								></motion.path>
							</g>
						);
					})}

					<defs>
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
					</defs>

					{dots.map((dot, i) => (
						<g key={`points-group-${i}`}>
							<g key={`start-${i}`}>
								<circle
									cx={projectPointSVG(dot.start.lat, dot.start.lng).x}
									cy={projectPointSVG(dot.start.lat, dot.start.lng).y}
									r="2"
									fill={lineColor}
								/>
								<circle
									cx={projectPointSVG(dot.start.lat, dot.start.lng).x}
									cy={projectPointSVG(dot.start.lat, dot.start.lng).y}
									r="2"
									fill={lineColor}
									opacity="0.5"
								>
									<animate
										attributeName="r"
										from="2"
										to="8"
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
									r="2"
									fill={lineColor}
								/>
								<circle
									cx={projectPointSVG(dot.end.lat, dot.end.lng).x}
									cy={projectPointSVG(dot.end.lat, dot.end.lng).y}
									r="2"
									fill={lineColor}
									opacity="0.5"
								>
									<animate
										attributeName="r"
										from="2"
										to="8"
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
									className="absolute cursor-pointer z-10"
									style={{
										left: `${point.x}%`,
										top: `${point.y}%`,
										transform: "translate(-50%, -50%)",
									}}
								>
									<div className="relative">
										<div className="w-3 h-3 bg-red-500 rounded-full"></div>
										<div className="absolute inset-0 w-3 h-3 bg-red-500 rounded-full animate-ping opacity-75"></div>
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
