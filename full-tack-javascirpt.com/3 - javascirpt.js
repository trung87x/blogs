// 📘 11 NGỮ CẢNH JAVASCRIPT NỀN TẢNG

// 1. Nhập và hiển thị tên
let name = prompt("Tên bạn là gì?");
alert("Xin chào, " + name);

// 2. Nhập 2 số và tính tổng
let a = Number(prompt("Nhập số 1"));
let b = Number(prompt("Nhập số 2"));
alert("Tổng là " + (a + b));

// 3. Kiểm tra số chẵn/lẻ
let n = Number(prompt("Nhập 1 số"));
if (n % 2 === 0) alert("Số chẵn");
else alert("Số lẻ");

// 4. Lặp in ra 1 đến 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 5. Tạo hàm chào người dùng
function greet(name) {
  return "Chào " + name;
}
console.log(greet("Trung"));

// 6. Lọc số dương trong mảng
let arr = [-1, 3, 0, 5, -2];
let positive = arr.filter(n => n > 0);
console.log(positive); // [3, 5]

// 7. Đổi màu khi click nút (dùng trong HTML)
document.querySelector("button").onclick = () => {
  document.body.style.background = "lightblue";
};

// 8. Lấy nội dung từ ô input (dùng trong HTML)
function sayHi() {
  let name = document.getElementById("nameInput").value;
  alert("Hi " + name);
}

// 9. Gọi API giả lập
async function getData() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await res.json();
  console.log(data);
}
getData();

// 10. Tạo object và in thuộc tính
let user = { name: "Trung", age: 30 };
console.log(user.name); // "Trung"

// 11. Duyệt qua mảng
let names = ["An", "Bình", "Chi"];
names.forEach(n => console.log("Hi " + n));