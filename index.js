var buttonColours = ['red', 'blue', 'green', 'yellow'];
gamePattern = [];
$("#play-button").click(function() {
    $("#play-button").addClass("clicked")
    setTimeout(function () {
        $("#play-button").removeClass("clicked");
    }, 75);
})


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
}
