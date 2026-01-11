// ==========================
// 🧠 Model 7: Bắt lỗi logic từ sớm (compile time)
// Mục tiêu: Phát hiện lỗi sớm khi lập trình thay vì khi chạy ứng dụng
// ==========================

// Ngữ cảnh: Truyền dữ liệu giữa các phần trong hệ thống

type User = {
  id: string;
  name: string;
  age: number;
};

// Hàm xử lý dữ liệu người dùng
function printUser(user: User): void {
  console.log(`ID: ${user.id}, Tên: ${user.name}, Tuổi: ${user.age}`);
}

// ✅ Truyền đúng kiểu
const u1 = { id: '001', name: 'Trung', age: 28 };
printUser(u1);

// ❌ Thiếu thuộc tính sẽ báo lỗi ngay khi biên dịch
/*
const u2 = { id: '002', name: 'Minh' }; // thiếu age
printUser(u2); // ⛔ lỗi compile time
*/

// ❌ Sai kiểu dữ liệu cũng báo lỗi
/*
const u3 = { id: '003', name: 'Linh', age: 'hai lăm' }; // age sai kiểu
printUser(u3); // ⛔ lỗi compile time
*/

// ==========================
// Ngữ cảnh: React component nhận props

type ProfileProps = {
  username: string;
  age: number;
};

const Profile = (props: ProfileProps) => {
  return (
    <div>
      <p>{props.username}</p>
      <p>{props.age} tuổi</p>
    </div>
  );
};

// ✅ Dùng đúng props
<Profile username="Alice" age={22} />;

// ❌ Truyền thiếu props hoặc sai kiểu => báo lỗi ngay
/*
<Profile username="Bob" /> // ⛔ thiếu age
<Profile username="Bob" age="hai mươi" /> // ⛔ sai kiểu age
*/

// ==========================
// Ngữ cảnh: Switch case không đầy đủ => phát hiện thiếu xử lý

type Shape = { type: 'circle'; radius: number } | { type: 'square'; side: number };

function getArea(shape: Shape): number {
  switch (shape.type) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    // ❌ quên xử lý 'square' => TypeScript sẽ cảnh báo nếu dùng exhaustive check
    default:
      const _exhaustive: never = shape; // ⛔ báo lỗi nếu còn case chưa xử lý
      return _exhaustive;
  }
}
