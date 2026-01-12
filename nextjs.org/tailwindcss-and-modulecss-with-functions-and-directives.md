Dựa trên tài liệu Tailwind CSS v4 bạn cung cấp, việc phân chia nội dung vào `globals.css` và `home.module.css` tuân theo một nguyên tắc cốt lõi: **`globals.css` là nơi thiết lập cấu hình tổng, còn `home.module.css` là nơi áp dụng các quy tắc đó cho từng thành phần cụ thể.**

Dưới đây là cách phân bổ mã nguồn vào hai file này:

---

### 1. File `/app/ui/globals.css` (Cấu trúc & Cấu hình tổng)

Đây là "trái tim" của hệ thống CSS. Bạn dùng file này để định nghĩa bộ khung và các biến dùng chung cho toàn bộ dự án.

```css
/* 1. Nhập thư viện Tailwind */
@import "tailwindcss";

/* 2. Định nghĩa Theme (Design Tokens) */
@theme {
  --font-display: "Satoshi", "sans-serif";
  --color-avocado-500: oklch(0.84 0.18 117.33);
  --ease-fluid: cubic-bezier(0.3, 0, 0, 1);
}

/* 3. Thêm các Utility tùy chỉnh (Dùng được ở mọi nơi bằng class) */
@utility tab-4 {
  tab-size: 4;
}

/* 4. Cấu hình Legacy (nếu có) */
@plugin "@tailwindcss/typography";
```

> **Trường hợp sử dụng:** Dùng khi bạn muốn thay đổi màu sắc chủ đạo, font chữ hoặc tạo ra các class tiện ích mới mà toàn trang web đều dùng được.

---

### 2. File `/app/ui/home.module.css` (Ứng dụng cụ thể)

Đây là nơi bạn viết CSS riêng cho trang chủ. Trong Tailwind v4, điểm mới quan trọng nhất là directive **`@reference`**.

```css
/* 1. THAM CHIẾU đến file gốc để lấy biến theme mà không làm tăng dung lượng file */
@reference "./globals.css";

.hero-section {
  /* 2. Dùng @apply để lấy các class Tailwind vào CSS Module */
  @apply bg-avocado-500 p-8 shadow-md;

  /* 3. Dùng @variant để xử lý chế độ Dark mode hoặc Hover */
  @variant dark {
    background-color: black;
  }
}

.custom-shape {
  /* 4. Dùng hàm mới --spacing() thay vì theme() */
  margin-bottom: --spacing(10);

  /* 5. Dùng --alpha() để chỉnh độ trong suốt của màu đã định nghĩa ở theme */
  color: --alpha(var(--color-avocado-500) / 70%);
}
```

> **Trường hợp sử dụng:** Dùng khi bạn muốn tạo style riêng biệt cho một component mà vẫn muốn sử dụng các màu sắc/khoảng cách đã định nghĩa ở `globals.css`.

---

### Bảng tóm tắt quy tắc phân chia

| Nội dung                   | Đặt vào `globals.css` | Đặt vào `*.module.css` | Tại sao?                                                   |
| -------------------------- | --------------------- | ---------------------- | ---------------------------------------------------------- |
| `@import "tailwindcss"`    | ✅                    | ❌                     | Chỉ cần gọi 1 lần để kích hoạt Tailwind.                   |
| `@theme { ... }`           | ✅                    | ❌                     | Để các giá trị màu, font được tập trung một chỗ.           |
| `@reference "..."`         | ❌                    | ✅                     | Để CSS Module "hiểu" được các biến trong theme.            |
| `@apply`                   | ⚠️                    | ✅                     | Hạn chế dùng ở Global để tránh làm file CSS tổng quá nặng. |
| `--spacing()`, `--alpha()` | ❌                    | ✅                     | Thường dùng khi tính toán các giá trị đặc thù cho UI.      |
| `@utility`                 | ✅                    | ❌                     | Để tạo class dùng chung (ví dụ: `class="tab-4"`).          |

---

### Một lưu ý cực kỳ quan trọng về `theme()`

Tài liệu bạn gửi có ghi rõ: **`theme()` function is deprecated** (Hàm này đã bị phản đối/lỗi thời).

- Thay vì dùng `margin: theme(spacing.12);`, Tailwind v4 khuyến khích bạn dùng:
- Cách 1: `margin: var(--spacing-12);` (Dùng biến CSS trực tiếp).
- Cách 2: `margin: --spacing(12);` (Dùng hàm spacing mới).

**Bạn có muốn tôi thử áp dụng cấu trúc `@theme` này để tạo ra một bộ màu sắc riêng (ví dụ màu thương hiệu của Blog hoặc Shop) cho dự án của bạn không?**
