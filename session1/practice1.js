//1
const length = 10;
const width = 20;
const area = (length * width);
console.log(area);

//2
const perimeter = (length *2 + width *2);
console.log(perimeter);

//3
const diameter = 10;
const circumference = 3.14 * diameter;
console.log(circumference);

//4
const sisi1 = 80;
const sisi2 = 50;
const sisi3 = 180 - (sisi1 + sisi2)
console.log(sisi3);

//5
const date1 =new Date("2023-07-18");
const date2 =new Date("2023-07-20");
const date3 =date2-date1;
console.log(date3/1000/60/60/24);

//6
const input = 400;
const years = Math.floor(input/365);
const month =Math.floor(input % 365/30);
const day =input % 365 % 30
console.log(`${years} years,${month}month,${day}days`)
