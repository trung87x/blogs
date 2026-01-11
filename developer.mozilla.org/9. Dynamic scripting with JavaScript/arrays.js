// ==========================
// Introduction to Arrays
// ==========================


// Tạo mảng lưu danh sách mua sắm
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping); // ["bread", "milk", "cheese", "hummus", "noodles"]

// Mảng có thể chứa nhiều kiểu dữ liệu khác nhau
const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ["tree", 795, [0, 1, 2]];
console.log(sequence);
console.log(random);

// Độ dài mảng (số phần tử)
console.log(shopping.length); // 5

// Truy cập phần tử trong mảng qua chỉ số (index bắt đầu từ 0)
console.log(shopping[0]); // "bread"

// Thay đổi phần tử trong mảng
shopping[0] = "tahini";
console.log(shopping); // ["tahini", "milk", "cheese", "hummus", "noodles"]

// Truy cập phần tử trong mảng lồng nhau (multidimensional array)
console.log(random[2][2]); // 2

// Tìm vị trí (index) của một phần tử trong mảng
const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl"));    // 2
console.log(birds.indexOf("Rabbit")); // -1 (không tìm thấy)

// Thêm phần tử vào cuối mảng bằng push()
const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
console.log(cities); // ["Manchester", "Liverpool", "Cardiff"]
cities.push("Bradford", "Brighton");
console.log(cities); // ["Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton"]

// Lấy độ dài mới của mảng sau khi push
const newLength = cities.push("Bristol");
console.log(cities);    // ["Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton", "Bristol"]
console.log(newLength); // 6

// Thêm phần tử vào đầu mảng bằng unshift()
cities.unshift("Edinburgh");
console.log(cities); // ["Edinburgh", "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton", "Bristol"]

// Xóa phần tử cuối mảng bằng pop()
const removedCity = cities.pop();
console.log(removedCity); // "Bristol"
console.log(cities);      // ["Edinburgh", "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton"]

// Xóa phần tử đầu mảng bằng shift()
cities.shift();
console.log(cities); // ["Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton"]

// Xóa phần tử ở vị trí xác định bằng splice()
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities); // ["Manchester", "Cardiff", "Bradford", "Brighton"]

// Xóa nhiều phần tử bằng splice()
const index2 = cities.indexOf("Cardiff");
if (index2 !== -1) {
  cities.splice(index2, 2);
}
console.log(cities); // ["Manchester", "Brighton"]

// Duyệt tất cả phần tử trong mảng với for...of
const birds2 = ["Parrot", "Falcon", "Owl"];
for (const bird of birds2) {
  console.log(bird);
}

// Sử dụng map() để tạo mảng mới với các giá trị đã biến đổi
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [10, 4, 14, 12]

// Sử dụng filter() để lọc phần tử thỏa điều kiện
function isLong(city) {
  return city.length > 8;
}
const cities2 = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities2.filter(isLong);
console.log(longer); // ["Liverpool", "Edinburgh"]

// Chuyển đổi chuỗi thành mảng với split()
const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const cities3 = data.split(",");
console.log(cities3);
console.log(cities3.length);
console.log(cities3[0]); // "Manchester"
console.log(cities3[cities3.length - 1]); // "Carlisle"

// Chuyển mảng thành chuỗi với join()
const commaSeparated = cities3.join(",");
console.log(commaSeparated);

// Chuyển mảng thành chuỗi với toString()
const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
console.log(dogNames.toString()); // "Rocket,Flash,Bella,Slugger"

// Ví dụ thực tế: Tính tổng giá sản phẩm và in hóa đơn
const products = [
  "Shoes:23.99",
  "Hat:12.99",
  "Socks:5.99",
  "Shirt:15.99"
];

let total = 0;

// Duyệt từng sản phẩm
for (const product of products) {
  // Tách tên và giá (chuyển giá sang số)
  const [name, priceStr] = product.split(":");
  const price = Number(priceStr);

  // Cộng giá vào tổng
  total += price;

  // In thông tin sản phẩm
  const itemText = `${name} — $${price.toFixed(2)}`;
  console.log(itemText);
}

console.log(`Tổng cộng: $${total.toFixed(2)}`);

// Ví dụ quản lý 5 tìm kiếm gần đây nhất
const searches = [];

function addSearch(term) {
  // Thêm vào đầu mảng
  searches.unshift(term);  // number 1

  // Nếu vượt quá 5 phần tử, xóa phần tử cuối
  if (searches.length > 5) {
    searches.pop();        // number 2
  }

  console.log(searches);
}

// Thêm thử các từ khóa tìm kiếm
addSearch("apple");
addSearch("banana");
addSearch("cherry");
addSearch("date");
addSearch("elderberry");
addSearch("fig");
