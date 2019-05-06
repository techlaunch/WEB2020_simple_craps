var funds = 100;

// get HTML elements
var msgFunds = document.getElementById('funds');
var dice1 = document.getElementById('dice1');
var dice2 = document.getElementById('dice2');
var message = document.getElementById('message');
var results = document.getElementById('results');

// start with initial values
msgFunds.innerHTML = "Your funds: $" + funds;

// play dice
function play() {
	// get value of HTML elements
	var number = document.getElementById('number').value;
	var bet = document.getElementById('bet').value;

	// validate the number selected
	if(number < 1 || number >12) {
		alert("You selected an incorrect number to bet");
		return false;
	}

	// validate if you have enought funds
	if(bet > funds) {
		alert("You do not have enoght funds to bet that amount");
		return false;
	}

	// roll the dice
	var rollDice1 = Math.floor(Math.random() * 12) + 1;
	var rollDice2 = Math.floor(Math.random() * 12) + 1;
	var totalDiceRoll = rollDice1 + rollDice2;

	// change the dice images
	dice1.className = "face" + rollDice1;
	dice2.className = "face" + rollDice2;

	// change funds
	var didYouWin = number == totalDiceRoll;
	var fundsWon = number * 7;
	funds -= bet;
	if(didYouWin) funds += fundsWon;
	msgFunds.innerHTML = "Your funds: $" + funds;

	// create the message
	var winOrLose = didYouWin ? "You won $" + fundsWon : "Sorry you lost, please play again";
	message.innerHTML = "Your bet $"+bet+" to number "+number+". " + winOrLose;

	// show results section
	results.classList.remove("hidden");
}
