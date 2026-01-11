=======================================================
Ngữ cảnh #11: Selectors tùy chỉnh (reselect)
=======================================================

🎯 Mục tiêu:
- Tránh tính toán lại không cần thiết khi truy xuất state từ Redux
- Tối ưu hiệu suất component (tránh re-render thừa)
- Dễ dàng viết logic truy vấn state phức tạp một cách sạch sẽ

=======================================================
1. Cài đặt thư viện reselect (nếu dùng riêng)
=======================================================
npm install reselect

💡 Nếu bạn dùng @reduxjs/toolkit thì `reselect` đã được tích hợp sẵn qua `createSelector`.

=======================================================
2. Ví dụ: Giỏ hàng với tổng tiền và tổng số lượng
=======================================================
// src/features/cart/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
      { id: 1, name: "Sản phẩm A", price: 100, quantity: 2 },
      { id: 2, name: "Sản phẩm B", price: 50, quantity: 1 },
    ],
  },
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

=======================================================
3. Tạo selector tùy chỉnh dùng createSelector
=======================================================
// src/features/cart/cartSelectors.js
import { createSelector } from "@reduxjs/toolkit";

const selectCartItems = (state) => state.cart.items;

export const selectTotalQuantity = createSelector(
  [selectCartItems],
  (items) => items.reduce((sum, item) => sum + item.quantity, 0)
);

export const selectTotalPrice = createSelector(
  [selectCartItems],
  (items) => items.reduce((sum, item) => sum + item.quantity * item.price, 0)
);

=======================================================
4. Dùng selector trong component
=======================================================
// App.jsx
import { useSelector } from "react-redux";
import {
  selectTotalPrice,
  selectTotalQuantity,
} from "./features/cart/cartSelectors";

export default function App() {
  const totalPrice = useSelector(selectTotalPrice);
  const totalQty = useSelector(selectTotalQuantity);

  return (
    <div>
      <h2>🧮 Tổng số lượng: {totalQty}</h2>
      <h3>💰 Tổng tiền: {totalPrice} VNĐ</h3>
    </div>
  );
}

=======================================================
✅ Ghi chú:
=======================================================
- `createSelector` giúp nhớ giá trị đã tính toán (memoization)
- Chỉ khi input (state.cart.items) thay đổi thì giá trị mới được tính lại
- Giảm render thừa nếu state không thay đổi
- Selector có thể lồng nhau: selector A dùng trong selector B
- Tốt khi kết hợp với useSelector trong component

🚀 Đây là cách hay để truy vấn state có tính toán mà không tốn hiệu năng.
