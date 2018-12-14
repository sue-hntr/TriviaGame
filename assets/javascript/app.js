
$("<button>").on("click", startQuiz);

//total game timer: 90 seconds set timeout


//need the code for the timer to show
////set our number of seconds in the quiz
var number = 10;



////buttons get an id
// $('#firstScreen').show();

//  Variable that will hold our interval ID when we click the Take your shot execute
//  the "run" function
var intervalId;


////
function startQuiz() {
    setTimeout(startQuiz, 1000 * 90);
    intervalId = setInterval(decrement, 1000);
    // $('#secondScreen').show();
  }

  //  The decrement function.
  function decrement() {
    // $('#firstScreen').hide();
    // $('#secondScreen').show();
    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#show-number").html("<h2>Time Remaining: " + number + "</h2>");


    //  Once number hits zero...
    if (number === 0) {

      //  ...run the stop function.
      stop();

      //  Alert the user that time is up.
      alert("Time Up!");
    }
  }

  //  The stop function
  function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
    number === 0;
  }

  //  Execute the run function.
  $('#firstScreen').show();
  startQuiz();
