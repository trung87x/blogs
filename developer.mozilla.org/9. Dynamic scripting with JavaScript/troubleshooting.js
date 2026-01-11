// ==========================
// Introduction to Troubleshooting
// ==========================

// 1. Syntax Error - sai tên hàm (addeventListener)
const guessSubmit = document.querySelector(".guessSubmit");
guessSubmit.addEventListener("click", checkGuess); // ✅ sửa đúng tên hàm

// 2. Syntax Error - sai selector
const lowOrHi = document.querySelector(".lowOrHi"); // ✅ đúng: có dấu chấm cho class

// 3. Logic Error - sai công thức random
// Sai: luôn ra 1
let randomNumberWrong = Math.floor(Math.random()) + 1;
console.log("Sai:", randomNumberWrong); // luôn là 1

// Đúng: từ 1 đến 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Đúng:", randomNumber); // số từ 1 đến 100

// 4. Logic Error - dùng = thay vì ===
let userGuess = 50;
randomNumber = 50;

if (userGuess === randomNumber) {
  console.log("✅ Đoán đúng!");
}

if (userGuess = randomNumber) {
  console.log("❌ Luôn đúng vì dùng = (gán), không phải === (so sánh)");
}

// 5. SyntaxError - thiếu )
// console.log("Xin chao"; // ❌ lỗi thiếu )
console.log("Xin chao"); // ✅ đúng

// 6. SyntaxError - thiếu }
function sayHello() {
  console.log("Hello!");
} // ✅ có đủ { }

// 7. SyntaxError - lỗi chuỗi xuống dòng
// console.log("Xin chao
// ban"); // ❌ lỗi xuống dòng trong chuỗi
console.log("Xin chao\nban"); // ✅ dùng \n để xuống dòng hợp lệ

// 8. Kiểm tra phần tử DOM không tồn tại
const maybeElement = document.querySelector(".khongTonTai");
console.log(maybeElement); // null nếu không tìm thấy

if (maybeElement === null) {
  console.warn("Phần tử không tồn tại!");
}

// 9. Dùng console.log để kiểm tra giá trị trong hàm
function checkGuess() {
  let guess = 42; // ví dụ giả định
  console.log("Giá trị đoán:", guess);
}

// 10. Gợi ý: Khi gặp lỗi → mở console → đọc dòng lỗi → tra cứu trên MDN nếu cần
