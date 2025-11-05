import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-background">
			<div className="text-center space-y-6 p-8">
				<div className="space-y-2">
					<h1 className="text-6xl font-bold text-primary">404</h1>
					<h2 className="text-2xl font-semibold text-foreground">
						Trang không tìm thấy
					</h2>
					<p className="text-muted-foreground max-w-md mx-auto">
						Xin lỗi, chúng tôi không thể tìm thấy trang bạn đang tìm kiếm. 
						Trang có thể đã được di chuyển hoặc không tồn tại.
					</p>
				</div>
				
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button asChild>
						<Link href="/">
							Về trang chủ
						</Link>
					</Button>
					<Button variant="outline" asChild>
						<Link href="/map">
							Xem bản đồ
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
