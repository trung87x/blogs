// ==========================
// Introduction to Events
// ==========================

// 1. Gán sự kiện trực tiếp qua HTML (cách cũ - không nên dùng trong JavaScript hiện đại)
// <button onclick="alert('Hello!')">Click me</button>

// 2. Gán sự kiện qua thuộc tính DOM (ít được khuyến khích vì ghi đè lẫn nhau)
const button1 = document.querySelector('#btn1');
button1.onclick = function () {
  alert('Button 1 clicked!');
};

// Nếu gán tiếp:
button1.onclick = function () {
  alert('This overrides the previous one'); // sẽ ghi đè!
};

// 3. Gán sự kiện bằng addEventListener (cách khuyến khích dùng)
const button2 = document.querySelector('#btn2');
function greetUser() {
  alert('Hello from button 2!');
}
button2.addEventListener('click', greetUser);

// Thêm nhiều hàm cho cùng 1 sự kiện
button2.addEventListener('click', () => {
  console.log('Another event handler for button 2');
});

// 4. Xoá sự kiện với removeEventListener
const button3 = document.querySelector('#btn3');
function sayHi() {
  alert('Hi!');
}
button3.addEventListener('click', sayHi);

// Xoá sau 3 giây
setTimeout(() => {
  button3.removeEventListener('click', sayHi);
  console.log('sayHi removed from button 3');
}, 3000);

// 5. Sự kiện mặc định và preventDefault
const link = document.querySelector('#myLink');
link.addEventListener('click', function (event) {
  event.preventDefault(); // ngăn không cho chuyển trang
  alert('Link click prevented!');
});

// 6. Đối tượng sự kiện (event object)
const input = document.querySelector('#myInput');
input.addEventListener('keydown', function (e) {
  console.log(`You pressed key: ${e.key}`);
});

// 7. Bắt sự kiện cho nhiều phần tử (NodeList)
const buttons = document.querySelectorAll('.multi-btn');
buttons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    alert(`You clicked ${event.target.textContent}`);
  });
});

// 8. Tự tạo sự kiện (CustomEvent)
const customBtn = document.querySelector('#customBtn');

customBtn.addEventListener('myCustomEvent', function (e) {
  alert(`Custom event triggered with data: ${e.detail}`);
});

const customEvent = new CustomEvent('myCustomEvent', {
  detail: 'Some custom info',
});

customBtn.dispatchEvent(customEvent);
