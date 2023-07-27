//1
const cel = 20
const fah = cel * 1.8 + 32
console.log(fah)

//2
let num = 3
    if (num % 2 === 0) {
    console.log(`${num} is even`)

} else{
    console.log(`${num} is odd`)
}

//3

const number =13
let isPrime = true
for(let i= 2; i< num;i++){
    if(number % i === 0){
        isPrime = false;
        break;
    }
}
console.log (isPrime ? "number is prime" : "number is not prime");
//4 & 5
const n= 5 ;
let sum = 0;
let fact = 1;
for(let i = 1; i <=n; i++){
    sum+= i;
    fact *= i;
}
console.log(`sum number is : ${sum}`)
console.log(`factorial number is : ${fact}`)
//6
const N =8;
let first = 1;
let second = 1;
let fibN;

for(i=1 ; i<= N;i++){
    console.log(first);
    fibN= first
    let next = first + second;
    first= second
    second = next
}
console.log(fibN)