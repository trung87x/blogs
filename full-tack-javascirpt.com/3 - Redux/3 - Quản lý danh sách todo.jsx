// ============================
// 🧩 Ngữ cảnh #3: Quản lý danh sách (CRUD)
// ============================

// 🎯 Mục tiêu:
// Quản lý danh sách dữ liệu (todo list, danh sách người dùng, bài viết...) với các thao tác:
// - Add (thêm mới)
// - Edit (chỉnh sửa)
// - Delete (xóa)
// - Fetch (lấy danh sách từ server)

// ============================
// 📁 Cấu trúc thư mục
// ============================
// src/
// ├── app/
// │   └── store.js
// ├── features/
// │   └── todos/
// │       ├── todoSlice.js
// │       └── TodoList.jsx
// └── App.jsx

// ============================
// 🧠 Redux Slice – todoSlice.js
// ============================
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Giả lập gọi API
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
  return await res.json();
});

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, title } = action.payload;
      const todo = state.items.find(t => t.id === id);
      if (todo) todo.title = title;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = "Lỗi khi fetch dữ liệu!";
      });
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;

// ============================
// ⚙️ Store – store.js
// ============================
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

// ============================
// 📦 Component sử dụng – TodoList.jsx
// ============================
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  editTodo,
} from "./todoSlice";

export default function TodoList() {
  const [newTitle, setNewTitle] = useState("");
  const todos = useSelector(state => state.todos.items);
  const loading = useSelector(state => state.todos.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAdd = () => {
    const newTodo = {
      id: Date.now(),
      title: newTitle,
      completed: false,
    };
    dispatch(addTodo(newTodo));
    setNewTitle("");
  };

  const handleEdit = (id) => {
    const updatedTitle = prompt("Nhập tiêu đề mới:");
    if (updatedTitle) {
      dispatch(editTodo({ id, title: updatedTitle }));
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="Nhập việc cần làm"
      />
      <button onClick={handleAdd}>Thêm</button>
      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}
              <button onClick={() => handleEdit(todo.id)}>Sửa</button>
              <button onClick={() => handleDelete(todo.id)}>Xóa</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ============================
// 🔗 App.jsx
// ============================
import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import TodoList from "./features/todos/TodoList";

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;

// ============================
// ✅ Ghi chú cuối cùng
// ============================
// - Đây là một ví dụ đầy đủ để bạn CRUD danh sách từ API hoặc local state.
// - Có thể áp dụng cho: todo, danh sách bài viết, danh sách sản phẩm...
// - Nếu cần pagination, filter, sort... bạn chỉ cần mở rộng thêm reducer & UI.
