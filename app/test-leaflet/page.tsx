"use client";
import VietnamMap from "@/components/ui/vietnam-map";
import { motion } from "motion/react";

// Test data - Bao gồm các tỉnh thành và đảo của Việt Nam
const testProvinces = [
	{
		name: "Hà Nội",
		lat: 21.0285,
		lng: 105.8542,
		students: 1500,
		courses: 25,
	},
	{
		name: "Hồ Chí Minh",
		lat: 10.8231,
		lng: 106.6297,
		students: 2300,
		courses: 35,
	},
	{
		name: "Đà Nẵng",
		lat: 16.0471,
		lng: 108.2068,
		students: 800,
		courses: 15,
	},
	{
		name: "Hải Phòng",
		lat: 20.8449,
		lng: 106.6881,
		students: 600,
		courses: 12,
	},
	{
		name: "Phú Quốc",
		lat: 10.2899,
		lng: 103.9840,
		students: 200,
		courses: 8,
	},
	{
		name: "Côn Đảo",
		lat: 8.6833,
		lng: 106.6000,
		students: 50,
		courses: 3,
	},
	{
		name: "Cát Bà (Hải Phòng)",
		lat: 20.8167,
		lng: 107.0500,
		students: 100,
		courses: 5,
	},
	{
		name: "Lý Sơn (Quảng Ngãi)",
		lat: 15.3833,
		lng: 109.1167,
		students: 80,
		courses: 4,
	},
];

const testConnections = [
	{
		start: { lat: 21.0285, lng: 105.8542, label: "Hà Nội" },
		end: { lat: 16.0471, lng: 108.2068, label: "Đà Nẵng" },
	},
	{
		start: { lat: 16.0471, lng: 108.2068, label: "Đà Nẵng" },
		end: { lat: 10.8231, lng: 106.6297, label: "Hồ Chí Minh" },
	},
	{
		start: { lat: 21.0285, lng: 105.8542, label: "Hà Nội" },
		end: { lat: 20.8449, lng: 106.6881, label: "Hải Phòng" },
	},
	{
		start: { lat: 10.8231, lng: 106.6297, label: "Hồ Chí Minh" },
		end: { lat: 10.2899, lng: 103.9840, label: "Phú Quốc" },
	},
	{
		start: { lat: 10.8231, lng: 106.6297, label: "Hồ Chí Minh" },
		end: { lat: 8.6833, lng: 106.6000, label: "Côn Đảo" },
	},
	{
		start: { lat: 20.8449, lng: 106.6881, label: "Hải Phòng" },
		end: { lat: 20.8167, lng: 107.0500, label: "Cát Bà" },
	},
];

export default function TestLeafletPage() {
	return (
		<div className="py-8 md:py-20 dark:bg-black bg-white w-full min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-8 md:mb-12">
					<h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl dark:text-white text-black mb-4">
						Test{" "}
						<span className="text-neutral-400">
							{"Leaflet Map".split("").map((char, idx) => (
								<motion.span
									key={idx}
									className="inline-block"
									initial={{ x: -10, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.5, delay: idx * 0.04 }}
								>
									{char}
								</motion.span>
							))}
						</span>
					</h1>
					<p className="text-sm sm:text-base md:text-lg text-neutral-500 max-w-2xl mx-auto px-4">
						Bản đồ Việt Nam sạch sẽ - hiển thị các tỉnh thành và quần đảo với labels tiếng Việt
					</p>
				</div>

				{/* Map Container */}
				<div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-6">
					<div className="h-[600px] w-full">
						<VietnamMap
							provinces={testProvinces}
							dots={[]} // Không hiển thị lines
							lineColor="#0ea5e9"
							showDotCircles={false}
							useStraightLines={false}
							showIslandLabels={true}
							onProvinceClick={(provinceName) => {
								console.log("Clicked province:", provinceName);
								alert(`Bạn đã click vào: ${provinceName}`);
							}}
						/>
					</div>
				</div>

				{/* Controls */}
				<div className="mt-8">
					<h2 className="text-2xl font-bold text-center mb-6 dark:text-white">
						Các địa điểm trên bản đồ
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						{testProvinces.map((province, index) => (
							<div
								key={index}
								className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
							>
								<h3 className="font-bold text-lg dark:text-white mb-2">
									{province.name}
								</h3>
								<div className="space-y-1">
									<p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
										<span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
										{province.students} học viên
									</p>
									<p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
										<span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
										{province.courses} khóa học
									</p>
									<p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
										{province.lat.toFixed(4)}, {province.lng.toFixed(4)}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
