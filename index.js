var buttonColours = ['red', 'blue', 'green', 'yellow'];
gamePattern = [];
for(let i = 0; i < buttonColours.length; i++){
    $("#" + buttonColours[i]).click(function (){
        playAnimation(buttonColours[i]);
    });
}


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
}

function playSound() {

}

function playStartAnimation(){
    $("#play-button").addClass("clicked");
    setTimeout(function () {
        $("#play-button").removeClass("clicked");
    }, 75);
}

function playAnimation(color){
    $("#" + color).addClass("clicked");
    setTimeout(function () {
        $("#" + color).removeClass("clicked");
    }, 75);
}
