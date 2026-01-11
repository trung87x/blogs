// ==========================
// Introduction to network requests
// ==========================

// 1. Fetch nội dung văn bản đơn giản
const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});

function updateDisplay(verse) {
  const file = verse.replace(" ", "").toLowerCase() + ".txt";
  fetch(file)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.text();
    })
    .then((text) => {
      poemDisplay.textContent = text;
    })
    .catch((err) => {
      poemDisplay.textContent = `Could not fetch verse: ${err}`;
    });
}

// Tải đoạn đầu tiên mặc định
updateDisplay("Verse 1");
verseChoose.value = "Verse 1";

// 2. Fetch file JSON và xử lý
fetch("products.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((json) => initialize(json))
  .catch((err) => console.error(`Fetch problem: ${err.message}`));

function initialize(data) {
  console.log("Loaded JSON:", data);
  // Xử lý dữ liệu hiển thị sản phẩm tại đây...
}

// 3. Fetch hình ảnh với blob
function fetchBlob(url, product) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.blob();
    })
    .then((blob) => showProduct(blob, product))
    .catch((err) => console.error(`Fetch problem: ${err.message}`));
}

function showProduct(blob, product) {
  const objectURL = URL.createObjectURL(blob);
  const image = document.createElement("img");
  image.src = objectURL;
  image.alt = product;
  document.body.appendChild(image);
}

// 4. XMLHttpRequest cũ (không khuyến khích)
const request = new XMLHttpRequest();
try {
  request.open("GET", "products.json");
  request.responseType = "json";
  request.addEventListener("load", () => initialize(request.response));
  request.addEventListener("error", () => console.error("XHR error"));
  request.send();
} catch (e) {
  console.error(`XHR error ${request.status}`);
}
