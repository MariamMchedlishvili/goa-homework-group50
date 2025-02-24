//შექმენით ლოგიკური ოპერატორების გამოყენებით ყველა შესაძლო კომბინაცია გამოიუყენეთ and და or ლოგიკური ოპერატორები, &&, ||

// let userName = "Mariami"

// if (userName == "Mariami" || userName == "mariami")  {
//     console.log("True")
// }

//მომხმარებელს შემოატანინეთ სახელი შემდეგ კი შეამოწმეთ თუ მომხამრებლის შემოტანილი სახელი თქვენს სახელს ემთხვევა მაშინ დაიბეჭდოს რომ სეხნიები ხართ

let name = "Mariam"
const name2 = prompt("Enter name") 

if (name == name2) {
    console.log("Same name")
}else if(name != name2) {
    console.log("Not the same name")
}