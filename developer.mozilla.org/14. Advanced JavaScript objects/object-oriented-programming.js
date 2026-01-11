// 1. Classes và Instances trong OOP
// Định nghĩa lớp Professor
class Professor {
  constructor(name, teaches) {
    this.name = name;
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(
      `My name is Professor ${this.name} and I will be your ${this.teaches} professor.`
    );
  }
}

// Tạo các đối tượng từ lớp Professor
let walsh = new Professor("Walsh", "Psychology");
let lillian = new Professor("Lillian", "Poetry");

console.log(walsh.teaches); // 'Psychology'
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

console.log(lillian.teaches); // 'Poetry'
lillian.introduceSelf(); // 'My name is Professor Lillian and I will be your Poetry professor.'

// 2. Inheritance trong OOP
// Lớp Person là lớp cha
class Person {
  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`My name is ${this.name}.`);
  }
}

// Lớp Professor kế thừa từ Person
class Professor extends Person {
  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(
      `My name is Professor ${this.name} and I will be your ${this.teaches} professor.`
    );
  }
}

// Lớp Student kế thừa từ Person
class Student extends Person {
  constructor(name, year) {
    super(name);
    this.year = year;
  }

  introduceSelf() {
    console.log(`My name is ${this.name} and I'm in year ${this.year}.`);
  }
}

let walsh2 = new Professor("Walsh", "Psychology");
walsh2.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

let summers = new Student("Summers", 1);
summers.introduceSelf(); // 'My name is Summers and I'm in year 1.'

let pratt = new Person("Pratt");
pratt.introduceSelf(); // 'My name is Pratt.'

// 3. Polymorphism - Khi phương thức có tên giống nhau nhưng triển khai khác nhau
let pratt2 = new Person("Pratt");
pratt2.introduceSelf(); // 'My name is Pratt.'

// 4. Encapsulation - Đóng gói và ẩn thông tin bên trong đối tượng
class StudentWithArchery extends Person {
  constructor(name, year) {
    super(name);
    this.year = year;
  }

  introduceSelf() {
    console.log(`My name is ${this.name} and I'm in year ${this.year}.`);
  }

  canStudyArchery() {
    return this.year > 1;
  }
}

// Kiểm tra điều kiện học cung
let student1 = new StudentWithArchery("Weber", 2);
if (student1.canStudyArchery()) {
  console.log("Student can study archery!");
} else {
  console.log("Student cannot study archery!");
}

// 5. Private properties (Sử dụng conventions cho properties private)
class StudentWithPrivateYear extends Person {
  constructor(name, year) {
    super(name);
    this._year = year; // Sử dụng underscore để chỉ rằng thuộc tính này là "private"
  }

  introduceSelf() {
    console.log(`My name is ${this.name} and I'm in year ${this._year}.`);
  }

  canStudyArchery() {
    return this._year > 1;
  }
}

// Hướng dẫn truy cập private property sẽ gặp lỗi
let student2 = new StudentWithPrivateYear("Weber", 2);
console.log(student2._year); // Được coi là thuộc tính private, nhưng JavaScript không hạn chế truy cập.
