// Setting Variables
var card = $('#quiz-area');

// 1. create global variable
// 1. Variable to put logic into html dynamically
//     * var card = $("#quiz-area");
// 2. Variable for the Counter
//     * var countStartNumber = 30;


// 3. Questions array
// * var question  = [{
//     question: a string,
//     answers: an array with 4 strings,
//     correctAnswer: a string,
//     image: link to image
// },
// {
//     question: a string,
//     answers: an array with 4 strings,
//     correctAnswer: a string,
//     image: link to image
// }]

// Object holding all of my questions, answers, correct answers and the associated images
var questions = [{
    question: "What location, former home to a Rebel Base, was Poe Dameron’s childhood home?",
    answers: ["Dantooine", "Naboo", "Yavin 4", "Tatooine"],
    correctAnswer: "Yavin 4",
    image: "assets/images/poe.gif",

}, {
    question: "What was the name of Admiral Akbar’s command ship in the Battle of Endor?",
    answers: ["Hope", "Home One", "Peace", "The Retaliator"],
    correctAnswer: "Home One",
    image: "assets/images/ackbar.gif",

}, {
    question: "How many proton torpedoes does a T-65 X-wing starfighter carry?",
    answers: ["Two", "Four", "Six", "Eight"],
    correctAnswer: "Six",
    image: "assets/images/xwing.gif",

}, {
    question: "How wide was the target area the Rebel pilots had to fire at when attacking the Death Star?",
    answers: ["One Meter", "Two Meters", "Three Meters", "Four Meters"],
    correctAnswer: "Two Meters",
    image: "assets/images/deathstar.gif",

}, {
    question: "Who said, “You were right about one thing, Master. The negotiations were short.”?",
    answers: ["Obi-Wan Kenobi", "Luke Skywalker", "Anakin Skywalker", "Qui-gon Jinn"],
    correctAnswer: "Obi-Wan Kenobi",
    image: "assets/images/obiqui.gif",

}, {
    question: "Who said, “One thing’s for sure — we’re all gonna be a lot thinner”?",
    answers: ["Princess Leia", "C3P-0", "Han Solo", "Luke Skywalker"],
    correctAnswer: "Han Solo",
    image: "assets/images/han.gif",

}, {
    question: "When Qui-Gon Jinn was a Jedi Padawan, who was his Master?",
    answers: ["Yoda", "Mace Windu", "Count Dooku", "Ki-Adi-Mundi"],
    correctAnswer: "Count Dooku",
    image: "assets/images/dooku.gif",

}, {
    question: "What starfighter pilot survived both Death Star battles?",
    answers: ["Wes Janson", "Wedge Antilles", "Hobbie Klivian", "Jek Porkins"],
    correctAnswer: "Wedge Antilles",
    image: "assets/images/wedge.gif",

}, {
    question: "What ship was the Millennium Falcon a modified version of?",
    answers: ["LX-74", "Slave-1", "YT-1300", "Skipray Blastboat"],
    correctAnswer: "YT-1300",
    image: "assets/images/falcon.gif",

}, {
    question: "Roughly how old was Yoda when Luke Skywalker returned to Dagobah to complete his training?",
    answers: ["500 years", "600 years", "800 years", "900 years"],
    correctAnswer: "900 years",
    image: "assets/images/yoda.gif",

}];
// 5. Game object to hold the logic 
// * var game = {
//     1. grab into the questions array
//         * questions: question,
//         * currentQuestion: 0,
//         * counter: CountStartNumber,
//         * correct: 0,
//         * incorrect: 0,
var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,
    countdown: function () {
        game.counter--;
        $('#counter-number').html(game.counter);

        if (game.counter === 0) {
            game.timeUp();
        }
        // 2. create a countdown function{
        //     * decrement counter
        //     * use jquery to put dynamically put logic onto the page
        //     * if statement
        //         * if time is up, run time up function
    },
    loadQuestion: function () {
        timer = setInterval(game.countdown, 1000);
        card.html('<h2>' + questions[game.currentQuestion].question + '</h2>');
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            card.append('<button class="answer-button" id="button" data-name="' + questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '</button>');
        }
        // 3. create a loadQuestion function
        // * set timer 
        //     * timer = setInterval(game.countdown, 1000) 
        // * dynamicatly add question into card variable
        //      * *hint* card.html ("<h2>" + "</h2>")
        // * for loop to run through the
        //     * questions
        //     * a dynamically added buttons with answer options 
    },
    nextQuestion: function () {
        game.counter = 30;
        $('#counter-number').html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
        // 4. create a nextQuestion function
        // * set the counter
        //     game.counter = countStartNumber
        // * use jquery to change the text of the game counter
        // * increment the currentQuestion by one
        // * call the loadQuestion function
    },
    timeUp: function () {
        clearInterval(timer);
        $('#counter-number').html(game.counter);

        card.html('<h2>You ran out of time!</h2>');
        card.append('<h3>The Correct Answer was: ' + questions[game.currentQuestion].correctAnswer);
        card.append('<img src="' + questions[game.currentQuestion].image + '" />');

        if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 5000);
        } else {
            setTimeout(game.nextQuestion, 5000);
        }
        // 5. create a timeUp function
        // * clearInterval(timer)
        // * use jquery to change the text of the game counter
        // * dynamically add out of time to the card
        // * append the Correct answer to the card
        // * append image/gif to the card
    },
    results: function () {
        clearInterval(timer);

        card.html('<h2>You made it!</h2>');
        $('#counter-number').html(game.counter);
        card.append('<h3>Questions answered Correctly: ' + game.correct + '</h3>');
        card.append('<h3>Questions answered Incorrectly: ' + game.incorrect + '</h3>');
        card.append('<h3>You left ' + (questions.length - (game.incorrect + game.correct)) + ' unanswered.</h3>');
        card.append('<img src="assets/images/dance.gif"/>');
        card.append('<br><button id="start-over">Start Over?</button>');
        // * clearInterval
        // *  dynamically add html to let them know of         there results
        // * use jquery to add html of game.counter to the     id of counter-number
        // * add how many correct answers they got
        // * add how many incorrect answer they got
        // * add how many unanswered 
        // * add a start over button
    },
    clicked: function (e) {
        clearInterval(timer);

        if ($(e.target).data("name") === questions[game.currentQuestion].correctAnswer) {
            game.answeredCorrectly();
        } else {
            game.answeredIncorrectly();
        }
        // * clearInterval(timer)
        // * if/ else statment for when an answer is clicked
        //     * if correct run answeredCorrectly() function
        //     * else run answeredIncorrectly() function
    },
    answeredIncorrectly: function () {
        game.incorrect++;
        clearInterval(timer);
        card.html('<h2>Oh no!</h2>');
        card.append('<h3>The Correct Answer was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
        card.append('<img src="' + questions[game.currentQuestion].image + '" />');

        if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 5000);
        } else {
            setTimeout(game.nextQuestion, 5000);
        }
        // 8. create a answerIncorrectly function
        // * add a point to the incorrect column
        // * clearInterval(timer)
        // * dynamically add html to let them know they are wrong
        // * add the right answer
        // * add the image 
        // * if / else statment
        //      *if no more question wait three seconds then show result
        //      *else wait three seconds and show next question
    },
    answeredCorrectly: function () {
        clearInterval(timer);
        game.correct++;
        card.html('<h2>You did it!</h2>');
        card.append('<img src="' + questions[game.currentQuestion].image + '" />');

        if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 5000);
        } else {
            setTimeout(game.nextQuestion, 5000);
        }
        // 9. create a answeredCorrectly function
        // * add a point to correct column
        // * clearInterval(timer);
        // * dynamically add html to let them know they are    correct
        // * add image
        // * if / else statment
        //      *if no more question wait three seconds then show result
        //      *else wait three seconds and show next question
    },
    reset: function () {
        game.currentQuestion = 0;
        game.counter = 30;
        game.correct = 0;
        game.incorrect = 0;
        game.loadQuestion();
    }
    // 10. create a reset function
};

// 2. create click events
// 1. start button
//     * $(document).on("click", "#start", function() {
//         $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
//         game.loadQuestion();
//         });

// 2. answer button
//     * $(document).on("click", ".answer-button", function(e) {
//         game.clicked(e);
//         });

// 3.  start over button  
//    *  $(document).on("click", "#start-over", function() {
//         game.reset();
//         });

$(document).on('click', '#start-over', function(e) {
    game.reset();
  });
  
  $(document).on('click', '.answer-button', function(e) {
    game.clicked(e);
  });
  
  $(document).on('click', '#start', function(e) {
    $('#sub-wrapper').prepend('<h2>Time Remaining: <span id="counter-number">30</span> Seconds</h2>');
    game.loadQuestion();
  });