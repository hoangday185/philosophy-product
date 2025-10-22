"use client";

import type React from "react";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
	feedbackSchema,
	type FeedbackFormData,
} from "@/lib/validations/feedback";

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
	const [submitStatus, setSubmitStatus] = useState<{
		type: "success" | "error" | null;
		message: string;
	}>({ type: null, message: "" });

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
		register,
	} = useForm<FeedbackFormData>({
		resolver: zodResolver(feedbackSchema),
		defaultValues: {
			name: "",
			email: "",
			type: "",
			subject: "",
			message: "",
		},
	});

	const onSubmit = async (data: FeedbackFormData) => {
		setSubmitStatus({ type: null, message: "" });

		try {
			const response = await fetch("/api/send-feedback", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			const result = await response.json();

			if (response.ok) {
				setSubmitStatus({
					type: "success",
					message: result.message || "Góp ý đã được gửi thành công!",
				});
				// Reset form
				reset();
			} else {
				setSubmitStatus({
					type: "error",
					message: result.error || "Có lỗi xảy ra khi gửi góp ý",
				});
			}
		} catch (error) {
			console.error("Error submitting form:", error);
			setSubmitStatus({
				type: "error",
				message: "Không thể kết nối đến server. Vui lòng thử lại sau.",
			});
		}
	};

	return (
		<Card className="shadow-sm">
			<CardHeader>
				<CardTitle className="text-2xl">Gửi góp ý</CardTitle>
			</CardHeader>
			<CardContent>
				{/* Status Message */}
				{submitStatus.type && (
					<div
						className={cn(
							"flex items-center gap-2 p-4 rounded-lg mb-6",
							submitStatus.type === "success"
								? "bg-green-50 text-green-700 border border-green-200"
								: "bg-red-50 text-red-700 border border-red-200"
						)}
					>
						{submitStatus.type === "success" ? (
							<CheckCircle className="w-5 h-5" />
						) : (
							<AlertCircle className="w-5 h-5" />
						)}
						<span>{submitStatus.message}</span>
					</div>
				)}

				<form
					onSubmit={handleSubmit(onSubmit)}
					noValidate
					className="space-y-6"
				>
					{/* Name Field */}
					<LabelInputContainer className="space-y-2">
						<Label htmlFor="name">Tên bạn</Label>
						<Input
							id="name"
							type="text"
							{...register("name")}
							className={cn("w-full", errors.name && "border-red-500")}
						/>
						{errors.name && (
							<p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
						)}
					</LabelInputContainer>

					{/* Email Field */}
					<LabelInputContainer className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							{...register("email")}
							className={cn("w-full", errors.email && "border-red-500")}
						/>
						{errors.email && (
							<p className="text-sm text-red-500 mt-1">
								{errors.email.message}
							</p>
						)}
					</LabelInputContainer>

					{/* Feedback Type */}
					<LabelInputContainer className="space-y-2">
						<Label htmlFor="type">Loại góp ý</Label>
						<Controller
							name="type"
							control={control}
							render={({ field }) => (
								<Select onValueChange={field.onChange} value={field.value}>
									<SelectTrigger
										id="type"
										className={cn("w-full", errors.type && "border-red-500")}
									>
										<SelectValue placeholder="Chọn loại" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="bug">Báo lỗi</SelectItem>
										<SelectItem value="feature">Đề xuất tính năng</SelectItem>
										<SelectItem value="content">Góp ý nội dung</SelectItem>
										<SelectItem value="other">Khác</SelectItem>
									</SelectContent>
								</Select>
							)}
						/>
						{errors.type && (
							<p className="text-sm text-red-500 mt-1">{errors.type.message}</p>
						)}
					</LabelInputContainer>

					{/* Subject Field */}
					<LabelInputContainer className="space-y-2">
						<Label htmlFor="subject">Tiêu đề</Label>
						<Input
							id="subject"
							type="text"
							{...register("subject")}
							className={cn("w-full", errors.subject && "border-red-500")}
						/>
						{errors.subject && (
							<p className="text-sm text-red-500 mt-1">
								{errors.subject.message}
							</p>
						)}
					</LabelInputContainer>

					{/* Message Field */}
					<LabelInputContainer className="space-y-2">
						<Label htmlFor="message">Nội dung</Label>
						<Textarea
							id="message"
							{...register("message")}
							className={cn(
								"w-full min-h-[150px] resize-none",
								errors.message && "border-red-500"
							)}
						/>
						{errors.message && (
							<p className="text-sm text-red-500 mt-1">
								{errors.message.message}
							</p>
						)}
					</LabelInputContainer>

					{/* Submit Button */}
					<Button
						type="submit"
						className="w-full group/btn relative"
						disabled={isSubmitting}
					>
						{isSubmitting ? (
							<Loader2 className="w-4 h-4 mr-2 animate-spin" />
						) : (
							<Send className="w-4 h-4 mr-2" />
						)}
						{isSubmitting ? "Đang gửi..." : "Gửi góp ý"}
						<BottomGradient />
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
