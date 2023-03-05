const maxNumberInput = document.querySelector("#max-number");
const guessNumberInput = document.querySelector ("#guess-number");
const NumberInputSubmit = document.querySelector ("form");
const history = document.querySelector("#history");
const gameResult = document.querySelector("#game-result");


function handleMaxNumber(event) {
    const maxNumber = maxNumberInput.value;
    guessNumberInput.setAttribute("max",maxNumber);
}


maxNumberInput.addEventListener("input",handleMaxNumber);

function handleSubmit(event) {
    event.preventDefault();
    const maxNumber = maxNumberInput.value;
    const pickNumber = guessNumberInput.value;
    const botResult = Math.floor(Math.random()*maxNumber);

    if ( parseInt(pickNumber) === botResult ) {
        history.innerText = `You chose: ${pickNumber}, the machine chose: ${botResult}`
        gameResult.innerText = "You Win!"
    } else if ( parseInt(pickNumber) > botResult ) {
        history.innerText = `You chose: ${pickNumber}, the machine chose: ${botResult}`
        gameResult.innerText = "You lost!"
    } else if ( parseInt(pickNumber) < botResult )  {
        history.innerText = `You chose: ${pickNumber}, the machine chose: ${botResult}`
        gameResult.innerText = "You lost!"
    }

}


NumberInputSubmit.addEventListener("submit",handleSubmit);




/*
  <h1>Random Number Game</h1>
    <form>
        <h3>Generate a number between 0 and <input id="max-number" type="number" min="0" /> </h3>
        <h4>Guess the number: <input id="guess-number" type="number" min="0" />
            <input type="submit" value="Play!"></h4>
        <h4 id="history"></h4>
        <h4 id="game-result"></h4>

    </form>

*/

