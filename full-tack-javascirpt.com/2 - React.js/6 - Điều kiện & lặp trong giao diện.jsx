// 🧠 Model 6: Điều kiện & lặp trong giao diện
// React cho phép bạn hiển thị có điều kiện hoặc lặp qua danh sách dữ liệu để render nhiều phần tử một cách linh hoạt.

// 📘 NGỮ CẢNH 1: Hiển thị có điều kiện (if đơn giản)

function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Chào bạn quay lại!</p> : <p>Xin hãy đăng nhập.</p>}
    </div>
  );
}

// 🧩 Dùng toán tử ? : trong JSX để rẽ nhánh hiển thị.

// 📘 NGỮ CẢNH 2: Điều kiện ngắn gọn (&&)

function Warning({ show }) {
  return <div>{show && <p style={{ color: "red" }}>Cảnh báo!</p>}</div>;
}

// 🧩 Dùng && để chỉ hiển thị khi điều kiện đúng.

// 📘 NGỮ CẢNH 3: Lặp qua danh sách (map)

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function App() {
  const tasks = ["Học React", "Học Tailwind", "Học Node.js"];
  return <TodoList todos={tasks} />;
}

// 🧩 Dùng map() để tạo danh sách các phần tử JSX từ một mảng.

// 📘 NGỮ CẢNH 4: Lặp + điều kiện lồng nhau

function ProductList({ products }) {
  return (
    <ul>
      {products.map((p, i) => (p.available ? <li key={i}>{p.name}</li> : null))}
    </ul>
  );
}

// 🧩 Kết hợp map() và điều kiện để chỉ render khi phù hợp.
