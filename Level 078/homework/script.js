let index =0;
let images =[
    "abc.jpg",
    "abcd.jpg",
    "download.jpg"
]

function slideFunc() {
    index = (index +1) % images.length
    document.getElementById("slide").src=images[index]
}


















