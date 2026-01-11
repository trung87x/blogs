// ==========================
// Introduction to DOM
// ==========================

// 1. Truy cập phần tử DOM
const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

// 2. Tạo và thêm node mới
const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);

const text = document.createTextNode(
  " — the premier source for web development knowledge."
);
const linkPara = document.querySelector("p");
linkPara.appendChild(text);

// 3. Di chuyển và xóa node
sect.appendChild(linkPara); // di chuyển node
// sect.removeChild(linkPara); // xóa node cũ (comment lại để giữ nội dung)
// linkPara.remove(); // hoặc dùng phương thức trực tiếp (không hỗ trợ trình duyệt cũ)

// 4. Thao tác style với inline CSS
para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";

// 5. Thêm class qua setAttribute (cách chuẩn hơn)
// para.setAttribute("class", "highlight");

// 6. Active learning: Tạo danh sách mua sắm
const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const itemText = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");

  span.textContent = itemText;
  delBtn.textContent = "Delete";

  listItem.appendChild(span);
  listItem.appendChild(delBtn);
  list.appendChild(listItem);

  delBtn.addEventListener("click", () => {
    list.removeChild(listItem);
  });

  input.focus();
});
