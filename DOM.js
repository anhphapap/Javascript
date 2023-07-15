// trả về 1 node nếu tồn tại selector, nếu k thì trả về null
// trả về cái đầu tiên tìm thấy
var singleNode = document.querySelector("p");
var singleNode1 = document.querySelector(".item");
// console.log(singleNode1);

// trả về NodeList nếu tồn tại, k thì trả về empty
// có thể duyệt list này: forEach
var listNode = document.querySelectorAll(".item");
// console.log(listNode);
// for (let i=0;i<listNode.length;i++)
// {
//     console.log(listNode[i]);
// }

// trả về 1 HTMLCollection chứa danh sách các node, k thì trả về empty

var classNode = document.getElementsByClassName("item");
// console.log(classNode);
var tagNode = document.getElementsByTagName("li");
// console.log(tagNode);

// trả về 1 node nếu k thì NULL

var idNode = document.getElementById("idx");
// console.log(idNode);

//Attribute: thuộc tính
//Lấy thuộc tính
var link = document.querySelector(".link");
if (link) {
  console.log(link.getAttribute("href"));
}

// listNode.forEach(element => {
//     console.log(element.getAttribute("class"));
// });

// set giá trị cho thuộc tính

//link.setAttribute("target","_blank");

var listLink = document.querySelectorAll("a.link");
listLink.forEach((item) => {
  item.setAttribute("target", "_blank");
});

// Xóa thuộc tính
link.removeAttribute("href");

// Kiểm tra selector có tồn tại thuộc tính nào đó khum (true/false)
console.log(link.hasAttribute("target"));

//textContent: lấy text bỏ qua các thẻ có trong text
var text = document.querySelector(".container p");
// console.log(text.textContent);
// text.textContent = "Change text";
// console.log(text.textContent);

//innerText: lấy text như in ra màn hình

//innerHTML: lấy nội dung của selector bao gồm HTML
console.log(text.innerHTML);

//Các phương thức về class (classList)
var p = document.querySelector(".text");
p.classList.add("is-active");

p.classList.remove("text");

//.contains : kiểm tra có tồn tại class đó khum
console.log(p.classList.contains("is-active"));

//.toggle : kiểm tra nếu class có tồn tại thì xóa ngược lại thêm vào
p.classList.toggle("text");
// p.classList.toggle("text");

//.className: trả ra chuỗi các class của selector
console.log(p.className);

// Tạo element trong js
var div = document.createElement("div");
var body = document.body; //Lấy body
body.appendChild(div);
div.classList.add("test");
div.textContent = "Hello";
div.innerHTML = '<div class="content"><h3>Oke</h3></div>';

//Thực hành thêm child
var card = document.createElement("div");
card.classList.add("card");
var cardImg = document.createElement("img");
// cardImg.classList.add("image");
cardImg.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1687457099221-06f18ad00e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
);
cardImg.setAttribute("width","500px");
card.appendChild(cardImg);
body.appendChild(card);

// Clone ra 1 thành phần html mới
var cardClone=card.cloneNode(1);
body.appendChild(cardClone);

//Thêm text ở 4 vtri
//[element].insertAdjacentText("position","text")
//position:"beforebegin","afterbegin","beforeend","afterend"
card.insertAdjacentText("beforebegin","Hola");


//Thêm element ở 4 vtri
//[element].insertAdjacentElement("position",node)
//position:"beforebegin","afterbegin","beforeend","afterend"


//Thêm HTML ở 4 vtri
//[element].insertAdjacentHTML("position",HTML string)
//position:"beforebegin","afterbegin","beforeend","afterend"

var HTMLstring='<ul><li >item1</li><li >item2</li><li >item3</li><li >item4</li><li >item5</li></ul>';
card.insertAdjacentHTML("afterend",HTMLstring);