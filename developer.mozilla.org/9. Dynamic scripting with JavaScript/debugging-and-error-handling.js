// ==========================
// Introduction to debugging and error handling
// ==========================

// 1. Ví dụ lỗi thường gặp khi dùng fetch mà không chờ Promise
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL); // Sai: fetch trả về Promise
console.error(`Response value: ${response}`); // In ra [object Promise]

// Đúng: dùng then() hoặc await để xử lý kết quả
fetch(requestURL)
  .then((res) => res.json())
  .then((data) => {
    populateHeader(data);
    populateHeroes(data);
  })
  .catch((err) => console.error("Fetch error:", err));

function populateHeader(obj) {
  console.log("Header:", obj.squadName);
}

function populateHeroes(obj) {
  console.log("Heroes:", obj.members);
}

// 2. Gỡ lỗi bằng console
const debugValue = 123;
console.log("Debug log:", debugValue);
console.error("Something went wrong!");

// 3. Thử-catch: bắt lỗi rõ ràng
function inchesToMeters(num) {
  if (typeof num === "number" && !isNaN(num)) {
    const mVal = (num * 2.54) / 100;
    return mVal.toFixed(2);
  } else {
    throw new Error("A number was not provided. Please correct the input.");
  }
}

try {
  const height = 70; // thử thay bằng "70", NaN, hoặc bỏ dòng này
  console.log(inchesToMeters(height));
} catch (error) {
  console.error("Caught error:", error);
  console.log("Please enter a valid number.");
}

// 4. Feature detection ví dụ
if ("geolocation" in navigator) {
  console.log("Geolocation is supported.");
  // navigator.geolocation.getCurrentPosition((position) => console.log(position));
} else {
  console.log("Geolocation not supported.");
}

// 5. Ghi chú:
// - Dùng ESLint hoặc plugin trình soạn thảo để cảnh báo lỗi cú pháp
// - Trình duyệt có tab Debugger giúp đặt breakpoint, xem call stack, scope
// - console.log / error rất hữu ích để in giá trị và lần theo lỗi
// - Chú ý đặc biệt khi xử lý Promise hoặc async/await
