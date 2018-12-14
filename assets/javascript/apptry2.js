
$("#startBtn").on("click", startQuiz);
var number = 10;
var intervalId;

////****TIMER********/
function startQuiz() {
    // setTimeout(startQuiz, 1000 * 90);
    // intervalId = setInterval(decrement, 1000);
    showQuestions(questionArray);
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
        alert("Time Up!");
        } //close if
  } //close decrement

function stop() {
    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
    clearTimeout(startQuiz);
    number === 0;
  } //close stop



//*************** QUestion Code */
//sample object
var questionArray = [

{   question: "Which of the following did Alexander Hamilton help create?",
    answers: [
        "The United States Coast Guard",
        "The United States Postal Service",
        "The United States Marines",
        "The Department of Defense"
    ],
    answercorrect: 0
},
{   question: "As a teenager, Hamilton was given what large responsibility?",
    answers: [
        "He had to cook his company's books.",
        "He was left in charge of the office he was clerking for while the owner went abroad.",
        "He was elected mayor of St. Croix.",
        "He became the tax collector for his hometown."
    ],
    answercorrect: 1
}, 
]; 

function showQuestions(questionArray){
    for(var g = 0; g < questionArray.length; g++){
        var listNum = g+1;
        var listGroupItem = $('<li class="list-group-item">');
        var formCheck = $('<div class="form-check">');
        var questart = $('<h5>');
            questart.text([listNum] + ". " + questionArray[g].question);
       $(".list-group").append(listGroupItem);
       $(listGroupItem).append(formCheck);
       $(formCheck).append(questart);
       console.log("test2");
       var answ0 = questionArray[g].answers[0];
       console.log(answ0);
       var answ1 = questionArray[g].answers[1];
       var answ2 = questionArray[g].answers[2];
       var answ3 = questionArray[g].answers[3];
       var inputForm = $('<input class="form-check-input" type="radio">');
       var inputNum = $('radio_' + g);
       console.log(inputForm);
       $(questart).append(inputForm);
       inputForm.attr('name', inputNum);
       inputForm.attr('data-answer', 0);
       console.log(inputForm);
       var labelForm = $('label');
       labelForm.addClass("form-check-label");
       labelForm.text(answ0);
       var quesEnd = $('<br>');
       labelForm.append(quesEnd);
       inputForm.append(labelForm);
       var m = $('</h5>').append(inputForm);

    //    for(var q = 0; q < 3; q++){
    //        showAnswers(q);
       }
    // } //end 1st for   
} //end show Questions function


// function showAnswers(q){
//     var n = $('<div>');
//     var l = $('</h5>');
//     $(l).append(n);

            // var inputForm = $('<input class="form-check-input" type="radio">');
            // var inputNum = $('radio_' + g);
            // console.log(inputNum);
            // inputForm.attr('name', inputNum);
            // inputForm.attr('data-answer', q);
            // console.log(inputForm);
            // var labelForm = $('label');
            // labelForm.addClass("form-check-label");
            // labelForm.text(questionArray[g][q]);
            // var quesEnd = $('<br>');
            // labelForm.append(quesEnd);
            // inputForm.append(labelForm);
            // var m = $('</h5>').append(inputForm);
    // } //end function showanswers
 
    ())


//close question array

//After Break:
//(last) run the timer at 90 secs
//(first) allow only one answer per question.
//(second) on submit of #finishBtn, look at the val();




//pseudo: display in html: question. 
// for (var i = 0; i < questionarray.length; i++){

// }


//(first) allow only one answer per question.


//very first: on submit button what do we get?
