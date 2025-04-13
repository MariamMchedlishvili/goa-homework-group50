let p = document.getElementById("p")

p.addEventListener("click", function () {
    p.textContent = "this is changed paragraph"
    p.style.color = "red"
})

p.addEventListener("mouseout", function () {
    p.textContent = "changed paragraph"
})




let img = document.getElementById("pic");

img.addEventListener("click", function () {
    alert("you clicked on an image!");
})