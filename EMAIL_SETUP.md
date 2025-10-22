# Email Setup Guide

## Cấu hình Email cho Form Góp Ý

### 1. Tạo file `.env.local`

Tạo file `.env.local` trong thư mục gốc của dự án và thêm các biến môi trường sau:

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Email Settings
SMTP_FROM=your-email@gmail.com
FEEDBACK_EMAIL=your-email@gmail.com
```

### 2. Cấu hình Gmail (Khuyến nghị)

#### Bước 1: Bật xác thực 2 bước

1. Truy cập [Google Account Security](https://myaccount.google.com/security)
2. Bật "2-Step Verification"

#### Bước 2: Tạo App Password

1. Truy cập [App Passwords](https://myaccount.google.com/apppasswords)
2. Chọn "Mail" và thiết bị của bạn
3. Sao chép mật khẩu ứng dụng được tạo
4. Sử dụng mật khẩu này làm `SMTP_PASS`

### 3. Cấu hình các nhà cung cấp email khác

#### Outlook/Hotmail

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
```

#### Yahoo Mail

```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
```

### 4. Tính năng đã triển khai

✅ **Form validation với Zod**

- Validation tên (2-100 ký tự, chỉ chữ cái)
- Validation email hợp lệ
- Validation loại góp ý bắt buộc
- Validation tiêu đề (5-200 ký tự)
- Validation nội dung (10-2000 ký tự)

✅ **React Hook Form**

- Quản lý state form tự động
- Validation real-time
- Error handling
- Form reset sau khi gửi thành công

✅ **Email Templates với Handlebars**

- Template HTML đẹp mắt với CSS inline
- Template text thuần túy
- Dữ liệu động (tên, email, loại góp ý, v.v.)
- Timestamp định dạng Việt Nam

✅ **API Endpoint**

- `/api/send-feedback` - POST endpoint
- Validation server-side
- Error handling
- Response JSON

✅ **UI/UX**

- Loading states
- Success/Error messages
- Form validation errors
- Responsive design

### 5. Cách sử dụng

1. Người dùng điền form tại `/feedback`
2. Form được validate real-time
3. Khi submit, dữ liệu được gửi đến API
4. API validate lại và gửi email
5. Người dùng nhận thông báo thành công/lỗi

### 6. Troubleshooting

#### Lỗi "Invalid login"

- Kiểm tra SMTP_USER và SMTP_PASS
- Đảm bảo đã bật 2FA và sử dụng App Password

#### Lỗi "Connection timeout"

- Kiểm tra SMTP_HOST và SMTP_PORT
- Kiểm tra firewall/network

#### Template không load

- Đảm bảo thư mục `templates/email/` tồn tại
- Kiểm tra đường dẫn file template

### 7. Bảo mật

⚠️ **Lưu ý quan trọng:**

- Không commit file `.env.local` vào Git
- Sử dụng App Password thay vì mật khẩu chính
- Giới hạn rate limiting nếu cần thiết
- Validate và sanitize input từ client
