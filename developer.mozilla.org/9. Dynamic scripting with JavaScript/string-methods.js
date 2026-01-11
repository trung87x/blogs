// ==========================
// Introduction to String Methods
// ==========================

// 1. Độ dài của chuỗi
const browserType = "mozilla";
console.log(browserType.length); // 7

// 2. Lấy ký tự cụ thể trong chuỗi
console.log(browserType[0]); // "m"
console.log(browserType[browserType.length - 1]); // "a"

// 3. Kiểm tra chuỗi con
console.log(browserType.includes("zilla")); // true
console.log(browserType.startsWith("moz")); // true
console.log(browserType.endsWith("lla")); // true

// 4. Vị trí của chuỗi con
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20
console.log(tagline.indexOf("x")); // -1
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);
console.log(secondOccurrence); // 35

// 5. Cắt chuỗi (substring)
console.log(browserType.slice(1, 4)); // "ozi"
console.log(browserType.slice(2)); // "zilla"

// 6. Chuyển đổi chữ hoa/thường
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase()); // "my name is mud"
console.log(radData.toUpperCase()); // "MY NAME IS MUD"

// 7. Thay thế chuỗi
const updated = browserType.replace("moz", "van");
console.log(updated); // "vanilla"

let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");
console.log(quote); // "To code or not to code"

// 8. Cải thiện viết hoa tên thành phố
const city = "lOndON";
const cityLower = city.toLowerCase(); // "london"
const capitalized = cityLower[0].toUpperCase() + cityLower.slice(1);
console.log(capitalized); // "London"

// 9. Trích xuất mã trạm và tên trạm từ chuỗi định dạng đặc biệt
const station = "MAN675847583748sjt567654;Manchester Piccadilly";
const code = station.slice(0, 3); // "MAN"
const semiIndex = station.indexOf(";");
const name = station.slice(semiIndex + 1); // "Manchester Piccadilly"
console.log(`${code}: ${name}`); // "MAN: Manchester Piccadilly"
