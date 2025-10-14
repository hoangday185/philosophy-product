import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShineBorder } from "./ui/shine-border";

export function RecentQuizResults() {
	const recentQuizzes = [
		{
			id: 1,
			title: "Dân chủ và dân chủ xã hội chủ nghĩa",
			status: "CHƯA LÀM",
			description: "Chưa có dữ liệu. Hãy làm quiz để lưu kết quả.",
		},
		{
			id: 2,
			title: "Nhà nước xã hội chủ nghĩa",
			status: "CHƯA LÀM",
			description: "Chưa có dữ liệu. Hãy làm quiz để lưu kết quả.",
		},
		{
			id: 3,
			title: "Dân chủ XHCN và nhà nước pháp quyền XHCN ở Việt Nam",
			status: "CHƯA LÀM",
			description: "Chưa có dữ liệu. Hãy làm quiz để lưu kết quả.",
		},
	];

	return (
		<Card className="relative w-full">
			<ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
			<CardHeader>
				<CardTitle className="text-2xl">Kết quả quiz gần đây</CardTitle>
				<CardDescription>
					Theo dõi tiến độ của bạn cho từng chương.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{recentQuizzes.map((quiz) => (
						<div
							key={quiz.id}
							className="border rounded-lg p-4 hover:border-gray-300 transition-colors"
						>
							<div className="flex items-start justify-between mb-2">
								<h3 className="font-semibold text-sm leading-tight flex-1">
									{quiz.title}
								</h3>
								<Badge
									variant="secondary"
									className="ml-2 text-xs whitespace-nowrap"
								>
									{quiz.status}
								</Badge>
							</div>
							<p className="text-xs text-gray-600">{quiz.description}</p>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
