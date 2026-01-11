// TỔNG QUAN CÁC TÍNH NĂNG CHÍNH CỦA FRAMEWORK JAVASCRIPT

/* ===============================
1. Ngôn ngữ miền chuyên biệt (DSL)
=============================== */

// JSX (React):
const header = <h1>Hello, {subject}!</h1>; // JSX sẽ được biên dịch thành React.createElement(...) rồi thành HTML thật

// Handlebars (Ember):
// <h1>Hello, {{subject}}!</h1> // Dữ liệu sẽ được thay thế bằng biến `subject`

// TypeScript (Angular):
function add(a: number, b: number) {
  return a + b;
}
// Gán kiểu rõ ràng giúp tránh lỗi và dễ bảo trì

/* ===============================
2. Viết thành phần (Components)
=============================== */

// 2.1. Props (thuộc tính bên ngoài)
function AuthorCredit(props) {
  return (
    <figure>
      <img src={props.src} alt={props.alt} />
      <figcaption>{props.byline}</figcaption>
    </figure>
  );
}

// 2.2. State (trạng thái nội bộ)
import { useState } from "react";

function CounterButton() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>;
}

// 2.3. Events (sự kiện)
// Đã tích hợp ở ví dụ trên bằng `onClick`

/* ===============================
3. Styling components
=============================== */
// Có thể dùng CSS, Sass, Less, hoặc PostCSS tùy theo công cụ và thiết lập.
// Ví dụ dùng CSS Modules hoặc styled-components nếu cần.

import "./styles.css"; // Ví dụ import CSS

/* ===============================
4. Quản lý phụ thuộc
=============================== */

// 4.1. Import component vào component khác
import AuthorCredit from "./components/AuthorCredit";

function Article() {
  return (
    <article>
      {/* Nội dung bài viết */}
      <AuthorCredit
        src="./assets/zelda.png"
        alt="Portrait of Zelda Schiff"
        byline="Zelda Schiff là tổng biên tập của Library Times."
      />
    </article>
  );
}

// 4.2. Injection phụ thuộc (Dependency Injection)
// React: Context API
// Angular: Dependency Injection built-in
// Vue: provide() và inject()
// Ember: Services

/* ===============================
5. Lifecycle (vòng đời component)
=============================== */

// React sử dụng các hook như useEffect để xử lý khi mount / update / unmount
import { useEffect } from "react";

function ExampleComponent() {
  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);
  return <div>Xin chào!</div>;
}

/* ===============================
6. Rendering (hiển thị)
=============================== */

// React & Vue dùng Virtual DOM
// Angular dùng Incremental DOM
// Ember dùng Glimmer VM (không phải virtual DOM)

// Virtual DOM: cập nhật hiệu quả bằng cách tính toán "diff" rồi cập nhật DOM thật

/* ===============================
7. Routing (điều hướng)
=============================== */

// React Router, Vue Router, Angular Router
// Ví dụ dùng React Router v6:
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

/* ===============================
8. Testing (kiểm thử)
=============================== */

// Dùng @testing-library/react, Jest, Cypress...

// Ví dụ test với React Testing Library:
import { render, screen, fireEvent } from "@testing-library/react";
import CounterButton from "./CounterButton";

it("Renders a semantic button with an initial state of 0", () => {
  render(<CounterButton />);
  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent("Clicked 0 times");
});

it("Increments the count when clicked", () => {
  render(<CounterButton />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(btn).toHaveTextContent("Clicked 1 times");
  fireEvent.click(btn);
  expect(btn).toHaveTextContent("Clicked 2 times");
});

/* ===============================
Tổng kết
=============================== */

// Các framework JavaScript hiện đại cung cấp:
// - DSL giúp viết UI nhanh gọn
// - Component hóa UI với props, state, event
// - Styling linh hoạt
// - Cơ chế import và inject dữ liệu hiệu quả
// - Lifecycle rõ ràng với hook
// - Virtual DOM hoặc các kỹ thuật render hiệu quả
// - Routing chuyên biệt cho SPA
// - Hệ sinh thái kiểm thử phong phú
