console.log(document.getElementById("text_item").textContent.length);
if (document.getElementById("text_item").textContent === "") {
    document.getElementById("text_item").textContent = "Click Me";
    document.getElementById("text_item").onclick = suffleDice;
}

function suffleDice() {
    let playerOneScore = Math.ceil(Math.random() * 6);
    let playerTwoScore = Math.ceil(Math.random() * 6);

    // removing last class for the image.
    let playerOneClassList = document.getElementById("player_one_image").classList;
    playerOneClassList.remove(playerOneClassList[1]);
    playerOneClassList.add(getClassName(playerOneScore));
    let playerTwoClassList = document.getElementById("player_two_image").classList;
    playerTwoClassList.remove(playerTwoClassList[1]);
    playerTwoClassList.add(getClassName(playerTwoScore));

    if (playerOneScore === playerTwoScore) {
        document.getElementById("result_text").innerHTML = "<h1 class='text-center d-inline' id='text_item' onclick='suffleDice()'>Draw!</h1>"
    }
    else if (playerOneScore > playerTwoScore) {
        document.getElementById("result_text").innerHTML = " <i class='fa-solid fa-trophy left-trophy' style='color: #ff0000;'></i> \
    <h1 class='text-center d-inline' id='text_item' onclick='suffleDice()'>Player 1 Wins!</h1>"
    }
    else {
        document.getElementById("result_text").innerHTML = "<h1 class='text-center d-inline' id='text_item' onclick='suffleDice()'>Player 2 Wins!</h1> \
    <i class='fa-solid fa-trophy right-trophy' style='color: #ff0000;'></i>"
    }
}


function getClassName(index) {
    if (index == 1) {
        return "fa-dice-one"
    }
    else if (index == 2) {
        return "fa-dice-two"
    }
    else if (index == 3) {
        return "fa-dice-three"
    }
    else if (index == 4) {
        return "fa-dice-four"
    }
    else if (index == 5) {
        return "fa-dice-five"
    }
    else if (index == 6) {
        return "fa-dice-six"
    }
}