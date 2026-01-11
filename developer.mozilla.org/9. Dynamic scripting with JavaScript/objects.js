// ==========================
// Introduction to objects
// ==========================

// 1. Tạo object rỗng
const person = {};

// 2. Object literal với thuộc tính và phương thức
const person2 = {
  name: ["Bob", "Smith"],
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

// Truy cập dữ liệu trong object
console.log(person2.name);
console.log(person2.age);
person2.bio();
person2.introduceSelf();

// 3. Object lồng nhau (nested object)
const person3 = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  age: 32,
  bio() {
    console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
  },
};

// 4. Truy cập bằng dot và bracket notation
console.log(person3.name.first); // dot notation
console.log(person3["name"]["last"]); // bracket notation

// 5. Truy cập bằng biến tên thuộc tính
function logProperty(prop) {
  console.log(person3[prop]);
}
logProperty("age");

// 6. Thêm hoặc cập nhật thuộc tính
person3.age = 40;
person3.eyes = "hazel";
person3.farewell = function () {
  console.log("Bye everybody!");
};
person3.farewell();

// 7. Thêm thuộc tính với tên từ biến
const myDataName = "height";
const myDataValue = "1.75m";
person3[myDataName] = myDataValue;

// 8. Sử dụng this trong phương thức
const person4 = {
  name: "Chris",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};
person4.introduceSelf();

// 9. Tạo nhiều object với hàm tạo (factory function)
function createPerson(name) {
  return {
    name,
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    },
  };
}
const salva = createPerson("Salva");
salva.introduceSelf();

// 10. Tạo object với constructor
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}
const frankie = new Person("Frankie");
frankie.introduceSelf();

// 11. Bạn đã dùng object từ đầu
const myString = "hello";
console.log(myString.toUpperCase()); // String object method

const myDiv = document.createElement("div"); // Document object method

// 12. Tạo object từ API (vd: Notification)
// const myNotification = new Notification("Hello!"); // Chỉ chạy được trên trình duyệt hỗ trợ
