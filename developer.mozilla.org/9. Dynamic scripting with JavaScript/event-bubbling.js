// ==========================
// Introduction to event bubbling
// ==========================

// 1. Gán sự kiện vào phần tử cha
const output = document.querySelector("#output");
const container = document.querySelector("#container");
container.addEventListener("click", (e) => {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
});

// 2. Event bubbling – sự kiện lan truyền từ trong ra ngoài
const button = document.querySelector("button");
document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);

function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

// 3. Ngăn chặn sự lan truyền bằng stopPropagation()
const box = document.querySelector(".hidden");
const video = document.querySelector("video");
const btn = document.querySelector("button");

btn.addEventListener("click", () => box.classList.remove("hidden"));

video.addEventListener("click", (e) => {
  e.stopPropagation();
  video.play();
});

box.addEventListener("click", () => box.classList.add("hidden"));

// 4. Event capturing – sự kiện lan truyền từ ngoài vào trong
// Thêm { capture: true } để đổi hướng lan truyền
container.addEventListener("click", handleClick, { capture: true });
document.body.addEventListener("click", handleClick, { capture: true });

// 5. Event delegation – ủy quyền sự kiện từ con sang cha
function random(n) {
  return Math.floor(Math.random() * n);
}
function randomColor() {
  return `rgb(${random(255)} ${random(255)} ${random(255)})`;
}
const grid = document.querySelector("#container");
grid.addEventListener("click", (e) => {
  e.target.style.backgroundColor = randomColor();
});

// 6. Phân biệt target và currentTarget
document.body.addEventListener("click", logTarget);
container.addEventListener("click", logTarget);
button.addEventListener("click", logTarget);

function logTarget(e) {
  const log1 = `Target: ${e.target.tagName}`;
  const log2 = `Current target: ${e.currentTarget.tagName}`;
  output.textContent += `${log1}, ${log2}\n`;
}
