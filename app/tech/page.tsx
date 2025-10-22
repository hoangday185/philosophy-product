import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { TypingAnimation } from "@/components/ui/typing-animation";
import React from "react";

// Gom tất cả tech items
const allTechItems = [
	// Frontend Framework
	{
		title: "Next.js 15",
		description: "React framework for production with App Router",
		link: "https://nextjs.org",
	},
	{
		title: "React 19",
		description: "JavaScript library for building user interfaces",
		link: "https://react.dev",
	},
	{
		title: "Motion (Framer Motion)",
		description: "Production-ready animation library for React",
		link: "https://www.framer.com/motion",
	},
	{
		title: "tailwindcss-animate",
		description: "Animation utilities for Tailwind CSS",
		link: "https://github.com/jamiebuilds/tailwindcss-animate",
	},
	// UI Components & Libraries
	{
		title: "Radix UI",
		description: "Unstyled, accessible components for React",
		link: "https://www.radix-ui.com",
	},
	{
		title: "Shadcn/ui",
		description: "Re-usable components built with Radix UI and Tailwind",
		link: "https://ui.shadcn.com",
	},
	{
		title: "Aceternity UI",
		description: "Beautiful animated components for modern websites",
		link: "https://ui.aceternity.com",
	},
	{
		title: "Magicui",
		description: "Beautiful animated components for modern websites",
		link: "https://ui.magicui.com",
	},
	// Icons
	{
		title: "Lucide React",
		description: "Beautiful & consistent icon toolkit",
		link: "https://lucide.dev",
	},
	// Particles & Effects
	{
		title: "tsParticles",
		description: "Lightweight particles animation library",
		link: "https://particles.js.org",
	},
	// UI Utilities
	{
		title: "Next Themes",
		description: "Perfect dark mode for Next.js",
		link: "https://github.com/pacocoursey/next-themes",
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
								<TypingAnimation> Tech Stack </TypingAnimation>
							</h1>
							<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
								Technologies and tools used to build this e-learning platform
							</p>
						</div>

						<div className="max-w-7xl mx-auto">
							<HoverEffect items={allTechItems} />
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default TechPage;
