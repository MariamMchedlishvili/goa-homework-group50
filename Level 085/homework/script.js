let audios = [
    "./audios/crash.mp3",
    "./audios/kick-bass.mp3",
    "./audios/snare.mp3",
    "./audios/tom-1.mp3",
    "./audios/tom-2.mp3",
    "./audios/tom-3.mp3",
    "./audios/tom-4.mp3"
]

let instrument = document.querySelectorAll(".img-cons")
document.addEventListener("keyup", function(e){
    if(e.key = "w"){
        instruments[0].style.border = "18px solid #3d465d"
    }
    if(e.key = "a"){
        instruments[1].style.border = "18px solid #3d465d"
    }
    if(e.key = "s"){
        instruments[2].style.border = "18px solid #3d465d"
    }
    if(e.key = "d"){
        instruments[3].style.border = "18px solid #3d465d"
    }
    if(e.key = "j"){
        instruments[4].style.border = "18px solid #3d465d"
    }
    if(e.key = "k"){
        instruments[5].style.border = "18px solid #3d465d"
    }
    if(e.key = "l"){
        instruments[6].style.border = "18px solid #3d465d"
    }
    
})

document.addEventListener("keydown", function(e){
    if(e.key = "w"){
        let idk = new Audio(audio[0])
        idk.play()
        instruments[0].style.border = "10px solid #53607c"
    }
    if(e.key = "a"){
        let idk = new Audio(audio[1])
        idk.play()
        instruments[1].style.border = "10px solid #53607c"
    }
    if(e.key = "s"){
        let idk = new Audio(audio[2])
        idk.play()
        instruments[2].style.border = "10px solid #53607c"
    }
    if(e.key = "d"){
        let idk = new Audio(audio[3])
        idk.play()
        instruments[3].style.border = "10px solid #53607c"
    }
    if(e.key = "j"){
        let idk = new Audio(audio[4])
        idk.play()
        instruments[4].style.border = "10px solid #53607c"
    }
    if(e.key = "k"){
        let idk = new Audio(audio[5])
        idk.play()
        instruments[5].style.border = "10px solid #53607c"
    }
    if(e.key = "l"){
        let idk = new Audio(audio[6])
        idk.play()
        instruments[6].style.border = "10px solid #53607c"
    }
})