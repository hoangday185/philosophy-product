"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/animations/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

const LabelInputContainer = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={cn("flex w-full flex-col space-y-2", className)}>
			{children}
		</div>
	);
};

const BottomGradient = () => {
	return (
		<>
			<span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
			<span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
		</>
	);
};

export function FeedbackForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		type: "",
		subject: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		console.log("Form submitted:", formData);
	};

	return (
		<Card className="shadow-sm">
			<CardHeader>
				<CardTitle className="text-2xl">Gửi góp ý</CardTitle>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit} className="space-y-6">
					{/* Name Field */}
					<LabelInputContainer className="space-y-2">
						<Label htmlFor="name">Tên bạn</Label>
						<Input
							id="name"
							type="text"
							value={formData.name}
							onChange={(e) =>
								setFormData({ ...formData, name: e.target.value })
							}
							className="w-full"
							required
						/>
					</LabelInputContainer>

					{/* Email Field */}
					<LabelInputContainer className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							value={formData.email}
							onChange={(e) =>
								setFormData({ ...formData, email: e.target.value })
							}
							className="w-full"
							required
						/>
					</LabelInputContainer>

					{/* Feedback Type */}
					<LabelInputContainer className="space-y-2">
						<Label htmlFor="type">Loại góp ý</Label>
						<Select
							value={formData.type}
							onValueChange={(value) =>
								setFormData({ ...formData, type: value })
							}
						>
							<SelectTrigger id="type" className="w-full">
								<SelectValue placeholder="Chọn loại" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="bug">Báo lỗi</SelectItem>
								<SelectItem value="feature">Đề xuất tính năng</SelectItem>
								<SelectItem value="content">Góp ý nội dung</SelectItem>
								<SelectItem value="other">Khác</SelectItem>
							</SelectContent>
						</Select>
					</LabelInputContainer>

					{/* Subject Field */}
					<LabelInputContainer className="space-y-2">
						<Label htmlFor="subject">Tiêu đề</Label>
						<Input
							id="subject"
							type="text"
							value={formData.subject}
							onChange={(e) =>
								setFormData({ ...formData, subject: e.target.value })
							}
							className="w-full"
							required
						/>
					</LabelInputContainer>

					{/* Message Field */}
					<LabelInputContainer className="space-y-2">
						<Label htmlFor="message">Nội dung</Label>
						<Textarea
							id="message"
							value={formData.message}
							onChange={(e) =>
								setFormData({ ...formData, message: e.target.value })
							}
							className="w-full min-h-[150px] resize-none"
							required
						/>
					</LabelInputContainer>

					{/* Submit Button */}
					<Button type="submit" className="w-full">
						<Send className="w-4 h-4 mr-2" />
						Gửi góp ý
						<BottomGradient />
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
