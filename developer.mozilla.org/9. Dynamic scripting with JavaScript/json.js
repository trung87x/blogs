// ==========================
// Introduction to JSON
// ==========================

// 1. Lấy dữ liệu JSON và hiển thị ra trang web
async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();

  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}

// 2. Tạo header với thông tin từ JSON
function populateHeader(obj) {
  const header = document.querySelector("header");
  const myH1 = document.createElement("h1");
  myH1.textContent = obj.squadName;
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
  header.appendChild(myPara);
}

// 3. Hiển thị từng hero trong danh sách
function populateHeroes(obj) {
  const section = document.querySelector("section");
  const heroes = obj.members;

  for (const hero of heroes) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = "Superpowers:";

    for (const power of hero.powers) {
      const listItem = document.createElement("li");
      listItem.textContent = power;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}

// 4. Chuyển đổi giữa object và chuỗi JSON
const person = {
  name: "Chris",
  age: 38,
};

// Chuyển object thành chuỗi JSON
const jsonString = JSON.stringify(person);
console.log("JSON string:", jsonString);

// Chuyển chuỗi JSON thành object
const parsedObj = JSON.parse(jsonString);
console.log("Parsed object:", parsedObj);

// 5. Sử dụng fetch và parse thủ công
async function populateWithParse() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroesText = await response.text();
  const superHeroes = JSON.parse(superHeroesText);

  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}

// Gọi hàm chính
populate();
