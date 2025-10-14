import {
	BookOpen,
	Mail,
	Github,
	Twitter,
	Brain,
	MessageSquare,
	HandHelping,
	Languages,
	BookOpenText,
	ListCheck,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="bg-muted/50 border-t mt-20">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Brand Section */}
					<div>
						<div className="flex items-center gap-2 mb-4">
							<div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
								<BookOpen className="w-5 h-5 text-primary-foreground" />
							</div>
							<span className="font-bold text-xl">Philosophy-Learning</span>
						</div>
						<p className="text-sm text-muted-foreground mb-4">
							Nền tảng E-Learning triết học với bài viết song ngữ, quiz tương
							tác và trợ lý AI thông minh.
						</p>
						<div className="flex gap-3">
							<Link
								href="#"
								className="text-muted-foreground hover:text-primary transition-colors"
							>
								<Mail className="w-5 h-5" />
							</Link>
							<Link
								href="#"
								className="text-muted-foreground hover:text-primary transition-colors"
							>
								<Github className="w-5 h-5" />
							</Link>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="font-semibold mb-4">LIÊN KẾT NHANH</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/programs"
									className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
								>
									<BookOpen className="w-5 h-5" /> Chương
								</Link>
							</li>
							<li>
								<Link
									href="/quiz"
									className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
								>
									<Brain className="w-5 h-5" />
									Quiz triết học
								</Link>
							</li>
							<li>
								<Link
									href="/feedback"
									className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
								>
									<MessageSquare className="w-5 h-5" /> Phản hồi
								</Link>
							</li>
						</ul>
					</div>

					{/* Resources */}
					<div>
						<h3 className="font-semibold mb-4">TÀI NGUYÊN & CÔNG CỤ</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="#"
									className="text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2"
								>
									<HandHelping className="w-5 h-5" /> Trợ lý AI hỗ trợ học tập
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2"
								>
									<Languages className="w-5 h-5" /> Hỗ trợ 2 ngôn ngữ: VI & EN
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2"
								>
									<BookOpenText className="w-5 h-5" /> Hơn 50 bài viết chi tiết
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2"
								>
									<ListCheck className="w-5 h-5" /> Quiz tương tác đa dạng
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
					<p>© 2025 E-Learning. Giữ toàn bộ bản quyền.</p>
					<p className="mt-2 md:mt-0">
						Phát triển với tình yêu dành cho cộng đồng triết học • Next.js 15 +
						TypeScript
					</p>
				</div>
			</div>
		</footer>
	);
}
