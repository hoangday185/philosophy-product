import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProgramsSection } from "@/components/programs-section";
import { LatestArticlesSection } from "@/components/latest-articles-section";
import { StatisticsSection } from "@/components/statistics-section";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Footer } from "@/components/footer";
import HeaderV2 from "@/components/headerV2";

export default function HomePage() {
	return (
		<div className="min-h-screen bg-background">
			<HeroSection />
			<ProgramsSection />
			{/* <LatestArticlesSection /> */}
			<StatisticsSection />
			<ScrollToTop />
		</div>
	);
}
