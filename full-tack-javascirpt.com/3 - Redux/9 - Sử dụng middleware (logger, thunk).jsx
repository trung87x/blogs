// ========================================
// Ngữ cảnh #9: Sử dụng middleware Redux
// ========================================

// 🎯 Mục tiêu:
// - Ghi log các action và state thay đổi (debug)
// - Cho phép dispatch async action (gọi API)
// - Xử lý logic tùy chỉnh nâng cao giữa action và reducer

// ========================================
// 1. Cấu trúc thư mục ví dụ
// ========================================

// src/
// ├── app/
// │   └── store.js        // Cài middleware ở đây
// ├── features/
// │   └── counter/
// │       └── counterSlice.js
// ├── App.jsx
// └── main.jsx

// ========================================
// 2. Thêm Redux Logger Middleware
// ========================================
// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import logger from "redux-logger"; // 🐞 Ghi log action/state

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger), // ➕ Gắn thêm logger
});

// ========================================
// 3. Cài thunk cho async action (mặc định đã có)
// ========================================
// src/features/counter/counterSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 🎯 Async thunk gọi API giả
export const fetchNumber = createAsyncThunk(
  "counter/fetchNumber",
  async () => {
    const res = await new Promise((resolve) =>
      setTimeout(() => resolve(5), 1000)
    );
    return res;
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0, loading: false },
  reducers: {
    increment(state) {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNumber.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNumber.fulfilled, (state, action) => {
        state.loading = false;
        state.value += action.payload;
      })
      .addCase(fetchNumber.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;

// ========================================
// 4. Dùng middleware trong Component
// ========================================
// App.jsx
import { useDispatch, useSelector } from "react-redux";
import { increment, fetchNumber } from "./features/counter/counterSlice";

export default function App() {
  const dispatch = useDispatch();
  const { value, loading } = useSelector((state) => state.counter);

  return (
    <div>
      <h1>Giá trị: {value}</h1>
      <button onClick={() => dispatch(increment())}>Tăng</button>
      <button onClick={() => dispatch(fetchNumber())} disabled={loading}>
        {loading ? "Đang tải..." : "Tải +5 từ API"}
      </button>
    </div>
  );
}

// ========================================
// 5. Cấu hình chính
// ========================================
// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./app/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ========================================
// ✅ Ghi chú:
// ========================================
// - `redux-logger`: Ghi log chi tiết action và state → rất hữu ích khi debug.
// - `redux-thunk`: Cho phép dispatch hàm async → gọi API không cần createAsyncThunk cũng được.
// - Có thể viết middleware tùy chỉnh → xử lý điều kiện, validate, tracking...

// 🧪 Nếu muốn thử middleware custom:
// ```js
// const customLogger = (store) => (next) => (action) => {
//   console.log("👀 Action:", action.type);
//   return next(action);
// };
