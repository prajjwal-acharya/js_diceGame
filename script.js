function randomNumber(min, max){
    return Math.random() * (max - min) + min;
}

// getting the random values of the image number 
let randomNumber1  = Math.floor(randomNumber(1,7));
let randomNumber2  = Math.floor(randomNumber(1,7));

let rstring1="./images/dice"+randomNumber1+".png";
let rstring2="./images/dice"+randomNumber2+".png";

//choosing the image to be refreshed and modified
var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

//removing the og class and adding the new class
image1.setAttribute("src", rstring1);
image2.setAttribute("src", rstring2);

if(randomNumber1===randomNumber2){
    document.querySelector('h1').textContent = "🚩Draw🚩";
}
else if(randomNumber1>randomNumber2){
    document.querySelector('h1').textContent = "🚩Player 1 Wins";
}
else {
    document.querySelector('h1').textContent = "Player 2 Wins🚩";
}
