import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { CometCard } from "./ui/comet-card";
import { TimerIcon, User } from "lucide-react";
interface ArticleCardProps {
	image: string;
	title: string;
	description: string;
	readTime: string;
}

export function ArticleCard({
	image,
	title,
	description,
	readTime,
}: ArticleCardProps) {
	return (
		<CometCard>
			<Card className="overflow-hidden hover:shadow-lg transition-shadow">
				<div className="relative h-48 bg-gray-200">
					<Image
						src={image || "/placeholder.svg"}
						alt={title}
						fill
						className="object-cover"
					/>
					<Badge className="absolute top-4 right-4  bg-white text-black">
						Mới nhất
					</Badge>
				</div>
				<CardContent className="p-6">
					<h3 className="font-bold text-lg mb-2">{title}</h3>
					<p className="text-sm text-muted-foreground mb-4">{description}</p>
					<div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
						<span className="flex items-center gap-2">
							<User className="w-4 h-4" />
							Admin
						</span>
						<span className="flex items-center gap-2">
							<TimerIcon className="w-4 h-4" /> {readTime}
						</span>
					</div>
					<Button className="w-full bg-black hover:bg-black/90 text-white">
						Đọc thêm
					</Button>
				</CardContent>
			</Card>
		</CometCard>
	);
}
