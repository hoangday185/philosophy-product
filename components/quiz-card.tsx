import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { BorderBeam } from "./ui/border-beam";
import { RainbowButton } from "./ui/rainbow-button";

interface QuizCardProps {
	id: number;
	title: string;
	description: string;
	icon: LucideIcon;
	articleCount: number;
}

export function QuizCard({
	title,
	description,
	icon: Icon,
	articleCount,
}: QuizCardProps) {
	return (
		<Card className="bg-card border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden relative hover:scale-105">
			{/* Decorative blob */}
			<div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-muted/30 blur-2xl" />
			<div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-muted/30 blur-2xl" />

			<CardContent className="pt-6 relative z-10">
				<div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
					<Icon className="w-6 h-6 text-primary-foreground" />
				</div>
				<h3 className="text-xl font-bold mb-3 leading-tight">{title}</h3>
				<p className="text-muted-foreground text-sm leading-relaxed">
					{description}
				</p>
			</CardContent>

			<CardFooter className="flex items-center justify-between relative z-10">
				<RainbowButton variant="outline" asChild>
					<Link href={`/quiz/${title.toLowerCase().replace(/\s+/g, "-")}`}>
						Khám phá
						<ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
					</Link>
				</RainbowButton>
				<span className="text-sm text-muted-foreground">
					{articleCount} bài viết
				</span>
			</CardFooter>
			{/* <BorderBeam duration={8} size={100} /> */}
		</Card>
	);
}
