const buttonColours = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;
let userAllowClick = false; // do not allow user click while show pattern colour.


// step 1 Create a new pattern.
function nextSequence() {
    userAllowClick = false;
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    // from step 2 add sounds for new pattern button.
    setTimeout(function() {
        animatePattern(randomChosenColour);
        playSound(randomChosenColour);
    },100);
    started = true;
    // increase level by 1 and change level-title up to now.
    level++;
    $(".level-title h2").text("level " + level);
    // reset userClickesPattern for new level
    userClickedPattern = [];
    userAllowClick = true; // End show colour pattern phrase, allow user to click.


}

// step 2 Show the sequence to the user with animations and sounds.
function playSound(sound) {
    let audio = new Audio("./assets/sounds/" + sound + ".mp3");
    audio.play();
}
function animatePattern(currentColour){
    $("#" + currentColour).addClass("lightUp");
    setTimeout(function () {
        $("#" + currentColour).removeClass("lightUp");
    }, 100);
}

// step 3 Check which button is pressed.
for(let i = 0; i < buttonColours.length; i++){
    $("#" + buttonColours[i]).click(function (){
        if(started && userAllowClick){ // Do not allow click same button many times.
            let userChosenColour = buttonColours[i];
            userClickedPattern.push(userChosenColour);
            // console.log(userClickedPattern);
            // from step 2,4 add sounds for button that user click.
            animatePress(userChosenColour);
            playSound(userChosenColour);
            // from 6 check current level
            checkAnswer(userClickedPattern.length - 1);
        }
    });
}
// step 4 Add anitmations to user clicks.
function animatePress(currentColour){
    $("#" + currentColour).addClass("clicked");
    setTimeout(function () {
        $("#" + currentColour).removeClass("clicked");
    }, 100);
}


// step 5 Start the game.
$("#white").click(function() {
    // play sound and animation when user click start game.
    if(!started){
        started = true; // Do not allow user click start button many times.
        // do not allow white button to detect want user click
        setTimeout(function() {
            playSound("start");
            animatePress("white");
        },100);
        setTimeout(function() {
            nextSequence();
            $(".level-title h2").text("level " + level);
        }, 1000);
        // show first pattern.
    }
});

// step 6 Check the user'answer against the game sequence.
// if success go nextSquence
// else game-over
function checkAnswer(currentLevel) {
    // user success this current level
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        // success this level
        userAllowClick = false;
        if(currentLevel + 1 === level){
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }else{
            userAllowClick = true;
        }
    }else{
        gameOver();
    }
}

// step 7 Game over.
function gameOver() {
    $("html").addClass("game-over");
    setTimeout(function() {
        $("html").removeClass("game-over");
    }, 150);
    playSound("wrong");
    $(".level-title").html("<h2>Game over, press <span>white</span> button to restart</h2>");
    startOver();
}

// step 8 Restart the game.
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
    userAllowClick = false;
}
