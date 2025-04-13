//1
let word = "hello"

while (true) {
    let lang = prompt("შეიყვანე სასურველი ენა (ქართული, ინგლისური, ფრანგული):")

    switch (lang.toLowerCase()) {
        case "ქართული":
            console.log("გამარჯობა")
            break
        case "ინგლისური":
            console.log("hello")
            brea
        case "ფრანგული":
            console.log("bonjour")
            break
        default:
            console.log("ასეთი ენა არ არსებობს, სცადე თავიდან.")
            continue
    }
    break
}

//2
let hour = parseInt(prompt("შეიყვანე საათი (0-23):"))

if (hour >= 6 && hour < 12) {
    console.log("დილა")
} else if (hour >= 12 && hour < 18) {
    console.log("შუადღე")
} else if (hour >= 18 && hour < 24) {
    console.log("საღამო")
} else if (hour >= 0 && hour < 6) {
    console.log("ღამე")
} else {
    console.log("არასწორი საათია, ჩაწერე 0-დან 23-მდე რიცხვი.")
}



