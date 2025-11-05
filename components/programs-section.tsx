import { BookOpen, Globe } from "lucide-react";
import { ProgramCard } from "./program-card";
import { TextAnimate } from "./ui/text-animate";

const programs = [
	{
		link: "/map/cuoc-khang-chien-chong-phap",
		icon: "BookOpen",
		title: "Cuộc kháng chiến chống Pháp (1945-1954)",
		description:
			"Khám phá các trận đánh lịch sử từ Nam Bộ kháng chiến đến chiến thắng Điện Biên Phủ.",
		articleCount: 13,
		iconBgColor: "bg-red-600",
		badgeColor: "text-red-600",
		gradientFrom: "from-red-200",
		gradientTo: "to-red-100",
	},
	{
		link: "/map/cuoc-khang-chien-chong-my",
		icon: "Globe",
		title: "Cuộc kháng chiến chống Mỹ (1954-1975)",
		description:
			"Tìm hiểu hành trình giải phóng từ Đồng Khởi đến chiến dịch Hồ Chí Minh lịch sử.",
		articleCount: 12,
		iconBgColor: "bg-blue-600",
		badgeColor: "text-blue-600",
		gradientFrom: "from-blue-200",
		gradientTo: "to-blue-100",
	},
];

export function ProgramsSection() {
	return (
		<section className="py-16 ">
			<div className="container mx-auto px-4">
				<TextAnimate
					animation="scaleDown"
					by="character"
					as="h2"
					className="text-3xl md:text-4xl font-bold text-center mb-12"
					once
				>
					Khám phá lịch sử kháng chiến
				</TextAnimate>

				<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
					{programs.map((program, index) => (
						<ProgramCard
							key={index}
							link={program.link}
							icon={program.icon}
							title={program.title}
							description={program.description}
							articleCount={program.articleCount}
							iconBgColor={program.iconBgColor}
							badgeColor={program.badgeColor}
							gradientFrom={program.gradientFrom}
							gradientTo={program.gradientTo}
						/>
					))}
				</div>
				{/* <CustomHoverCardEffect items={programs} /> */}
			</div>
		</section>
	);
}
