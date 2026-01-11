// ==========================
// 🧠 Model 8: Xử lý bất đồng bộ có kiểm soát
// Mục tiêu: Đảm bảo các thao tác bất đồng bộ (fetch, xử lý chậm) có kiểu dữ liệu rõ ràng
// ==========================

// Ngữ cảnh: Gọi API lấy danh sách sản phẩm

type Product = {
  id: string;
  name: string;
  price: number;
};

// Hàm fetch trả về Promise<Product[]>
async function fetchProducts(): Promise<Product[]> {
  const res = await fetch('https://api.example.com/products');
  const data = await res.json();
  return data;
}

// Dùng async/await với kiểu rõ ràng
async function showProducts() {
  const products = await fetchProducts(); // products: Product[]
  products.forEach((p) => {
    console.log(`${p.name} - ${p.price}đ`);
  });
}

// ==========================
// Dùng ReturnType để tái sử dụng kiểu trả về từ một hàm

type FetchProductsReturn = ReturnType<typeof fetchProducts>; // Promise<Product[]>

// Ngữ cảnh: Định nghĩa kiểu cho dispatch trong Redux async thunk
// (giả sử fetchProducts là một thunk)

type ThunkResult = Awaited<ReturnType<typeof fetchProducts>>; // Product[]

// ==========================
// Ngữ cảnh: Hàm xử lý dữ liệu chậm (delay)

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runWithDelay() {
  console.log('Bắt đầu');
  await delay(1000); // đợi 1 giây
  console.log('Kết thúc sau 1s');
}

// ==========================
// Ngữ cảnh: Hàm callback trả về Promise
// Có thể gán kiểu trả về để bắt lỗi rõ hơn

async function saveUser(user: { name: string }): Promise<boolean> {
  if (!user.name) return false;
  await delay(500);
  return true;
}
