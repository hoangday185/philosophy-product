"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className="min-h-screen flex items-center justify-center bg-background">
			<div className="text-center space-y-6 p-8">
				<div className="space-y-2">
					<h1 className="text-4xl font-bold text-destructive">
						Oops! Có lỗi xảy ra
					</h1>
					<p className="text-muted-foreground max-w-md mx-auto">
						Đã xảy ra lỗi không mong muốn. Vui lòng thử lại hoặc quay về trang chủ.
					</p>
				</div>
				
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button onClick={() => reset()}>
						Thử lại
					</Button>
					<Button variant="outline" onClick={() => window.location.href = "/"}>
						Về trang chủ
					</Button>
				</div>
			</div>
		</div>
	);
}
