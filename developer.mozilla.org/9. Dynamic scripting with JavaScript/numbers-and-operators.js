// ==========================
// Introduction to Numbers and Operators
// ==========================

// ===== Kiểu dữ liệu số =====
const myInt = 5;            // Số nguyên
const myFloat = 6.667;      // Số thập phân

console.log(typeof myInt);   // "number"
console.log(typeof myFloat); // "number"

// ===== Làm tròn số =====
const lotsOfDecimal = 1.7665849587;
console.log(lotsOfDecimal.toFixed(2)); // "1.77"

// ===== Chuyển chuỗi sang số =====
let myNumber = "74";
myNumber += 3;                  // "743" vì nối chuỗi
myNumber = Number(myNumber);   // 743 thành số
console.log(myNumber + 3);     // 746

// ===== Toán tử số học =====
// Cộng, Trừ, Nhân, Chia, Chia lấy dư, Lũy thừa
console.log(10 + 7);     // 17
console.log(9 * 8);      // 72
console.log(60 % 7);     // 4
console.log(5 ** 2);     // 25
console.log(Math.pow(5, 2)); // 25

// ===== Biến với toán tử số học =====
const num1 = 10;
const num2 = 50;

console.log(num1 ** 3);      // 1000
console.log(num2 / num1);    // 5
console.log(5 + 10 * 3);     // 35 (nhân trước)
console.log((num2 % 9) * num1); // 50
console.log(num2 + num1 / 8 + 2); // 53.25

// ===== Độ ưu tiên toán tử (Operator precedence) =====
console.log((num2 + num1) / (8 + 2)); // 6

// ===== Tăng / giảm giá trị biến =====
let count = 4;
count++;         // tăng 1, hậu tố: giá trị hiện tại, rồi mới tăng
console.log(count); // 5

let total = 6;
--total;         // tiền tố: giảm rồi mới trả về
console.log(total); // 5

// ===== Toán tử gán (Assignment operators) =====
let x = 10;
x += 5;  // x = x + 5
x -= 2;  // x = x - 2
x *= 3;  // x = x * 3
x /= 2;  // x = x / 2

// ===== Toán tử so sánh (Comparison operators) =====
console.log(5 === 5);     // true (giá trị và kiểu giống)
console.log(5 !== 6);     // true
console.log(10 > 5);      // true
console.log(10 < 5);      // false
console.log(5 >= 5);      // true
console.log(3 <= 2);      // false

// ===== Toggle ví dụ (ẩn/hiện máy) =====
// (Giả lập trong HTML: <button>Start machine</button> <p>The machine is stopped.</p>)
const btn = { textContent: "Start machine" };
const txt = { textContent: "The machine is stopped." };

function updateBtn() {
  if (btn.textContent === "Start machine") {
    btn.textContent = "Stop machine";
    txt.textContent = "The machine has started!";
  } else {
    btn.textContent = "Start machine";
    txt.textContent = "The machine is stopped.";
  }
}

// Gọi hàm để kiểm thử toggle
updateBtn();
console.log(btn.textContent); // "Stop machine"
console.log(txt.textContent); // "The machine has started!"

// ===== Các ví dụ luyện tập với canvas (ý tưởng logic, không cần Canvas thật) =====
let x1 = 43 + 7;      // 50
let y1 = 25 * 3;      // 75
let x2 = 503 % 253;   // ví dụ ra 250
let y2 = (500 - 200) / 2; // 150
let x3 = 4; x3 *= 50; // 200
let y3 = 50 * 3; y3 += 50; // 200

console.log(x1, y1, x2, y2, x3, y3);

// ===== Hàm tham khảo nhanh =====
/*
  Number(value)       => Chuyển chuỗi thành số
  toFixed(n)          => Làm tròn số với n chữ số thập phân
  Math.random()       => Số ngẫu nhiên từ 0 đến < 1
  Math.floor(x)       => Làm tròn xuống
  Math.ceil(x)        => Làm tròn lên
  ++, --              => Tăng / giảm 1 đơn vị
  +=, -=, *=, /=      => Gán với phép toán
  ===, !==            => So sánh nghiêm ngặt (giá trị và kiểu)
*/

