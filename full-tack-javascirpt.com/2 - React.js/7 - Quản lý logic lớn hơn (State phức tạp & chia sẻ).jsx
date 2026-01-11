// 🧠 Model 7: Quản lý logic lớn hơn (State phức tạp & chia sẻ)
// Khi state trở nên phức tạp hoặc cần chia sẻ giữa nhiều component, bạn cần các công cụ mạnh hơn như useReducer, Context, hoặc Redux.

// 📘 NGỮ CẢNH 1: Quản lý state phức tạp với useReducer

import { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "tang":
      return { count: state.count + 1 };
    case "giam":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Giá trị: {state.count}</p>
      <button onClick={() => dispatch({ type: "giam" })}>–</button>
      <button onClick={() => dispatch({ type: "tang" })}>+</button>
    </div>
  );
}

// 🧩 useReducer thích hợp khi logic cập nhật state phức tạp hoặc liên quan đến nhiều bước.

// 📘 NGỮ CẢNH 2: Chia sẻ state bằng Context API

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ToggleButton() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ToggleButton />
    </ThemeProvider>
  );
}

// 🧩 Context giúp chia sẻ state cho nhiều component mà không cần truyền props liên tục.

// 📘 NGỮ CẢNH 3: Sử dụng Redux (nếu mở rộng lớn)
// ❗ Redux thường chỉ dùng khi app lớn. Với app nhỏ, useReducer hoặc Context là đủ.

// Ví dụ giả định: tạo store, reducer, dispatch...
// Dùng thư viện Redux hoặc Redux Toolkit.
