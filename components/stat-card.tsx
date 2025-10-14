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
		<div className="text-center">
			<div
				className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
			>
				<Button className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 rounded-full">
					<Icon className="w-8 h-8" />
				</Button>
			</div>
			<div className={`text-4xl font-bold ${valueColor} mb-2`}>
				{" "}
				<NumberTicker
					value={Number(value)}
					className="font-medium tracking-tighter whitespace-pre-wrap text-black dark:text-white"
				/>
			</div>
			<div className="font-semibold mb-1">{title}</div>
			<div className="text-sm text-muted-foreground">{description}</div>
		</div>
	);
}
