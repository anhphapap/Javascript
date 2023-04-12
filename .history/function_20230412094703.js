// Default Value 
function sum(a=0,b=0){
    return a+b;
}
console.log(sum());
console.log(sum(3,4));

function tbc(a,b){
    return sum(a,b)/2;
}

console.log(tbc(7,9));

// Closure
function hello(message){
    return function hello2(name){
        console.log(message+name);
    };
}

let print=hello("Hello ");
print("Pha");

hello("Hello")("Pha");

function compare(a,b){
    if(typeof a !== "number" || typeof b !== "number" )
    {
        return "Nhap lai";
    }
    return Math.max(a,b);
}

console.log(compare(10,11));
console.log(compare('10',11));

//Arrow function
const square=(x) => x*x;

console.log(square())
