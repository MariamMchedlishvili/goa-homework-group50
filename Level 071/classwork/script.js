// let num = prompt("enter number:");
// sum = 0;
// for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//          sum += i
//     }
// }

// console.log(sum)


//შექმენით სია სადაც იქნება 10 რენდომ რიცხვი,  შემდეგ კი დაითვალეთ ამ სიის რიცხვების ჯამი for loop ის გამოყენებით

let myArray = [ 1, 2, 4, 6, 8, 9];
sum = 0;

for(let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}

console.log(sum)


//შექმენით რიცხვებით სავსე სია, შემდეგ მიწვდით თითოეულ ელემენტს და დააჯამეთ მხოლოდ 
// ლუწი რიცხვები აყვანილი კვადრატში ამ სიიდან

let arr = [8,6];
let sum = 0;

for (let i of list) {
    if (i % 2 ===0) {
        sum += arr[i] * arr[i]
    }
}
console.log(sum)



