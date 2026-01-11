// ==========================
// Introduction to Variables
// ==========================

// 1. KHAI BÁO BIẾN
// let myName;        // Khai báo biến chưa có giá trị -> undefined
// let myAge = 25;    // Khai báo và gán giá trị

// 2. KHỞI TẠO VÀ GÁN GIÁ TRỊ
myName = "Chris";  // Gán giá trị
myAge = 30;        // Cập nhật giá trị

// 3. HẰNG SỐ (CONST) - phải có giá trị ban đầu, không được gán lại
const PI = 3.14;   // Được
// const rate;     // ❌ Sai: phải gán giá trị ngay khi khai báo

// 4. CONST VỚI OBJECT - có thể thay đổi nội dung bên trong
const bird = { species: "Kestrel" };
bird.species = "Striated Caracara";  // ✅ OK

// 5. QUY TẮC ĐẶT TÊN BIẾN
// ✅ Tên hợp lệ
let age;
let myAge;
let initialColor;

// ❌ Tên không hợp lệ
// let 1stValue;
// let var;
// let MYAGE; // hợp lệ nhưng không theo quy ước

// Gợi ý: dùng camelCase, tên rõ ràng, dễ hiểu

// 6. CÁC KIỂU DỮ LIỆU THƯỜNG GẶP

// a. Number
let score = 99;
let temperature = 36.6;

// b. String
let greeting = "Hello, world!";
let name = 'Alice';

// c. Boolean
let isAlive = true;
let test = 6 < 3; // false

// d. Array
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]); // "banana"

// e. Object
let person = {
  name: "Bob",
  age: 40
};
console.log(person.name); // "Bob"

// 7. typeof — kiểm tra kiểu dữ liệu
let myNumber = "500";
console.log(typeof myNumber); // "string"
myNumber = 500;
console.log(typeof myNumber); // "number"

// 8. let vs var
// var hỗ trợ hoisting (kéo lên trên)
function logName() {
  console.log(myName); // "Chris"
}
myName = "Chris";
logName();
var myName;

// let thì không hoisting được, sẽ báo lỗi nếu dùng trước khai báo

// 9. NGUYÊN TẮC SỬ DỤNG let/const
// => Dùng const khi không cần thay đổi giá trị
// => Dùng let khi cần gán lại giá trị

// == TEST NHANH ==
let clicks = 0;
document.querySelector("#myButton").onclick = () => {
  clicks++;
  document.querySelector("#myHeading").textContent = `${clicks} lần nhấn`;
};
