import { BookOpen, Globe, Users } from "lucide-react";
import { StatCard } from "./stat-card";
import { cn } from "@/lib/utils";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function StatisticsSection() {
	return (
		<section className="w-full">
			<div className="relative flex min-h-[20rem] sm:min-h-[25rem] md:h-[30rem] w-full items-center justify-center bg-white dark:bg-black px-4 sm:px-6 lg:px-8">
				<div
					className={cn(
						"absolute inset-0",
						"[background-size:15px_15px] sm:[background-size:20px_20px]",
						"[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
						"dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
					)}
				/>

				<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
				<div className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-6 sm:py-8 text-xl sm:text-2xl md:text-3xl text-black dark:text-white max-w-7xl mx-auto w-full">
					<div className="flex justify-center mb-4 sm:mb-6">
						<TypewriterEffectSmooth
							words={[{ text: "Thống" }, { text: "kê" }]}
							className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white text-center"
						/>
					</div>

					<p className="text-center text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 md:mb-12 px-4">
						Những con số ấn tượng về nền tảng trực tuyến của chúng tôi
					</p>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base md:text-lg">
						<StatCard
							icon={BookOpen}
							value="5"
							title="Bài viết trực tuyến"
							description="Khám phá nội dung phong phú"
							iconBgColor="bg-purple-100"
							valueColor="text-purple-600"
						/>

						<StatCard
							icon={Globe}
							value="2"
							title="Ngôn ngữ hỗ trợ"
							description="Đa dạng ngôn ngữ"
							iconBgColor="bg-blue-100"
							valueColor="text-blue-600"
						/>

						<StatCard
							icon={Users}
							value="20"
							title="Cấu hình quản"
							description="Quản lý hiệu quả"
							iconBgColor="bg-teal-100"
							valueColor="text-teal-600"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
