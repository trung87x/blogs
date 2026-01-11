// ============================
// 🧩 Ngữ cảnh #5: Lưu trạng thái bộ lọc (Filter)
// ============================

// 🎯 Mục tiêu:
// Lưu trạng thái bộ lọc cho danh sách như:
// - Từ khóa tìm kiếm
// - Loại danh mục (category)
// - Trạng thái hiển thị (hiện tất cả, đã hoàn thành, chưa hoàn thành)
// - Sắp xếp theo (tên, thời gian, độ ưu tiên...)

// ============================
// 📁 Cấu trúc thư mục
// ============================
// src/
// ├── app/
// │   └── store.js
// ├── features/
// │   ├── filters/
// │   │   ├── filterSlice.js
// │   │   └── FilterPanel.jsx
// │   └── todos/
// │       └── TodoList.jsx (giả định dùng dữ liệu todo có áp dụng filter)
// └── App.jsx

// ============================
// 🧠 Redux Slice – filterSlice.js
// ============================
import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    searchText: "",
    category: "all",
    status: "all", // all | completed | pending
    sortBy: "createdAt", // name | createdAt | priority
  },
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setSearchText, setCategory, setStatus, setSortBy } =
  filterSlice.actions;

export default filterSlice.reducer;

// ============================
// ⚙️ Store – store.js
// ============================
import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filters/filterSlice";

export const store = configureStore({
  reducer: {
    filters: filterReducer,
  },
});

// ============================
// 🧩 Component – FilterPanel.jsx
// ============================
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchText,
  setCategory,
  setStatus,
  setSortBy,
} from "./filterSlice";

export default function FilterPanel() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  return (
    <div>
      <h3>Bộ lọc</h3>

      <input
        type="text"
        placeholder="Tìm kiếm..."
        value={filters.searchText}
        onChange={(e) => dispatch(setSearchText(e.target.value))}
      />

      <select
        value={filters.category}
        onChange={(e) => dispatch(setCategory(e.target.value))}
      >
        <option value="all">Tất cả danh mục</option>
        <option value="work">Công việc</option>
        <option value="personal">Cá nhân</option>
      </select>

      <select
        value={filters.status}
        onChange={(e) => dispatch(setStatus(e.target.value))}
      >
        <option value="all">Tất cả trạng thái</option>
        <option value="completed">Đã hoàn thành</option>
        <option value="pending">Chưa hoàn thành</option>
      </select>

      <select
        value={filters.sortBy}
        onChange={(e) => dispatch(setSortBy(e.target.value))}
      >
        <option value="createdAt">Thời gian tạo</option>
        <option value="name">Tên</option>
        <option value="priority">Độ ưu tiên</option>
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
import FilterPanel from "./features/filters/FilterPanel";

function App() {
  return (
    <Provider store={store}>
      <FilterPanel />
    </Provider>
  );
}

export default App;

// ============================
// ✅ Ghi chú cuối cùng
// ============================
// - Bộ lọc này chỉ là "bộ nhớ" của giao diện, không chứa dữ liệu thực.
// - Component danh sách (todo, user...) cần lấy giá trị filter từ state để lọc.
// - Tách filter slice riêng giúp dễ mở rộng, tái sử dụng ở nhiều nơi khác nhau.
