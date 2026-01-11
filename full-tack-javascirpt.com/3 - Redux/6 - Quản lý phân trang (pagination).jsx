// ============================
// 🧩 Ngữ cảnh #6: Quản lý phân trang (Pagination)
// ============================

// 🎯 Mục tiêu:
// Lưu và điều khiển trạng thái phân trang như:
// - Trang hiện tại (current page)
// - Số phần tử mỗi trang (limit/pageSize)
// - Tổng số trang (optional)
// => Giúp giữ trạng thái khi người dùng chuyển trang, hoặc khi kết hợp với filter/search.

// ============================
// 📁 Cấu trúc thư mục
// ============================
// src/
// ├── app/
// │   └── store.js
// ├── features/
// │   ├── pagination/
// │   │   ├── paginationSlice.js
// │   │   └── PaginationControl.jsx
// │   └── posts/
// │       └── PostList.jsx (giả định là danh sách áp dụng phân trang)
// └── App.jsx

// ============================
// 🧠 Redux Slice – paginationSlice.js
// ============================
import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    currentPage: 1,
    pageSize: 10,
    totalPages: 0, // optional nếu dùng API
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
  },
});

export const { setCurrentPage, setPageSize, setTotalPages } = paginationSlice.actions;
export default paginationSlice.reducer;

// ============================
// ⚙️ Store – store.js
// ============================
import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "../features/pagination/paginationSlice";

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
  },
});

// ============================
// 🧩 Component – PaginationControl.jsx
// ============================
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentPage,
  setPageSize,
} from "./paginationSlice";

export default function PaginationControl() {
  const { currentPage, pageSize } = useSelector((state) => state.pagination);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(setCurrentPage(currentPage - 1))}
        disabled={currentPage === 1}
      >
        Trang trước
      </button>

      <span>Trang {currentPage}</span>

      <button onClick={() => dispatch(setCurrentPage(currentPage + 1))}>
        Trang sau
      </button>

      <select
        value={pageSize}
        onChange={(e) => dispatch(setPageSize(Number(e.target.value)))}
      >
        <option value={5}>5 / trang</option>
        <option value={10}>10 / trang</option>
        <option value={20}>20 / trang</option>
      </select>
    </div>
  );
}

// ============================
// 🔗 App.jsx
// ============================
import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import PaginationControl from "./features/pagination/PaginationControl";

function App() {
  return (
    <Provider store={store}>
      <PaginationControl />
    </Provider>
  );
}

export default App;

// ============================
// 📌 Ghi chú cuối cùng
// ============================
// - Việc lấy dữ liệu tương ứng với `currentPage` và `pageSize` thường nằm trong side-effect (useEffect hoặc thunk).
// - Có thể kết hợp cùng các filter/search để gọi lại API khi các tham số thay đổi.
// - `totalPages` có thể lấy từ API và lưu vào Redux nếu cần render UI điều hướng nâng cao.
