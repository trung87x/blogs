// 🧠 Model 3: Phản hồi người dùng (Event)
// Khi người dùng tương tác, React sẽ xử lý sự kiện qua các hàm như handleClick(), handleChange()…

// 📘 NGỮ CẢNH 1: Click nút để hiện thông báo

function ClickAlert() {
  const handleClick = () => {
    alert("Bạn vừa bấm nút!");
  };

  return <button onClick={handleClick}>Bấm tôi</button>;
}

// 📘 NGỮ CẢNH 2: Xử lý nhập liệu trong ô input

import { useState } from "react";

function InputLogger() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log("Người dùng nhập:", e.target.value);
  };

  return <input type="text" onChange={handleChange} />;
}

// 📘 NGỮ CẢNH 3: Submit form và ngăn reload

function FormSubmit() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn trình duyệt reload
    alert("Form đã được gửi!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nhập gì đó..." />
      <button type="submit">Gửi</button>
    </form>
  );
}

// 📘 NGỮ CẢNH 4: Di chuột vào/ra để thay đổi màu

import { useState } from "react";

function HoverBox() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 200,
        height: 100,
        backgroundColor: hovered ? "lightblue" : "lightgray",
      }}
    >
      Di chuột vào tôi!
    </div>
  );
}
