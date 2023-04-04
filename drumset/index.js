document.querySelectorAll(".drum").forEach(element => {
    element.addEventListener("click", function() {
        playSoundFile(element.textContent);
        addAnimation(element.textContent);
    });
});

document.addEventListener("keydown", function(event) {
    playSoundFile(event.key);
    addAnimation(event.key); 
});

function playSoundFile(identifier) {
    let audioUrl = ""
    switch(identifier) {
        case "w": 
            audioUrl = "sounds/crash.mp3";
            break;
        case "a":
            audioUrl = "sounds/kick-bass.mp3";
            break;
        case "s":
            audioUrl = "sounds/snare.mp3";
            break;
        case "d":
            audioUrl = "sounds/tom-1.mp3";
            break;
        case "j":
            audioUrl = "sounds/tom-2.mp3";
            break;
        case "k":
            audioUrl = "sounds/tom-3.mp3";
            break;
        case "l":
            audioUrl = "sounds/tom-4.mp3";
            break;
        default:
            audioUrl = ""
            console.log(identifier);
        
    }

    if (audioUrl !== "") {
        let mySound = new Audio(audioUrl);
        mySound.play();
    }
}

function addAnimation(identifier) {
    let element = document.querySelector("." + identifier);
    element.classList.add("pressed");

    setTimeout(function() {
        element.classList.remove("pressed");
    }, 100);
}