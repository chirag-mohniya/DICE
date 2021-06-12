/*
GAME RULES:

-The game has 2 players in rounds
-In each turn , a player rolls a dice as many times as he wishes, Each result get added to his ROUND 
score
-BUT , if player can choose to 'Hold' , which means that his ROUND score gets added to his GLOBAL score. After
that , it's the next player's turn
-The first player to reach 100 Points on GLOBAL score wins the game

*/

var scores , roundScore , activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';




document.querySelector('.btn--roll').addEventListener('click', function(){
	//1. Random number

	var dice = Math.floor(Math.random() * 6) + 1 ; 

	//2. Display the result

	var diceDOM = document.querySelector('.dice')
	
	diceDOM.style.display = 'block';

	diceDOM.src = 'dice-'+ dice +'.png';


	//3. Update the round score IF the rolled was NOT a 1

	if 	(dice !== 1 ){
		//Add Score
		roundScore = roundScore + dice;
		document.querySelector('#current--' + activePlayer).textContent = roundScore; //use .textContent method to change the text in the element
	}
	 else{
		//Next Player
	 	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	 	// 	if(activePlayer === 0 ){
		// 		activePlayer = 1;
		// 	} else{
		// 		activePlayer = 0;
		// 	}
	 	roundScore = 0;

	 	document.getElementById('current--0').textContent = '0';
	 	document.getElementById('current--1').textContent = '0';

		document.querySelector('.player--0').classList.toggle('player--active');
		document.querySelector('.player--1').classList.toggle('player--active');

		diceDOM.style.display = 'none';
	}

}
);





// document.querySelector('#current--' + activePlayer).innerHTML = "<em>" + dice + '<em>'
// var x = document.querySelector('#score--0').textContent;









