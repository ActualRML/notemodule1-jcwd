//1
const text ='The QuiCk BrOwN Fox'
let result= "";

for(let i= 0; i <text.length;i++){
    const capi= text [i].toUpperCase();
    if(capi === text[i]){
        result = result +text[i].toLowerCase();
    } else {
        result+= text[i].toUpperCase();
    }
}
console.log(result)