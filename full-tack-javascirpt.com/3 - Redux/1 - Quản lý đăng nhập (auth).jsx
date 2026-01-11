// 🧠 [Redux #1] Quản lý đăng nhập (auth)
// --------------------------------------
// MODEL: Xác thực người dùng (user, token, trạng thái login/logout)
// CONTROLLER: Redux slice (authSlice), actions (login, logout), selector (state.auth)

// --------------------------------------
// 📄 authSlice.js
// --------------------------------------
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

// --------------------------------------
// 📄 store.js
// --------------------------------------
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer
  }
});

export default store;

// --------------------------------------
// 📄 LoginStatus.jsx
// --------------------------------------
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './authSlice';

function LoginStatus() {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector(state => state.auth);

  const handleLogin = () => {
    dispatch(login({ name: 'Trung Đinh', email: 'trung@example.com' }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {isAuthenticated ? (
        <>
          <p>Xin chào, {user.name}!</p>
          <button onClick={handleLogout}>Đăng xuất</button>
        </>
      ) : (
        <>
          <p>Chưa đăng nhập.</p>
          <button onClick={handleLogin}>Đăng nhập</button>
        </>
      )}
    </div>
  );
}

export default LoginStatus;

// --------------------------------------
// 📄 index.js
// --------------------------------------
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import LoginStatus from './LoginStatus';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <LoginStatus />
  </Provider>
);
