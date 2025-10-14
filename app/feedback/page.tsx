import { ScrollToTop } from "@/components/scroll-to-top";
import { FeedbackForm } from "@/components/feedback-form";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
export default function FeedbackPage() {
	return (
		<div className="min-h-screen flex flex-col">
			<main className="flex-1">
				{/* Hero Section */}
				<section className="py-8">
					<div className="container mx-auto px-4 text-center">
						<h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
							<AnimatedShinyText>Gửi phản hồi</AnimatedShinyText>
						</h1>
						<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
							Chúng tôi luôn sẵn sàng lắng nghe ý kiến đóng góp của bạn.
						</p>
					</div>
				</section>

				{/* Feedback Form Section */}
				<section className="py-8 relative">
					<BackgroundBeams className="w-full absolute inset-0 z-1" />
					<div className="relative z-10 container mx-auto px-4 max-w-2xl">
						<FeedbackForm />
					</div>
				</section>
			</main>

			<ScrollToTop />
		</div>
	);
}
