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
// Random (Mặc định từ 0->1, muốn 0->10 thì * 10)
console.log(Math.round(Math.random()*12));
// Tìm max, min
console.log(`Max:${Math.max(1,2,3)}`);
console.log(`Min:${Math.min(1,2,3)}`);
// isNaN (NaN -> Not a Number)
console.log(isNaN("Ok"));
console.log(isNaN("123"));

//Undefined (Có khai báo rồi nma chưa cho giá trị)
let x;
console.log(x);
//Falsy values: "", 0, undefined, null
//Truthy values != Falsy values

//Type coercion
console.log("10"+10);

// == vs ===
console.log(10 == "10");
console.log(10 === "10"); //Nên sử dụng === hơn

//Thông báo
alert("Hello Bitch!!!");
confirm("Are you crazy?");
prompt("What???")

//Switch - case
let num="11";

switch(Number(num))
{
    case 11:
        console.log(`Ans=`)
        break;
}











