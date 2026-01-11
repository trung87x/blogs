// ==========================
// Introduction to Strings
// ==========================

// Khai báo chuỗi với dấu nháy đôi
const string = "The revolution will not be televised.";
console.log(string);

// Nếu không dùng dấu nháy hoặc thiếu dấu nháy sẽ lỗi
// const badString1 = This is a test;       // lỗi: thiếu dấu nháy
// const badString2 = 'This is a test;      // lỗi: thiếu dấu nháy kết thúc
// const badString3 = This is a test';      // lỗi: thiếu dấu nháy mở

// Gán giá trị của biến string cho biến khác
const badString = string;
console.log(badString);

// Khai báo chuỗi với dấu nháy đơn, dấu nháy kép và backticks (template literals)
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

// Lỗi nếu dùng dấu nháy không khớp
// const badQuotes = 'This is not allowed!";

// Template literals cho phép nhúng biến và biểu thức, cũng có thể viết nhiều dòng
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // Hello, Chris

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // Hello, how are you?

// Dùng prompt nhập tên và hiển thị lời chào
const button = document.querySelector("button");
function greet() {
  const name = prompt("What is your name?");
  const greetingElem = document.querySelector("#greeting");
  greetingElem.textContent = `Hello ${name}, nice to see you!`;
}
button.addEventListener("click", greet);

// Nối chuỗi với toán tử cộng (+)
const greeting2 = "Hello";
const name2 = "Chris";
console.log(greeting2 + ", " + name2); // Hello, Chris

// Template literals cho code dễ đọc hơn
console.log(`${greeting2}, ${name2}`); // Hello, Chris

// Nhúng biểu thức trong template literals
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${(score / highestScore) * 100}%.`;
console.log(output);

// Chuỗi nhiều dòng với template literals
const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

// Chuỗi nhiều dòng với \n
const newline2 = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline2);

// Chèn dấu nháy trong chuỗi bằng cách dùng dấu nháy khác hoặc escape
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;
const bigmouth = 'I\'ve got no right to take my place…';
console.log(goodQuotes1);
console.log(goodQuotes2);
console.log(bigmouth);

// Nối chuỗi với số tự động chuyển thành chuỗi
const name3 = "Front ";
const number = 242;
console.log(name3 + number); // Front 242

// Chuyển đổi chuỗi thành số
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum); // number

// Chuyển đổi số thành chuỗi
const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2); // string
