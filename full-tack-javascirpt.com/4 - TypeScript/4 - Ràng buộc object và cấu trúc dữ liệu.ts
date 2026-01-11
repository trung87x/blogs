// ==========================
// 🧠 Model 4: Ràng buộc object và cấu trúc dữ liệu
// Mục tiêu: Kiểm soát chặt chẽ cấu trúc dữ liệu của object để tránh sai sót
// ==========================

// Ngữ cảnh: Xử lý thông tin sản phẩm trong kho

// Dùng interface để ràng buộc cấu trúc sản phẩm
interface Product {
  id: string;
  name: string;
  price: number;
  inStock?: boolean; // thuộc tính tùy chọn
  readonly sku: string; // không được thay đổi sau khi khởi tạo
}

// ✅ Khởi tạo đúng
const p1: Product = {
  id: 'p001',
  name: 'Laptop',
  price: 1500,
  sku: 'SKU-LAP-001',
};

// ❌ Gán sai kiểu
/*
const p2: Product = {
  id: 'p002',
  name: 'Phone',
  price: '1000', // ⛔ lỗi: sai kiểu number
  sku: 'SKU-PHO-002',
};
*/

// ❌ Gán lại `readonly` sẽ lỗi
/*
p1.sku = 'NEW-SKU'; // ⛔ lỗi: không thể gán lại vì là readonly
*/

// ==========================
// Sử dụng Record để ràng buộc dạng map
// ==========================

// Ngữ cảnh: Đếm số lượng mỗi sản phẩm theo mã

const productCount: Record<string, number> = {
  'p001': 10,
  'p002': 5,
  'p003': 0,
};

// ❌ Gán sai kiểu
/*
const invalidProductCount: Record<string, number> = {
  'p001': 'mười', // ⛔ lỗi: phải là number
};
*/

// ==========================
// Kết hợp optional + Record
// ==========================

// Ngữ cảnh: Mỗi người dùng có thể hoặc không có avatar

type UserProfile = {
  username: string;
  avatarUrl?: string; // optional
};

const userA: UserProfile = {
  username: 'trung87x',
};

const userB: UserProfile = {
  username: 'admin',
  avatarUrl: 'https://img.com/avatar.png',
};
