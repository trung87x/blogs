Để kết hợp sức mạnh của **Cloudflare Pages** (tốc độ thực thi cực nhanh) và **Neon.tech** (Postgres Serverless cực kỳ linh hoạt), bạn cần thực hiện cấu hình để chúng "nói chuyện" được với nhau.

Dưới đây là hướng dẫn chi tiết cách thiết lập Cloudflare Pages kết nối với Postgres từ Neon.tech cho dự án Next.js của bạn:

---

# Hướng dẫn Kết nối Cloudflare Pages với Postgres (Neon.tech)

### Bước 1: Chuẩn bị Cơ sở dữ liệu trên Neon.tech

1. Truy cập [neon.tech](https://neon.tech/) và đăng ký/đăng nhập.
2. Tạo một Project mới (ví dụ: `nextjs-dashboard`).
3. Sau khi tạo xong, tại bảng điều khiển (Dashboard) của Neon, bạn sẽ thấy mục **Connection String**.
4. Hãy chọn tùy chọn **Pooled connection** (thường có đuôi `-pooler` trong URL).

- _Lưu ý:_ Serverless môi trường như Cloudflare cần dùng Pooler để quản lý kết nối hiệu quả.

5. Copy chuỗi kết nối này (có dạng: `postgres://user:password@ep-something-pooler.aws.neon.tech/neondb`).

### Bước 2: Cấu hình Biến môi trường trên Cloudflare Pages

Để ứng dụng Next.js có thể truy cập Database sau khi deploy, bạn phải "khai báo" địa chỉ DB cho Cloudflare:

1. Vào [Cloudflare Dashboard](https://dash.cloudflare.com/) -> **Workers & Pages** -> Chọn dự án của bạn.
2. Chọn tab **Settings** -> **Environment variables**.
3. Nhấn **Add variable** ở cả hai phần (Production và Preview):

- **Variable name:** `DATABASE_URL` (hoặc tên biến bạn dùng trong code).
- **Value:** Dán chuỗi kết nối bạn đã copy từ Neon ở Bước 1.

4. Nhấn **Save**.

### Bước 3: Cấu hình tương thích (Compatibility Flags)

Postgres driver thường yêu cầu một số tính năng của Node.js để chạy được trên hạ tầng của Cloudflare.

1. Vẫn trong tab **Settings** -> **Functions** (hoặc Build & deployments tùy phiên bản giao diện).
2. Tìm mục **Compatibility flags**.
3. Ở ô **Production compatibility flags**, thêm dòng: `nodejs_compat`.
4. Nhấn **Save**.

### Bước 4: Chỉnh sửa Code để chạy được trên Edge Runtime

Cloudflare Pages chạy trên môi trường **Edge**, không phải Node.js truyền thống. Bạn cần lưu ý 2 điều trong code Next.js:

**1. Khai báo Runtime:**
Trong các file API Route hoặc Page có truy vấn Database, hãy thêm dòng này lên đầu file:

```javascript
export const runtime = "edge";
```

**2. Sử dụng thư viện phù hợp:**
Nếu bạn dùng thư viện `pg` truyền thống, nó có thể gặp lỗi trên Edge. Khuyên dùng thư viện chính thức của Neon dành cho Serverless:

```bash
pnpm add @neondatabase/serverless

```

Sau đó thay đổi cách kết nối trong file `lib/data.ts` hoặc tương đương:

```javascript
import { neon } from "@neondatabase/serverless";
const sql = neon(process.env.DATABASE_URL);

// Ví dụ truy vấn
const data = await sql`SELECT * FROM users`;
```

### Bước 5: Triển khai lại (Redeploy)

1. Sau khi đã thêm biến môi trường và sửa code, hãy **Push** code lên GitHub.
2. Cloudflare Pages sẽ tự động bắt đầu bản Build mới.
3. Kiểm tra Logs của bản Build. Nếu mọi thứ hiển thị màu xanh, chúc mừng bạn đã kết nối thành công!

---

### Mẹo tối ưu: Sử dụng Cloudflare Hyperdrive

Nếu ứng dụng của bạn có lượng truy cập lớn và bạn muốn tốc độ truy vấn Postgres đạt mức "nhanh nhất thế giới", hãy thử dùng **Hyperdrive**:

1. Cloudflare Hyperdrive hoạt động như một bộ đệm (cache) và trình quản lý kết nối thông minh nằm ngay cạnh code của bạn.
2. Thay vì kết nối trực tiếp đến Neon, bạn tạo một Hyperdrive cấu hình trỏ đến Neon, sau đó Cloudflare sẽ cung cấp cho bạn một `Connection String` mới.
3. Dùng chuỗi đó thay vào biến `DATABASE_URL`.

**Bạn có đang sử dụng ORM nào như Prisma hay Drizzle không? Nếu có, hãy báo mình để mình hướng dẫn cách cấu hình riêng cho từng loại đó nhé!**
