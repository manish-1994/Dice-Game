randomizer()


function randomizer() {
    var randomNum1 = Math.floor(Math.random()*6) + 1;
var randomDice = "dice" + randomNum1 + ".png";
var randomImageSource = "images/" + randomDice;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNum2 = Math.floor(Math.random()*6) + 1;
var randomImageSource2 = "images/dice"+randomNum2+".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomImageSource2);


if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = " 😌 Player 1 wins";
} 
else if(randomNum2 >randomNum1) 
{
    document.querySelector("h1").innerHTML = "Player 2 wins 😌";

}

else{
    document.querySelector("h1").innerHTML = "Draw";

}
}

