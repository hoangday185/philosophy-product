# Hướng dẫn lấy Google Gemini API Key

## Bước 1: Truy cập Google AI Studio

Mở trình duyệt và truy cập: **https://aistudio.google.com/app/apikey**

Hoặc:

- Truy cập: https://makersuite.google.com/app/apikey
- Hoặc: https://ai.google.dev/

## Bước 2: Đăng nhập tài khoản Google

- Đăng nhập bằng tài khoản Google của bạn
- Nếu chưa có tài khoản Google, tạo tài khoản mới tại: https://accounts.google.com/signup

## Bước 3: Tạo API Key

### Cách 1: Tạo mới API Key

1. Click vào nút **"Create API Key"** hoặc **"Get API Key"**
2. Chọn một trong hai tùy chọn:
   - **Create API key in new project**: Tạo project mới
   - **Create API key in existing project**: Sử dụng project có sẵn
3. Hệ thống sẽ tự động tạo API key cho bạn
4. **QUAN TRỌNG**: Copy API key ngay lập tức (chỉ hiển thị 1 lần)

### Cách 2: Sử dụng API Key đã có

- Nếu đã tạo API key trước đó, bạn sẽ thấy danh sách các key
- Copy key bạn muốn sử dụng

## Bước 4: Cấu hình API Key trong dự án

### 1. Tạo file `.env.local`

Tạo file mới tại thư mục gốc của dự án với tên `.env.local`:

```bash
# Tại thư mục: C:\Users\hoangnv\Desktop\e-learning-clone (1)
# Tạo file: .env.local
```

### 2. Thêm API Key vào file

Mở file `.env.local` và dán nội dung sau:

```env
# Google Gemini AI API Key
GEMINI_API_KEY=AIzaSy...your_actual_api_key_here...
```

**Thay thế** `AIzaSy...your_actual_api_key_here...` bằng API key bạn vừa copy.

### 3. Lưu file và restart server

```bash
# Dừng server hiện tại (Ctrl + C)
# Khởi động lại server
pnpm dev
```

## Bước 5: Kiểm tra API Key

### Test API Key hoạt động:

1. Mở trang có component Tabs (ví dụ: `/map`)
2. Click vào nút **"Đọc"** (icon Volume2)
3. Nếu API key hợp lệ:
   - Nút sẽ chuyển sang "Đang xử lý..."
   - Sau đó bắt đầu đọc nội dung
4. Nếu API key không hợp lệ:
   - Hiển thị lỗi màu đỏ
   - Kiểm tra lại API key trong `.env.local`

## Lưu ý quan trọng

### ⚠️ Bảo mật API Key

1. **KHÔNG COMMIT** file `.env.local` lên Git

   - File này đã được thêm vào `.gitignore` tự động
   - Kiểm tra `.gitignore` có dòng: `.env.local`

2. **KHÔNG CHIA SẺ** API key công khai

   - Không đăng lên GitHub, Discord, Forum
   - Không gửi qua email không mã hóa

3. **GIỚI HẠN API KEY** (khuyến nghị)
   - Vào Google Cloud Console
   - Thêm API restrictions và Application restrictions

### 📊 Giới hạn Free Tier

Google Gemini API Free tier:

- **60 requests/phút**
- **1,500 requests/ngày**
- Miễn phí cho model `gemini-pro`

Nếu vượt quá giới hạn, bạn sẽ thấy lỗi `429 Too Many Requests`.

### 🔧 Troubleshooting

**Lỗi: "GEMINI_API_KEY chưa được cấu hình"**

- Kiểm tra file `.env.local` có tồn tại
- Kiểm tra tên biến đúng là `GEMINI_API_KEY`
- Restart lại Next.js server

**Lỗi: "API key not valid"**

- API key không hợp lệ hoặc hết hạn
- Tạo API key mới tại Google AI Studio
- Copy và paste lại vào `.env.local`

**Lỗi: "429 Too Many Requests"**

- Vượt quá giới hạn request
- Đợi 1 phút hoặc 24h (tùy loại giới hạn)
- Nâng cấp lên paid plan nếu cần

## Tài liệu tham khảo

- **Google AI Studio**: https://aistudio.google.com/
- **Gemini API Docs**: https://ai.google.dev/docs
- **Pricing**: https://ai.google.dev/pricing
- **Quickstart**: https://ai.google.dev/tutorials/get_started_web

## Hỗ trợ

Nếu gặp vấn đề, kiểm tra:

1. Console log trong browser (F12)
2. Terminal log của Next.js server
3. Network tab để xem API response

---

**Lưu ý**: API key này MIỄN PHÍ cho sử dụng cá nhân và phát triển. Nếu deploy production với traffic cao, cân nhắc upgrade plan.
