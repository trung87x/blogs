// 🧠 Model 2: Hiển thị theo dữ liệu (State)
// Giao diện sẽ tự động cập nhật khi dữ liệu (state) thay đổi, nhờ React quản lý trạng thái.

// 📘 NGỮ CẢNH 1: Bấm nút để tăng số lần đếm

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Khởi tạo state

  return (
    <div>
      <p>Bạn đã bấm {count} lần</p>
      <button onClick={() => setCount(count + 1)}>Bấm tôi</button>
    </div>
  );
}

// 📘 NGỮ CẢNH 2: Nhập tên và hiển thị ngay trên giao diện

import { useState } from "react";

function Greeting() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập tên của bạn"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Xin chào, {name || "bạn"}!</p>
    </div>
  );
}

// 📘 NGỮ CẢNH 3: Toggle hiện/ẩn nội dung

import { useState } from "react";

function ToggleText() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Ẩn" : "Hiện"} nội dung
      </button>
      {show && <p>Đây là nội dung có thể ẩn/hiện</p>}
    </div>
  );
}

// 📘 NGỮ CẢNH 4: Chuyển đổi chế độ sáng/tối

import { useState } from "react";

function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        background: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        padding: 20,
      }}
    >
      <p>Chế độ hiện tại: {darkMode ? "Tối" : "Sáng"}</p>
      <button onClick={() => setDarkMode(!darkMode)}>Chuyển chế độ</button>
    </div>
  );
}
