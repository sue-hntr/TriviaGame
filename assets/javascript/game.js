$('#questionScreen').hide();
$('#resultScreen').hide();

$("#startBtn").on("click", startQuestions);
var number = 120;
var intervalId;
var correctAnswer = 0;
var wrongAnswer = 0;
var noAnswer = 0;
var questionArray = [0, 1, 0, 1, 1, 3, 1, 2, 1, 3];
var numOfQuestions = questionArray.length; 

////****TIMER********/
function startQuestions() {
    $('#secondScreen').show();
    $('#questionScreen').show();
    setTimeout(startQuestions, 1000 * 120);
    intervalId = setInterval(decrement, 1000);
    // showQuestions();
} //close startQuiz

  //  The decrement function.
function decrement(correctAnswer, wrongAnswer) {
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

function stop(correctAnswer, wrongAnswer, noAnswer) {
    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
    clearTimeout(startQuestions);
    number === 0;
    $('#show-number').remove();
    showQuestions(correctAnswer, wrongAnswer, noAnswer);
    lastScreen(correctAnswer, wrongAnswer, noAnswer);
  } //close stop


///Quiz Code check each answer against question.
$("#finishBtn").on("click", function(event){
    event.preventDefault();
    showQuestions(correctAnswer. wrongAnswer, noAnswer);
    lastScreen(correctAnswer. wrongAnswer, noAnswer);
}); //close on click  

function showQuestions(){
    var questionArray = [0, 1, 0, 1, 1, 3, 1, 2, 1, 3]; 
    var count = 0;        
    while (count < 10){
    //create variable to assemble name=radio_ for each question
            var radioGroup1 = ('[name=radio_' + count + ']');
            console.log(radioGroup1);
            var radioNew = $(radioGroup1);
            for(var i = 0; i <= 3; i++){
                console.log(radioNew[i]);
    //look for "checked" item in the array and log it       
                if (radioNew[i].checked){
                        console.log("checked");
                        //get the data-answer value for the "checked" radio_ 
                        var rad_answer = $(radioNew[i]).data('answer');
                        console.log("rad_answer" + rad_answer);
        //get the correct answer from the answerkey array (questionArray)
                        var goodAnswer = questionArray[count];
                        console.log("goodAnswer " + goodAnswer);
                        //    check to see if the the checked answer is correct
                        if(rad_answer === goodAnswer){
                            console.log("good");
                            correctAnswer++;
                        } else {
                            console.log("bad");
                            wrongAnswer++
                        } //close ifelse rad_answer
        
                } //close if
            } //close for
            count++;    
    } //close while
    lastScreen();
    
} //close showQuestions

 
function lastScreen(count){
    noAnswer = 10 - (correctAnswer + wrongAnswer);
    $("#firstScreen").hide();
    $('#secondScreen').hide();
     $('#questionScreen').hide();
     $('#resultScreen').show();
    console.log("correct" + correctAnswer);
    $('#correctAnswers').html(correctAnswer);
    $('#wrongAnswers').html(wrongAnswer);
    $('#unAnswers').html(noAnswer);
}