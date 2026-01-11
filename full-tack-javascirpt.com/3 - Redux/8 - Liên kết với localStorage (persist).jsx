// ==============================
// Ngữ cảnh #8: Liên kết localStorage
// ==============================

// 🎯 Mục tiêu:
// - Lưu dữ liệu Redux (như token, giỏ hàng) vào localStorage
// - Tự động khôi phục lại state khi reload trang
// - Đảm bảo đồng bộ giữa Redux và localStorage

// ==============================
// 1. Cấu trúc thư mục
// ==============================

// src/
// ├── app/
// │   └── store.js
// ├── features/
// │   └── auth/
// │       ├── authSlice.js
// │       └── LoginForm.jsx
// ├── App.jsx
// └── main.jsx

// ==============================
// 2. Tạo slice có dùng localStorage
// ==============================
// src/features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

// 📦 Load token từ localStorage nếu có
const savedToken = localStorage.getItem("token");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: savedToken || null,
  },
  reducers: {
    login(state, action) {
      state.token = action.payload;
      localStorage.setItem("token", action.payload); // 📝 Ghi vào localStorage
    },
    logout(state) {
      state.token = null;
      localStorage.removeItem("token"); // ❌ Xóa khỏi localStorage
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

// ==============================
// 3. Cài đặt store
// ==============================
// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// ==============================
// 4. Sử dụng trong Component
// ==============================
// src/features/auth/LoginForm.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./authSlice";

export default function LoginForm() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [input, setInput] = useState("");

  const handleLogin = () => {
    if (input.trim()) {
      dispatch(login(input));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h3>Login Form</h3>
      {token ? (
        <div>
          <p>Đã đăng nhập với token: <code>{token}</code></p>
          <button onClick={handleLogout}>Đăng xuất</button>
        </div>
      ) : (
        <div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nhập token..."
          />
          <button onClick={handleLogin}>Đăng nhập</button>
        </div>
      )}
    </div>
  );
}

// ==============================
// 5. Kết nối vào App
// ==============================
// App.jsx
import LoginForm from "./features/auth/LoginForm";
export default function App() {
  return (
    <div>
      <h1>Ứng dụng Redux + localStorage</h1>
      <LoginForm />
    </div>
  );
}

// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ==============================
// ✅ Ghi chú:
// ==============================
// - Dữ liệu sẽ **giữ nguyên** kể cả khi F5 (reload)
// - Có thể dùng cho `token`, `cart`, `theme`, `language`...
// - Đây là cách thủ công (dễ hiểu, kiểm soát tốt)

// 🛠 Ngoài ra, có thể dùng thư viện như:
// - redux-persist: tự động hóa quá trình lưu/khôi phục
