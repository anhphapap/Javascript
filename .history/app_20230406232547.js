console.log("Hello World!");

// <--String-->
let s="  ok Eco   "
console.log(s.startsWith("co"));
console.log(s.endsWith("Eco"));
console.log(s.includes("E"));
console.log(s.split(" "));
console.log(s.indexOf("o"));
console.log(s.lastIndexOf("o"));
console.log(s.replace("ok","Ok"));
console.log(s.repeat(3));
// Cut string by index
console.log(s.slice(0,3));
console.log(s.slice(-2));
// Remove space left and right
console.log(s.trim());
// Remove space left
console.log(s.trimStart());
// Remove space right
console.log(s.trimEnd());
//substr(index,length)
console.log(s.substr(2,5));
//substring(startIndex,endIndex)
console.log(s.substring(2,5));
// Use functions
console.log(s.trim().toUpperCase());
// Use variable
console.log(`Print ${s}`);

// <--Number-->
let a="10"; b="5.8",c=-10,d=4.7;
//Parse Number
console.log(typeof(parseInt(a)));
console.log(typeof(parseFloat(b)));
// Lấy trị
console.log(Math.abs(c));
// Làm tròn lên
console.log(Math.ceil(d));
// Làm tròn xuống
console.log(Math.floor(d));
// Làm tròn chuẩn
console.log(Math.round(d));
// Lấy số chữ số thập phân -> biến thành string
console.log((1/3).toFixed(2));
// Random (Mặc định từ )













