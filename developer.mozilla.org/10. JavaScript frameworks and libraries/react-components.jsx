// ===============================================================
// TÁCH COMPONENT TRONG REACT APP – COMPONENTIZING OUR REACT APP
// ===============================================================

/* === 1. MỤC TIÊU ===
- Tách ứng dụng React lớn thành nhiều component nhỏ dễ quản lý.
- Học cách dùng props để truyền dữ liệu động.
- Tổ chức cấu trúc folder cho component.
*/

/* === 2. KHỞI TẠO COMPONENT <Todo /> === */

// File: src/components/Todo.jsx
function Todo(props) {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
}
export default Todo;

/* === 3. TRUYỀN PROPS TỪ App.jsx === */

<Todo name="Eat" id="todo-0" completed />
<Todo name="Sleep" id="todo-1" />
<Todo name="Repeat" id="todo-2" />

// Props giúp tái sử dụng component mà vẫn có thể hiển thị nội dung khác nhau

/* === 4. BIẾN DỮ LIỆU THÀNH DANH SÁCH (MAPPING) === */

// src/main.jsx
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

// Truyền xuống App như prop:
<App tasks={DATA} />

// Trong App.jsx:
const taskList = props.tasks?.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
  />
));

/* === 5. TẠO THÊM COMPONENT <Form /> === */

// File: src/components/Form.jsx
function Form() {
  return (
    <form>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}
export default Form;

/* === 6. TẠO COMPONENT <FilterButton /> === */

// File: src/components/FilterButton.jsx
function FilterButton() {
  return (
    <button type="button" className="btn toggle-btn" aria-pressed="true">
      <span className="visually-hidden">Show </span>
      <span>all </span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}
export default FilterButton;

/* === 7. IMPORT VÀ SỬ DỤNG TẤT CẢ TRONG App.jsx === */

import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

function App(props) {
  const taskList = props.tasks?.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}
export default App;

/* === 8. TỔNG KẾT ===
✔️ Chúng ta đã học cách:
- Tách code thành nhiều component nhỏ
- Dùng props để truyền dữ liệu
- Sử dụng map() để render danh sách component
- Đảm bảo id và key là duy nhất
→ Chuẩn bị cho phần tiếp theo: xử lý sự kiện trong React!
*/
