====================================
📦 NGỮ CẢNH 1: TẠO CARD SẢN PHẨM
====================================

📄 HTML:
<div class="card">
  <h3>Tên sản phẩm</h3>
  <p>Mô tả ngắn...</p>
</div>

🎨 CSS:
.card {
  width: 300px;
  padding: 16px;
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

------------------------------------

📦 NGỮ CẢNH 2: CĂN GIỮA KHỐI THEO CHIỀU NGANG

📄 HTML:
<div class="center-block">
  Nội dung cần căn giữa
</div>

🎨 CSS:
.center-block {
  width: 400px;
  margin: 0 auto;
}

------------------------------------

📐 NGỮ CẢNH 3: TẠO THANH ĐIỀU HƯỚNG (NAVBAR)

📄 HTML:
<div class="navbar">
  <div>Logo</div>
  <div>Menu</div>
</div>

🎨 CSS:
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #333;
  color: white;
  padding: 10px 20px;
}

------------------------------------

📐 NGỮ CẢNH 4: CHIA CỘT SIDEBAR & NỘI DUNG

📄 HTML:
<div class="layout">
  <div class="sidebar">Sidebar</div>
  <div class="content">Nội dung chính</div>
</div>

🎨 CSS:
.layout {
  display: flex;
}
.sidebar {
  width: 250px;
  background: #f2f2f2;
}
.content {
  flex: 1;
  padding: 20px;
}

------------------------------------

🌈 NGỮ CẢNH 5: ẢNH NỀN BANNER

📄 HTML:
<div class="hero"></div>

🎨 CSS:
.hero {
  background-image: url('banner.jpg');
  background-size: cover;
  background-position: center;
  height: 300px;
}

------------------------------------

🔡 NGỮ CẢNH 6: BUTTON IN HOA

📄 HTML:
<button class="btn">Mua Ngay</button>

🎨 CSS:
.btn {
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 10px 20px;
  background: black;
  color: white;
  border: none;
}

------------------------------------

🎞️ NGỮ CẢNH 7: HIỆU ỨNG HOVER ĐỔI MÀU

📄 HTML:
<button class="btn-hover">Hover tôi!</button>

🎨 CSS:
.btn-hover {
  background: blue;
  color: white;
  transition: background 0.3s ease;
}
.btn-hover:hover {
  background: darkblue;
}

------------------------------------

🎞️ NGỮ CẢNH 8: FADE-IN KHI LOAD TRANG

📄 HTML:
<div class="fade-in">Tôi xuất hiện nhẹ nhàng</div>

🎨 CSS:
.fade-in {
  animation: fade 1s ease-in-out;
}
@keyframes fade {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

------------------------------------

📱 NGỮ CẢNH 9: RESPONSIVE 2 CỘT → 1 CỘT

📄 HTML:
<div class="responsive-layout">
  <div>Cột 1</div>
  <div>Cột 2</div>
</div>

🎨 CSS:
.responsive-layout {
  display: flex;
  gap: 20px;
}
@media (max-width: 768px) {
  .responsive-layout {
    flex-direction: column;
  }
}

------------------------------------

📱 NGỮ CẢNH 10: ẨN ELEMENT TRÊN MOBILE

📄 HTML:
<div class="desktop-only">Chỉ hiện trên desktop</div>

🎨 CSS:
.desktop-only {
  display: block;
}
@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }
}

------------------------------------

📚 NGỮ CẢNH 11: DROPDOWN MENU HIỆN KHI HOVER

📄 HTML:
<nav class="menu">
  <ul>
    <li class="dropdown">
      <a href="#">Danh mục</a>
      <ul class="submenu">
        <li><a href="#">Sách</a></li>
        <li><a href="#">Truyện</a></li>
      </ul>
    </li>
  </ul>
</nav>

🎨 CSS:
.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.menu > ul > li {
  position: relative;
  display: inline-block;
}
.submenu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}
.dropdown:hover .submenu {
  display: block;
}

------------------------------------

📌 NGỮ CẢNH 12: THANH HEADER CỐ ĐỊNH KHI CUỘN

📄 HTML:
<header class="site-header">Đây là header</header>
<main class="content">Nội dung trang...</main>

🎨 CSS:
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #333;
  color: white;
  padding: 1rem;
  z-index: 1000;
}
.content {
  margin-top: 80px;
}

------------------------------------

🧱 NGỮ CẢNH 13: GALLERY ẢNH DẠNG LƯỚI VỚI GRID

📄 HTML:
<div class="gallery">
  <img src="img1.jpg" />
  <img src="img2.jpg" />
  <img src="img3.jpg" />
</div>

🎨 CSS:
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.gallery img {
  width: 100%;
  display: block;
}

------------------------------------

📸 NGỮ CẢNH 14: ẢNH GIỮ TỶ LỆ (ASPECT RATIO)

📄 HTML:
<div class="video-container">
  <iframe src="video.mp4"></iframe>
</div>

🎨 CSS:
.video-container {
  aspect-ratio: 16 / 9;
  width: 100%;
  background: black;
}
.video-container iframe {
  width: 100%;
  height: 100%;
  border: none;
}

------------------------------------

🌗 NGỮ CẢNH 15: DARK MODE VỚI BIẾN CSS

📄 HTML:
<button onclick="document.body.classList.toggle('dark')">🌗</button>
<div class="box">Nội dung</div>

🎨 CSS:
:root {
  --bg: white;
  --text: black;
}
body.dark {
  --bg: #121212;
  --text: #f0f0f0;
}
.box {
  background: var(--bg);
  color: var(--text);
  padding: 20px;
}

------------------------------------

🎴 NGỮ CẢNH 16: CARD LẬT KHI HOVER

📄 HTML:
<div class="flip-card">
  <div class="flip-inner">
    <div class="flip-front">Mặt trước</div>
    <div class="flip-back">Mặt sau</div>
  </div>
</div>

🎨 CSS:
.flip-card {
  width: 200px;
  height: 300px;
  perspective: 1000px;
}
.flip-inner {
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-inner {
  transform: rotateY(180deg);
}
.flip-front, .flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}
.flip-back {
  transform: rotateY(180deg);
}

------------------------------------

💻 NGỮ CẢNH 17: GIỚI HẠN KHUNG NỘI DUNG (CONTAINER)

📄 HTML:
<div class="container">Nội dung chính</div>

🎨 CSS:
.container {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
}

