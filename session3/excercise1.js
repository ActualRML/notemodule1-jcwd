//1
const num = 9
const multi =10

for(let i = 1; i<=multi ; i++){
    console.log(`${num} x ${i} = ${num*i}`)
}

//2
const str = "wadaw";
const mid = Math.floor(str.length/2);

let pali = true;

for (let i=0; i < mid; i++){
    const left= str[i];
    const right= str[str.length -1 -i];

    if(left !== right){
        pali = false;
        break
    }
}
if(pali){
    console.log(`${str} is palindrom`)
}else{
    console.log(`${str} is not palindrom`)
}

//3
const cent = 200000;
const kilo = cent/100000;
console.log(kilo)

//4
const angka = 10000;
const angka1 = angka + "";
let result= "";

for(let i = 0; i < angka1.length;i++) {
    const nlast = angka1.length-1 ;
    const nlasti = nlast -i;
    console.log(nlasti)
    const current = angka1 [nlasti];
    console.log(current);
    if  (i % 3 === 0 && i !==0) {
        result = current + "." + result;
    } else {
        result = current + result;
    }
}
const rp = "Rp.";
const nol = ",00";
console.log(`${rp}${result}${nol}`);

//5
const test = "hello world";
const test1 = test.replace(/ell/gi,"");
console.log(test1)

//6
const text = "h";
const text1 = "w";
const text2 = "ello";
const text3 ="orld";
const text4 = text.toUpperCase();
const text5 = text1.toUpperCase();
console.log(`${text4}${text2} ${text5}${text3}`);

//7
const bolak = "mandi";
const balok = bolak.length-1
let balik = '';

for(let i =balok; i >=0 ; i--){
    console.log(i)
    console.log(bolak[i]);

    balik+=bolak[i]
}
console.log(balik)

