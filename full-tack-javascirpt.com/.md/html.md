# HTML

## R: Mục lục

- [I-1: Khung tài liệu tối thiểu](#i-1-khung-tài-liệu-tối-thiểu)
- [I-2: Thẻ ngữ nghĩa thường dùng](#i-2-thẻ-ngữ-nghĩa-thường-dùng)
- [I-3: Văn bản & liên kết](#i-3-văn-bản--liên-kết)
- [I-4: Ảnh, SVG, video](#i-4-ảnh-svg-video)
- [I-5: Form cơ bản](#i-5-form-cơ-bản)
- [I-6: Bảng](#i-6-bảng)
- [I-7: Meta & SEO cơ bản](#i-7-meta--seo-cơ-bản)
- [I-8: Truy cập (a11y)](#i-8-truy-cập-a11y)
- [I-9: Mẫu layout nhanh](#i-9-mẫu-layout-nhanh)

---

## I-1: Khung tài liệu tối thiểu

```html
<!-- Cấu trúc HTML cơ bản -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

---

## I-2: Thẻ ngữ nghĩa thường dùng

```html
<!-- Header -->
<header>
  <h1>Trang Demo</h1>
</header>
```

```html
<!-- Navigation -->
<nav>
  <a href="/">Trang chủ</a> | <a href="/bai-viet">Bài viết</a> |
  <a href="/lien-he">Liên hệ</a>
</nav>
```

```html
<!-- Main content -->
<main>
  <section>
    <h2>Giới thiệu</h2>
    <article>
      <h3>Bài viết mẫu</h3>
      <p>Đây là nội dung minh hoạ.</p>
    </article>
  </section>
</main>
```

```html
<!-- Sidebar -->
<aside>
  <h3>Mục lục</h3>
  <ol>
    <li>Giới thiệu</li>
    <li>Nội dung</li>
    <li>Kết luận</li>
  </ol>
</aside>
```

```html
<!-- Footer -->
<footer>
  <p>© 2025 Demo Site</p>
</footer>
```

---

## I-3: Văn bản & liên kết

```html
<!-- Heading -->
<h1>H1</h1>
<h2>H2</h2>
<h3>H3</h3>
```

```html
<!-- Paragraph -->
<p>
  Đoạn văn <strong>đậm</strong> <em>nghiêng</em> <mark>đánh dấu</mark>
  <code>code</code>
</p>
```

```html
<!-- List -->
<ul>
  <li>Táo</li>
  <li>Chuối</li>
  <li>Cam</li>
</ul>

<ol>
  <li>B1</li>
  <li>B2</li>
</ol>
```

```html
<!-- Link -->
<a href="/lien-he">Liên hệ</a>
<a href="https://tailwindcss.com" target="_blank" rel="noopener">
  Tailwind CSS
</a>
```

---

## I-4: Ảnh, SVG, video

```html
<!-- Image -->
<img src="https://picsum.photos/640/360" alt="Cảnh thiên nhiên" />
```

```html
<!-- SVG -->
<svg width="48" height="48" viewBox="0 0 24 24" aria-label="Ngôi sao">
  <path
    d="M12 17.3l-5.4 3.3 1.5-6.1L3 9.7l6.2-.5L12 3.6l2.8 5.6 6.2.5-5.1 4.8 1.5 6.1z"
    fill="#444"
  />
</svg>
```

---

## I-5: Form cơ bản

```html
<!-- Form -->
<label for="name">Tên</label>
<input id="name" type="text" placeholder="Nhập tên" />
```

---

## I-6: Bảng

```html
<!-- Table -->
<table>
  <thead>
    <tr>
      <th>Từ</th>
      <th>Nghĩa</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>apple</td>
      <td>quả táo</td>
    </tr>
    <tr>
      <td>run</td>
      <td>chạy</td>
    </tr>
    <tr>
      <td>beautiful</td>
      <td>xinh đẹp</td>
    </tr>
  </tbody>
</table>
```

---

## I-7: Meta & SEO cơ bản

```html
<!-- Meta SEO -->
<meta name="description" content="Website học từ vựng nhanh, dễ nhớ." />
```

```html
<!-- Open Graph -->
<meta property="og:title" content="EnglishKid" />
<meta property="og:description" content="Kho từ vựng minh hoạ." />
<meta property="og:image" content="https://example.com/cover.png" />
```

```html
<!-- Favicon -->
<link rel="icon" href="/favicon.ico" />
```

```html
<!-- Button & Link -->
<a href="/pricing">Xem bảng giá</a>
<button type="button">Mở thông báo</button>
```

---

## I-8: Truy cập (a11y)

```html
<!-- Heading hợp lý -->
<h1>Trang Demo</h1>
<h2>Mục chính</h2>
<h3>Mục phụ</h3>
```

```html
<!-- Alt text -->
<img src="apple.jpg" alt="Quả táo đỏ" />
<img src="border.png" alt="" />
```

```html
<!-- Thay cho <header> -->
<div role="banner">Header trang</div>
<!-- Thông báo khẩn -->
<div role="alert">Đăng nhập thất bại</div>
<!-- Hộp thoại -->
<div role="dialog">Đây là dialog</div>
<!-- Nút bấm -->
<span role="button" tabindex="0">Bấm vào đây</span>
```

---

## I-9: Mẫu layout nhanh

```html
<!-- 1. Header + Footer -->
<header>
  <h1>Layout 1: Header + Footer</h1>
</header>
<footer>
  <p>© 2025 Example</p>
</footer>
```

```html
<!-- 2. Header + Nav + Footer -->
<header>
  <h1>Layout 2: Header + Nav + Footer</h1>
  <nav>
    <a href="#">Trang chủ</a>
    <a href="#">Giới thiệu</a>
  </nav>
</header>
<footer>
  <p>© 2025 Example</p>
</footer>
```

```html
<!-- 3. Blog (Article + Aside) -->
<header><h1>Layout 3: Blog</h1></header>
<main class="two-col">
  <section>
    <article>
      <h2>Bài viết 1</h2>
      <p>Nội dung...</p>
    </article>
    <article>
      <h2>Bài viết 2</h2>
      <p>Nội dung...</p>
    </article>
  </section>
  <aside>
    <h3>Sidebar</h3>
    <p>Bài viết nổi bật...</p>
  </aside>
</main>
<footer><p>© Blog</p></footer>
```

```html
<!-- 4. Landing Page -->
<header><h1>Layout 4: Landing Page</h1></header>
<section class="three-col">
  <article><h2>Sản phẩm A</h2><p>Mô tả...</p></article>
  <article><h2>Sản phẩm B</h2><p>Mô tả...</p></article>
  <article><h2>Sản phẩm C</h2><p>Mô tả...</p></article>
</section>
<aside>
  <details>
    <summary>Khuyến mãi</summary>
    <p>Giảm giá 20% hôm nay!</p>
  </details>
</aside>
<footer><p>© Shop X</p></footer>
```

```html
<!-- 5. News Page -->
<header><h1>Layout 5: Trang Tin tức</h1></header>
<nav>
  <a href="#">Thời sự</a>
  <a href="#">Kinh tế</a>
  <a href="#">Thể thao</a>
</nav>
<main class="two-col">
  <section>
    <article><h2>Tin mới A</h2><p>Chi tiết...</p></article>
    <article><h2>Tin mới B</h2><p>Chi tiết...</p></article>
  </section>
  <aside><h3>Quảng cáo</h3></aside>
</main>
<footer><p>© Báo Online</p></footer>
```

```html
<!-- 6. FAQ Page -->
<header><h1>Layout 6: FAQ</h1></header>
<main>
  <section>
    <details>
      <summary>Câu hỏi 1</summary>
      <p>Trả lời 1...</p>
    </details>
    <details>
      <summary>Câu hỏi 2</summary>
      <p>Trả lời 2...</p>
    </details>
  </section>
</main>
<footer><p>© FAQ</p></footer>
```

```html
<!-- 7. Portfolio -->
<header><h1>Layout 7: Portfolio</h1></header>
<main class="three-col">
  <article><h2>Dự án 1</h2><p>Mô tả...</p></article>
  <article><h2>Dự án 2</h2><p>Mô tả...</p></article>
  <article><h2>Dự án 3</h2><p>Mô tả...</p></article>
</main>
<footer><p>© Portfolio</p></footer>
```

```html
<!-- 8. About Us -->
<header><h1>Layout 8: About Us</h1></header>
<main class="flex">
  <section>
    <h2>Giới thiệu</h2>
    <p>Chúng tôi là...</p>
  </section>
  <aside>
    <h3>Thông tin thêm</h3>
    <p>Liên hệ...</p>
  </aside>
</main>
<footer><p>© Company</p></footer>
```

```html
<!-- 9. Documentation -->
<header><h1>Layout 9: Documentation</h1></header>
<main class="two-col">
  <nav>
    <ul>
      <li><a href="#">Giới thiệu</a></li>
      <li><a href="#">Cài đặt</a></li>
      <li><a href="#">API</a></li>
    </ul>
  </nav>
  <section>
    <article><h2>Chương 1</h2><p>Nội dung...</p></article>
    <article><h2>Chương 2</h2><p>Nội dung...</p></article>
  </section>
</main>
<footer><p>© Docs</p></footer>
```

```html
<!-- 10. E-learning -->
<header><h1>Layout 10: E-learning</h1></header>
<main>
  <section>
    <article><h2>Bài học 1</h2><p>Nội dung...</p></article>
    <article><h2>Bài học 2</h2><p>Nội dung...</p></article>
  </section>
  <aside>
    <details>
      <summary>Bài tập</summary>
      <p>Làm 5 câu hỏi trắc nghiệm...</p>
    </details>
  </aside>
</main>
<footer><p>© E-learning</p></footer>
```
