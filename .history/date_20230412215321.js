const now = new Date();

console.log(now);

//Timestamp & Epoch time
console.log(now.getTime());

console.log(new Date(1681268691288));

console.log(new Date(2023,3,12,23,22,21));

const birthday = new Date(2004,9,17,23,23,23);

//Các hàm get

console.log(birthday.getFullYear());
//in ra tháng 0->11
console.log(birthday.getMonth());
//in ra thứ trong tuần 0->6 (0 là CN)
console.log(birthday.getDay());
//in ra ngày trong tháng
console.log(birthday.getDate());

console.log(birthday.getHours());

console.log(birthday.getMinutes());

console.log(birthday.getMilliseconds());

//Các hàm set

console.log(birthday)

birthday.setFullYear(2005) 

birthday.setMonth(1) 

birthday.setDate(28) 

birthday.setHours(22) 

birthday.setMinutes(28) 


console.log(birthday)




