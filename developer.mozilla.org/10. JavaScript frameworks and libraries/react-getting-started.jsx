// ===================================================================
// REACT – GETTING STARTED (BẮT ĐẦU VỚI REACT + JSX + VITE)
// ===================================================================

/* === 1. GIỚI THIỆU NHANH ===
- React là thư viện xây dựng giao diện người dùng (UI).
- Sử dụng cấu trúc component → dễ tổ chức, tái sử dụng.
- React không phải là framework, nhưng hay được gọi như vậy.
- Viết UI bằng JSX (JavaScript + HTML-like syntax).
*/

/* === 2. JSX LÀ GÌ? === */

const heading = <h1>Mozilla Developer Network</h1>;

const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);

// JSX cần được biên dịch (VD: Babel) thành:
const headerJS = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network")
);

/* === 3. KHỞI TẠO ỨNG DỤNG VỚI VITE ===

- Yêu cầu Node.js >= 18
- Cài đặt bằng lệnh:

  npm create vite@latest moz-todo-react -- --template react

- Tiếp theo:

  cd moz-todo-react && npm install
  npm run dev -- --open --port 3000

*/

/* === 4. CẤU TRÚC FILE DỰ ÁN VITE ===
moz-todo-react/
├── index.html
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── package.json
├── vite.config.js
*/

/* === 5. COMPONENT ĐẦU TIÊN – App.jsx === */

import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Hello, World!</h1>
      </header>
    </>
  );
}

export default App;

/* === 6. JSX CƠ BẢN: BIẾN, BIỂU THỨC, CLASSNAME === */

const subject = "React";

<h1>Hello, {subject}!</h1> // → Hello, React!

{/* Dùng biểu thức JS */}
<h1>Hello, {subject.toUpperCase()}</h1> // → Hello, REACT!
<h1>Hello, {2 + 2}!</h1> // → Hello, 4!

{/* class → className trong JSX */}
<button className="primary">Click me!</button>

/* === 7. PROPS – TRUYỀN DỮ LIỆU CHO COMPONENT === */

// main.jsx
<App subject="Clarice" />

// App.jsx
function App(props) {
  return (
    <>
      <header>
        <h1>Hello, {props.subject}!</h1>
        <button className="primary">Click me!</button>
      </header>
    </>
  );
}

/* === 8. useState – TRẠNG THÁI CỤC BỘ === */

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <button onClick={() => setCount((c) => c + 1)}>count is {count}</button>
    </div>
  );
}

/* === 9. main.jsx ENTRY POINT === */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App subject="React Learner" />
  </StrictMode>
);

/* === 10. TUỲ BIẾN package.json (cho sẵn --open/--port) ===

"scripts": {
  "dev": "vite --open --port 3000",
  ...
}
*/

/* === 11. TỔNG KẾT ===
✔ React là thư viện xây giao diện với component
✔ JSX giúp viết UI dễ hơn, gần với HTML
✔ Dữ liệu truyền vào qua props
✔ Trạng thái nội bộ dùng useState
✔ React app khởi tạo nhanh với Vite
✔ Tất cả code React bắt đầu từ 1 <App /> duy nhất

→ Sẵn sàng để làm ứng dụng đầu tiên: To-Do App!
*/
