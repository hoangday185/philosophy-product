import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { RecentQuizResults } from "@/components/recent-quiz-results";
import { QuizCard } from "@/components/quiz-card";
import { BookOpen, Building2, Scale } from "lucide-react";
import HeaderV2 from "@/components/headerV2";
import { Meteors } from "@/components/ui/meteors";

export default function QuizPage() {
	const quizzes = [
		{
			id: 1,
			title: "Dân chủ và dân chủ xã hội chủ nghĩa",
			description:
				"Ôn tập khái niệm dân chủ, tiến trình hình thành và đặc trưng của dân chủ xã hội chủ nghĩa.",
			icon: BookOpen,
			articleCount: 2,
		},
		{
			id: 2,
			title: "Nhà nước xã hội chủ nghĩa",
			description:
				"Tổng hợp kiến thức về sự ra đời, bản chất, chức năng và vai trò của nhà nước xã hội chủ nghĩa.",
			icon: Building2,
			articleCount: 1,
		},
		{
			id: 3,
			title: "Dân chủ XHCN và nhà nước pháp quyền XHCN ở Việt Nam",
			description:
				"Khám phá dân chủ xã hội chủ nghĩa và nhà nước pháp quyền xã hội chủ nghĩa trong thực tiễn Việt Nam hiện nay.",
			icon: Scale,
			articleCount: 5,
		},
	];

	return (
		<div className="min-h-screen flex flex-col">
			<Meteors number={30} />
			<main className="flex-1">
				{/* Hero Section */}
				<section className="py-16">
					<div className="container mx-auto px-4 text-center">
						<h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
							Quiz
						</h1>
						<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
							Vui lòng chọn một chương để bắt đầu Quiz
						</p>
					</div>
				</section>

				{/* Recent Quiz Results */}
				<section className="py-8">
					<div className="container mx-auto px-4">
						{/* <Meteors number={30} /> */}
						<RecentQuizResults />
					</div>
				</section>

				{/* Quiz Cards */}
				<section className="py-12">
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{quizzes.map((quiz) => (
								<QuizCard key={quiz.id} {...quiz} />
							))}
						</div>
					</div>
				</section>
			</main>

			<ScrollToTop />
		</div>
	);
}
