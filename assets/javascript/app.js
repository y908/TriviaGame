window.onload = function() {
		
		$('.results2').hide();
		var number = 120; // game countdown
		//makes the questions & submit button dissappear
		$('.gameQuestions').hide();
		// after user starts button, 
		// game questions appear and timer starts
		$('.button').on('click', function() {
			$('button2').show();
			$('.wrap').hide();
			$('.gameQuestions').show();
			//-----TIMER STARTS--------
			run();
		}); //---end of button function
		//----- runs countdown timer---------
		function run() {
			counter = setInterval(decrement, 1000);
		}

		function decrement() {
				number--;
				$('.counter').html('<h2>' + number + '</h2>');
				if (number === 0) {
					stop();
					alert('time is up!')
					$('.gameQuestions').hide();
				}
			}
			//------user results---------
		var correctAnswers = 0;
		var incorrectAnswers = 0;
		//----game answers-------
		var answers = ['#q1c', '#q2a', '#q3b', '#q4b', '#q5c'];
		//----submit button, answers clear and timer stops
		$('.button2').on('click', function() {
			for (i = 0; i < answers.length; i++) {
				if ($(answers[i]).prop('checked') == true) {
					correctAnswers++;
				} else {
					incorrectAnswers++;
				}
				stop();
				$('.gameQuestions').hide();
				$('button2').hide();
				$('#results').html('<p>Correct Answers:' + correctAnswers + '</p>' +
					'<br>' + '<p>Incorrect Answers:' + incorrectAnswers);
				$('.results2').show();
			}

		}); //---closing for .button2 function
		//-----------GAME ENDS/ counter runs out----------------------
		function stop() {
			clearInterval(counter);
			$('#results').html('<p>Correct Answers:' + correctAnswers + '</p>' + '<br>' +
				'<p>Incorrect Answers:' + incorrectAnswers);
			$('.results2').show();

		}
	}
	//} //closing for window.onload