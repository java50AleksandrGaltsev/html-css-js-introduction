//references to DOM elements
const guessInputElement =document.querySelector (".guess-input");
const guessLettersElement = document.querySelector(".guess-letters");
let lettersDivs; //massive divs
const trialsElement = document.querySelector(".trials-remainder");
const gameResultElement = document.querySelector(".game-result");
const playAgainElement = document.querySelector(".play-again"); //kogda igra zakanchivaetc
//variables required for JS objects
const wordsForGuess = ["pappy", "apple", "table", "gold", "index", "script", "peace", "picture"]
let trials; //tekusee znachenie popitok kotorie ostalis
let word; //sluchaynoe slovo
let flFameOver = false; //esli vvodit iform v igre kotoray  ne zakonchilac, i ne nazhim play again to sostoyanie false 
//kazhdiy raz kogda vvoditsya slovo igra nachinaetsya

//functions
function startGame() { // play again budet vizovat
    word = getWord(); //poluchaem slovo, otdelno tk s word rabotaet onchange
    fillLettersDivs(); //zapolnyaem divs po kazhdoy bukve
    flGameOver = false; // finish dast true a novaya igra false
    let finishMessage  = '';
    trials = word.length + 1;
    playAgainElement.style.display = "none"; //poyavitsya kogda budet finish igri. kogda nachinaetsya igra net knopki play again
    gameResultElement.innerHTML = "";
    trialsElement.innerHTML = `remained trials ${trials}`;
    guessInputElement.value = '';

}
function getWord() { 
    const index = Math.trunc(Math.random() * wordsForGuess.length);
    return wordsForGuess[index];
}
function fillLettersDivs() {
    const arrayWord = Array.from(word); //prevras iz slova massiv

    guessLettersElement.innerHTML = arrayWord.reduce(function(res, cur){
      res = res + '<div class="letter"></div>'
      return res;
    },'');
    lettersDivs = document.querySelectorAll(".letter");
}
function onChange() { //vvod slova //value - to chto vvedeno
    if (flGameOver) {
        alert("game is over, press play again")
    } else{
   const trialWord = guessInputElement.value;
   trials--; //umenshaem kolichestvo popitok
   trialsElement.innerHTML = `remainder trials ${trials}`;
    if (trialWord.length != word.length) {
        alert("wrong number of letters");
    } else {
        coloringWord(trialWord);
    }
    if (checkGameOver(trialWord)) {
        finishGame();
    }
}
    
}
function checkGameOver (trialWord) {
    let res = true;
    if (word === trialWord) {
    finishMessage = `Congratulations you have guessed the word using ${word.length + 1 - trials} trials`;
    } else if (trials === 0) {
        finishMessage = `Sorry, but the number of trials has ended up`;
    } else {
        res = false;
    }
    return res;
}
function coloringWord(trialWord) {
    const arWord = Array.from(trialWord);
    arWord.forEach(function (letter, index) {
lettersDivs[index].innerHTML = letter;
lettersDivs[index].style.color = getColor(letter, index);
    })
}
function getColor (letter, index) {
    let res = "red"
    if(word.includes(letter)) {
res = word[index] == letter ? "green" : "yellow"
    }
    return res;
}
function finishGame() { //obrabotka resultata
   flGameOver = true;
   gameResultElement.innerHTML = finishMessage;
   playAgainElement.style.display = "block";


}
//actions
startGame();

