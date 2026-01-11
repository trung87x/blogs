// ==========================
// Introduction to Functions
// ==========================

// 1. Function declaration (khai báo hàm)
function sayHello(name = "bạn") {
  console.log(`Xin chào, ${name}!`);
}
sayHello(); // "Xin chào, bạn!"
sayHello("Lan"); // "Xin chào, Lan!"


// 2. Function expression (biểu thức hàm)
const greet = function (name) {
  return `Chào ${name}`;
};
console.log(greet("Minh")); // "Chào Minh"


// 3. Arrow function (hàm mũi tên)
const square = (x) => x * x;
console.log(square(4)); // 16

const sayHi = name => console.log(`Hi ${name}`);
sayHi("Ngọc"); // "Hi Ngọc"


// 4. Anonymous function (hàm vô danh – không tên, thường dùng làm callback)
setTimeout(function () {
  console.log("Đợi 1 giây...");
}, 1000);


// 5. Arrow function dùng làm callback
setTimeout(() => {
  console.log("Đợi tiếp 1 giây nữa...");
}, 1000);


// 6. Function có nhiều tham số
function sum(a, b) {
  return a + b;
}
console.log(sum(3, 5)); // 8


// 7. Function gọi function khác (lồng nhau)
function randomInt(max) {
  return Math.floor(Math.random() * max);
}

function draw() {
  console.log("Vẽ hình tròn tại:", randomInt(100), randomInt(100));
}
draw();


// 8. Function là phương thức của object (method)
const person = {
  name: "An",
  greet() {
    console.log(`Tôi tên là ${this.name}`);
  },
};
person.greet(); // "Tôi tên là An"


// 9. Function và phạm vi biến (scope)
const x = 10;

function showX() {
  console.log(x); // Có thể truy cập biến toàn cục x
}
showX();

function innerScope() {
  const y = 5;
  console.log(y); // OK
}
innerScope();
// console.log(y); // ❌ Lỗi: y không tồn tại ngoài hàm


// 10. Callback function
function processUserInput(callback) {
  const name = "Thảo";
  callback(name);
}

processUserInput(function (name) {
  console.log(`Xin chào ${name}`);
});


// 11. Arrow function + array map
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
