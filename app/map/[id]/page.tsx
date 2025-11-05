"use client";
import { notFound } from "next/navigation";
import { motion } from "motion/react";
import Link from "next/link";
import VietnamMap from "@/components/ui/vietnam-map";
import { Tabs } from "@/components/ui/tabs";
import MAP_DATA from "@/app/db/map";
import { use } from "react";

interface PageProps {
	params: Promise<{
		id: string;
	}>;
}

export default function ResistanceDetailPage({ params }: PageProps) {
	// Tìm dữ liệu cuộc kháng chiến theo ID
	const { id } = use(params);
	const resistance = MAP_DATA.find((r) => r.id === id);

	if (!resistance) {
		notFound();
	}

	// Tạo dữ liệu cho bản đồ
	const provinces = resistance.address.map((addr) => ({
		name: addr.name,
		lat: addr.lat,
		lng: addr.lng,
		resistanceId: resistance.id,
		addressId: addr.id,
	}));

	// Tạo connections giữa các địa điểm
	const connections = resistance.address.slice(0, -1).map((addr, index) => ({
		start: { lat: addr.lat, lng: addr.lng },
		end: {
			lat: resistance.address[index + 1].lat,
			lng: resistance.address[index + 1].lng,
		},
	}));

	// Tạo tabs từ các địa điểm trong cuộc kháng chiến
	const tabs = resistance.address.map((address) => ({
		title: address.name,
		value: address.id,
		content: (
			<div
				className={`w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white ${
					resistance.id === "cuoc-khang-chien-chong-phap"
						? "bg-gradient-to-br from-red-700 to-red-900"
						: "bg-gradient-to-br from-blue-700 to-violet-900"
				}`}
			>
				<div className="flex justify-between items-start mb-4">
					<div>
						<div className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium mb-2">
							{resistance.name}
						</div>
						<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
							{address.name}
						</h2>
					</div>
				</div>

				<div className="text-sm sm:text-base font-normal text-gray-200 max-w-4xl mb-6 md:mb-8 font-sans">
					<div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
						<div className="flex items-center text-white/80 mb-3">
							<svg
								className="w-4 h-4 mr-2"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fillRule="evenodd"
									d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="text-sm">
								{address.lat.toFixed(4)}, {address.lng.toFixed(4)}
							</span>
						</div>
						<div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-white/5 hover:scrollbar-thumb-white/30 pr-2">
							<div className="prose prose-sm prose-invert max-w-none">
								<p className="leading-relaxed whitespace-pre-line text-gray-200">
									{address.content}
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Hiển thị các địa điểm khác trong cùng cuộc kháng chiến */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
					{resistance.address
						.filter((addr) => addr.id !== address.id)
						.slice(0, 3)
						.map((relatedAddress) => (
							<div
								key={relatedAddress.id}
								className="bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-colors cursor-pointer"
								onClick={() => {
									// Scroll to địa điểm tương ứng
									const element = document.getElementById(
										`location-${relatedAddress.name
											.replace(/\s+/g, "-")
											.toLowerCase()}`
									);
									if (element) {
										element.scrollIntoView({ behavior: "smooth" });
									}
								}}
							>
								<h4 className="text-sm font-semibold mb-1">
									{relatedAddress.name}
								</h4>
								<p className="text-xs text-gray-300 line-clamp-2">
									{relatedAddress.content.slice(0, 80)}...
								</p>
							</div>
						))}
				</div>
			</div>
		),
	}));

	return (
		<div className="py-8 md:py-20 dark:bg-black bg-white w-full min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Breadcrumb */}

				{/* Header */}
				<div className="text-center mb-8 md:mb-12">
					<h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl dark:text-white text-black mb-4">
						{resistance.name.split(" ").slice(0, 2).join(" ")}{" "}
						<span className="text-neutral-400">
							{resistance.name
								.split(" ")
								.slice(2)
								.map((word, idx) => (
									<motion.span
										key={idx}
										className="inline-block mr-1"
										initial={{ x: -10, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ duration: 0.5, delay: idx * 0.1 }}
									>
										{word}
									</motion.span>
								))}
						</span>
					</h1>
					<p className="text-sm sm:text-base md:text-lg text-neutral-500 max-w-2xl mx-auto px-4">
						{resistance.description}
					</p>
				</div>

				{/* Tabs với Map làm secondary content */}
				<Tabs
					tabs={tabs}
					secondaryContent={(activeTab, changeTab) => {
						// Lấy dữ liệu địa điểm hiện tại
						const activeTabValue =
							typeof activeTab === "string" ? activeTab : activeTab.value;

						// Tìm địa điểm hiện tại
						const currentAddress = resistance.address.find(
							(addr) => addr.id === activeTabValue
						);

						// Hiển thị tất cả địa điểm trong cuộc kháng chiến này
						const currentProvinces = provinces;

						return (
							<div className="h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-3 sm:p-4 md:p-6">
								<VietnamMap
									provinces={resistance.address.map((addr) => ({
										name: addr.name,
										lat: addr.lat,
										lng: addr.lng,
										content: addr.content,
									}))}
									dots={[]} // Không hiển thị lines
									lineColor={
										resistance.id === "cuoc-khang-chien-chong-phap"
											? "#dc2626"
											: "#0ea5e9"
									}
									showDotCircles={false}
									useStraightLines={false}
									expandMultiLocationCampaigns={true}
									onProvinceClick={(provinceName) => {
										// Tìm địa điểm được click và chuyển đến tab của nó
										const clickedAddress = resistance.address.find(
											(addr) =>
												addr.name === provinceName ||
												addr.name.includes(provinceName) ||
												provinceName.includes(addr.name)
										);
										if (clickedAddress) {
											// Chuyển đến tab của địa điểm đó
											changeTab(clickedAddress.id);
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
