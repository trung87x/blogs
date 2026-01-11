// =============================================================
// JAVASCRIPT WALKTHROUGH – GAME "GUESS THE NUMBER"
// =============================================================

/* === 1. MỤC TIÊU ===
- Tư duy như lập trình viên
- Trải nghiệm viết code JavaScript thực tế
- Không cần hiểu hết ngay → bài này chỉ là bước khởi đầu
*/

/* === 2. ĐỀ BÀI GAME ===
- Chọn số ngẫu nhiên từ 1 đến 100
- Người chơi có 10 lượt đoán
- Mỗi lượt: báo đúng/sai, quá cao/thấp
- Hiển thị các lượt đoán trước
- Khi thắng/thua → hiển thị nút chơi lại
*/

/* === 3. KHAI BÁO BIẾN === */
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

guessField.focus(); // tự động focus vào input lúc đầu

/* === 4. ĐỊNH NGHĨA HÀM checkGuess() === */
function checkGuess() {
  const userGuess = Number(guessField.value);

  if (guessCount === 1) {
    guesses.textContent = "Previous guesses:";
  }
  guesses.textContent += ` ${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

/* === 5. LIÊN KẾT SỰ KIỆN (EVENT LISTENER) === */
guessSubmit.addEventListener("click", checkGuess);

/* === 6. HÀM setGameOver() – KHI KẾT THÚC GAME === */
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;

  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.append(resetButton);

  resetButton.addEventListener("click", resetGame);
}

/* === 7. HÀM resetGame() – KHỞI ĐỘNG LẠI GAME === */
function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const para of resetParas) {
    para.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

/* === 8. CÁC KHÁI NIỆM ĐÃ DÙNG ===
- Biến (let), hằng số (const)
- Hàm (function), sự kiện (event)
- Điều kiện (if/else), toán tử (===, <, >, !==,...)
- Vòng lặp (for...of)
- DOM manipulation: textContent, style, class
*/

/* === 9. TƯ DUY LẬP TRÌNH ===
- Phân tích đề bài → từng bước cụ thể
- Tập trung vào logic & kiểm soát trạng thái
- Viết mã theo từng khối chức năng (function)
*/

/* === 10. BONUS: THAO TÁC TRÊN OBJECT TRÌNH DUYỆT ===
- guessField.value = 5 → nhập giá trị
- guesses.textContent = "..." → thay nội dung thẻ <p>
- guesses.style.color = "blue" → đổi style bằng JS
*/

