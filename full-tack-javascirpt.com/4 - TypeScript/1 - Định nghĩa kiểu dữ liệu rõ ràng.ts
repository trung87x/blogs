// ==========================
// 🧠 Model 1: Định nghĩa kiểu dữ liệu rõ ràng
// Mục tiêu: Tạo và quản lý kiểu dữ liệu có tên, dễ tái sử dụng và dễ đọc
// ==========================

// Ngữ cảnh: Quản lý thông tin người dùng trong hệ thống

// Cách 1: Dùng type để định nghĩa dữ liệu
type UserRole = 'admin' | 'editor' | 'viewer';

type User = {
  name: string;
  age: number;
  role: UserRole;
};

// Cách 2: Dùng interface để định nghĩa object
interface IUser {
  name: string;
  age: number;
  role: 'admin' | 'editor' | 'viewer';
}

// Cách 3: Dùng enum để đảm bảo role có giá trị cố định
enum Role {
  Admin = 'admin',
  Editor = 'editor',
  Viewer = 'viewer',
}

interface IUserWithEnum {
  name: string;
  age: number;
  role: Role;
}

// ==========================
// Kiểm tra: Áp dụng kiểu đã định nghĩa
// ==========================

const user1: User = {
  name: 'Alice',
  age: 30,
  role: 'admin', // đúng kiểu từ type
};

const user2: IUserWithEnum = {
  name: 'Bob',
  age: 25,
  role: Role.Editor, // dùng enum
};
