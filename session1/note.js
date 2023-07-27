console.log("hello world");
let message;
//isi message dengan pesan
message = "hello world"

let message2 = "hello world"
console.log(message2)
message2 = "hello guys";
console.log(message2)

const message3 = "hai";
//contoh error
//message3 = "oit"
//const message2 = "hello world";
console.log(message3)

//jenis2 tipe data primitive
const stringType = "text1";
const numberType = 2.5;
const booleanType = true;
const nullType = null;
const undefinedType = undefined;

//cara mengecek tipe data
console.log (typeof stringType);
console.log (typeof numberType)

//jenis2 tipe data non primitive
const objectType = {first: "item1", number:1};
const arrayType = ["item1", "item2"];

//value type
let personName = "jhon doe";
let newPersonName = personName;
personName = "jane doe ";
console.log(personName);
console.log( newPersonName);

const now = new Date();
console.log(now);
console.log(now.getTime());
