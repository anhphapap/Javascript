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
arr.push("Ok");
console.log(arr);
//Thêm vào trước
arr.unshift("Ok");
console.log(arr);
//Xóa cuối
arr.pop();
console.log(arr);
//Xóa đầu
arr.shift();
console.log(arr);
//slice(): tạo ra mảng mới y mảng ban đầu


