"use client";
import React, { useState } from "react";
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
import {
	Award,
	BookOpen,
	ChevronRight,
	Globe,
	Icon,
	Target,
	Users,
	Zap,
	type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

const getIconComponent = (iconName: string): LucideIcon => {
	const iconMap: Record<string, LucideIcon> = {
		BookOpen,
		Globe,
		Users,
		Award,
		Target,
		Zap,
	};

	return iconMap[iconName] || BookOpen; // Default fallback
};

const CustomHoverCardEffect = ({
	items,
	className,
}: {
	items: {
		link: string;
		icon: string;
		title: string;
		description: string;
		articleCount: number;
		iconBgColor: string;
		iconColor: string;
		badgeColor: string;
		gradientFrom: string;
		gradientTo: string;
	}[];
	className?: string;
}) => {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
				className
			)}
		>
			{items.map((item, idx) => {
				const IconComponent = getIconComponent(item.icon);
				return (
					<a
						href={item?.link}
						key={item?.link}
						className="relative group  block p-2 h-full w-full"
						onMouseEnter={() => setHoveredIndex(idx)}
						onMouseLeave={() => setHoveredIndex(null)}
					>
						<AnimatePresence>
							{hoveredIndex === idx && (
								<motion.span
									className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
									layoutId="hoverBackground"
									initial={{ opacity: 0 }}
									animate={{
										opacity: 1,
										transition: { duration: 0.15 },
									}}
									exit={{
										opacity: 0,
										transition: { duration: 0.15, delay: 0.2 },
									}}
								/>
							)}
						</AnimatePresence>
						<Card className="rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
							<div>
								<CardHeader className="pb-3">
									<div className="flex items-center space-x-4">
										<Avatar className={`${item.iconBgColor} h-12 w-12`}>
											<AvatarFallback
												className={`${item.iconBgColor} text-white`}
											>
												<IconComponent className="h-6 w-6" />
											</AvatarFallback>
										</Avatar>
										<div className="space-y-1">
											<CardTitle className="text-lg">{item.title}</CardTitle>
											<Badge variant="secondary" className={item.badgeColor}>
												{item.articleCount} bài viết
											</Badge>
										</div>
									</div>
								</CardHeader>

								<CardContent className="pb-3">
									<CardDescription className="text-sm leading-relaxed">
										{item.description}
									</CardDescription>
								</CardContent>

								<Separator className="mb-4" />

								<CardFooter className="pt-0">
									<Button variant="outline" className="w-full group">
										<span className="flex items-center justify-center gap-2">
											Khám phá
											<ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
										</span>
									</Button>
								</CardFooter>
							</div>
						</Card>
					</a>
				);
			})}
		</div>
	);
};

export default CustomHoverCardEffect;
