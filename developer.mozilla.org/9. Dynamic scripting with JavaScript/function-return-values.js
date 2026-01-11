// ==========================
// Introduction to Function Return Values
// ==========================

// 1. Ví dụ với hàm có trả về giá trị (return) ---
const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString); // "The weather is warm"

// 2. Hàm không có giá trị trả về (void) ---
function displayMessage(msg) {
  alert(msg);
}
// Không có `return`, nên hàm này chỉ thực hiện hành động

// 3. Hàm trả về giá trị đơn giản ---
function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

// 4. Hàm trả về giá trị có xử lý logic ---
function factorial(num) {
  if (num < 0) return undefined;
  if (num === 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}

// 5. Hàm trả về giá trị từ tính toán ngẫu nhiên ---
function random(number) {
  return Math.floor(Math.random() * number);
}

// 6. Dùng hàm có return trong hàm khác hoặc biểu thức ---
const width = 800;
const height = 600;
console.log(`Random (0–${width}):`, random(width));

// 7. Lắng nghe input thay đổi và hiển thị kết quả ---
const input = document.querySelector("input");
const para = document.querySelector("p");

input.addEventListener("change", () => {
  const num = parseFloat(input.value);
  if (isNaN(num)) {
    para.textContent = "You need to enter a number!";
  } else {
    para.textContent = `${num} squared is ${squared(num)}. `;
    para.textContent += `${num} cubed is ${cubed(num)}. `;
    para.textContent += `${num} factorial is ${factorial(num)}. `;
  }
});

// 8. Bài tập mở rộng – Viết thêm hàm ---
function squareRoot(num) {
  return Math.sqrt(num);
}

function cubeRoot(num) {
  return Math.cbrt(num);
}

function circleCircumference(radius) {
  return 2 * Math.PI * radius;
}
