"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

// const vietnamProvinces = [
// 	{
// 		name: "Hà Nội",
// 		lat: 21.0285,
// 		lng: 105.8542,
// 		students: 15000,
// 		courses: 120,
// 	},
// 	{
// 		name: "Hải Phòng",
// 		lat: 20.8449,
// 		lng: 106.6881,
// 		students: 8000,
// 		courses: 80,
// 	},
// 	{
// 		name: "Đà Nẵng",
// 		lat: 16.0544,
// 		lng: 108.2022,
// 		students: 12000,
// 		courses: 95,
// 	},
// 	{ name: "Huế", lat: 16.4637, lng: 107.5909, students: 6000, courses: 65 },
// 	{
// 		name: "TP.HCM",
// 		lat: 10.8231,
// 		lng: 106.6297,
// 		students: 25000,
// 		courses: 200,
// 	},
// 	{ name: "Cần Thơ", lat: 10.0452, lng: 105.7469, students: 7000, courses: 70 },
// 	{
// 		name: "Nha Trang",
// 		lat: 12.2388,
// 		lng: 109.1967,
// 		students: 5000,
// 		courses: 50,
// 	},
// 	// ... thêm tỉnh khác
// ];

const vietnamProvinces = [
	{
		name: "Hà Nội",
		lat: 21.0285,
		lng: 105.8542,
		students: 15000,
		courses: 120,
	},
	{
		name: "Hải Phòng",
		lat: 20.8649,
		lng: 106.6834,
		students: 8000,
		courses: 80,
	},
	{
		name: "Đà Nẵng",
		lat: 16.0678,
		lng: 108.2208,
		students: 12000,
		courses: 95,
	},
	{ name: "Huế", lat: 16.4637, lng: 107.5959, students: 6000, courses: 65 },
	{
		name: "TP.HCM",
		lat: 10.8231,
		lng: 106.6297,
		students: 25000,
		courses: 200,
	},
	{ name: "Cần Thơ", lat: 10.0452, lng: 105.7469, students: 7000, courses: 70 },
	{
		name: "Nha Trang",
		lat: 12.2388,
		lng: 109.1967,
		students: 5000,
		courses: 50,
	},
];
export default function MapPage() {
	return (
		<div className="py-40 dark:bg-black bg-white w-full">
			<div className="max-w-7xl mx-auto text-center">
				<p className="font-bold text-xl md:text-4xl dark:text-white text-black">
					Mạng lưới{" "}
					<span className="text-neutral-400">
						{"Giáo dục".split("").map((word, idx) => (
							<motion.span
								key={idx}
								className="inline-block"
								initial={{ x: -10, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: idx * 0.04 }}
							>
								{word}
							</motion.span>
						))}
					</span>
				</p>
				<p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
					Hover vào các điểm để xem thông tin chi tiết từng tỉnh/thành phố
				</p>
			</div>
			<WorldMap
				provinces={vietnamProvinces}
				dots={[
					{
						start: { lat: 21.0285, lng: 105.8542 },
						end: { lat: 10.8231, lng: 106.6297 },
					},
					{
						start: { lat: 21.0285, lng: 105.8542 },
						end: { lat: 16.0544, lng: 108.2022 },
					},
					{
						start: { lat: 10.8231, lng: 106.6297 },
						end: { lat: 10.0452, lng: 105.7469 },
					},
				]}
				lineColor="#dc2626"
			/>
		</div>
	);
}
