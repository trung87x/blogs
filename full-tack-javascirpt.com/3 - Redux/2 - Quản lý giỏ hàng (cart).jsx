// 🛒 [Redux #2] Ngữ cảnh: Quản lý giỏ hàng (cart)

// ============================
// 📁 CẤU TRÚC THƯ MỤC (GỢI Ý)
// ============================
// src/
// ├── app/
// │   └── store.js
// ├── features/
// │   └── cart/
// │       ├── cartSlice.jsx
// │       ├── cartSelectors.js
// │       └── Cart.jsx
// ├── App.jsx
// ├── main.jsx
// └── index.html

// ============================
// 🧠 MODEL – STATE CẦN QUẢN LÝ
// ============================
// - items: Mảng chứa các sản phẩm đã thêm vào giỏ
// - Mỗi sản phẩm có: id, name, price, quantity

// Hành vi:
// ✔ Thêm sản phẩm
// ✔ Tăng số lượng nếu đã có
// ✔ Giảm số lượng hoặc xoá sản phẩm
// ✔ Tính tổng tiền
// ✔ Xoá toàn bộ giỏ hàng

// ============================
// ⚙️ cartSlice.jsx
// ============================
// features/cart/cartSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find(p => p.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// ============================
// 📊 cartSelectors.js
// ============================
// features/cart/cartSelectors.js
export const selectCartItems = state => state.cart.items;

export const selectTotalAmount = state =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

// ============================
// 🧾 store.js
// ============================
// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// ============================
// 🚀 main.jsx
// ============================
// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './app/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ============================
// 📦 App.jsx
// ============================
// App.jsx
import React from 'react';
import Cart from './features/cart/Cart';

const App = () => {
  return (
    <div>
      <h1>🛒 Demo Giỏ hàng</h1>
      <Cart />
    </div>
  );
};

export default App;

// ============================
// 🧩 Cart.jsx – UI
// ============================
// features/cart/Cart.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from './cartSlice';
import { selectCartItems, selectTotalAmount } from './cartSelectors';

const demoProduct = { id: 1, name: 'Sách React', price: 120000 };

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectTotalAmount);

  return (
    <div>
      <button onClick={() => dispatch(addToCart(demoProduct))}>
        ➕ Thêm Sách React
      </button>
      <button onClick={() => dispatch(clearCart())}>🧹 Xoá toàn bộ</button>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - SL: {item.quantity} - Giá: {item.price.toLocaleString()}đ
            <button onClick={() => dispatch(removeFromCart(item.id))}>❌</button>
          </li>
        ))}
      </ul>

      <h3>Tổng tiền: {total.toLocaleString()}đ</h3>
    </div>
  );
};

export default Cart;

// ============================
// 📌 GHI CHÚ
// ============================
// ✅ Dự án chạy được với:
// 1. `npx create-react-app`
// 2. `npm install @reduxjs/toolkit react-redux`
// 3. Dán đúng các file như trên
// 4. Chạy `npm start`

// --------------------------------------
// (Bạn có thể tiếp tục các ngữ cảnh khác như: xác thực, theme, đa ngôn ngữ, filter, v.v.)
