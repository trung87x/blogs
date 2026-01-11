// ================================================================
// REACT TODO APP – CẤU TRÚC CƠ BẢN & GIAO DIỆN BAN ĐẦU
// ================================================================

/* === 1. App.jsx – JSX ban đầu === */

function App(props) {
  return (
    <div className="container mt-5 w-50">
      <h1 className="text-center mb-4">TodoMatic</h1>

      <form className="mb-4">
        <div className="mb-3">
          <label htmlFor="new-todo-input" className="form-label">
            What needs to be done?
          </label>
          <input
            type="text"
            id="new-todo-input"
            className="form-control"
            placeholder="Enter a task"
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Add
        </button>
      </form>

      <div
        className="btn-group d-flex justify-content-center mb-4"
        role="group"
      >
        <button type="button" className="btn btn-outline-secondary active">
          All
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Active
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Completed
        </button>
      </div>

      <h2 className="mb-3">3 tasks remaining</h2>

      <ul className="list-group">
        {/* Task 1 */}
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="form-check">
            <input
              className="form-check-input me-2"
              type="checkbox"
              id="todo-0"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="todo-0">
              Eat
            </label>
          </div>
          <div>
            <button className="btn btn-sm btn-outline-secondary me-2">
              Edit
            </button>
            <button className="btn btn-sm btn-danger">Delete</button>
          </div>
        </li>

        {/* Task 2 */}
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="form-check">
            <input
              className="form-check-input me-2"
              type="checkbox"
              id="todo-1"
            />
            <label className="form-check-label" htmlFor="todo-1">
              Sleep
            </label>
          </div>
          <div>
            <button className="btn btn-sm btn-outline-secondary me-2">
              Edit
            </button>
            <button className="btn btn-sm btn-danger">Delete</button>
          </div>
        </li>

        {/* Task 3 */}
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="form-check">
            <input
              className="form-check-input me-2"
              type="checkbox"
              id="todo-2"
            />
            <label className="form-check-label" htmlFor="todo-2">
              Repeat
            </label>
          </div>
          <div>
            <button className="btn btn-sm btn-outline-secondary me-2">
              Edit
            </button>
            <button className="btn btn-sm btn-danger">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

/* === 2. Ghi chú thêm về accessibility ===
- `aria-pressed` giúp screen reader hiểu trạng thái button: true/false.
- `role="list"` giúp phục hồi ngữ nghĩa list khi bị phá vỡ bởi CSS.
- `htmlFor` thay cho thuộc tính `for` (vì `for` là keyword trong JS).
- `defaultChecked` được dùng thay cho `checked` trong JSX.

→ Các cải tiến này giúp app thân thiện với người dùng dùng thiết bị hỗ trợ.
*/

/* === 3. Cài đặt và sử dụng Bootstrap 5
- `npm install bootstrap` Cài Bootstrap 5.
- `import 'bootstrap/dist/css/bootstrap.min.css';` Import trong main.jsx hoặc index.js.
*/

/* === 4. Ghi chú triển khai ===
- Nếu dùng Vite:
    + xóa nội dung index.css
    + xóa App.css, react.svg và reset nội dung App.jsx theo hướng dẫn.
    + chạy lại với: npm run dev
- Sửa <title> trong index.html thành "TodoMatic".
*/

/* === 5. Hướng phát triển tiếp theo ===
✔ Tách giao diện thành component riêng (Todo, Form, FilterButton)
✔ Kết nối với state (useState)
✔ Xử lý sự kiện: thêm / sửa / xoá / đánh dấu hoàn thành
✔ Lọc theo trạng thái: All, Active, Completed
→ Các bước này sẽ được triển khai trong các bài học tiếp theo.
*/
