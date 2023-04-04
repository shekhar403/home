var levelCount = 1;
var bufferCount = 0;
var colouredButtonsArray = ["red", "blue", "yellow", "green"];
var colorBuffer = [];

for ( var i = 0; i < colouredButtonsArray.length; i++) {
    playAudio(colouredButtonsArray[i]);
}

$(".btn").click(function (e) {
    e.currentTarget.classList.add("pressed");
    setTimeout(function () {
        e.currentTarget.classList.remove("pressed");
    }, 100);

    if (colorBuffer.length === 0) {
        gameOver();
    }
    else {
        playAudio(this.classList[1]);

        if (this.classList[1] === colorBuffer[bufferCount]) {
            if (bufferCount === colorBuffer.length - 1) {
                // level successful
                levelProgress();
            }
            else {
                // awaiting next buffer
                bufferCount += 1

            }
        }
        else {
            // game over
            gameOver();
        }
    }
});

$(document).keypress(function (e) {
    if ($("#level-title").text() === "Press Play button or any Key to Start" || $("#level-title").text() === "Game Over, Press Play button or any Key to Play") {
        $("#level-title").text("Level " + levelCount);
        addANewColor();
    }

});

$(".start-btn").click(function (e) {
    levelCount = 1;
    bufferCount = 0;
    colorBuffer = [];
    $("#level-title").text("Level " + levelCount);
    addANewColor();
});


function playAudio(colorName) {
    $("." + colorName).fadeIn(100).fadeOut(100).fadeIn(100);
    let audio = new Audio("sounds/" + colorName + ".mp3");
    audio.play(colouredButtonsArray)
}

function gameOver() {
    playAudio("wrong");
    $("#level-title").text("Game Over, Press Play button or any Key to Play");
    $("body").css("backgroundColor", "red");
    setTimeout(function () {
        $("body").css("backgroundColor", "#011F3F");
    }, 200);
}

function levelProgress() {
    bufferCount = 0
    levelCount += 1;
    $("#level-title").text("Level " + levelCount);
    setTimeout(function () {
        addANewColor();
    }, 1000);
}

function addANewColor() {
    let color = colouredButtonsArray[Math.floor(Math.random() * 4)]
    colorBuffer.push(color);
    playAudio(color);
}