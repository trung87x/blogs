Để đưa dự án Next.js từ GitHub lên Cloudflare Pages, bạn làm theo các bước cực kỳ đơn giản sau đây:

### Bước 1: Truy cập Cloudflare Dashboard

1. Đăng nhập vào tài khoản [dash.cloudflare.com](https://dash.cloudflare.com/).
2. Ở cột menu bên trái, chọn mục **Workers & Pages**.
3. Nhấn nút **Create application**, sau đó chọn tab **Pages**.

### Bước 2: Kết nối với GitHub

1. Nhấn nút **Connect to Git**.
2. Chọn tài khoản GitHub của bạn (nếu chưa kết nối, Cloudflare sẽ yêu cầu bạn cấp quyền truy cập).
3. Chọn đúng repository (kho lưu trữ) dự án Next.js mà bạn vừa tải lên.
4. Nhấn **Begin setup**.

### Bước 3: Cấu hình Build (Rất quan trọng)

Ở bước này, Cloudflare sẽ yêu cầu bạn điền thông số. Hãy chú ý các mục sau:

* **Project name:** Bạn có thể để mặc định hoặc đổi tên tùy ý.
* **Production branch:** Thường là `main`.
* **Framework preset:** Bạn hãy mở danh sách và chọn **Next.js**.
* *Lưu ý:* Nếu bạn chỉ làm trang tĩnh, bạn có thể chọn "Next.js (Static)". Nếu trang web có các tính năng xử lý ở Server, hãy chọn "Next.js".


* **Build command:** Khi chọn preset là Next.js, Cloudflare sẽ tự điền lệnh (thường là `npx @cloudflare/next-on-pages` hoặc `npm run build`). Bạn không cần thay đổi trừ khi có yêu cầu đặc biệt.
* **Root directory:** Để trống (nếu code nằm ngay thư mục gốc của GitHub).

### Bước 4: Triển khai (Deploy)

1. Nhấn nút **Save and Deploy**.
2. Cloudflare sẽ bắt đầu quá trình cài đặt thư viện và biên dịch (Build) dự án. Quá trình này thường mất khoảng 1-3 phút.
3. Sau khi hoàn tất, bạn sẽ thấy một thông báo thành công và một đường dẫn (URL) có dạng `ten-du-an.pages.dev`.

---

### Một số lưu ý nhỏ để tránh lỗi:

1. **Node.js Version:** Đôi khi dự án ở máy bạn chạy phiên bản Node.js mới nhưng Cloudflare mặc định dùng bản cũ dẫn đến lỗi build. Bạn có thể vào phần **Settings** -> **Build & deployments** -> **Environment variables** và thêm một biến:
* Variable name: `NODE_VERSION`
* Value: `18` hoặc `20` (tùy bản bạn đang dùng).


2. **Next.js Runtime:** Nếu bạn dùng các tính năng như Server-side Rendering (SSR), bạn nên thêm dòng `export const runtime = 'edge'` vào trong các file `page.js` để nó tương thích tốt nhất với hạ tầng của Cloudflare.

**Nếu trong lúc build bị hiện thông báo màu đỏ (Failed), bạn hãy copy đoạn mã lỗi đó gửi vào đây, mình sẽ hướng dẫn cách sửa cụ thể nhé!**