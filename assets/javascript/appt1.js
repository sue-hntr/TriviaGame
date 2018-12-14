
$("#startBtn").on("click", startQuiz);
var number = 10;
var intervalId;
var correctAnswer = 0;
var wrongAnswer = 0;

////****TIMER********/
function startQuiz() {
    setTimeout(startQuiz, 1000 * 90);
    intervalId = setInterval(decrement, 1000);
    // showQuestions(questionArray);
  } //close startQuiz

  //  The decrement function.
function decrement() {
        number--;
    //  Show the number in the #show-number tag.
        $("#show-number").html("<h2>Time Remaining: " + number + "</h2>");
        //  Once number hits zero...
        if (number === 0) {
        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Times Up!");
        } //close if
  } //close decrement

function stop() {
    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
    clearTimeout(startQuiz);
    number === 0;
    $('#show-number').remove();

  } //close stop



//*************** QUestion Code */
//sample object
var questionArray = [0, 1, 0, 1, 1, 3, 1, 2, 1, 3]; 


    ///Quiz Code check each answer against question.
    $("#finishBtn").on("click", function(event){
        // prevent form from submitting
        event.preventDefault();
    //create a loop to check all of the answers
        for(var j = 0; j <= questionArray.length; j++){
            //create variable to assemble name=radio_ for each question
                var j_radio = ('[name=radio_' + j + ']');
                var j_radio2 = ("'" + j-radio + "'" )
                console.log(j_radio2);
                var radio = $('j_radio');
                // $('[name=radio_0]');
                console.log("name radio" + j_radio);
            //gather all elements with name=radio_              
                // var radio = $('j_radio + ']');
                // console.log(radio);
            //for loop to look thru the array of name_ elements
                for(var i = 0; i <= 3; i++){
            //look for "checked" item in the array and log it       
                        if (radio[i].checked){
            //get the data-answer value for the "checked" radio_ 
                            var rad_answer = $(radio[i]).data('answer');
                            console.log("rad_answer" + rad_answer);
            //get the correct answer from the answerkey array (questionArray)
                            var goodAnswer = questionArray[0];
                            console.log("goodAnswer " + goodAnswer);
            //check to see if the the checked answer is correct
                            if(rad_answer === goodAnswer){
                                console.log("good");
                                correctAnswer++;
                            } else {
                                console.log("bad");
                                wrongAnswer++
                            } //close ifelse rad_answer
                        } // close ifelse radio[i] checked
                } // close for loop array of name_ elements
            } //close for j loop
    }); //close on click
 