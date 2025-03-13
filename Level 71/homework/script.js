// 1
let array = [1,2,3,4,5,]
console.log(array.legth)

// 2
let list = [1,2,3,4,5]
let min = list[0]
let max = list[0]
for (let i = 1; i < list.length; i++) {
    if (list[i] < min) min = list[i]
    if (list[i] > max) max = list[i]
}
console.log( min, max)

//3 
let words = ["Mariami", "Nikolozi", ]
let letters = []
for (i = 0; i <words.legth; i++);
    letters.push(words[1][0])
console.log(letters)

//4 
let user = ["Mariam Mchedlishvili"]
let userInitials =[]
for(i = 0; i <user.length; i++) {
    let users = users[i].split
    userInitials.push(parts[0][0] + "." + parts[1][0])
}

console.log(userInitials)

//5

let numbers = [5, -10, 15, -20, 25]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) numbers.splice(i, 1, 0)
}
console.log( numbers)


//6
let usersList = ["Mariam Mchedlishvili", "Nikoloz Mchedlishvili"];
let filteredUsers = usersList.filter(function(user) {
    return user[0] === user[0].toUpperCase();
})
console.log( filteredUsers);
