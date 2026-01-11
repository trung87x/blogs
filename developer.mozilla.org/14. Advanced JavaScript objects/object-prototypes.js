// 1. Tạo đối tượng với thuộc tính và phương thức
const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet(); // Greetings from Madrid

// Kiểm tra các thuộc tính có sẵn của đối tượng
console.log(myObject.toString()); // [object Object]

// 2. Prototype và Prototype Chain
console.log(Object.getPrototypeOf(myObject)); // Object { }

// Tạo đối tượng mới từ Date và kiểm tra chuỗi prototype
const myDate = new Date();
let object = myDate;
do {
  object = Object.getPrototypeOf(object);
  console.log(object); // Hiển thị chuỗi prototype
} while (object);

// 3. Shadowing - Khi che khuất phương thức trong đối tượng
const myDate2 = new Date(1995, 11, 17);
console.log(myDate2.getTime()); // 819129600000

// Che khuất phương thức getTime trong đối tượng
myDate2.getTime = function () {
  console.log("something else!");
};

myDate2.getTime(); // something else!

// 4. Sử dụng Object.create để tạo đối tượng với prototype
const personPrototype = {
  greet() {
    console.log("hello!");
  },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!

// 5. Sử dụng Constructor Function để tạo đối tượng với prototype
function Person(name) {
  this.name = name;
}

const personPrototype2 = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

Object.assign(Person.prototype, personPrototype2);

const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!

// 6. Kiểm tra "own" properties trong đối tượng
const irma = new Person("Irma");
console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false
