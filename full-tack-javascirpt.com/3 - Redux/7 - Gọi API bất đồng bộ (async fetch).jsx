// ==============================
// Ngữ cảnh #7: Gọi API bất đồng bộ
// ==============================

// 🎯 Mục tiêu:
// - Gọi API lấy danh sách dữ liệu (VD: bài viết, người dùng...)
// - Lưu kết quả vào Redux store
// - Hiển thị trạng thái loading, error nếu có

// ==============================
// 1. Cài đặt ban đầu
// ==============================

// npm install @reduxjs/toolkit react-redux axios

// ==============================
// 2. Cấu trúc thư mục
// ==============================

// src/
// ├── app/
// │   └── store.js
// ├── features/
// │   └── posts/
// │       ├── postsSlice.js
// │       └── PostsList.jsx
// ├── App.jsx
// └── main.jsx

// ==============================
// 3. Tạo store
// ==============================
// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

// ==============================
// 4. Gọi API với createAsyncThunk
// ==============================
// src/features/posts/postsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 🌀 Tạo async thunk
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    items: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;

// ==============================
// 5. Sử dụng trong Component
// ==============================
// src/features/posts/PostsList.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postsSlice";

export default function PostsList() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === "idle") dispatch(fetchPosts());
  }, [status, dispatch]);

  if (status === "loading") return <p>Đang tải...</p>;
  if (status === "failed") return <p>Lỗi: {error}</p>;

  return (
    <ul>
      {items.map((post) => (
        <li key={post.id}>
          <b>{post.title}</b>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

// ==============================
// 6. Kết nối Redux vào React
// ==============================
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

// App.jsx
import PostsList from "./features/posts/PostsList";
export default function App() {
  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <PostsList />
    </div>
  );
}

// ==============================
// ✅ Kết quả:
// ==============================
// - Giao diện tự động gọi API khi load lần đầu
// - Có xử lý loading và error
// - Dữ liệu được quản lý trong Redux store
// - Cách này giúp bạn:
//   - Tách biệt logic gọi API và UI
//   - Dễ test / tái sử dụng
