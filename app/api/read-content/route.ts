import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const { content } = await request.json();

		if (!content) {
			return NextResponse.json(
				{ error: "Nội dung không được để trống" },
				{ status: 400 }
			);
		}

		// Kiểm tra API key
		const apiKey = process.env.GEMINI_API_KEY;
		if (!apiKey) {
			return NextResponse.json(
				{ error: "GEMINI_API_KEY chưa được cấu hình" },
				{ status: 500 }
			);
		}

		// Khởi tạo Gemini AI
		const genAI = new GoogleGenerativeAI(apiKey);

		// Danh sách models để thử (theo thứ tự ưu tiên)
		const modelsToTry = [
			"gemini-2.0-flash-exp",
			"gemini-1.5-flash-002",
			"gemini-1.5-flash-001",
			"gemini-1.5-flash",
			"gemini-1.5-pro",
			"gemini-pro",
		];

		let model;
		let workingModelName = "";
		let errors = [];

		// Prompt để trích xuất văn bản thuần túy từ nội dung
		const prompt = `
Bạn là một trợ lý đọc nội dung cho người dùng web.
Nhiệm vụ: Trích xuất và chuyển đổi nội dung sau thành văn bản thuần túy, dễ đọc và tự nhiên.

Yêu cầu:
- Chỉ trả về văn bản thuần túy, KHÔNG có markdown, HTML hay format đặc biệt
- Giữ nguyên ý nghĩa và cấu trúc logic
- Nếu có danh sách, đọc thành câu văn tự nhiên
- Nếu có tiêu đề, đọc như câu giới thiệu
- Độ dài tối đa: 500 từ
- Sử dụng ngôn ngữ của nội dung gốc

Nội dung cần xử lý:
${content}

Văn bản để đọc:`;

		// Thử từng model cho đến khi tìm được model hoạt động
		for (const modelName of modelsToTry) {
			try {
				console.log(`Đang thử model: ${modelName}`);
				model = genAI.getGenerativeModel({ model: modelName });

				// Gọi API thực tế để kiểm tra
				const result = await model.generateContent(prompt);
				const response = await result.response;
				const text = response.text();

				// Nếu thành công, lưu tên model và thoát vòng lặp
				workingModelName = modelName;
				console.log(`✅ Model hoạt động: ${modelName}`);

				return NextResponse.json({
					text: text.trim(),
					modelUsed: modelName, // Để debug
				});
			} catch (error: any) {
				console.log(error);
				console.error(`❌ Model ${modelName} failed:`, error.message);
				errors.push(`${modelName}: ${error.message}`);
				continue;
			}
		}

		// Nếu không model nào hoạt động
		return NextResponse.json(
			{
				error: "Không tìm thấy model Gemini khả dụng",
				details: errors,
				suggestion:
					"Vui lòng kiểm tra API key tại https://aistudio.google.com/app/apikey và tạo key mới",
			},
			{ status: 500 }
		);
	} catch (error: any) {
		console.error("Lỗi khi xử lý Gemini AI:", error);
		return NextResponse.json(
			{ error: error.message || "Đã xảy ra lỗi khi xử lý nội dung" },
			{ status: 500 }
		);
	}
}
