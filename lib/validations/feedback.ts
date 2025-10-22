import { z } from "zod";

export const feedbackSchema = z.object({
	name: z
		.string()
		.min(1, "Vui lòng nhập tên của bạn")
		.min(2, "Tên phải có ít nhất 2 ký tự")
		.max(100, "Tên không được vượt quá 100 ký tự")
		.regex(/^[a-zA-ZÀ-ỹ\s]+$/, "Tên chỉ được chứa chữ cái và khoảng trắng"),

	email: z
		.string()
		.min(1, "Vui lòng nhập email")
		.email("Email không hợp lệ")
		.max(255, "Email không được vượt quá 255 ký tự"),

	type: z
		.string()
		.min(1, "Vui lòng chọn loại góp ý")
		.refine(
			(value) => ["bug", "feature", "content", "other"].includes(value),
			"Loại góp ý không hợp lệ"
		),

	subject: z
		.string()
		.min(1, "Vui lòng nhập tiêu đề")
		.min(5, "Tiêu đề phải có ít nhất 5 ký tự")
		.max(200, "Tiêu đề không được vượt quá 200 ký tự"),

	message: z
		.string()
		.min(1, "Vui lòng nhập nội dung")
		.min(10, "Nội dung phải có ít nhất 10 ký tự")
		.max(2000, "Nội dung không được vượt quá 2000 ký tự"),
});

export type FeedbackFormData = z.infer<typeof feedbackSchema>;

// Helper function to get validation error message
export function getFieldError(
	errors: any,
	fieldName: keyof FeedbackFormData
): string | undefined {
	return errors[fieldName]?.message;
}
