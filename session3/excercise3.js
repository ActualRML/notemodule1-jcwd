const input = 32;
let result = 0;

if (typeof input === "string"){
    result=1
} else if(typeof input === "number"){
    result =2;
}
else{
    result=3
}
console.log(result)

//5
const text = "An apple a day kepps the doctor away"
const replaceText= text.replaceAll("a", "*").replaceAll("A", "*");
console.log(replaceText)