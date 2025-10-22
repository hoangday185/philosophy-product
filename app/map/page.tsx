"use client";
import { Tabs } from "@/components/ui/tabs";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

// Định nghĩa tọa độ chung để đảm bảo đồng bộ
const COORDINATES = {
	HANOI: { lat: 21.0285, lng: 105.8542 },
	HCMC: { lat: 10.8231, lng: 106.6297 },
	CANTHO: { lat: 10.0452, lng: 105.7469 },
};

const vietnamProvinces = [
	{
		name: "Hà Nội",
		...COORDINATES.HANOI,
		students: 15000,
		courses: 120,
	},
	{
		name: "TP.HCM",
		...COORDINATES.HCMC,
		students: 25000,
		courses: 200,
	},
	{
		name: "Cần Thơ",
		...COORDINATES.CANTHO,
		students: 7000,
		courses: 70,
	},
];

export default function MapPage() {
	const tabs = [
		{
			title: "Hà Nội",
			value: "hanoi",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-violet-900">
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
						Hà Nội
					</h2>
					<p className="text-sm sm:text-base md:text-lg font-normal text-gray-200 max-w-2xl mb-6 md:mb-8">
						Thủ đô của Việt Nam, trung tâm giáo dục lớn nhất miền Bắc
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
						<div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
							<p className="text-xs sm:text-sm text-gray-300">Học viên</p>
							<p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2">
								15,000
							</p>
						</div>
						<div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
							<p className="text-xs sm:text-sm text-gray-300">Khóa học</p>
							<p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2">
								120
							</p>
						</div>
						<div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
							<p className="text-xs sm:text-sm text-gray-300">Trung tâm</p>
							<p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2">
								15+
							</p>
						</div>
					</div>
				</div>
			),
		},
		{
			title: "TP.HCM",
			value: "hcm",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-pink-900">
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
						TP.HCM
					</h2>
					<p className="text-sm sm:text-base md:text-lg font-normal text-gray-200 max-w-2xl mb-6 md:mb-8">
						Thành phố lớn nhất Việt Nam, trung tâm kinh tế và giáo dục miền Nam
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
						<div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
							<p className="text-xs sm:text-sm text-gray-300">Học viên</p>
							<p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2">
								25,000
							</p>
						</div>
						<div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
							<p className="text-xs sm:text-sm text-gray-300">Khóa học</p>
							<p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2">
								200
							</p>
						</div>
						<div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
							<p className="text-xs sm:text-sm text-gray-300">Trung tâm</p>
							<p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2">
								25+
							</p>
						</div>
					</div>
				</div>
			),
		},
		{
			title: "Cần Thơ",
			value: "cantho",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white bg-gradient-to-br from-green-700 to-teal-900">
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
						Cần Thơ
					</h2>
					<p className="text-sm sm:text-base md:text-lg font-normal text-gray-200 max-w-2xl mb-6 md:mb-8">
						Thành phố trung tâm của vùng Đồng bằng sông Cửu Long
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
						<div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
							<p className="text-xs sm:text-sm text-gray-300">Học viên</p>
							<p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2">
								7,000
							</p>
						</div>
						<div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
							<p className="text-xs sm:text-sm text-gray-300">Khóa học</p>
							<p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2">
								70
							</p>
						</div>
						<div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
							<p className="text-xs sm:text-sm text-gray-300">Trung tâm</p>
							<p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2">
								8+
							</p>
						</div>
					</div>
				</div>
			),
		},
	];

	return (
		<div className="py-8 md:py-20 dark:bg-black bg-white w-full min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-8 md:mb-12">
					<h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl dark:text-white text-black mb-4">
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
					</h1>
					<p className="text-sm sm:text-base md:text-lg text-neutral-500 max-w-2xl mx-auto px-4">
						Click vào tabs để xem thông tin chi tiết từng tỉnh/thành phố
					</p>
				</div>

				{/* Tabs với Map làm secondary content */}
				<Tabs
					tabs={tabs}
					secondaryContent={(activeTab, changeTab) => {
						return (
							<div className="h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-3 sm:p-4 md:p-6">
								<WorldMap
									provinces={vietnamProvinces}
									dots={[
										// Hà Nội → TP.HCM
										{
											start: COORDINATES.HANOI,
											end: COORDINATES.HCMC,
										},
										// Hà Nội → Cần Thơ
										{
											start: COORDINATES.HANOI,
											end: COORDINATES.CANTHO,
										},
										// TP.HCM → Cần Thơ
										{
											start: COORDINATES.HCMC,
											end: COORDINATES.CANTHO,
										},
									]}
									lineColor="#0ea5e9"
									showDotCircles={false}
									useStraightLines={false}
									onProvinceClick={(provinceName) => {
										// Map province name to tab value
										const provinceToTab: Record<string, string> = {
											"Hà Nội": "hanoi",
											"TP.HCM": "hcm",
											"Cần Thơ": "cantho",
										};
										const tabValue = provinceToTab[provinceName];
										if (tabValue) {
											changeTab(tabValue);
										}
									}}
								/>
							</div>
						);
					}}
				/>
			</div>
		</div>
	);
}
