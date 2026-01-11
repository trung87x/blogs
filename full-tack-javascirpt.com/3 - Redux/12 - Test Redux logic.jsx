// =======================================================
// Ngữ cảnh #12: Test Redux logic
// =======================================================

// 🎯 Mục tiêu:
// - Đảm bảo logic reducer và thunk hoạt động đúng như mong đợi
// - Dễ bảo trì khi code phức tạp hơn
// - Hạn chế bug do thay đổi logic

// =======================================================
// 1. Cấu trúc đề xuất
// =======================================================

// src/
// ├── features/
// │   └── counter/
// │       ├── counterSlice.js
// │       └── counter.test.js   <== test ở đây

// =======================================================
// 2. Ví dụ reducer đơn giản: counterSlice.js
// =======================================================
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

// =======================================================
// 3. Viết test cho reducer: counter.test.js
// =======================================================
import counterReducer, { increment, decrement } from "./counterSlice";

describe("counter reducer", () => {
  it("should return initial state", () => {
    expect(counterReducer(undefined, {})).toEqual({ value: 0 });
  });

  it("should handle increment", () => {
    expect(counterReducer({ value: 0 }, increment())).toEqual({ value: 1 });
  });

  it("should handle decrement", () => {
    expect(counterReducer({ value: 1 }, decrement())).toEqual({ value: 0 });
  });
});

// =======================================================
// 4. Test thunk (nâng cao): fetch data async
// =======================================================
// slice: postsSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetch", async () => {
  const res = await axios.get("/api/posts");
  return res.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: { items: [], status: "idle" },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default postsSlice.reducer;

// =======================================================
// 5. Test thunk bằng mocking API: posts.test.js
// =======================================================
import reducer, { fetchPosts } from "./postsSlice";
import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

describe("posts thunk", () => {
  it("should fetch posts and update state", async () => {
    mock.onGet("/api/posts").reply(200, [{ id: 1, title: "Post A" }]);

    const store = configureStore({
      reducer: reducer,
      middleware: [thunk],
    });

    await store.dispatch(fetchPosts());

    const state = store.getState();
    expect(state.items).toEqual([{ id: 1, title: "Post A" }]);
    expect(state.status).toBe("succeeded");
  });
});

// =======================================================
// ✅ Ghi chú:
// =======================================================
// - Unit test reducer: không cần mock, chạy nhanh, dễ viết
// - Test thunk cần mock API hoặc dùng thư viện `msw`, `axios-mock-adapter`
// - Có thể tách store test riêng để không ảnh hưởng app thật
// - Hữu ích cho dự án lớn hoặc khi dùng Redux nhiều logic xử lý

// 🧪 Testing giúp bạn tự tin refactor và debug hiệu quả.
