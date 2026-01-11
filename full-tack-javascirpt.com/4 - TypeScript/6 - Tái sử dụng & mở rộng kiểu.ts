// ==========================
// 🧠 Model 6: Tái sử dụng & mở rộng kiểu
// Mục tiêu: Không lặp lại định nghĩa kiểu, mở rộng và tùy biến kiểu linh hoạt
// ==========================

// Ngữ cảnh: Hệ thống người dùng có thể là Admin hoặc Khách

// Định nghĩa kiểu gốc
interface BaseUser {
  id: string;
  name: string;
  email: string;
}

// Mở rộng kiểu dùng `extends`
interface AdminUser extends BaseUser {
  role: 'admin';
  permissions: string[];
}

interface GuestUser extends BaseUser {
  role: 'guest';
  accessToken: string;
}

// ==========================
// Sử dụng Partial<T> để tạo phiên bản có thể thiếu một số trường (thường dùng trong form)

type UpdateUserInput = Partial<BaseUser>;

const updateUser: UpdateUserInput = {
  email: 'new@email.com', // có thể chỉ cập nhật 1 field
};

// ==========================
// Sử dụng Pick<T, K> để chọn một vài field từ kiểu gốc

type UserPreview = Pick<BaseUser, 'id' | 'name'>;

const preview: UserPreview = {
  id: 'u01',
  name: 'Trung',
};

// ==========================
// Sử dụng Omit<T, K> để loại bỏ một vài field khỏi kiểu gốc

type UserWithoutEmail = Omit<BaseUser, 'email'>;

const userNoEmail: UserWithoutEmail = {
  id: 'u02',
  name: 'Ẩn danh',
};

// ==========================
// Dùng generic <T> để tạo kiểu linh hoạt

// Ngữ cảnh: Response trả về từ API

type ApiResponse<T> = {
  success: boolean;
  data: T;
};

type Product = {
  id: string;
  name: string;
  price: number;
};

const productResponse: ApiResponse<Product> = {
  success: true,
  data: {
    id: 'p001',
    name: 'Chuột không dây',
    price: 299,
  },
};

// ==========================
// Dùng generic function

function wrapInArray<T>(value: T): T[] {
  return [value];
}

const nums = wrapInArray<number>(5); // [5]
const names = wrapInArray<string>('Alice'); // ['Alice']
