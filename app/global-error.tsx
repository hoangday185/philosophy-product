"use client";

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<html>
			<body>
				<div className="min-h-screen flex items-center justify-center bg-background">
					<div className="text-center space-y-6 p-8">
						<div className="space-y-2">
							<h1 className="text-4xl font-bold text-red-600">
								Lỗi hệ thống
							</h1>
							<p className="text-gray-600 max-w-md mx-auto">
								Đã xảy ra lỗi nghiêm trọng. Vui lòng tải lại trang.
							</p>
						</div>
						
						<button 
							onClick={() => reset()}
							className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
						>
							Thử lại
						</button>
					</div>
				</div>
			</body>
		</html>
	);
}
