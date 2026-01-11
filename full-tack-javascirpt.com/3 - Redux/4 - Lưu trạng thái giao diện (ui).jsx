// ============================
// 🧩 Ngữ cảnh #4: Lưu trạng thái giao diện (UI)
// ============================

// 🎯 Mục tiêu:
// Lưu và điều khiển trạng thái UI như:
// - Bật/tắt modal
// - Đóng/mở sidebar
// - Bật dark mode
// - Chuyển tab đang chọn
// - Loading indicator...

// ============================
// 📁 Cấu trúc thư mục
// ============================
// src/
// ├── app/
// │   └── store.js
// ├── features/
// │   └── ui/
// │       ├── uiSlice.js
// │       └── UIComponent.jsx
// └── App.jsx

// ============================
// 🧠 Redux Slice – uiSlice.js
// ============================
import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isModalOpen: false,
    isSidebarOpen: true,
    darkMode: false,
    currentTab: "home",
  },
  reducers: {
    toggleModal: state => {
      state.isModalOpen = !state.isModalOpen;
    },
    toggleSidebar: state => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleDarkMode: state => {
      state.darkMode = !state.darkMode;
    },
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload;
    },
  },
});

export const {
  toggleModal,
  toggleSidebar,
  toggleDarkMode,
  setCurrentTab,
} = uiSlice.actions;

export default uiSlice.reducer;

// ============================
// ⚙️ Store – store.js
// ============================
import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

// ============================
// 📦 Component – UIComponent.jsx
// ============================
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleModal,
  toggleSidebar,
  toggleDarkMode,
  setCurrentTab,
} from "./uiSlice";

export default function UIComponent() {
  const dispatch = useDispatch();
  const { isModalOpen, isSidebarOpen, darkMode, currentTab } = useSelector(
    state => state.ui
  );

  return (
    <div style={{ background: darkMode ? "#222" : "#fff", color: darkMode ? "#fff" : "#000" }}>
      <h2>Giao diện UI</h2>

      <p>Chế độ: {darkMode ? "🌙 Tối" : "🌞 Sáng"}</p>
      <p>Modal: {isModalOpen ? "Hiện" : "Ẩn"}</p>
      <p>Sidebar: {isSidebarOpen ? "Hiện" : "Ẩn"}</p>
      <p>Tab đang chọn: {currentTab}</p>

      <button onClick={() => dispatch(toggleDarkMode())}>Toggle Dark Mode</button>
      <button onClick={() => dispatch(toggleModal())}>Toggle Modal</button>
      <button onClick={() => dispatch(toggleSidebar())}>Toggle Sidebar</button>
      <button onClick={() => dispatch(setCurrentTab("settings"))}>Chuyển Tab: Settings</button>
    </div>
  );
}

// ============================
// 🔗 App.jsx
// ============================
import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import UIComponent from "./features/ui/UIComponent";

function App() {
  return (
    <Provider store={store}>
      <UIComponent />
    </Provider>
  );
}

export default App;

// ============================
// ✅ Ghi chú cuối cùng
// ============================
// - Slice này dùng cho trạng thái giao diện, không phải dữ liệu chính.
// - Thường dùng cùng với modal, sidebar, theme switcher, menu tab...
// - Tránh dùng quá nhiều trạng thái UI trong nhiều slice khác nhau → nên gom chung.
