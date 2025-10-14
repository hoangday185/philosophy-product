import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { ArticleCard } from "./article-card";
import { ParticlesBackground } from "./animations/particles-background";
import { ShinyButton } from "./ui/shiny-button";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function LatestArticlesSection() {
	return (
		<section className="relative overflow-hidden py-16">
			{/* Particles Background */}
			<ParticlesBackground className="absolute inset-0 z-0" />
			<div className="container mx-auto px-4 relative z-10">
				<div className="flex items-center justify-between mb-8">
					<div>
						<TextGenerateEffect
							words="Bài viết mới nhất"
							className="text-3xl md:text-4xl font-bold mb-2"
						/>
						<TextGenerateEffect
							words="Những bài viết mới nhất về được yêu thích nhất"
							className="font-normal"
						/>
					</div>

					<ShinyButton className="flex justify-between items-center !text-white">
						Xem tất cả
					</ShinyButton>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					<ArticleCard
						image="/historical-illustration-democracy.jpg"
						title="Dân chủ và sự tự do, phát triển của dân chủ"
						description="Bài viết khám phá mối quan hệ giữa dân chủ và tự do, cũng như sự phát triển của dân chủ qua các thời kỳ lịch sử."
						readTime="10 phút"
					/>

					<ArticleCard
						image="/state-government-building.jpg"
						title="Dân chủ xã hội chủ nghĩa"
						description="Phân tích bản chất, đặc điểm và vai trò của dân chủ trong hệ thống xã hội chủ nghĩa, cũng như sự khác biệt với các hình thức dân chủ khác."
						readTime="10 phút"
					/>

					<ArticleCard
						image="/che-guevara-revolution-poster.jpg"
						title="Nhà nước xã hội chủ nghĩa"
						description="Tìm hiểu về cấu trúc, chức năng và vai trò của nhà nước xã hội chủ nghĩa, cũng như sự khác biệt với các loại hình nhà nước khác."
						readTime="10 phút"
					/>
				</div>

				<div className="flex justify-center mt-8 md:hidden">
					<Button
						variant="outline"
						className="flex items-center gap-2 bg-transparent"
					>
						Xem tất cả
						<ArrowRight className="w-4 h-4" />
					</Button>
				</div>
			</div>
		</section>
	);
}
