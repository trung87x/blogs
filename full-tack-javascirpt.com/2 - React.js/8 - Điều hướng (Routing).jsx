// 🧠 Model 8: Điều hướng (Routing)
// Khi ứng dụng của bạn có nhiều trang hoặc component theo đường dẫn URL, ta cần routing để điều hướng giữa chúng.

// 📘 NGỮ CẢNH 1: Cấu hình router cơ bản với react-router-dom

// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

// Home.jsx
export default function Home() {
  return <h2>Trang chủ</h2>;
}

// About.jsx
export default function About() {
  return <h2>Giới thiệu</h2>;
}

// 🧩 Khi URL thay đổi, component tương ứng được render.

// 📘 NGỮ CẢNH 2: Điều hướng bằng <Link> và useNavigate

// Navigation.jsx
import { Link, useNavigate } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();

  return (
    <nav>
      <Link to="/">🏠 Trang chủ</Link>
      <Link to="/about">ℹ️ Giới thiệu</Link>
      <button onClick={() => navigate('/')}>Về trang chủ</button>
    </nav>
  );
}

// 🧩 <Link> tạo liên kết không reload trang. useNavigate điều hướng bằng JS.