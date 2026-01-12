`.module.css` là một kỹ thuật được gọi là **CSS Modules**. Đây là một cách tiếp cận cực kỳ thông minh giúp bạn viết CSS mà không bao giờ phải lo lắng về việc "đặt tên trùng nhau" dẫn đến lỗi giao diện ở các trang khác.

Dưới đây là bản demo đầy đủ và giải thích chi tiết cho bạn:

---

### 1. Bản Demo đầy đủ

Hãy thực hiện theo 2 file sau trong thư mục dự án của bạn:

#### File 1: Thiết kế trong `/app/ui/home.module.css`

Đây là nơi bạn định nghĩa các "khuôn mẫu" CSS.

```css
/* /app/ui/home.module.css */

/* Tạo một hình tam giác màu đen */
.shape {
  height: 0;
  width: 0;
  border-bottom: 30px solid black;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}

/* Tạo một khung trang trí đặc biệt cho tiêu đề */
.heroTitle {
  color: #2563eb; /* Màu xanh dương */
  font-size: 2rem;
  font-weight: bold;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 10px;
}
```

#### File 2: Sử dụng trong `/app/page.js` (hoặc `.tsx`)

Bạn import CSS vào như một đối tượng (object) JavaScript.

```javascript
// /app/page.js
import styles from "@/app/ui/home.module.css";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* 1. Dùng class .heroTitle từ module */}
      <h1 className={styles.heroTitle}>Chào mừng bạn đến với Home Page</h1>

      {/* 2. Dùng class .shape từ module */}
      <div className={styles.shape} />

      <p className="mt-4 text-gray-600">
        Đây là sự kết hợp giữa Tailwind và CSS Modules.
      </p>
    </main>
  );
}
```

---

### 2. `.module.css` là gì? Tại sao nó khác CSS thường?

Khi bạn dùng CSS thông thường (ví dụ: `style.css`), nếu bạn đặt tên lớp là `.button`, thì **TẤT CẢ** các nút bấm trên website của bạn sẽ bị ảnh hưởng. Nếu trang Shop cũng có lớp `.button` với màu khác, chúng sẽ "đánh nhau".

**Với CSS Modules (`.module.css`):**

- **Phạm vi cục bộ (Local Scoping):** Các class bạn viết trong `home.module.css` chỉ có tác dụng bên trong file `page.js` mà bạn đã import nó.
- **Tự động đổi tên (Hashing):** Đây là phần "ma thuật". Khi bạn chạy ứng dụng, Next.js sẽ đổi tên class `.shape` thành một cái tên duy nhất không bao giờ trùng lặp.

> **Ví dụ:** Trong mã nguồn bạn viết là `styles.shape`, nhưng khi hiện lên trình duyệt, nó sẽ trở thành:
> `<div class="home_shape__abc123"></div>`

---

### 3. Khi nào nên dùng `.module.css` thay vì Tailwind?

Dự án của bạn đang dùng Tailwind, nhưng CSS Modules vẫn rất hữu ích trong các trường hợp:

1. **Hình khối phức tạp:** Như hình tam giác (`.shape`) ở trên. Viết bằng Tailwind class sẽ rất dài và khó đọc.
2. **Animation phức tạp:** Các hiệu ứng chuyển động có nhiều bước (Keyframes).
3. **Tách biệt logic giao diện:** Nếu bạn muốn file HTML của mình nhìn sạch sẽ hơn, không bị ngợp bởi hàng chục class của Tailwind.

### Tóm tắt quy trình:

1. Tạo file với đuôi `.module.css`.
2. Viết CSS như bình thường.
3. Import vào file JavaScript/TypeScript dưới tên `styles` (hoặc tên bất kỳ bạn thích).
4. Dùng `{styles.ten_class}` để áp dụng.

**Bạn đã thử áp dụng thử lớp `.heroTitle` vào trang Home của mình chưa? Bạn có muốn tôi hướng dẫn cách kết hợp cả Tailwind và CSS Module trên cùng một thẻ HTML không?**
