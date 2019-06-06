var card = $("#quiz-area");
var countStartNumber = 30;

var question = [{
    question: "",
    answers: ["","","",""],
    answer: "",
    image: link,
    audio: link,
},{
    question: "",
    answers: ["","","",""],
    answer: "",
    image: link,
    audio: link,
},{
    question: "",
    answers: ["","","",""],
    answer: "",
    image: link,
    audio: link,
},{
    question: "",
    answers: ["","","",""],
    answer: "",
    image: link,
    audio: link,
},{
    question: "",
    answers: ["","","",""],
    answer: "",
    image: link,
    audio: link,
},{
    question: "",
    answers: ["","","",""],
    answer: "",
    image: link,
    audio: link,
},{
    question: "",
    answers: ["","","",""],
    answer: "",
    image: link,
    audio: link,
},{
    question: "",
    answers: ["","","",""],
    answer: "",
    image: link,
    audio: link,
},{
    question: "",
    answers: ["","","",""],
    answer: "",
    image: link,
    audio: link,
},{
    question: "",
    answers: ["","","",""],
    answer: "",
    image: link,
    audio: link,
}]

// Set this to the setinterval
var timer = 30;

var game = {
    questions: question,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,

    countdown = () => {
        // Logic for countdown
        /* decrement counter
        use jquery to dynamically put logic onto page
        if statement
            if time is up, run time up function*/
    },

    loadQuestion = () => {
        /* set timer
        timer = setInterval(game.countdown, 1000)
        dynamically add question into card variable
        *hint* card.html ("<h2>" + "</h2>")
        for loop to run through the questions
        dynamically add buttons with answer options
        */
    },

    nextQuestion = () => {
        /* set the counter
        game.counter = countStartNumber
        use jquery to change the text of the game counter
        increment the currentQuestion by one
        call the loadQuestion function */
    },

    timeUp = () => {
        /* clearInterval(timer)
        use jquery to change the text of the game counter
        dynamically add out of time to the card
        append the corrent answer to the card
        append image to the card */
    },

    results = () => {
        /* clearInterval
        dynamically add html to let them know of their results
        use jquery to add html of game.ocunter to the id of counter-number
        add how many correct answers they got
        add how many incorrect answers they got
        add how many unanswered
        add a start over button */
    },

    clicked = () => {
        /* clearInterval(timer)
        if/else statement for when an answer is clicked
            if correct run answeredCorrectly() function
            else run answeredIncorrectly() function */
    },

    answeredIncorrectly = () => {
        /* add a point to the incorrect column
        clearInterval(timer)
        dynamically add html to let them know they are wrong
        add the right answer
        add the image
        if/else statement
            if no more questions wait three seconds then show result
            else wait three seconds and show next question */
    },

    answeredCorrectly = () => {
        /* add a point to correct columm
        clearInterval(timer)
        dynamically add html to let them know they are correct
        add image
        if/else statement
            if no more questions wait three seconds then show result
            else wait three seconds and show next question*/
    }, 

    reset = () => {
    }
}

// create click events
// start button
$(document).on("click", "#start", function() {
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
    game.loadQuestion();
});

$(document).on("click", ".answer-button", function(e) {
    game.clicked(e);
});

$(document).on("click", "#start-over", function () {
    game.reset();
});
