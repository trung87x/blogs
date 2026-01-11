// =======================================================
// Ngữ cảnh #10: Modular hóa Redux – Tổ chức nhiều slice
// =======================================================

// 🎯 Mục tiêu:
// - Tách reducer và logic ra từng module riêng biệt (cart, auth, ui, product...)
// - Quản lý rõ ràng, dễ scale, dễ debug
// - Tích hợp các slice lại với nhau trong store

// =======================================================
// 1. Cấu trúc thư mục nhiều slice
// =======================================================

// src/
// ├── app/
// │   └── store.js             // Kết hợp các slice
// ├── features/
// │   ├── auth/
// │   │   └── authSlice.js     // Slice quản lý đăng nhập
// │   ├── cart/
// │   │   └── cartSlice.js     // Slice quản lý giỏ hàng
// │   ├── product/
// │   │   └── productSlice.js  // Slice quản lý sản phẩm
// │   └── ui/
// │       └── uiSlice.js       // Slice trạng thái giao diện
// ├── App.jsx
// └── main.jsx

// =======================================================
// 2. Một ví dụ slice – cartSlice.js
// =======================================================
// src/features/cart/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

// =======================================================
// 3. Kết hợp các slice vào store
// =======================================================
// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/auth/authSlice";
import productReducer from "../features/product/productSlice";
import uiReducer from "../features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    product: productReducer,
    ui: uiReducer,
  },
});

// =======================================================
// 4. Dùng slice trong component
// =======================================================
// App.jsx
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./features/cart/cartSlice.js";

export default function App() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart({ id: Date.now(), name: "Sản phẩm A" }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <h2>🛒 Giỏ hàng ({cartItems.length} sản phẩm)</h2>
      <button onClick={handleAdd}>➕ Thêm</button>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => handleRemove(item.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// =======================================================
// 5. Gắn store vào ứng dụng
// =======================================================
// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// =======================================================
// ✅ Ghi chú:
// =======================================================
// - Mỗi slice là một module độc lập: dễ viết unit test, dễ mở rộng
// - Cấu trúc này rất phù hợp khi app phức tạp: user, post, comment, cart, ui...
// - Có thể thêm middleware, thunk hoặc combine reducer thủ công nếu cần

// 📦 Khi ứng dụng có nhiều slice, bạn có thể chia rõ domain và dùng thêm selectors riêng để truy xuất state sạch sẽ.
