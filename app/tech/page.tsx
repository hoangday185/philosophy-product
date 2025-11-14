import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { TEAM_MEMBER, DATA_OF_PROJECT } from "@/app/db/map";
import React from "react";

// Transform team members to match HoverEffect format
const teamItems = TEAM_MEMBER.map((member) => ({
	title: member.name,
	description: `${member.role} • MSSV: ${member.id}`,
	link: `#${member.id}`, // Unique link using member ID
}));

// Transform project data to match HoverEffect format
const projectItems = DATA_OF_PROJECT.map((project) => ({
	title: project.title,
	description: "Tài liệu dự án và hướng dẫn sử dụng",
	link: project.link,
}));

// Gom tất cả tech items
const allTechItems = [
	// Framework Frontend
	{
		title: "Next.js 15",
		description: "Framework React cho production với App Router",
		link: "https://nextjs.org",
	},
	{
		title: "React 19",
		description: "Thư viện JavaScript để xây dựng giao diện người dùng",
		link: "https://react.dev",
	},
	{
		title: "Motion (Framer Motion)",
		description: "Thư viện animation sẵn sàng cho production",
		link: "https://www.framer.com/motion",
	},
	{
		title: "tailwindcss-animate",
		description: "Tiện ích animation cho Tailwind CSS",
		link: "https://github.com/jamiebuilds/tailwindcss-animate",
	},
	// Thư viện UI & Components
	{
		title: "Radix UI",
		description: "Components không style, dễ tiếp cận cho React",
		link: "https://www.radix-ui.com",
	},
	{
		title: "Shadcn/ui",
		description:
			"Components tái sử dụng được xây dựng với Radix UI và Tailwind",
		link: "https://ui.shadcn.com",
	},
	{
		title: "Aceternity UI",
		description: "Components animation đẹp cho website hiện đại",
		link: "https://ui.aceternity.com",
	},
	{
		title: "Magicui",
		description: "Components animation đẹp cho website hiện đại",
		link: "https://ui.magicui.com",
	},
	// Icons
	{
		title: "Lucide React",
		description: "Bộ công cụ icon đẹp và nhất quán",
		link: "https://lucide.dev",
	},
	// Particles & Effects
	{
		title: "tsParticles",
		description: "Thư viện animation particles nhẹ",
		link: "https://particles.js.org",
	},
	// Tiện ích UI
	{
		title: "Next Themes",
		description: "Dark mode hoàn hảo cho Next.js",
		link: "https://github.com/pacocoursey/next-themes",
	},
	// API AI
	{
		title: "Google Gemini API",
		description: "Mô hình AI mới nhất của Google cho tạo văn bản",
		link: "https://gemini.google.com",
	},
];

const TechPage = () => {
	return (
		<div className="min-h-screen flex flex-col bg-background">
			<main className="flex-1 relative w-full overflow-hidden">
				<FlickeringGrid
					className="absolute inset-0 z-0 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
					squareSize={5}
					gridGap={6}
					color="#60A5FA"
					maxOpacity={0.3}
					flickerChance={0.1}
				/>
				<section className="relative z-10 py-16 px-4">
					<div className="container mx-auto">
						<div className="text-center mb-12">
							<h1 className="font-bold text-4xl md:text-6xl mb-4">
								<TypingAnimation> Công Nghệ Sử Dụng </TypingAnimation>
							</h1>
							<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
								Các công nghệ và công cụ được sử dụng để xây dựng nền tảng
								học tập này
							</p>
						</div>

						<div className="max-w-7xl mx-auto">
							<HoverEffect items={allTechItems} />
						</div>

						{/* Project Documentation Section */}
						<div className="mt-20">
							<div className="text-center mb-12">
								<h2 className="font-bold text-3xl md:text-5xl mb-4">
									<TypingAnimation> Tài Liệu Dự Án </TypingAnimation>
								</h2>
								<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
									Tài liệu chi tiết về dự án và các AI sử dụng
								</p>
							</div>

							<div className="w-full mx-auto">
								<HoverEffect items={projectItems} />
							</div>
						</div>

						{/* Team Members Section */}
						<div className="mt-20">
							<div className="text-center mb-12">
								<h2 className="font-bold text-3xl md:text-5xl mb-4">
									<TypingAnimation> Đội Ngũ Phát Triển </TypingAnimation>
								</h2>
								<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
									Gặp gỡ những cá nhân tài năng đứng sau dự án này
								</p>
							</div>

							<div className="max-w-5xl mx-auto">
								<HoverEffect items={teamItems} />
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default TechPage;
