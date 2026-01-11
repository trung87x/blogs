// ========================================================================
// TÀI NGUYÊN HỌC REACT – REACT RESOURCES (HỌC NÂNG CAO VÀ ỨNG DỤNG)
// ========================================================================

/* === 1. STYLE Ở CẤP ĐỘ COMPONENT ===
- Trong tutorial ban đầu, tất cả CSS được viết trong `index.css`.
- Với ứng dụng thực tế, ta nên tách style theo từng component riêng biệt.

Ví dụ:
Form.jsx
----------
import Form from "./Form";
import "./Form.css";

- Ưu điểm: dễ quản lý CSS riêng cho từng component.
- Nhược điểm: phân mảnh stylesheet → cần cân nhắc.
- Với app lớn, style riêng cho mỗi component sẽ giúp tối ưu hiệu suất.

🔗 Tham khảo: bài viết “Styling Components In React” (Smashing Magazine)
*/

/* === 2. React DevTools ===

- Dùng để:
  + Xem props, state của từng component.
  + Chỉnh props/state trực tiếp từ DevTools.

🔧 Cài đặt:
- Extension cho Chrome, Firefox, Edge.
- Ứng dụng standalone: cài bằng npm hoặc Yarn.

💡 React DevTools hiển thị:
- Cây component.
- Props, state và hook của từng component.
- Mối quan hệ cha-con rõ ràng (vd: App → Form → Todo)

🔗 Tham khảo: React Docs - React DevTools
*/

/* === 3. useReducer() HOOK ===

- Thay thế cho useState trong các tình huống:
  + Nhiều hàm xử lý liên quan đến cùng một state.
  + State logic phức tạp cần gom lại trong 1 function.

🔧 Khác với useState:
- useState → mỗi state riêng rẽ.
- useReducer → gom nhiều hành động cùng liên quan.

🔗 Tham khảo: React Docs - useReducer()
*/

/* === 4. CONTEXT API ===

- Khi app có cấu trúc lồng nhiều tầng → khó truyền props xuống sâu.
- Context API giúp chia sẻ data mà không cần truyền props qua từng tầng.

🔧 Dùng:
- `createContext()` để tạo context.
- `useContext()` để đọc dữ liệu context.

🔗 Tham khảo: Smashing Magazine – Intro to React Context
*/

/* === 5. CLASS COMPONENTS ===

- Component dạng class (trước khi có hook).
- Hạn chế hiện tại:
  + Verbose (dài dòng)
  + Không linh hoạt như function component + hook

📌 Class component vẫn dùng trong dự án cũ / kế thừa.
🔗 Tham khảo: React Docs - Component API
*/

/* === 6. TESTING (KIỂM THỬ) ===

- Dùng thư viện như:
  + React Testing Library (thân thiện, theo hướng người dùng)
  + Jest (phổ biến)
  + Vitest (tích hợp tốt với Vite)

🔧 Cho phép test unit, interaction, UI behavior...
*/

/* === 7. ROUTING (ĐIỀU HƯỚNG CLIENT-SIDE) ===

- Cho phép chia ứng dụng thành nhiều trang ảo (SPA).
- Dựa trên URL (vd: /login, /dashboard...).

🔧 Dùng thư viện:
- React Router: phổ biến, mạnh mẽ nhất
- Cung cấp hook, component để:
  + Tạo route
  + Navigate
  + Truy cập location/history

🔗 Tham khảo: React Router Docs
*/

/* === 8. TỔNG KẾT – HỌC REACT NÂNG CAO ===

✔ Tổ chức CSS: theo component
✔ Dùng DevTools: debug & xem cây component
✔ useReducer(): thay thế useState trong logic phức tạp
✔ Context API: chia sẻ data sâu hơn mà không prop drilling
✔ Class Component: cần biết để đọc hiểu code cũ
✔ Testing: đảm bảo chất lượng app
✔ Routing: xây dựng SPA hiện đại

📘 Tiếp tục học:
- React Docs chính chủ: https://reactjs.org/
- Blog chất lượng: Smashing Magazine, Kent C. Dodds, Overreacted (Dan Abramov)
- Tutorial thực chiến: Frontend Mentor, freeCodeCamp, Codecademy
