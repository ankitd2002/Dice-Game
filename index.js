
// Generates a random number between 1-6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Asks for a random image number dice1.png - dice2.png
var randomDiceImage = "dice" + randomNumber1 + ".png";



// images/dice1.png -  images/dice6.png
var randomImageScore = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageScore);


// Generates a random number between 1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// images/dice1.png -  images/dice6.png
var randomImageScore2 = "images/dice" + randomNumber2 + ".png";


var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageScore2);

// if player 1 wins
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins! ⛳️";

// if player 2 wins
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! ⛳️";
}

// if both player 1 and player2 wins 
else {
    document.querySelector("h1").innerHTML = "Draw!";
}


