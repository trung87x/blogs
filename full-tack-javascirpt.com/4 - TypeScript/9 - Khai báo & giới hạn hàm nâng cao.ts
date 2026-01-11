// ==========================
// 🧠 Model 9: Khai báo & giới hạn hàm nâng cao
// Mục tiêu: Định nghĩa hàm chính xác về input/output, giới hạn cách dùng sai
// ==========================

// Ngữ cảnh: Viết hàm utility để xử lý dữ liệu linh hoạt

// Cách 1: Hàm có kiểu tham số và kiểu trả về rõ ràng
function multiply(a: number, b: number): number {
  return a * b;
}

// multiply('2', 3); // ⛔ lỗi: '2' không phải number

// ==========================
// Cách 2: Hàm có callback — cần định nghĩa kiểu tham số rõ

function withLogger(fn: (msg: string) => void) {
  fn('Đang xử lý...');
}

withLogger((text) => {
  console.log('Log:', text); // ✅ đúng kiểu
});

// ==========================
// Cách 3: Generic Function – kiểu dữ liệu linh hoạt nhưng vẫn an toàn

function identity<T>(value: T): T {
  return value;
}

const a = identity<string>('hello'); // T inferred là string
const b = identity<number>(42); // T inferred là number

// ==========================
// Cách 4: Hàm overload – nhiều kiểu đầu vào khác nhau

function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string {
  if (typeof value === 'string') return value.toUpperCase();
  return value.toFixed(2);
}

const s1 = format('hello'); // 'HELLO'
const s2 = format(3.14159); // '3.14'
// const s3 = format(true); // ⛔ lỗi: không đúng overload

// ==========================
// Cách 5: Dùng infer để trích xuất kiểu từ hàm

type Return<T> = T extends (...args: any[]) => infer R ? R : never;

function getUser() {
  return { id: 'u1', name: 'Alice' };
}

type GetUserReturn = Return<typeof getUser>; // { id: string; name: string }

// ==========================
// Ngữ cảnh nâng cao: Hàm nhận callback và đảm bảo đầu ra đúng kiểu

function mapArray<T, U>(arr: T[], mapper: (item: T) => U): U[] {
  return arr.map(mapper);
}

const nums = [1, 2, 3];
const doubled = mapArray(nums, (n) => n * 2); // number[]

const names = ['Alice', 'Bob'];
const lengths = mapArray(names, (s) => s.length); // number[]
