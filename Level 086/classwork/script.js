//classwork:  შექმენით ცვლადი ამ ცვლადში მომხმარებელს შემოატანინეთ  
//  სახელი და შემდეგ თუ ეს სახელი დაემთხვევა თქვენს სახელს დაბეჭდეთ თქვენი სახელი

let name = prompt("Enter your name:")
let myName = "Mariami"

switch (name) {
    case myName:
        console.log("You entered my name:", myName)
        break
    default:
        console.log("This name doesn't match.")
}

//შექმენით ცვლადი month ამ ცვლადში მომხმარებელს უნდა შემოატანინოთ თვე ოღონდ რიცხვების საშუალებით(მაგ. 1=იანვარი , 2=თებერვალი , 3 = მარტი) ,
//  ამ რიცხვების მეშვეობით დაადგინეთ რომელი თვეა და გამოსახეთ კონსოლში, ამისთვის აუცილებლად გამოიყენეთ switch , იმ შემთხვევაში თუ მომხმარებელმა
//  შემოიყვანა სხვა სიტყვა ან 12 ზე
//  მეტი რიცხვი console-ში გამოიტანოს რომ "ასეთი თვე არ არსებობს"

let month = parseInt(prompt("Enter month using numbers:"))
 switch(month) {
    case 1:
        console.log("january")
        break
    case 2:
        console.log("february")
        break
    case 3:
        console.log("march")
        break
    case 4:
        console.log("april")
        break
    case 5:
        console.log("may")
        break
    case 6:
        console.log("june")
        break
    case 7:
        console.log("july")
        break
    case 8:
        console.log("august")
        break
    case 9:
        console.log("september")
        break
    case 10:
        console.log("october")
        break
    case 11:
        console.log("november")
        break
    case 12:
        console.log("december")
        break
    default:
        console.log("this month doesn't exist")

 }


 //მომხმარებელს შემოატანინეთ თვის სახელი მაგ:("იანვარი" , "თებერვალი") ,
 //  თქვენი მიზანია დაადგინოთ მომხმარებლის შემოტანილი თვე სეზონის რომელი პერიოდია (ზაფხული,ზამთარი,შემოდგომა,თუ გაზაფხული)

let month2 = prompt("Enter month:")

switch (month2) {
    case "december":
    case "january":
    case "february":
        console.log("winter")
        break
    case "march":
    case "april":
    case "may":
        console.log("spring")
        break
    case "june":
    case "july":
    case "august":
        console.log("summer")
        break
    case "september":
    case "october":
    case "november":
        console.log("fall")
        break
    default:
        console.log("this season doesn't exist")

}