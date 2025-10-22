import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import React from "react";

// Gom tất cả tech items
const allTechItems = [
	// Frontend Framework
	{
		title: "Next.js",
		description: "React framework for production",
		link: "https://nextjs.org",
		category: "Frontend Framework",
	},
	{
		title: "React",
		description: "JavaScript library for building UI",
		link: "https://react.dev",
		category: "Frontend Framework",
	},
	{
		title: "TypeScript",
		description: "Typed JavaScript at scale",
		link: "https://www.typescriptlang.org",
		category: "Frontend Framework",
	},
	// Styling & Animation
	{
		title: "Tailwind CSS",
		description: "Utility-first CSS framework",
		link: "https://tailwindcss.com",
		category: "Styling & Animation",
	},
	{
		title: "CSS Modules",
		description: "Scoped CSS for components",
		link: "https://github.com/css-modules/css-modules",
		category: "Styling & Animation",
	},
	{
		title: "Framer Motion",
		description: "Production-ready animation library",
		link: "https://www.framer.com/motion",
		category: "Styling & Animation",
	},
	// Maps & Visualization
	{
		title: "Leaflet",
		description: "Interactive maps library",
		link: "https://leafletjs.com",
		category: "Maps & Visualization",
	},
	{
		title: "React Leaflet",
		description: "React components for Leaflet",
		link: "https://react-leaflet.js.org",
		category: "Maps & Visualization",
	},
	// AI Integration
	{
		title: "Google Generative AI",
		description: "AI Studio for content generation",
		link: "https://ai.google.dev",
		category: "AI Integration",
	},
	// Icons & UI
	{
		title: "Lucide React",
		description: "Beautiful & consistent icons",
		link: "https://lucide.dev",
		category: "Icons & UI",
	},
	// Development Tools
	{
		title: "Biome",
		description: "Fast formatter and linter",
		link: "https://biomejs.dev",
		category: "Development Tools",
	},
	{
		title: "Turbopack",
		description: "Next-gen bundler for Next.js",
		link: "https://turbo.build/pack",
		category: "Development Tools",
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
								Tech Stack
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
