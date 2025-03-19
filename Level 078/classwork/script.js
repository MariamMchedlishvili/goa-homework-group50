// createElement-ის გამოყენებით შექმენით ერთი მშობელი div-ელემენტი, ეს div-ი ჩაამატეთ body-ში , 
// შემდეგ ამ მშობელ div-ში ჩაამატეთ კიდევ ორი შვილი div-ი და განალაგეთ ვერტიკალურად ერთმანეთისგან თანაბარი დაშორებით ,  
// პირველი დივი იყოს წითელი მეორე იყოს მწვანე , ასევე დაუმატეთ სასურველი სტილები

let body = document.body;
let div = document.createElement("div");

let childDiv1 = document.createElement("div");
childDiv1.style.width = "100px";
childDiv1.style.height = "100px";
childDiv1.style.backgroundColor = "red";

let childDiv2 = document.createElement("div");
childDiv2.style.width = "100px";
childDiv2.style.height = "100px";
childDiv2.style.backgroundColor = "green";

div.appendChild(childDiv1);
div.appendChild(childDiv2);
body.appendChild(div);

