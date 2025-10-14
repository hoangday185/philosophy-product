import { BookOpen, Globe } from "lucide-react";
import { ProgramCard } from "./program-card";
import CustomHoverCardEffect from "./custom-hover-card-effect";
import { TextAnimate } from "./ui/text-animate";

const programs = [
	{
		link: "/",
		icon: "BookOpen",
		title: "Chương 4.1: Dân chủ và dân chủ xã hội chủ nghĩa",
		description:
			"Tìm hiểu người dân, dân chủ và gắn kết của dân chủ với xã hội chủ nghĩa.",
		articleCount: 2,
		iconBgColor: "bg-indigo-600",
		badgeColor: "text-indigo-600",
		gradientFrom: "from-purple-200",
		gradientTo: "to-purple-100",
	},
	{
		link: "/",
		icon: "Globe",
		title: "Chương 4.2: Nhà nước xã hội chủ nghĩa",
		description:
			"Khám phá cấu trúc, chức năng và vai trò của nhà nước xã hội chủ nghĩa.",
		articleCount: 5,
		iconBgColor: "bg-teal-500",
		badgeColor: "text-teal-600",
		gradientFrom: "from-teal-200",
		gradientTo: "to-teal-100",
	},
	{
		link: "/",
		icon: "BookOpen",
		title: "Chương 4.3: Dân chủ XHCN & Nhà nước pháp quyền ở Việt Nam",
		description:
			"Liên hệ thực tiễn Việt Nam trong xây dựng dân chủ và nhà nước pháp quyền XHCN.",
		articleCount: 5,
		iconBgColor: "bg-red-500",
		badgeColor: "text-red-600",
		gradientFrom: "from-red-200",
		gradientTo: "to-red-100",
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
					Khám phá các chương trình học
				</TextAnimate>

				<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
					<ProgramCard
						icon={"BookOpen"}
						title="Chương 4.1: Dân chủ và dân chủ xã hội chủ nghĩa"
						description="Tìm hiểu người dân, dân chủ và gắn kết của dân chủ với xã hội chủ nghĩa."
						articleCount={2}
						iconBgColor="bg-blue-500"
						badgeColor="text-blue-500"
						gradientFrom="from-blue-200"
						gradientTo="to-blue-100"
					/>

					<ProgramCard
						icon={"Globe"}
						title="Chương 4.2: Nhà nước xã hội chủ nghĩa"
						description="Khám phá cấu trúc, chức năng và vai trò của nhà nước xã hội chủ nghĩa."
						articleCount={5}
						iconBgColor="bg-green-500"
						badgeColor="text-green-500"
						gradientFrom="from-emerald-200"
						gradientTo="to-emerald-100"
					/>

					<ProgramCard
						icon={"BookOpen"}
						title="Chương 4.3: Dân chủ XHCN & Nhà nước pháp quyền ở Việt Nam"
						description="Liên hệ thực tiễn Việt Nam trong xây dựng dân chủ và nhà nước pháp quyền XHCN."
						articleCount={5}
						iconBgColor="bg-violet-600"
						badgeColor="text-violet-600"
						gradientFrom="from-violet-200"
						gradientTo="to-violet-100"
					/>
				</div>
				{/* <CustomHoverCardEffect items={programs} /> */}
			</div>
		</section>
	);
}
