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

birthday.setSeconds(28) 

console.log(birthday)

console.log(now.toDateString())

console.log(now.toTimeString())

console.log(now.toLocaleDateString())

console.log(now.toLocaleDateString("vi-VI"))

//Bài tập: In ra ngày tháng năm theo mẫu dd/mm/yyyy
let dd=now.getDate();
let mm=now.getMonth()+1;
let yyyy=now.getFullYear();

if(mm<9){
    console.log(`${dd}/0${mm}/${yyyy}`);
}
else{
    console.log(`${dd}/${mm}/${yyyy}`);
}

//setTimeout: thực hiện 1 hàm sau n milisecond
// setTimeout(function(){
//     alert("Print after 3s");
// },3000);

//setInterval: 
const count=setInterval(function(){
    alert("alo");
}, 1000);
clearInterval(count);


//BT1:Đếm ngược tg

function countdown(min=1){
    let sec=min*60;
    let counter=0;
    let timer = setInterval(()=>{
        counter+=1;
        if(counter===sec){
            alert("End Game!!");
            clearInterval(timer);
        }
    },1000);
}

// countdown(0.25);

//BT2: Tính tg online

function timeSince(date){
    let currentTime = new Date().getTime();
    let timeOff = new Date(date);
    let seconds=Math.floor((currentTime-timeOff.getTime())/1000);
    console.log(seconds);
    let timer=seconds
}

timeSince("Thu Apr 13 2023 09:20:00 GMT+0700 (Indochina Time)");
