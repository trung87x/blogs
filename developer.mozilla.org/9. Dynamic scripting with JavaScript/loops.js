// ==========================
// Introduction to Loops
// ==========================

// 1. Vòng lặp for cơ bản
for (let i = 0; i < 5; i++) {
  console.log("for loop:", i);
}

// 2. Vòng lặp for...of
const animals = ["Cat", "Dog", "Elephant"];
for (const animal of animals) {
  console.log("for...of:", animal);
}

// 3. Vòng lặp while
let j = 0;
while (j < 3) {
  console.log("while:", j);
  j++;
}

// 4. Vòng lặp do...while
let k = 0;
do {
  console.log("do...while:", k);
  k++;
} while (k < 2);

// 5. Sử dụng break trong vòng lặp
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log("break at:", i);
}

// 6. Sử dụng continue trong vòng lặp
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log("continue at:", i);
}

// 7. Duyệt mảng với map()
const names = ["Alice", "Bob", "Charlie"];
const upperNames = names.map(name => name.toUpperCase());
console.log("map():", upperNames);

// 8. Lọc phần tử với filter()
const filtered = names.filter(name => name.startsWith("A"));
console.log("filter():", filtered);

// 9. for loop với chỉ mục để xử lý khác nhau phần tử cuối cùng
const cats = ["Pete", "Biggles", "Jasmine"];
let sentence = "My cats are called ";
for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    sentence += `and ${cats[i]}.`;
  } else {
    sentence += `${cats[i]}, `;
  }
}
console.log("cats sentence:", sentence);

// 10. Countdown từ 10 đến 0
for (let i = 10; i >= 0; i--) {
  if (i === 10) {
    console.log("Countdown", i);
  } else if (i === 0) {
    console.log("Blast off!");
  } else {
    console.log(i);
  }
}
