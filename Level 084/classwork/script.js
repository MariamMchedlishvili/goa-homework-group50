//HTML-ში შექმენით რამდენიმე ელემენტი , შემდეგ  javasCript-იდან გაუწერეთ ისეთი ლოგიკა რომ,რომელ ელემენტსაც დააკლიკებთ ,
// ამ ელემენტის ტექსტის ფერი გახდეს წითელი ასევე კონსოლში დაბეჭდოს 
// ამ კონკრეტული ელემენტის ინფორმაცია(აუცილებლად გამოიყენეთ დღეს ახსნილი event object)

// let redBox = document.getElementById("red");
// let blueBox = document.getElementById("blue");
// let greenBox = document.getElementById("green");
// let yellowBox = document.getElementById("yellow");

// redBox.onclick = function() {
//     redBox.style.backgroundColor = "red";
//     redBox.querySelector("p").textContent = "Red";
// };

// blueBox.onclick = function() {
//     blueBox.style.backgroundColor = "blue";
//     blueBox.querySelector("p").textContent = "Blue";
// };

// greenBox.onclick = function() {
//     greenBox.style.backgroundColor = "green";
//     greenBox.querySelector("p").textContent = "Green";
// };

// yellowBox.onclick = function() {
//     yellowBox.style.backgroundColor = "yellow";
//     yellowBox.querySelector("p").textContent = "Yellow";
// };



let redbox = document.getElementById("red")
let bluebox = document.getElementById("blue")
let greenbox = document.getElementById("green")
let yellowbox = document.getElementById("yellow")


redbox.onclick = function() {
    redbox.style.backgroundColor = "red"
    redbox.querySelector("p").textContent = "red"
}

bluebox.onclick = function() {
    bluebox.style.backgroundColor = "blue"
    bluebox.querySelector("p").textContent = "blue"
}

greenbox.onclick = function() {
    greenbox.style.backgroundColor = "green"
    greenbox.querySelector("p").textContent="green"
}

yellowbox.onclick = function() {
    yellowbox.style.backgroundColor = "yellow"
    yellowbox.querySelector("p").textContent="yellow"
}
