
$("#startBtn").on("click", startQuiz);
var number = 10;
var intervalId;
var correctAnswer = 0;
var wrongAnswer = 0;

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
    answercorrect: 0
},
{   question: "As a teenager, Hamilton was given what large responsibility?",
    answercorrect: 1
},
{   question: "Which song in 'Hamilton' has a section that is the fastest sung song on Broadway?",
    answercorrect: 0
}, 
{   question: "In the Revolutionary War, Hamilton was eventually asked to:",
    answercorrect: 1
},
{   question: 'Which song in "Hamilton" does King George III NOT sing?',
    answercorrect: 1
},
{   question: "What important document did Hamilton sign?",
    answercorrect: 3
},
{   question: "Who wrote The Federalist Papers with Hamilton?",
    answercorrect: 1
},
{   question: "Where was Alexander Hamilton born?",
    answercorrect: 2
},
{   question: "Aaron Burr finally challenged Hamilton to a duel over what?",
    answercorrect: 1
},
{   question: 'In "Hamilton", who are the two characters that sing "One Last Time"?',
    answercorrect: 3
},
]; 

// function showQuestions(questionArray){
//     for(var g = 0; g < questionArray.length; g++){
//         var listNum = g+1;
//         var listGroupItem = $('<li class="list-group-item">');
//         var formCheck = $('<div class="form-check">');
//         var questart = $('<h5>');
//             questart.text([listNum] + ". " + questionArray[g].question);
//        $(".list-group").append(listGroupItem);
//        $(listGroupItem).append(formCheck);
//        $(formCheck).append(questart);
//        showAnswers();
    //    for(var q = 0; q < 3; q++){
    //        showAnswers(q);
    //    }
    // } //end 1st for   
// } //end show Questions function


function showAnswers(q){
    var n = $('<div>');
    var l = $('</h5>');
    $(l).append(n);

            // var g = 0;
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
            // g++;
    } //end function showanswers
 
    ///Quiz Code check each answer against question.
    $("#finishBtn").on("click", function(event){
        // prevent form from submitting
        event.preventDefault();
    //gather all elements with name=radio_              
        var radio = $('[name=radio_0]');
        console.log(radio);
    //for loop to look thru the array of name_ elements
        for(var i = 0; i <= 3; i++){
    //look for "checked" item in the array and log it       
                if (radio[i].checked){
                var rad_answer = $(radio[i]).data('answer');
                console.log("rad_answer" + rad_answer);
                } // close if
        } // close for
    }); //close on click
        
    // var answ0 = questionArray[0].answercorrect;
    //     console.log(answ0);
    //     if(rad_answer === answ0){
    //         correctAnswer++
    //         alert("correct");
    //     } else {
    //         wrongAnswer++
    //         alert("nope");
    //     }
    
        // for(var i = 0; i < 3; i++){
        //     if (radio[i].checked){
        //         var a = radio[i];
        //         console.log(a);
        //         var b = radio[i].type;
        //         console.log(b);
        //         console.log(rad_answer);
    //         } 
    //     } 
    // }); 


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
