let arr=[1,"abc",true];
console.log(arr.length);
//Kiểm tra mảng có tồn tại phần tử
console.log(arr.includes(2));
//Nối các ptu lại với ""
console.log(arr.join("-"));
//Vtri tìm thấy đầu tiên nếu k có trả -1
console.log(arr.indexOf("abc"));
console.log(arr.indexOf(2));
//Vtri tìm thấy cuối cùng
console.log(arr.lastIndexOf());
//Thêm vào sau
console.log(arr.push("Ok"));

console.log(arr);
//Thêm vào trước
console.log(arr.unshift("Ok"));

console.log(arr);

