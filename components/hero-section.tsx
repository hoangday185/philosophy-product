"use client";
import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "./animations/particles-background";
import { BookOpen, Brain } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
	return (
		<section className="py-50 bg-cover bg-center" // Thêm class Tailwind để kiểm soát kích thước và vị trí ảnh
            style={{ 
                // Thay đổi đường dẫn ảnh cho phù hợp với cấu trúc project của bạn
                backgroundImage: "url('/didilinh.png')", 
            }}>
			{/* Particles Background */}
			{/* <ParticlesBackground className="absolute inset-0 z-0" /> */}
			<div className="container mx-auto px-4 relative z-20">
				<div className="max-w-3xl mx-auto text-center">
					<h1 className="text-4xl md:text-3xl font-bold mb-4 pt-25 text-balance text-red-200 drop-shadow-[0_0_8px_rgba(220,38,38,0.9)]">
						Việt Nam
					</h1>
					<p className="text-lg text-yellow-300 blur-2m font-bold md:text-xl mb-4 drop-shadow-[0_0_8px_rgba(220,38,38,0.9)]">
						Chống Pháp - Mỹ - Giải phóng đất nước
					</p>
					<p className="text-sm text-white mb-8 drop-shadow-[0_0_8px_rgba(220,38,38,0.9)]">
						Hành trình lịch sử kháng chiến Việt Nam qua bản đồ tương tác
						sinh động.
					</p>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 ">
						<Link href="/blogs">
						<Button
							className="px-10 py-6  text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95 rounded-xl"
							onClick={() => {
								// Add your click handler logic here
								console.log("Nội dung button clicked!");
								<Link href="/blogs" />;
							}}
						>
							<span className="flex items-center gap-2">
								<BookOpen className="size-5" /> Nội dung
							</span>
						</Button>
						</Link>
						{/* <Button
							className="px-10 py-6 text-xl font-semibold border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-400 dark:hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 hover:brightness-110 active:scale-95 rounded-xl"
							variant="outline"
						>
							<span className="flex items-center gap-2">
								<Brain className="size-5" /> Làm quiz
							</span>
						</Button> */}
					</div>

					{/* <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
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
					</div> */}
				</div>
			</div>
		</section>
	);
}
