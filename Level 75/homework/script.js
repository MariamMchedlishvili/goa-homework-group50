let car = {
    company: "Toyota",
    model: "Camry",
    milage: 50000,
    year: 2020,
    condition: "good",
    checkCondition: function (condition) {
        console.log("car is " + condition +" condition")
    }
}

car.color = "Red"
car.price = 25000
delete car.milage
console.log(car)

let user = {
    name: "Mariami",
    age: 30,
    email: "mariam@gmail.com",
    city: "Tbilisi"
}

for (let key in user) {
    console.log(key + user[key])
}


let student = {
    fullName: "Anna Smith",
    scores: [85, 90, 78, 92, 88],
    averageScore: function () {
        let sum = this.scores.reduce((a, b) => a + b, 0)
        return sum / this.scores.length
    },
    checkStudent: function () {
        let avg = this.averageScore()
        if (avg > 90) {
            console.log("best student")
        } else if (avg > 60) {
            console.log("good student")
        } else {
            console.log("normal student")
        }
    }
}

console.log(student.averageScore())
student.checkStudent()