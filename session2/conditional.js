let age = 12

if(age >= 18) {
    console.log("you can create an id card")
} else {
    console.log("you can't create an id card")
}
console.log("done")

if(age >= 15) {
    console.log("highscooler")
}else if (age >=14 ) {
    console.log("middleschool")
}else if (age>=11) {
    console.log("elementaryschool")
}
else {
    console.log("not in school")
}

const grade ="A";
switch(grade.toUpperCase()){
    case"A":
    case"A+":
    case"A-":
    console.log("Excellent Result!");
    break;
    case"B":
    console.log("Great Result!");
    break;
    case"C":
    console.log("Average Result!");
    break;
   default:
    console.log("Invalid Result")

} 

const text = "";

if (!text) {
    console.log ("text is empty");
} else {
    console.log ("text is empty")
}

const number = 8;
if (number == 8){
    console.log("number is 8")
}

const name = "asd";
if (name === "jaka" || name === "joko") {
    console.log ("name is not jaka or joko")
}

const isFalse = false
if (!isFalse) {
    console.log("test")
}

const str = "javascript";

if (str === "javascript"){
    console.log ("javascript")
}
else (
    console.log ("not javascript")
)
console.log ( str === "javascript" ? "javascript" : "not javascript")

const txt = "asda";
console.log(txt ? txt : "empty");
