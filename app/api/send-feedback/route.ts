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

		// Create transporter (you'll need to configure this with your email service)
		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST || "smtp.gmail.com",
			port: parseInt(process.env.SMTP_PORT || "587"),
			secure: false, // true for 465, false for other ports
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
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

		// Send email
		await transporter.sendMail(mailOptions);

		return NextResponse.json(
			{ message: "Góp ý đã được gửi thành công!" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json(
			{ error: "Có lỗi xảy ra khi gửi góp ý. Vui lòng thử lại sau." },
			{ status: 500 }
		);
	}
}
