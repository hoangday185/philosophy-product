"use client";
import Link from "next/link";
import {
	Mail,
	Github,
	BookOpen,
	Brain,
	MessageSquare,
	Sparkles,
	Languages,
	BookMarked,
	ListChecks,
	ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className="border-t bg-muted/30 mt-20">
			<div className="container mx-auto px-4 py-12 lg:py-16">
				<div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
					{/* Brand Section */}
					<div className="space-y-4">
						<div className="flex items-center gap-2 mb-4">
							<div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
								<BookOpen className="h-5 w-5 text-primary-foreground" />
							</div>
							<span className="text-xl font-bold">Philosophy-Learning</span>
						</div>
						<p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
							Nền tảng E-Learning triết học với bài viết song ngữ, quiz tương
							tác và trợ lý AI thông minh.
						</p>
						<div className="flex items-center gap-3 pt-2">
							<Link
								href="mailto:contact@philosophy-learning.com"
								className="text-muted-foreground transition-colors hover:text-foreground"
								aria-label="Email"
							>
								<Mail className="h-5 w-5" />
							</Link>
							<Link
								href="https://github.com"
								className="text-muted-foreground transition-colors hover:text-foreground"
								aria-label="GitHub"
							>
								<Github className="h-5 w-5" />
							</Link>
						</div>
					</div>

					{/* Quick Links */}
					{/* <div className="space-y-4">
						<h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
							Liên kết nhanh
						</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="/chuong"
									className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
								>
									<BookOpen className="h-4 w-4 transition-transform group-hover:scale-110" />
									<span>Chương</span>
								</Link>
							</li>
							<li>
								<Link
									href="/quiz"
									className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
								>
									<Brain className="h-4 w-4 transition-transform group-hover:scale-110" />
									<span>Quiz triết học</span>
								</Link>
							</li>
							<li>
								<Link
									href="/phan-hoi"
									className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
								>
									<MessageSquare className="h-4 w-4 transition-transform group-hover:scale-110" />
									<span>Phản hồi</span>
								</Link>
							</li>
						</ul>
					</div> */}

					{/* Resources & Tools */}
					{/* <div className="space-y-4">
						<h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
							Tài nguyên & Công cụ
						</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="/ai-assistant"
									className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
								>
									<Sparkles className="h-4 w-4 transition-transform group-hover:scale-110" />
									<span>Trợ lý AI hỗ trợ học tập</span>
								</Link>
							</li>
							<li>
								<Link
									href="/languages"
									className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
								>
									<Languages className="h-4 w-4 transition-transform group-hover:scale-110" />
									<span>Hỗ trợ 2 ngôn ngữ: VI & EN</span>
								</Link>
							</li>
							<li>
								<Link
									href="/essays"
									className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
								>
									<BookMarked className="h-4 w-4 transition-transform group-hover:scale-110" />
									<span>Hơn 50 bài viết chi tiết</span>
								</Link>
							</li>
							<li>
								<Link
									href="/quizzes"
									className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
								>
									<ListChecks className="h-4 w-4 transition-transform group-hover:scale-110" />
									<span>Quiz tương tác đa dạng</span>
								</Link>
							</li>
						</ul>
					</div> */}
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t">
				<div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
					<p className="text-sm text-muted-foreground">
						© 2025 E-Learning. Giữ toàn bộ bản quyền.
					</p>
					<div className="flex items-center gap-4">
						<p className="text-sm text-muted-foreground">
							Phát triển với tình yêu dành cho cộng đồng triết học • Next.js 15
							+
						</p>
						<Button
							variant="ghost"
							size="icon"
							className="h-8 w-8 rounded-full hover:bg-muted"
							onClick={scrollToTop}
							aria-label="Scroll to top"
						>
							<ArrowUp className="h-4 w-4" />
						</Button>
					</div>
				</div>
			</div>
		</footer>
	);
}
