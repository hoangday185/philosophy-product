"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BookOpen, ChevronRight, Globe, type LucideIcon } from "lucide-react";
import { RainbowButton } from "./ui/rainbow-button";
import { MagicCard } from "@/components/ui/magic-card";
import { useTheme } from "next-themes";
import Link from "next/link";

interface ProgramCardProps {
	link?: string;
	icon: string;
	title: string;
	description: string;
	articleCount: number;
	iconBgColor: string;
	badgeColor: string;
	gradientFrom: string;
	gradientTo: string;
}

const getIconComponent = (icon: string): LucideIcon => {
	const iconMap: Record<string, LucideIcon> = {
		BookOpen,
		Globe,
	};
	return iconMap[icon] || BookOpen;
};

export function ProgramCard({
	link,
	icon,
	title,
	description,
	articleCount,
	iconBgColor,
	badgeColor,
	gradientFrom,
	gradientTo,
}: ProgramCardProps) {
	const { theme } = useTheme();
	const Icon = getIconComponent(icon);
	return (
		<MagicCard
			gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
			className="w-full max-w-sm bg-background px-2 py-4 rounded-xl"
		>
			<CardHeader className="pb-1">
				<div className="flex items-center justify-between space-x-4">
					<Avatar className={`${iconBgColor} h-12 w-12`}>
						<AvatarFallback className={`${iconBgColor} text-white`}>
							<Icon className="h-6 w-6" />
						</AvatarFallback>
					</Avatar>

					<Badge
						variant="secondary"
						className={badgeColor + " px-2 py-1 text-[14px]"}
					>
						{articleCount} bài viết
					</Badge>
				</div>
			</CardHeader>

			<CardContent className="pb-3">
				<div className="space-y-1 mb-2">
					<CardTitle className="text-xl">{title}</CardTitle>
				</div>

				<CardDescription className="text-sm leading-relaxed">
					{description}
				</CardDescription>
			</CardContent>

			<Separator className="mb-4" />

			<CardFooter className="pt-0 flex items-center justify-between">
				{link ? (
					<Link href={link} className="w-full">
						<RainbowButton
							variant="outline"
							className="w-full flex items-center justify-between"
						>
							<span>Khám phá</span>
							<ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
						</RainbowButton>
					</Link>
				) : (
					<RainbowButton
						variant="outline"
						className="w-full flex items-center justify-between"
					>
						<span>Khám phá</span>
						<ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
					</RainbowButton>
				)}
			</CardFooter>
		</MagicCard>
	);
}
