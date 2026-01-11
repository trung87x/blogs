// ==========================
// Introduction to Conditionals
// ==========================

// Ví dụ 1: if...else cơ bản
let shoppingDone = false;
let childAllowance;

if (shoppingDone) {
  childAllowance = 10;
} else {
  childAllowance = 5;
}
console.log("Child allowance:", childAllowance); // 5 vì shoppingDone = false

// Ví dụ 2: if...else if...else nhiều lựa chọn
const weather = "rainy";

if (weather === "sunny") {
  console.log("It's sunny! Wear shorts and get some ice cream.");
} else if (weather === "rainy") {
  console.log("Rainy day, take an umbrella.");
} else if (weather === "snowing") {
  console.log("Snow is falling, stay warm!");
} else if (weather === "overcast") {
  console.log("Gray sky, maybe take a raincoat.");
} else {
  console.log("Weather unknown.");
}

// Ví dụ 3: Nested if
const choice = "sunny";
const temperature = 90;

if (choice === "sunny") {
  if (temperature < 86) {
    console.log(`It is ${temperature} degrees — nice and sunny.`);
  } else {
    console.log(`It is ${temperature} degrees — REALLY HOT! Use sunscreen.`);
  }
}

// Ví dụ 4: Toán tử logic AND (&&) và OR (||)
const iceCreamVanOutside = false;
const houseStatus = "on fire";

if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("You should leave the house quickly.");
} else {
  console.log("Probably safe to stay in.");
}

if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("No emergency, stay calm.");
} else {
  console.log("Emergency! Evacuate!");
}

// Ví dụ 5: Switch statement
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend vibes!");
    break;
  default:
    console.log("Midweek days.");
}

// Ví dụ 6: Ternary operator
const isBirthday = false;
const greeting = isBirthday
  ? "Happy birthday! 🎉"
  : "Good morning!";
console.log(greeting);

// Ví dụ 7: Ứng dụng thực tế — chọn ngày trong tháng
function getDaysInMonth(month) {
  let days;

  if (
    month === "January" || month === "March" || month === "May" ||
    month === "July" || month === "August" || month === "October" ||
    month === "December"
  ) {
    days = 31;
  } else if (
    month === "April" || month === "June" ||
    month === "September" || month === "November"
  ) {
    days = 30;
  } else if (month === "February") {
    days = 28; // Không tính năm nhuận cho ví dụ này
  } else {
    days = 0; // Tháng không hợp lệ
  }

  return days;
}

console.log("Days in February:", getDaysInMonth("February")); // 28
console.log("Days in April:", getDaysInMonth("April")); // 30
console.log("Days in December:", getDaysInMonth("December")); // 31
