import type { LucideIcon } from "lucide-react";
import { Button } from "./ui/moving-border";
import { NumberTicker } from "./ui/number-ticker";

interface StatCardProps {
	icon: LucideIcon;
	value: string;
	title: string;
	description: string;
	iconBgColor: string;
	valueColor: string;
}

export function StatCard({
	icon: Icon,
	value,
	title,
	description,
	iconBgColor,
	valueColor,
}: StatCardProps) {
	return (
		<div className="text-center p-4 sm:p-6">
			<div
				className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}
			>
				<Button className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 rounded-full">
					<Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
				</Button>
			</div>
			<div
				className={`text-2xl sm:text-3xl md:text-4xl font-bold ${valueColor} mb-2`}
			>
				<NumberTicker
					value={Number(value)}
					className="font-medium tracking-tighter whitespace-pre-wrap text-black dark:text-white"
				/>
			</div>
			<div className="text-sm sm:text-base md:text-lg font-semibold mb-1">
				{title}
			</div>
			<div className="text-xs sm:text-sm md:text-base text-muted-foreground">
				{description}
			</div>
		</div>
	);
}
