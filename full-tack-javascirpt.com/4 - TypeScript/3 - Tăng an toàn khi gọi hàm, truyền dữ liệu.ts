// ==========================
// 🧠 Model 3: Tăng an toàn khi gọi hàm, truyền dữ liệu
// Mục tiêu: Tránh lỗi runtime nhờ kiểm tra kiểu dữ liệu khi truyền biến hoặc gọi hàm
// ==========================

// Ngữ cảnh: Gửi dữ liệu đơn hàng từ form nhập liệu

type Order = {
  productId: string;
  quantity: number;
};

// Hàm xử lý logic tạo đơn hàng
function createOrder(order: Order): void {
  console.log(`Đã tạo đơn hàng cho sản phẩm ${order.productId}, số lượng ${order.quantity}`);
}

// ✅ Truyền đúng kiểu
const orderA: Order = {
  productId: 'sp-001',
  quantity: 3,
};

createOrder(orderA); // OK

// ❌ Truyền sai kiểu — sẽ bị TypeScript bắt lỗi khi biên dịch
const orderB = {
  productId: 'sp-002',
  quantity: 'nhiều', // ❌ lỗi: 'nhiều' không phải là number
};

// createOrder(orderB); // ⛔ TypeScript báo lỗi ngay từ IDE / compile-time

// ==========================
// Lợi ích khi dùng TypeScript:
// - IDE hỗ trợ autocomplete (gợi ý thuộc tính, kiểu)
// - Không truyền thiếu hoặc sai tên thuộc tính
// - Tránh lỗi không rõ ràng khi chạy chương trình
// ==========================

// Ngữ cảnh bổ sung: Hàm nhận callback có kiểu rõ ràng

function processUser(callback: (name: string, age: number) => void) {
  callback('Bob', 28);
}

// ✅ Đúng kiểu
processUser((name, age) => {
  console.log(`${name} - ${age}`);
});

// ❌ Sai kiểu callback — sẽ bị báo lỗi
/*
processUser((name, active) => {
  // ⛔ lỗi: 'active' phải là number chứ không phải boolean
});
*/
