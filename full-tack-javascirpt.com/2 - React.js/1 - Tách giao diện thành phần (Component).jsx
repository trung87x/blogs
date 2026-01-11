// 🧠 Model 1: Tách giao diện thành phần (Component)
// Mỗi phần giao diện (header, nút, thẻ bài viết, form...) nên được viết thành component riêng.

// 📘 NGỮ CẢNH 1: Header có logo và menu

// App.jsx
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

// Header.jsx
function Header() {
  return (
    <header>
      <img src="logo.png" alt="Logo" />
      <nav>
        <a href="#">Trang chủ</a>
        <a href="#">Giới thiệu</a>
      </nav>
    </header>
  );
}

// 📘 NGỮ CẢNH 2: Button có thể tái sử dụng nhiều lần

// App.jsx
import MyButton from "./MyButton";

function App() {
  return (
    <div>
      <MyButton label="Đăng ký" />
      <MyButton label="Đăng nhập" />
    </div>
  );
}

// MyButton.jsx
function MyButton({ label }) {
  return <button>{label}</button>;
}

// 📘 NGỮ CẢNH 3: Component bài viết hiển thị tiêu đề và nội dung

// App.jsx
import Post from "./Post";

function App() {
  return (
    <div>
      <Post
        title="Học React dễ không?"
        content="Rất dễ nếu bạn học theo ngữ cảnh!"
      />
    </div>
  );
}

// Post.jsx
function Post({ title, content }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
}

// 📘 NGỮ CẢNH 4: Tách form thành component riêng

// App.jsx
import ContactForm from "./ContactForm";

function App() {
  return (
    <div>
      <ContactForm />
    </div>
  );
}

// ContactForm.jsx
function ContactForm() {
  return (
    <form>
      <input type="text" placeholder="Tên bạn" />
      <button>Gửi</button>
    </form>
  );
}
