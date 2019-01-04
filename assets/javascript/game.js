var choice = ["a","b","c","d","e","f","g", "h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 0;
var losses = 0;
var guesses = 9;
var compGuess = 0;


function onCompGuess(){
    compGuess = choice[Math.floor((Math.random() * 25) + 0)];
    console.log ("compGuess"+compGuess);
}

document.onkeyup = function(event){
    var playerGuess = event.key;
    if (compGuess == playerGuess) {
        win = win + 1;
        onCompGuess();
        reset();
    }else{
        guesses = guesses - 1;
        if(guesses == 0){
           losses = losses +1;
           onCompGuess();
           reset(); 
        }
    }
    console.log("win"+win+"loss"+losses+"guesses"+guesses);
}

function reset(){
   guesses = 9;
   document.getElementsByName("playerGuess").values = ""; 
   document.getElementById("win").innerText = win;
   document.getElementById("loss").innerText = losses;
   document.getElementById("guess").innerText = guesses; 
}