var userPattern = [];
var gamePattern = [];
var btn_arr = ["red", "green", "yellow", "blue"];
var toggle = true;
var level = 0 ;
var userChosenColour;
var randomChoosenNumber;

  $(document).keypress(function (event) {
    console.log(toggle);
    if (toggle == true) {
      $("h1").text("Press Any key to Start");
      gamePattern = [];
      nextSequence();
      makeSound(btn_arr[randomChoosenNumber]);
      level = 1;
      toggle = false;
      changeHeader(level);
    }
  });
$(document).click(function (event) {
    console.log(toggle);
    if (toggle == true) {
      $("h1").text("Press Any key to Start");
      gamePattern = [];
      nextSequence();
      makeSound(btn_arr[randomChoosenNumber]);
      level = 1;
      toggle = false;
      changeHeader(level);
    }
  });
function gameOver(){
 $("h1").text("Game Over, Press Any Key to Restart");
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
    
  }, 100);
  makeSound("wrong");
}

  $(".btn").click(function (event) {
    userChosenColour = event.target.id;
    userPattern.push(userChosenColour);
    $("#" + userChosenColour).addClass("pressed");
    setTimeout(function () {
      $("#" + userChosenColour).removeClass("pressed");
    }, 100);
    makeSound(userChosenColour);
    checkAnswer(userPattern.length-1)
  });


function nextSequence() {
  randomChoosenNumber = Math.floor(Math.random() * 4);
  gamePattern.push(randomChoosenNumber);
  userPattern = [];
  level++;
  changeHeader(level);
  $("#" + btn_arr[randomChoosenNumber])
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
    
}
function makeSound(id) {
  var audio = new Audio("sounds/" + id + ".mp3");
  audio.play();
}
function changeHeader(level) {
  $("h1").html("Level " + level);
}
function startOver(){
  gamePattern = [];
  toggle = true;
}
  

function checkAnswer(currentLevel) {
  console.log(gamePattern.length);
  console.log(userPattern.length);
  if (btn_arr[gamePattern[currentLevel]] === userPattern[currentLevel]) {
 
    if(gamePattern.length===userPattern.length){
     setTimeout(function(){nextSequence();},1000);
      
    }
  }
  else{
   gameOver();
  startOver();
  }
}
