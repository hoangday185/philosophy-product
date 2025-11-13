"use client";
import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "./animations/particles-background";
import { BookOpen, Brain } from "lucide-react";

export function HeroSection() {
	return (
		<section className="relative overflow-hidden py-20 md:py-32 mt-10">
			{/* Particles Background */}
			<ParticlesBackground className="absolute inset-0 z-0" />
			<div className="container mx-auto px-4 relative z-20">
				<div className="max-w-3xl mx-auto text-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
						E-Learning
					</h1>
					<p className="text-lg md:text-xl text-muted-foreground mb-4">
						Khám phá thế giới tri thức qua những bài viết sâu sắc và tương tác
					</p>
					<p className="text-sm text-muted-foreground mb-8">
						Hãy trang trí cuộc sống học tập của bạn với những bài viết sâu sắc
						và tương tác từ hệ thống E-Learning của chúng tôi!
					</p>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
						<Button
							className="px-10 py-6  text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95 rounded-xl"
							onClick={() => {
								// Add your click handler logic here
								console.log("Nội dung button clicked!");
							}}
						>
							<span className="flex items-center gap-2">
								<BookOpen className="size-5" /> Nội dung
							</span>
						</Button>
						{/* <Button
							className="px-10 py-6 text-xl font-semibold border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-400 dark:hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 hover:brightness-110 active:scale-95 rounded-xl"
							variant="outline"
						>
							<span className="flex items-center gap-2">
								<Brain className="size-5" /> Làm quiz
							</span>
						</Button> */}
					</div>

					<div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-green-500 rounded-full" />
							<span>Dễ sử dụng</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-blue-500 rounded-full" />
							<span>Tương tác dễ dàng</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-purple-500 rounded-full" />
							<span>Khóa học</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
