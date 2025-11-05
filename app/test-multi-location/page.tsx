"use client";
import VietnamMap from "@/components/ui/vietnam-map";
import { motion } from "motion/react";

// Test data với các chiến dịch nhiều địa điểm
const multiLocationCampaigns = [
	{
		name: "Chiến dịch Biên giới thu đông",
		lat: 22.6667,
		lng: 106.2667,
		content: `Chiến dịch Biên Giới (Cao Bằng – Lạng Sơn, 16/9 – 14/10/1950): Còn gọi là Chiến dịch Lê Hồng Phong II, đây là chiến dịch tiến công lớn đầu tiên của ta nhằm giải phóng vùng biên giới Việt – Trung. Thực dân Pháp lúc này phòng thủ mạnh trên tuyến đường số 4 (Cao Bằng – Lạng Sơn) với 11 tiểu đoàn tinh nhuệ. Ta huy động lực lượng tương đương 2 đại đoàn (~20.000 quân chủ lực) trực tiếp do Đại tướng Võ Nguyên Giáp chỉ huy. Sau 29 ngày đêm, quân ta đã loại khỏi vòng chiến đấu gần 10 tiểu đoàn địch (hơn 8.000 tên); giải phóng hoàn toàn biên giới từ Cao Bằng đến Đình Lập (Lạng Sơn).`,
	},
	{
		name: "Chiến dịch Tây Bắc",
		lat: 21.325,
		lng: 104.4667,
		content: `Chiến dịch Tây Bắc (Sơn La – Yên Bái, 14/10 – 10/12/1952): Nhằm mở rộng căn cứ kháng chiến và tiêu diệt sinh lực địch ở vùng Tây Bắc, Bộ Tổng tư lệnh quyết định tiến công lên các tỉnh Sơn La, Lai Châu do quân Pháp chiếm đóng. Ta huy động ba đại đoàn chủ lực (308, 312, 316) cùng lực lượng địa phương. Ta tiêu diệt và bắt sống hơn 6.000 địch; giải phóng một vùng rộng khoảng 30.000 km² với 25 vạn dân ở Tây Bắc.`,
	},
	{
		name: "Chiến dịch Trị - Thiên",
		lat: 16.8,
		lng: 106.95,
		content: `Chiến dịch Xuân – Hè 1972 (Trị – Thiên 1972): Đây là đòn tiến công chiến lược năm 1972 của Quân Giải phóng trên toàn miền Nam, trong đó hướng Trị – Thiên (Quảng Trị – Thừa Thiên) là mũi chủ yếu. Ngày 30/3/1972, ta mở màn chiến dịch Trị – Thiên, huy động 3 sư đoàn chủ lực (304, 308, 324) cùng xe tăng, pháo binh đồng loạt vượt sông Bến Hải tấn công tuyến phòng ngự Quảng Trị.`,
	},
	{
		name: "Hà Nội và Hải Phòng",
		lat: 21.0285,
		lng: 105.8542,
		content: `"Điện Biên Phủ trên không" (12/1972): Cuối năm 1972, nhằm cứu vãn thế thua trên bàn đàm phán Paris, Mỹ mở cuộc tập kích chiến lược bằng máy bay B-52 vào Hà Nội, Hải Phòng và một số nơi từ ngày 18 đến 29/12/1972. Quân dân miền Bắc đã anh dũng chống trả suốt 12 ngày đêm cuối năm 1972, tạo nên chiến thắng vang dội mà báo chí gọi là "Điện Biên Phủ trên không".`,
	},
	{
		name: "Bình Long Phước Long",
		lat: 11.5667,
		lng: 106.6667,
		content: `Chiến dịch Đồng Xoài (5–7/1965): Là chiến dịch tiến công của Bộ Chỉ huy Miền tại đông Nam Bộ, diễn ra từ 10/5 đến 22/7/1965 trên địa bàn hai tỉnh Bình Long, Phước Long. Ta huy động 3 trung đoàn chủ lực Miền (271, 272, 273), 2 tiểu đoàn đặc công cùng lực lượng địa phương với tổng quân số hơn 12.000 người. Thắng lợi Đồng Xoài, cùng với Bình Giã và Ba Gia, đã đánh bại hoàn toàn chiến lược "Chiến tranh đặc biệt" của Mỹ.`,
	},
];

export default function TestMultiLocationPage() {
	return (
		<div className="py-8 md:py-20 dark:bg-black bg-white w-full min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-8 md:mb-12">
					<h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl dark:text-white text-black mb-4">
						Test{" "}
						<span className="text-neutral-400">
							{"Multi-Location".split("").map((char, idx) => (
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
						Chiến dịch nhiều địa điểm - tự động tạo markers cho tất cả tỉnh liên quan
					</p>
				</div>

				{/* Map Container */}
				<div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-6">
					<div className="h-[600px] w-full">
						<VietnamMap
							provinces={multiLocationCampaigns}
							dots={[]} // Không hiển thị lines
							lineColor="#dc2626" // Màu đỏ cho chiến tranh
							showDotCircles={false}
							useStraightLines={false}
							showIslandLabels={true}
							expandMultiLocationCampaigns={true} // Bật tính năng mới
							onProvinceClick={(provinceName) => {
								console.log("Clicked province:", provinceName);
								alert(`Bạn đã click vào: ${provinceName}`);
							}}
						/>
					</div>
				</div>

				{/* Explanation */}
				<div className="mt-8">
					<div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
						<h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3 flex items-center">
							🎯 Tính năng Multi-Location Campaigns
						</h3>
						<div className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
							<p><strong>Cách hoạt động:</strong></p>
							<ul className="list-disc list-inside space-y-1 ml-4">
								<li><strong>"Chiến dịch Biên giới thu đông"</strong> → Tạo markers tại Cao Bằng + Lạng Sơn</li>
								<li><strong>"Chiến dịch Tây Bắc"</strong> → Tạo markers tại Sơn La + Yên Bái + Lai Châu</li>
								<li><strong>"Hà Nội và Hải Phòng"</strong> → Tạo markers tại cả hai thành phố</li>
								<li><strong>"Bình Long Phước Long"</strong> → Tạo markers tại Bình Phước (cả hai đều thuộc tỉnh này)</li>
							</ul>
							<p className="mt-3">
								<strong>Kết quả:</strong> Click vào bất kỳ marker nào cũng hiển thị content của chiến dịch gốc!
							</p>
						</div>
					</div>
				</div>

				{/* Campaign List */}
				<div className="mt-8">
					<h2 className="text-2xl font-bold text-center mb-6 dark:text-white">
						Các chiến dịch được test
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{multiLocationCampaigns.map((campaign, index) => (
							<div
								key={index}
								className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
							>
								<h3 className="font-bold text-lg dark:text-white mb-2">
									{campaign.name}
								</h3>
								<p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
									{campaign.content.substring(0, 150)}...
								</p>
								<p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
									Tọa độ gốc: {campaign.lat.toFixed(4)}, {campaign.lng.toFixed(4)}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
