var numGen;
var guessSubmitted;
var guessCount = 0;
var evalGuess;

/*--- Set total guess count ---*/
function setGuessCount() {
	$("#count").text(guessCount);
}

/*--- Set the feedback ---*/
function setFeedback(message) {
	$("#feedback").text(message);
}

/*--- clear User's last guess from input field ---*/
function clearInput() {
	$("#userGuess").val('');
}

/*--- Refocus cursor to input field --- */
function setFocus() {
	$("#userGuess").focus();
}

/*--- Generate a number betweeen 1-100 ---*/
function genNum() {
	numGen = Math.floor((Math.random() * 100) + 1);
	console.log(numGen);
};

/*--- Screen user input to require numerical input between 1 - 100 ---*/
function screenGuess(guess) {
	if (isNaN(guess)) {
		setFeedback("Please enter numerical value between 1 and 100");
		console.log("Testing 123");
		return true;
	}
	else if (0 > guess || guess > 100) {
		setFeedback("Please enter a number between 1 and 100");
		return true;
	}
	 else {
		return false;
	}
};

/*--- Compare user's guess against random number generated, and provide feedback ---*/
function guessTemp() {
	if ((numGen - guessSubmitted) == 0) {
		setFeedback("We have a winner!!");
	}
	else if ((numGen - guessSubmitted) == 0) {
		setFeedback("We have a winner!!");
	}
	else if (1 <= evalGuess && evalGuess < 11) {
		setFeedback("Very hot!");
	}
	else if (11 <= evalGuess && evalGuess < 21) {
		setFeedback("Hot");
	}
	else if (21 <= evalGuess && evalGuess < 31) {
		setFeedback("Warm");
	}
	else if (31 <= evalGuess && evalGuess < 51) {
		setFeedback("Cold");
	}
	else {
		setFeedback("Ice cold!");
	}
};

/*--- First screen user's guess upon submit. If valid guess, append guess to list area, provide feedback, reset input and focus ---*/
function submitGuess() {
	guessSubmitted = $("#userGuess").val();
		if (screenGuess(guessSubmitted)) {
			clearInput();
			setFocus();
		}
		else {
			guessSubmitted = $("#userGuess").val();
			console.log("Made it!");
			$("#guessList").append($("<li>" + guessSubmitted + "</li>"));
			guessCount++;
			setGuessCount();
			/*--- Normalize user's guess and store in variable ---*/
			evalGuess = (Math.abs(numGen - guessSubmitted));
			guessTemp();
			clearInput();
			setFocus();
		}
};

/*--- Clear guess list, reset guess count, focus and feedback, generate a new number when user starts new game ---*/
function newGame() {
	$("#guessList").empty();
	guessCount = 0;
	setGuessCount(guessCount);
	setFeedback("Make your Guess!");
	genNum();
	setFocus();
	clearInput();
};

$(document).ready(function(){
	newGame();

	/*--- User creates new game ---*/
	$(".new").click(function() {
		newGame();
	});

	/*--- User submits a guess ---*/
	$("form").submit(function(event) {
		event.preventDefault();
		submitGuess();
	});

	/*--- Display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);
  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function(){
  	$(".overlay").fadeOut(1000);
  });
});