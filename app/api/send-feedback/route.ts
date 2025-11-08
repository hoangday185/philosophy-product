import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Handlebars from "handlebars";
import fs from "fs";
import path from "path";

// Helper function to load and compile templates
function loadTemplate(templateName: string): string {
	const templatePath = path.join(
		process.cwd(),
		"templates",
		"email",
		`${templateName}.hbs`
	);
	return fs.readFileSync(templatePath, "utf8");
}

function compileTemplate(templateContent: string, data: any): string {
	const template = Handlebars.compile(templateContent);
	return template(data);
}

function getTypeLabel(type: string): string {
	const typeLabels: Record<string, string> = {
		bug: "Báo lỗi",
		feature: "Đề xuất tính năng",
		content: "Góp ý nội dung",
		other: "Khác",
	};
	return typeLabels[type] || type;
}

export async function POST(request: NextRequest) {
	try {
		const { name, email, type, subject, message } = await request.json();

		// Validate required fields
		if (!name || !email || !type || !subject || !message) {
			return NextResponse.json(
				{ error: "Vui lòng điền đầy đủ thông tin" },
				{ status: 400 }
			);
		}

		// Validate SMTP environment variables
		if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
			console.error("Missing SMTP credentials:", {
				hasUser: !!process.env.SMTP_USER,
				hasPass: !!process.env.SMTP_PASS,
			});
			return NextResponse.json(
				{ error: "Cấu hình email chưa đầy đủ" },
				{ status: 500 }
			);
		}

		// Create transporter with better error handling
		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST || "smtp.gmail.com",
			port: parseInt(process.env.SMTP_PORT || "587"),
			secure: false, // true for 465, false for other ports
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
			// Add additional options for Gmail
			tls: {
				rejectUnauthorized: false,
			},
		});

		// Prepare template data
		const templateData = {
			name,
			email,
			type,
			typeLabel: getTypeLabel(type),
			subject,
			message,
			timestamp: new Date().toLocaleString("vi-VN", {
				timeZone: "Asia/Ho_Chi_Minh",
				year: "numeric",
				month: "2-digit",
				day: "2-digit",
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
			}),
		};

		// Load and compile templates
		const htmlTemplate = loadTemplate("feedback");
		const textTemplate = loadTemplate("feedback-text");

		const htmlContent = compileTemplate(htmlTemplate, templateData);
		const textContent = compileTemplate(textTemplate, templateData);

		// Email content
		const mailOptions = {
			from: process.env.SMTP_FROM || process.env.SMTP_USER,
			to: process.env.FEEDBACK_EMAIL || process.env.SMTP_USER,
			subject: `[${type.toUpperCase()}] ${subject}`,
			html: htmlContent,
			text: textContent,
		};

		// Test connection first
		try {
			await transporter.verify();
			console.log("SMTP connection verified successfully");
		} catch (verifyError) {
			console.error("SMTP verification failed:", verifyError);
			return NextResponse.json(
				{ error: "Không thể kết nối đến server email. Vui lòng kiểm tra cấu hình." },
				{ status: 500 }
			);
		}

		// Send email
		await transporter.sendMail(mailOptions);

		return NextResponse.json(
			{ message: "Góp ý đã được gửi thành công!" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error sending email:", error);
		
		// Provide specific error messages
		let errorMessage = "Có lỗi xảy ra khi gửi email";
		
		if (error.code === 'EAUTH') {
			errorMessage = "Lỗi xác thực email. Vui lòng kiểm tra thông tin đăng nhập.";
		} else if (error.code === 'ECONNECTION') {
			errorMessage = "Không thể kết nối đến server email.";
		} else if (error.code === 'ETIMEDOUT') {
			errorMessage = "Kết nối email bị timeout. Vui lòng thử lại.";
		}
		
		return NextResponse.json(
			{ error: errorMessage },
			{ status: 500 }
		);
	}
}
