// ============================================================
// BUILD YOUR OWN FUNCTION – TỰ XÂY DỰNG HÀM RIÊNG
// ============================================================

/*
1. GIỚI THIỆU:
- Hàm (function) giúp gom nhóm các hành động/thao tác để tái sử dụng.
- Bài học hướng dẫn tạo hàm `displayMessage()` thay thế alert().
- Hàm sẽ tạo hộp thoại tùy chỉnh trên trang với nội dung và biểu tượng.

2. ĐỊNH NGHĨA HÀM CƠ BẢN:
function displayMessage() {
  // logic bên trong
}
→ Bên trong gồm: tạo <div>, <p>, <button>; thêm nội dung và sự kiện đóng.

3. THÊM NỘI DUNG:
- Tạo <div class="msgBox"> và thêm vào <body>
- Thêm <p> chứa nội dung và <button>x</button>
- Gắn sự kiện "click" cho nút đóng → loại bỏ panel khỏi DOM

4. GỌI HÀM:
- Có thể gọi trực tiếp:
  displayMessage();

- Hoặc gọi khi click nút:
  const btn = document.querySelector("button");
  btn.addEventListener("click", displayMessage);

⚠️ Không thêm dấu ngoặc () nếu chỉ truyền tham chiếu:
→ btn.addEventListener("click", displayMessage); // đúng
→ btn.addEventListener("click", displayMessage()); // sai, gọi ngay lập tức

5. CẢI TIẾN: THÊM THAM SỐ
- Cập nhật hàm:
  function displayMessage(msgText, msgType)

- Đặt nội dung tin nhắn:
  msg.textContent = msgText;

- Gọi hàm có nội dung tùy chỉnh:
  displayMessage("Bạn đã gửi thành công!", "chat");

6. THÊM KIỂU DẠNG DỰA TRÊN THAM SỐ msgType
→ Nếu msgType là "warning":
  - hiển thị icon cảnh báo (warning.png)
  - nền đỏ

→ Nếu msgType là "chat":
  - hiển thị icon hội thoại (chat.png)
  - nền xanh aqua

→ Mặc định:
  - padding trái 20px
  - không có icon

7. CSS LIÊN QUAN:
- .msgBox { width: 242px; ... }
- .msgBox p {
    padding-left: 82px;
    background-position: 25px center;
    background-repeat: no-repeat;
  }

8. TỔNG KẾT:
- Hàm có thể gọi bất kỳ lúc nào
- Có thể tái sử dụng cho nhiều kiểu thông báo khác nhau
- Là ví dụ thực tế về DOM manipulation + sự kiện + hàm
*/

