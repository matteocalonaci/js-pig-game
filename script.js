'use strict';
//seleziono gli elementi
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//inizializzo le variabili
let scores, currentScore, activePlayer, playing


//funzione per inizializzare il gioco
const init = ()=>{
    //funzionalità di partenza
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true
    
    score0El.textContent = 0;
    score1El.textContent = 0;
    //rendere invisibile current0El e current1El
    current0El.textContent = 0;
    current1El.textContent = 0;
    
    //rendere invisibile diceEl
    diceEl.classList.add('hidden');
  //rendere invisibile currentScore
  currentScore = 0;
  if(document.querySelector(`.player--${activePlayer}`).classList.contains('player--winner')){
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
  }
   if(document.querySelector(`.player--${activePlayer}`).classList.contains('player--winner')){
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
  }
}

//invoco la funzione per avere di nase i valori azzerati
init();


//funzione per cambiare giocatore
const switchPlayer = () => {
            //se esce 1, cambio giocatore
            document.getElementById(
                `current--${activePlayer}`
            ).textContent = 0
            currentScore = 0
            activePlayer = activePlayer === 0 ? 1 : 0
            player0El.classList.toggle('player--active')
            //il metodo toggle aggiunge una classe se non c'è e la toglie se c'è
            player1El.classList.toggle('player--active')
};

//funzionalità di lancio
btnRoll.addEventListener('click', function () {
if(playing) {
      //rendere visibile diceEl
  diceEl.classList.remove('hidden');
  //generare un numero random
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //rendere visibile la faccia del dado in base al numero generto
  diceEl.src = `dice-${dice}.png`;

  //se esce 1, cambio giocatore
  if (dice !== 1) {
    //aggiungere il numero al punteggio corrente
    currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
}
});

//funzionalità di conferma, aggiungo il valore corrente al mio punteggio
btnHold.addEventListener('click', function () {
    if (playing) {
        //aggiungi current score a active player score
        scores[activePlayer] =  scores[activePlayer] + currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
        
        //se player score >= 100 il gioco finisce
        if (scores[activePlayer] >= 100){
            playing = false
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remuve('player--winner');
            
        }else{
            //altrimenti cambia giocatore
            switchPlayer()
        }
    }
});

//resetto i valori
btnNew.addEventListener('click', init);