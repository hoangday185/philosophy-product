"use client";
import { Tabs } from "@/components/ui/tabs";
import VietnamMap from "@/components/ui/vietnam-map";
import { motion } from "motion/react";
import MAP_DATA from "@/app/db/map";

// Lấy tất cả địa điểm từ MAP_DATA
const allAddresses = MAP_DATA.flatMap((resistance: any) => resistance.address);

export default function MapPage() {
	// Tạo tabs từ MAP_DATA
	const tabs = allAddresses.map((address: any, index: number) => ({
		title: address.name,
		value: address.id,
		content: (
			<div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-violet-900">
				<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
					{address.name}
				</h2>
				<div className="text-sm sm:text-base md:text-lg font-normal text-gray-200 max-w-4xl mb-6 md:mb-8 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
					{address.content}
				</div>
			</div>
		),
	}));

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
								<VietnamMap
									provinces={allAddresses.map((address: any) => ({
										name: address.name,
										lat: address.lat,
										lng: address.lng,
										content: address.content,
									}))}
									dots={[]} // Không hiển thị lines
									lineColor="#0ea5e9"
									showDotCircles={false}
									useStraightLines={false}
									expandMultiLocationCampaigns={true}
									onProvinceClick={(provinceName) => {
										// Tìm address tương ứng với tên tỉnh hoặc originalName
										const address = allAddresses.find(
											(addr: any) => addr.name === provinceName || 
											addr.name.includes(provinceName) ||
											provinceName.includes(addr.name)
										);
										if (address) {
											changeTab(address.id);
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
