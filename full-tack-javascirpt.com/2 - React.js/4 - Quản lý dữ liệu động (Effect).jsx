// 🧠 Model 4: Quản lý dữ liệu động (Effect)
// Khi dữ liệu thay đổi, hoặc khi component được gắn vào / gỡ khỏi DOM, React dùng useEffect để xử lý các tác động phụ (side effects) như gọi API, cập nhật tiêu đề trang, hoặc thao tác với DOM.

// 📘 NGỮ CẢNH 1: Gọi API khi component được hiển thị

import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []); // chạy 1 lần khi component mount

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

// 📘 NGỮ CẢNH 2: Cập nhật tiêu đề trình duyệt theo state

import { useEffect, useState } from "react";

function PageTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Bạn đã click ${count} lần`;
  }, [count]); // chạy mỗi khi count thay đổi

  return <button onClick={() => setCount(count + 1)}>Click ({count})</button>;
}

// 📘 NGỮ CẢNH 3: Thiết lập và dọn dẹp timer

import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // dọn dẹp khi unmount
  }, []);

  return <p>Đã trôi qua: {seconds} giây</p>;
}

// 📘 NGỮ CẢNH 4: Theo dõi kích thước cửa sổ trình duyệt

import { useEffect, useState } from "react";

function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <p>Chiều rộng cửa sổ: {width}px</p>;
}
