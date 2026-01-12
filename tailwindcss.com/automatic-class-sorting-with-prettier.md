Bài viết này giới thiệu một công cụ cực kỳ hữu ích để **giữ cho mã nguồn của bạn sạch sẽ và chuyên nghiệp**. Nếu ESLint là "cảnh sát" bắt lỗi logic, thì **Prettier plugin cho Tailwind CSS** chính là "kiến trúc sư" sắp xếp lại các class theo một trật tự khoa học.

Dưới đây là những điểm quan trọng nhất bạn cần nắm bắt:

### 1. Tại sao bạn nên dùng nó?

Khi bạn viết Tailwind, danh sách các class thường rất dài và lộn xộn (ví dụ: `text-white px-4 py-2 bg-blue-500 hover:bg-blue-600 sm:px-8`).

- **Tiết kiệm thời gian:** Bạn cứ gõ class tùy ý, khi nhấn Save, nó sẽ tự động nhảy về đúng vị trí.
- **Dễ đọc:** Mọi thành viên trong nhóm (hoặc chính bạn sau này) sẽ luôn thấy các class quan trọng nhất nằm ở đầu.
- **Không còn tranh cãi:** Plugin này sử dụng một trật tự chuẩn mực do chính đội ngũ Tailwind đề xuất.

---

### 2. Quy tắc sắp xếp "vàng" (Order of classes)

Plugin này không sắp xếp ngẫu nhiên mà tuân theo logic từ ngoài vào trong:

- **Ưu tiên hàng đầu (Custom Classes):** Các class không thuộc Tailwind (ví dụ từ thư viện bên thứ ba) sẽ được đẩy lên trước cùng.
- **Thứ tự Box Model (Layout):** Các class ảnh hưởng đến bố cục được ưu tiên trước (như `flex`, `grid`, `h-24`), sau đó mới đến các class trang trí (như `text-gray-700`, `shadow-md`).
- **Các biến thể (Modifiers):** `hover:`, `focus:` sẽ được nhóm lại và nằm sau các class thuần.
- **Hỗ trợ đa màn hình (Responsive):** Các class như `sm:`, `md:`, `lg:` luôn nằm ở **cuối cùng** và sắp xếp theo kích thước từ nhỏ đến lớn.

---

### 3. Cách cài đặt vào dự án Next.js của bạn

Vì bạn đang xây dựng dự án Next.js, hãy làm theo các bước sau:

**Bước 1: Cài đặt thư viện**
Chạy lệnh này trong terminal:

```bash
npm install -D prettier prettier-plugin-tailwindcss

```

**Bước 2: Tạo file cấu hình**
Tạo một file tên là `.prettierrc` (hoặc sửa file cũ) ở thư mục gốc của dự án và dán nội dung này vào:

```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

---

### 4. Kết hợp với những gì bạn đã học

Bây giờ dự án của bạn sẽ có một bộ khung cực kỳ chuẩn:

1. **Next.js (App Router):** Quản lý cấu trúc thư mục `blog`, `shop`, `ui`.
2. **Tailwind v4:** Quản lý giao diện bằng `@theme` và `@utility` trong `globals.css`.
3. **ESLint:** Bắt lỗi logic và hướng dẫn dùng Next.js đúng cách (`next lint`).
4. **Prettier + Tailwind Plugin:** Tự động dọn dẹp và sắp xếp các class trong `.jsx` hay `.tsx` mỗi khi bạn lưu file.

> **Mẹo nhỏ:** Để nó tự động chạy khi bạn nhấn **Ctrl + S**, hãy vào Settings của VS Code, tìm "Format On Save" và tích chọn nó. Đồng thời chọn "Prettier" làm "Default Formatter".

**Bạn đã cài đặt thành công ESLint và Prettier chưa? Nếu rồi, bạn có muốn tôi hướng dẫn cách viết một Component "mẫu" sử dụng tất cả các công nghệ này để bạn thấy sức mạnh của chúng không?**
