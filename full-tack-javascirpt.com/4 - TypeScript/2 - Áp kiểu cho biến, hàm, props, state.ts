// ==========================
// 🧠 Model 2: Áp kiểu cho biến, hàm, props, state
// Mục tiêu: Đảm bảo biến, hàm, props, state có kiểu rõ ràng để tránh lỗi khi truyền và nhận dữ liệu
// ==========================

// Ngữ cảnh: Xây dựng hàm tính thuế thu nhập cho nhân viên

// Áp kiểu cho biến
let salary: number = 1000;
let employeeName: string = 'Alice';
let isActive: boolean = true;

// Áp kiểu cho hàm
function calculateTax(income: number, rate: number): number {
  return income * rate;
}

const tax = calculateTax(salary, 0.1); // tax: number

// ==========================
// Trong React: Áp kiểu cho props và state
// ==========================

import React, { useState } from 'react';

// Kiểu dữ liệu cho props
type UserProps = {
  name: string;
  age: number;
};

const UserCard: React.FC<UserProps> = ({ name, age }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{age} tuổi</p>
    </div>
  );
};

// Áp kiểu cho state
const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Tăng</button>
    </div>
  );
};
