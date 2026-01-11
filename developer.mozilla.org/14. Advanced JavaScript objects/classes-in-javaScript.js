// 1. Khai báo lớp Person
class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}

// Tạo đối tượng từ lớp Person
const giles = new Person("Giles");
giles.introduceSelf(); // Hi! I'm Giles

// 2. Nếu không cần khởi tạo đặc biệt, bạn có thể bỏ qua constructor
class Animal {
  sleep() {
    console.log("zzzzzzz");
  }
}

const spot = new Animal();
spot.sleep(); // 'zzzzzzz'

// 3. Kế thừa - Lớp Professor kế thừa từ lớp Person
class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name); // Gọi constructor của lớp cha (Person)
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(
      `My name is ${this.name}, and I will be your ${this.teaches} professor.`
    );
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}

// Tạo đối tượng từ lớp Professor
const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'
walsh.grade("my paper"); // Một điểm ngẫu nhiên

// 4. Encapsulation - Sử dụng các trường riêng tư (private fields)
class Student extends Person {
  #year; // Trường riêng tư

  constructor(name, year) {
    super(name);
    this.#year = year;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
  }

  canStudyArchery() {
    return this.#year > 1;
  }
}

// Tạo đối tượng Student và kiểm tra
const summers = new Student("Summers", 2);
summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
console.log(summers.canStudyArchery()); // true

// Kiểm tra truy cập trường riêng tư sẽ báo lỗi
// summers.#year; // SyntaxError

// 5. Private Methods - Phương thức riêng tư
class Example {
  somePublicMethod() {
    this.#somePrivateMethod();
  }

  #somePrivateMethod() {
    console.log("You called me?");
  }
}

const myExample = new Example();
myExample.somePublicMethod(); // 'You called me?'
// myExample.#somePrivateMethod(); // SyntaxError
