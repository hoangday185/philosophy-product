import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { BlogCard } from "@/components/blog-card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function BlogsPage() {
	const blogs = [
		{
			id: 1,
			title: "Dân chủ và sự ra đời, phát triển của dân chủ",
			description:
				"Dân chủ là một khái niệm phức tạp, đa chiều và có nhiều cách hiểu khác nhau. Nó không chỉ là một hình thức chính trị mà còn là một giá trị văn hóa, xã hội.",
			image: "/historical-illustration-democracy.jpg",
			rating: 4.5,
			duration: "8 mins",
			badge: "Mới",
			badgeColor: "bg-blue-500",
		},
		{
			id: 2,
			title: "Dân chủ xã hội chủ nghĩa",
			description:
				"Dân chủ xã hội chủ nghĩa là một hình thức dân chủ đặc biệt, gắn liền với chế độ xã hội chủ nghĩa. Nó thể hiện quyền làm chủ của nhân dân lao động.",
			image: "/state-government-building.jpg",
			rating: 4.8,
			duration: "10 mins",
			badge: "Phổ biến",
			badgeColor: "bg-orange-500",
		},
		{
			id: 3,
			title: "Nhà nước xã hội chủ nghĩa",
			description:
				"Nhà nước xã hội chủ nghĩa là một loại hình nhà nước mới, ra đời sau Cách mạng tháng Mười Nga năm 1917. Nó đại diện cho quyền lợi của giai cấp công nhân và nhân dân lao động.",
			image: "/che-guevara-revolution-poster.jpg",
			rating: 4.7,
			duration: "12 mins",
			badge: "Mới",
			badgeColor: "bg-blue-500",
		},
		{
			id: 4,
			title: "Dân chủ xã hội chủ nghĩa ở Việt Nam",
			description:
				"Dân chủ xã hội chủ nghĩa ở Việt Nam được xây dựng trên nền tảng của chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh. Nó phản ánh đặc điểm riêng của Việt Nam.",
			image: "/historical-illustration-democracy.jpg",
			rating: 4.6,
			duration: "15 mins",
			badge: "Phổ biến",
			badgeColor: "bg-orange-500",
		},
		{
			id: 5,
			title: "Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam",
			description:
				"Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam là một mô hình nhà nước hiện đại, được xây dựng trên cơ sở pháp luật và đảm bảo quyền con người.",
			image: "/state-government-building.jpg",
			rating: 4.9,
			duration: "18 mins",
			badge: "Mới",
			badgeColor: "bg-blue-500",
		},
		{
			id: 6,
			title: "Phát huy dân chủ, xây dựng nhà nước pháp quyền...",
			description:
				"Phát huy dân chủ và xây dựng nhà nước pháp quyền là hai nhiệm vụ quan trọng, gắn bó chặt chẽ với nhau trong quá trình phát triển của đất nước.",
			image: "/che-guevara-revolution-poster.jpg",
			rating: 4.4,
			duration: "20 mins",
			badge: "Phổ biến",
			badgeColor: "bg-orange-500",
		},
		{
			id: 7,
			title: "Phòng, chống tham nhũng gắn liền với xây dựng...",
			description:
				"Phòng, chống tham nhũng không chỉ là vấn đề pháp lý mà còn là vấn đề chính trị, đạo đức xã hội. Nó gắn liền với việc xây dựng một chính phủ trong sạch.",
			image: "/historical-illustration-democracy.jpg",
			rating: 4.3,
			duration: "14 mins",
		},
		{
			id: 8,
			title: "Trách nhiệm của công dân trong phòng, chống...",
			description:
				"Mỗi công dân đều có trách nhiệm và quyền lợi trong việc giám sát, phát hiện và tố cáo các hành vi tham nhũng, lãng phí trong xã hội.",
			image: "/state-government-building.jpg",
			rating: 4.5,
			duration: "11 mins",
		},
	];

	return (
		<div className="min-h-screen flex flex-col">
			<main className="flex-1">
				{/* Breadcrumb */}
				<section className="py-4 border-b bg-muted/50">
					<div className="container mx-auto px-4">
						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<Link href="/" className="hover:text-primary transition-colors">
								🏠 Trang chủ
							</Link>
							<ChevronRight className="w-4 h-4" />
							<span className="text-primary font-medium">
								Thư viện triết học Chương 4
							</span>
						</div>
					</div>
				</section>

				{/* Hero Section */}
				<section className="py-12 bg-muted/30">
					<div className="container mx-auto px-4">
						<div className="max-w-3xl">
							<div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
								📚 Thư viện triết học
							</div>
							<h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
								Thư viện triết học Chương 4
							</h1>
							<p className="text-muted-foreground text-lg">
								Bộ sưu tập đầy đủ các bài viết về dân chủ xã hội chủ nghĩa và
								nhà nước pháp quyền xã hội chủ nghĩa tại Việt Nam.
							</p>
						</div>
					</div>
				</section>

				{/* Sidebar and Content */}
				<section className="py-8">
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
							{/* Sidebar */}
							<aside className="lg:col-span-1">
								<div className="sticky top-4 space-y-4">
									<div className="bg-card border rounded-lg p-4">
										<h3 className="font-semibold mb-3 flex items-center gap-2">
											📖 Lọc & tìm kiếm
										</h3>
										<div className="space-y-2">
											<button className="w-full text-left px-3 py-2 rounded hover:bg-muted transition-colors text-sm">
												Tất cả bài viết
											</button>
											<button className="w-full text-left px-3 py-2 rounded hover:bg-muted transition-colors text-sm">
												Tiêu chương
											</button>
										</div>
									</div>
								</div>
							</aside>

							{/* Blog Grid */}
							<div className="lg:col-span-3">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{blogs.map((blog) => (
										<BlogCard key={blog.id} {...blog} />
									))}
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			<ScrollToTop />
		</div>
	);
}
