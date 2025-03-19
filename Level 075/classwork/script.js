//შექმენით ობიექტი სახელად myInfo სადაც შეინახავთ თქვენს სახელს, გვარს, ასაკს და ჰობის

// const myInfo = {
//     name: "Mariami",
//     surname: "Mchedlishvili",
//     age: 17,
//     hobby: "drawing"
// }

// console.log(myInfo.name)
// console.log(myInfo.surname)
// console.log(myInfo.age)
// console.log(myInfo.hobby)

// myInfo.group = "50"
// console.log(myInfo)



//Prompით მომხმარებელს შემოატანინეთ მისი სახელი, გვარი, ასაკი და ჰობი, შემდეგ ეს ინფორმაცია შეინახეთ ობიექტში, 
// ასევე ამ ობიექტს დაუმატეთ ფუნქცია, რომლის გამოძახებაზეც კონსოლში გამოიტანს "Welcome {name}"

// const info = {
//     name: prompt("Enter name:"),
//     surname: prompt("Enter Surname:"),
//     age: Number(prompt("Enter age:")),
//     hobby: prompt("Enter your hobby:"),

//     greet() {
//         console.log("welcome" + " " + this.name)
//     }

// }

// info.greet()

// // //შექმნილი ობიექტებიდან გამოიტანეთ მხოლოდ Keyები შემდეგ კი მხოლოდ Valueები
// console.log(Object.keys(info))
// console.log(Object.values(info))

// //შექმნილ ობიექტს გადაუარეთ for ციკლით და გამოიტანეთ key და value შემდეგი ფორმატით: "{key} is {value}"

// for (let i in info){
//     console.log(i + " is " + String(info[i]))
// }




//შექმენით ქვემოთ მოცემული ობიექტის მსგავსი ობიექტი თქვენს სასურველ მანქანაზე და დაამატეთ ფუნქცია CarFullInfo,
//  რომლის გამოძაღებაზეც გამოიტანს მთლიან ინფორმაციას მანქანაზე(აუცილებლად გამოიყენეთ string formatting

const carInfo = {
    brand:"mercedes-benz",
    Color: "Silver",
    Model: "CLS",
    Year:  2023,
    carFullInfo() {
        return this.brand + " " + this.color + " " + this.model + " " + this.year;
    }
}

console.log(carInfo.carFullInfo());