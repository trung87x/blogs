Dưới đây là bản cập nhật đầy đủ, chi tiết và chính xác nhất cho quy trình thiết lập **ESLint 9** trên **Next.js 16**. Bản này đã bao gồm các gói bổ trợ để dứt điểm lỗi "vòng lặp JSON" và xung đột với Prettier mà bạn đã gặp phải.

---

## Tổng quan về ESLint trong Next.js 16

Hãy tưởng tượng **ESLint** là một "Biên tập viên" kỹ tính. Trong Next.js 16, khi lệnh `next build` không còn tự động kiểm tra lỗi, "vị biên tập viên" này trở thành chốt chặn cuối cùng giúp trang Blog/Shop của bạn không bị crash khi lên môi trường thật.

---

## 1. Cài đặt (Installation)

Bạn cần cài đặt các gói sau để ESLint 9 hoạt động mượt mà với các Plugin của Next.js và Prettier:

**Lệnh cài đặt chính:**

```bash
npm install -D eslint @next/eslint-plugin-next eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import

```

**Lệnh cài đặt bổ trợ (Để dứt điểm xung đột Prettier):**

```bash
npm install -D eslint-config-prettier

```

---

## 2. Thiết lập các file cấu hình (Configuration)

### Bước 1: Cập nhật `package.json`

Đảm bảo các script của bạn trỏ trực tiếp vào ESLint CLI (đúng chuẩn Next.js 16):

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}

```

### Bước 2: Tạo file `eslint.config.mjs` (Flat Config)

Đây là "trái tim" của hệ thống phòng thủ. File này sử dụng cách nạp Plugin trực tiếp để tránh lỗi **Circular Structure**:

```javascript
import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import prettierConfig from "eslint-config-prettier";

export default [
  // 1. Sử dụng cấu hình mặc định của JavaScript
  js.configs.recommended,

  {
    // 2. Chặn các thư mục rác VÀ bộ Catalyst để tránh 55 cảnh báo thừa
    ignores: [
      ".next/**",
      "node_modules/**",
      "dist/**",
      "out/**",
      "public/**",
      "app/ui/catalyst/**",
    ],
  },

  {
    // 3. Cấu hình quy tắc cho file dự án (.js, .jsx, .ts, .tsx)
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    plugins: {
      "@next/next": nextPlugin,
      react: reactPlugin,
      "react-hooks": hooksPlugin,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      // Quy tắc React & Hooks (Tự động nhận diện React 19)
      ...reactPlugin.configs.recommended.rules,
      ...hooksPlugin.configs.recommended.rules,

      // Quy tắc cốt lõi của Next.js (SEO & Performance)
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,

      "react/react-in-jsx-scope": "off", // Next.js không cần import React
      "react/prop-types": "off",

      // Quy tắc cá nhân giúp code sạch
      "no-unused-vars": "warn", // Cảnh báo biến thừa
      "no-console": "warn", // Cảnh báo console.log
      "@next/next/no-img-element": "warn", // Nhắc nhở dùng thẻ <Image />
    },
    settings: {
      react: { version: "detect" },
    },
  },

  // 4. PHẢI ĐỂ CUỐI CÙNG: Tắt các quy tắc xung đột với Prettier
  prettierConfig,
];
```

---

## 3. Công dụng thực tế trong dự án của bạn

- **Trang Shop:** ESLint sẽ ngăn bạn dùng thẻ `<a>` lung tung, bắt buộc dùng `<Link>` để trang không bị load lại toàn bộ khi chuyển danh mục sản phẩm.
- **Trang Blog:** Khi bạn copy code từ trên mạng về mà quên xóa biến thừa, ESLint sẽ báo vàng ngay để bạn dọn dẹp, giúp file nhẹ hơn.
- **SEO:** Nếu bạn quên thêm thuộc tính `alt` cho ảnh sản phẩm, ESLint sẽ nhắc nhở để Google có thể tìm thấy ảnh của bạn dễ dàng hơn.

---

## 4. Quy trình làm việc hàng ngày

1. **Gõ code:** Xem các đường gạch chân trong VS Code.
2. **Kiểm tra tổng thể:** Chạy `npm run lint`. Nếu hiện **0 errors**, bạn đã an toàn.
3. **Sửa lỗi nhanh:** Chạy `npm run lint:fix` để tự động căn chỉnh và xóa các lỗi định dạng nhỏ.
4. **Build:** Sau khi lint sạch sẽ, hãy chạy `npm run build` để đóng gói.

---

**Mọi thứ hiện tại đã rất hoàn chỉnh.** Bạn đã sẵn sàng để triển khai code này lên GitHub chưa, hay bạn muốn tôi hướng dẫn cách thiết lập **GitHub Actions** để nó tự động chạy `npm run lint` mỗi khi bạn đẩy code lên mạng?
