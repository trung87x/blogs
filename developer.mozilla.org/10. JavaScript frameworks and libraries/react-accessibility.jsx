// ==============================================================================
// REACT ACCESSIBILITY – TRUY CẬP TRONG REACT (BÀN PHÍM, FOCUS, SCREEN READER)
// ==============================================================================

/* === 1. TỔNG QUAN ===
- Trải nghiệm người dùng không chỉ dành cho chuột → cần hỗ trợ bàn phím, screen reader.
- Trọng tâm bài học: focus management (quản lý tiêu điểm) trong React.
- Dùng useRef() và useEffect() để kiểm soát focus đúng cách.
*/

/* === 2. VẤN ĐỀ VỚI FOCUS KHI CHUYỂN TEMPLATE ===
- Khi nhấn "Edit", component <Todo /> chuyển từ giao diện hiển thị → biểu mẫu chỉnh sửa.
→ React xoá & render lại DOM → mất focus hiện tại.
→ Người dùng bàn phím không biết đang ở đâu.

✔️ Giải pháp: dùng useRef để lưu trữ phần tử cần focus lại sau khi render.
*/

import { useRef, useEffect } from "react";

/* === 3. SỬ DỤNG useRef() ĐỂ MỤC TIÊU PHẦN TỬ CỤ THỂ === */

const editFieldRef = useRef(null);
const editButtonRef = useRef(null);

// Gắn ref vào phần tử JSX:
<input ref={editFieldRef} type="text" />
<button ref={editButtonRef}>Edit</button>

// → Sau khi render xong, ref.current sẽ trỏ đến DOM element tương ứng.

/* === 4. useEffect() ĐỂ THỰC HIỆN FOCUS SAU KHI RENDER === */

useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  } else {
    editButtonRef.current.focus();
  }
}, [isEditing]);

// → useEffect chạy sau mỗi lần render, có thể dùng để tác động vào DOM.
// → Nhưng khi load trang → cũng chạy và focus nút "Edit" (không mong muốn).

/* === 5. GIẢI PHÁP: usePrevious() – TỰ VIẾT HOOK RIÊNG === */

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const wasEditing = usePrevious(isEditing);

useEffect(() => {
  if (!wasEditing && isEditing) {
    editFieldRef.current.focus();
  } else if (wasEditing && !isEditing) {
    editButtonRef.current.focus();
  }
}, [wasEditing, isEditing]);

/* === 6. XỬ LÝ TRƯỜNG HỢP KHI XOÁ TASK === */

// Sau khi xoá task → không còn phần tử nào để focus.
// ✔️ Giải pháp: focus vào tiêu đề danh sách task <h2>

const listHeadingRef = useRef(null);

// JSX:
<h2 ref={listHeadingRef} tabIndex="-1">Danh sách công việc</h2>;

// → tabIndex="-1" giúp phần tử có thể được focus bằng JS mà không tab được tới.

useEffect(() => {
  if (tasks.length < prevTaskLength) {
    listHeadingRef.current.focus();
  }
}, [tasks.length, prevTaskLength]);

/* === 7. TỔNG KẾT ===
✔️ React mặc định không quản lý focus → cần can thiệp thủ công.
✔️ useRef: tham chiếu phần tử DOM
✔️ useEffect: can thiệp sau render
✔️ usePrevious: theo dõi trạng thái trước đó
✔️ Kết hợp đúng cách sẽ giúp ứng dụng của bạn thân thiện hơn với:
   - người dùng bàn phím
   - người dùng dùng screen reader
*/

/* === 8. BONUS – ĐƯỜNG DẪN TÀI LIỆU THAM KHẢO ===
- Live demo: https://mdn.github.io/todo-react/
- Mã nguồn mẫu: https://github.com/mdn/todo-react
- :focus-visible pseudo-class: hiển thị đường viền chỉ khi dùng bàn phím
- Luôn kiểm tra và test accessibility khi làm app thật
*/
