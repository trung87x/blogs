// ===============================================================================
// REACT – EDITING, FILTERING, CONDITIONAL UI
// (CHỈNH SỬA, LỌC VÀ HIỂN THỊ CÓ ĐIỀU KIỆN)
// ===============================================================================

/* === 1. MỤC TIÊU ===
- Cho phép chỉnh sửa tên công việc (task).
- Lọc danh sách theo All, Active, Completed.
- Hiển thị điều kiện: template xem vs. template chỉnh sửa.
*/

/* === 2. CHỈNH SỬA TASK – App.jsx === */
function editTask(id, newName) {
  const editedTaskList = tasks.map((task) => {
    if (id === task.id) return { ...task, name: newName };
    return task;
  });
  setTasks(editedTaskList);
}
// → Truyền editTask làm prop xuống <Todo />

/* === 3. GIAO DIỆN CHỈNH SỬA – Todo.jsx === */

import { useState } from "react";

function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newName}
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button type="button" className="btn todo-cancel" onClick={() => setEditing(false)}>
          Cancel <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => setEditing(true)}>
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button type="button" className="btn btn__danger" onClick={() => props.deleteTask(props.id)}>
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}

/* === 4. THÊM FILTER – App.jsx === */

const [filter, setFilter] = useState("All");

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

/* === 5. TẠO CÁC NÚT FILTER DYNAMICALLY === */

const filterList = FILTER_NAMES.map(name => (
  <FilterButton
    key={name}
    name={name}
    isPressed={name === filter}
    setFilter={setFilter}
  />
));

/* === 6. FilterButton component === */

function FilterButton(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name} </span>
      <span className="visually-hidden">tasks</span>
    </button>
  );
}

/* === 7. ÁP DỤNG FILTER VÀO DANH SÁCH TASK === */

const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map(task => (
    <Todo
      key={task.id}
      name={task.name}
      completed={task.completed}
      id={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

/* === 8. TỔNG HỢP KẾT QUẢ ===
✔ Có thể chỉnh sửa tên task.
✔ Có thể lọc theo All / Active / Completed.
✔ Dùng điều kiện để chuyển đổi giữa template hiển thị & chỉnh sửa.
✔ UI phản hồi nhanh và tương tác trực tiếp.
*/

/* === 9. BONUS – ACCESSIBILITY ===
- Các nút filter dùng aria-pressed để báo trạng thái rõ ràng.
- Thêm visually-hidden giúp screen reader đọc rõ nội dung.
- Hướng tiếp theo: quản lý focus sau khi thao tác để hỗ trợ bàn phím.
*/
