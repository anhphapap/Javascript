function changeImg(obj) {
  let m = document.getElementById("main-img");
  m.src = obj.src;
}
function notiOn(title) {
  let m = `<div class="noti">
    <div class="noti-img">
    <img src="https://images.unsplash.com/photo-1541612048636-31b38fd23ec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="">
    </div>
    <div class="noti-content">
    <h3 class="noti-title">${title}</h3>
    <p class="noti-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. A fuga suscipit nobis velit impedit, at aut provident dolore tenetur sed voluptatem expedita nemo officiis ratione eos!</p>
    </div>
    </div>`;
  document.body.insertAdjacentHTML('afterbegin',m);
}
const listTitle=[
    "Notification 1",
    "Notification 2",
    "Notification 3",
    "Notification 4",
    "Notification 5"
];
let text;
// setInterval(()=>{
//     let temp=document.querySelector(".noti");
//     let idx=Math.floor(Math.random()*listTitle.length);
//     while(text===listTitle[idx]) idx=Math.floor(Math.random()*listTitle.length);
//     if(temp) temp.parentNode.removeChild(temp);
//     notiOn(listTitle[idx]);
//     text=listTitle[idx];
// },7000)
