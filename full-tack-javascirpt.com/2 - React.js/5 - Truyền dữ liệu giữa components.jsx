// 🧠 Model 5: Truyền dữ liệu giữa components
// Khi bạn muốn component cha truyền dữ liệu hoặc chức năng xuống con, React sử dụng props. Với nhiều tầng, bạn có thể dùng Context để tránh truyền thủ công từng cấp (prop drilling).

// 📘 NGỮ CẢNH 1: Truyền dữ liệu từ cha xuống con

function Welcome(props) {
  return <h1>Xin chào, {props.name}!</h1>;
}

function App() {
  return <Welcome name="Trung" />;
}

// 🧩 App truyền prop name="Trung" xuống Welcome.

// 📘 NGỮ CẢNH 2: Truyền hàm từ cha xuống để xử lý sự kiện

function Button({ onClick }) {
  return <button onClick={onClick}>Bấm tôi</button>;
}

function App() {
  const handleClick = () => alert("Đã bấm!");
  return <Button onClick={handleClick} />;
}

// 🧩 Truyền hàm xử lý từ cha để con có thể “kích hoạt” hành động của cha.

// 📘 NGỮ CẢNH 3: Truyền nội dung JSX qua children

function Layout({ children }) {
  return (
    <div className="layout">
      <header>Header</header>
      <main>{children}</main>
    </div>
  );
}

function App() {
  return (
    <Layout>
      <p>Nội dung chính ở đây</p>
    </Layout>
  );
}

// 🧩 Bất kỳ nội dung nào được bọc bên trong <Layout>...</Layout> sẽ trở thành children.

// 📘 NGỮ CẢNH 4: Truyền dữ liệu qua nhiều tầng → dùng Context

import { createContext, useContext } from "react";

const UserContext = createContext();

function Grandchild() {
  const user = useContext(UserContext);
  return <p>Xin chào {user}!</p>;
}

function Child() {
  return <Grandchild />;
}

function App() {
  return (
    <UserContext.Provider value="Trung">
      <Child />
    </UserContext.Provider>
  );
}

// 🧩 Tránh truyền props qua nhiều cấp, dùng Context để chia sẻ dữ liệu toàn ứng dụng.
