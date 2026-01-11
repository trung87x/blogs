// =============================================================
// WHAT IS JAVASCRIPT? – JAVASCRIPT LÀ GÌ?
// =============================================================

/* === 1. KHÁI NIỆM CƠ BẢN ===
- JavaScript là ngôn ngữ lập trình/scripting dùng để thêm tương tác, động cho trang web.
- Đây là lớp thứ ba trong bộ ba công nghệ web: HTML (nội dung) – CSS (giao diện) – JS (hành vi).
*/

/* === 2. JAVASCRIPT CÓ THỂ LÀM GÌ? ===
- Cập nhật nội dung theo thời gian thực
- Tạo bản đồ tương tác, đồ họa 2D/3D, xử lý video
- Phản hồi theo thao tác người dùng (click, nhập liệu, di chuột,...)
*/

/* === 3. THÊM JAVASCRIPT VÀO TRANG WEB ===

Cách 1: Nội bộ (internal)
--------------------------
<script>
  // Code JavaScript viết ở đây
</script>
→ Nên đặt cuối <body> để HTML tải xong trước khi chạy JS.

Cách 2: Ngoài file riêng (external)
------------------------------------
<script type="module" src="script.js"></script>
→ Ưu điểm: tổ chức mã tốt, dễ tái sử dụng.

Cách 3: Inline (KHÔNG KHUYẾN KHÍCH)
-------------------------------------
<button onclick="handleClick()">Click me!</button>
→ Không nên dùng vì tách rời HTML & JS là best practice.
*/

/* === 4. VÍ DỤ ĐƠN GIẢN === */
// Gán lại nội dung nút khi người dùng nhập tên mới
function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");
button.addEventListener("click", updateName);

/* === 5. JAVASCRIPT CHẠY THẾ NÀO? ===
- JS chạy theo thứ tự từ trên xuống dưới (top-down).
- Phải khai báo biến/hàm trước khi dùng → tránh lỗi "undefined".
*/

/* === 6. NGÔN NGỮ THÔNG DỊCH (INTERPRETED LANGUAGE) ===
- JS được trình duyệt đọc trực tiếp dưới dạng text.
- Không cần biên dịch trước như C/C++.
- Trình duyệt hiện đại dùng kỹ thuật "just-in-time compile" để tăng tốc.
*/

/* === 7. CLIENT-SIDE VS SERVER-SIDE ===
- Client-side: chạy trên trình duyệt (JS, HTML, CSS,...)
- Server-side: xử lý ở máy chủ (PHP, Python, Node.js,...)
→ JS có thể làm cả hai (ví dụ: Node.js trên server).
*/

/* === 8. STATIC VS DYNAMIC CODE ===
- Static: nội dung luôn giống nhau, không thay đổi
- Dynamic: nội dung có thể thay đổi khi người dùng tương tác
→ JS giúp tạo dynamic web dễ dàng hơn
*/

/* === 9. API TRONG JAVASCRIPT ===

→ Có 2 loại chính:

1. Browser API:
   - DOM API: thêm, sửa, xoá HTML
   - Geolocation API: lấy vị trí người dùng
   - Canvas / WebGL: đồ họa 2D/3D
   - Media API: xử lý âm thanh, video, webcam

2. Third-party API:
   - Google Maps, Facebook SDK, Weather API,...

→ API là "công cụ có sẵn" giúp viết ứng dụng nhanh hơn.

*/

/* === 10. CÁCH VIẾT COMMENT TRONG JAVASCRIPT ===

// Đây là comment 1 dòng

/*
  Đây là comment nhiều dòng
  Dùng để ghi chú code hoặc giải thích thuật toán
*/

/* === 11. TỔNG KẾT ===
- JavaScript là ngôn ngữ cho web tương tác và động
- Dễ học, mạnh mẽ, phổ biến nhất trên trình duyệt
- Là nền tảng để học các công nghệ nâng cao như: DOM, APIs, Frameworks (React, Vue,...), Node.js,...
*/

