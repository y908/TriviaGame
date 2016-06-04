window.onload = function() {

	var number = 3;

	//makes the questions & submit button dissappear
	$('.gameQuestions').hide(); 
	

	// after user starts button, 
	// game questions appear and timer starts
	$('.button').on('click', function(){

		$('button2').show(); 
		$('.button').hide();
		$('.gameQuestions').show();
		

		//-----TIMER STARTS--------
		//run();
	

	});//---end of button function



	//-----TIMER---------
	function run(){
		counter = setInterval(decrement, 1000);
	}

	function decrement(){
		number--;
		$('.counter').html('<h2>' + number + '</h2>');
		if (number === 0){
			stop();
			alert('time is up!')
			$('.gameQuestions').hide(); 
		}
	}

	//------GAME ANSWERS---------
	
   var totalQuestions = 5;
   var correctAnswers = 0;
   var wrongAnswers = 0;
   var unanswered = 0;

   var answers = ['#q1c', '#q2a', '#q3b', '#q4b', '#q5c'];

	$('.button2').on('click', function(){

			//$("#q1b").prop("checked", true)
		for (i = 0; i < answers.length; i++){
			if($(answers[i]).prop('checked') == true){
				correctAnswers++;
				
			}
			else {
				wrongAnswers++;
			}

			$('#results').html('<p>Corrent Anwers:' + correctAnswers + '</p>' 
	+ '<br>' + '<p>wrongAnswers' + wrongAnswers);
		}



	});//---closing for .button2 function





//-----------GAME ENDS----------------------
	function stop(){
		clearInterval(counter);
		//$number.hide();
	}

	
}





//} //closing for window.onload