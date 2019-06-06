var card = $("#quiz-area");
var countStartNumber = 30;


// Questions array holding all questions, answers, and image to be associated with the question.

var question = [{
    question: "What location, former home to a Rebel Base, was Poe Dameron’s childhood home?",
    answers: ["Dantooine","Naboo","Yavin 4","Tatooine"],
    answer: "Yavin 4",
    image: "assets/images/poe.gif",

},{
    question: "What was the name of Admiral Akbar’s command ship in the Battle of Endor?",
    answers: ["Hope","Home One","Peace","The Retaliator"],
    answer: "Home One",
    image: "assets/images/ackbar.gif",

},{
    question: "How many proton torpedoes does a T-65 X-wing starfighter carry?",
    answers: ["2","4","6","8"],
    answer: "6",
    image: "assets/images/xwing.gif",

},{
    question: "How wide was the target area the Rebel pilots had to fire at when attacking the Death Star?",
    answers: ["One Meter","Two Meters","Three Meters","Four Meters"],
    answer: "Two Meters",
    image: "assets/images/deathstar.gif",

},{
    question: "Who said, “You were right about one thing, Master. The negotiations were short.”?",
    answers: ["Obi-Wan Kenobi","Luke Skywalker","Anakin Skywalker","Qui-gon Jinn"],
    answer: "Obi-Wan Kenobi",
    image: "assets/images/obiqui.gif",

},{
    question: "Who said, “One thing’s for sure — we’re all gonna be a lot thinner”?",
    answers: ["Princess Leia","C3P-0","Han Solo","Luke Skywalker"],
    answer: "Han Solo",
    image: "assets/images/han.gif",

},{
    question: "When Qui-Gon Jinn was a Jedi Padawan, who was his Master?",
    answers: ["Yoda","Mace Windu","Count Dooku","Ki-Adi-Mundi"],
    answer: "Count Dooku",
    image: "assets/images/dooku.gif",

},{
    question: "What starfighter pilot survived both Death Star battles?",
    answers: ["Wes Janson","Wedge Antilles","Hobbie Klivian","Jek Porkins"],
    answer: "Wedge Antilles",
    image: "assets/images/wedge.gif",

},{
    question: "What ship was the Millennium Falcon a modified version of?",
    answers: ["LX-74","Slave-1","YT-1300","Skipray Blastboat"],
    answer: "YT-1300",
    image: "assets/images/falcon.gif",

},{
    question: "Roughly how old was Yoda when Luke Skywalker returned to Dagobah to complete his training?",
    answers: ["500 years","600 years","800 years","900 years"],
    answer: "900 years",
    image: "assets/images/yoda.gif",

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
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <=0) {
            game.timeUp();
        }
        // Logic for countdown
        /* decrement counter
        use jquery to dynamically put logic onto page
        if statement
            if time is up, run time up function*/
    },

    loadQuestion = () => {
        timer = setInterval(game.countdown, 1000);
        card.html("<h2>" + question[game.currentQuestion].question + "</h2>");
        for (var i = 0; i < question[game.currentQuestion].answers.length; i++) {
            card.append("<button class='answer-button' id='button-" + i + "'data-name='" + question[game.currentQuestion].answers[i] + "'>" + 
            question[game.currentQuestion].answers[i] + "</button>");
        }
        /* set timer
        timer = setInterval(game.countdown, 1000)
        dynamically add question into card variable
        *hint* card.html ("<h2>" + "</h2>")
        for loop to run through the questions
        dynamically add buttons with answer options
        */
    },

    nextQuestion = () => {
        game.counter = countStartNumber;
        $('#counter').html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
        /* set the counter
        game.counter = countStartNumber
        use jquery to change the text of the game counter
        increment the currentQuestion by one
        call the loadQuestion function */
    },

    timeUp = () => {
        clearInterval(timer);
        $('counter').html(game.counter);
        card.html("<h2> You ran out of time! </h2>");
        card.append("<h2> The Correct answer is: " + question[game.currentQuestion].answer);
        card.append("<img src='" + question[game.currentQuestion].image + "' />")
        /* clearInterval(timer)
        use jquery to change the text of the game counter
        dynamically add out of time to the card
        append the corrent answer to the card
        append image to the card */
    },

    results = () => {
        clearInterval(timer);
        card.html("<h2>Well done! Here's your final results!</h2>");
        $('counter').html(game.counter);
        card.append("<h2>Correctly Answered: " + game.correct + "</h2>");
        card.append("<h2>Incorrectly Answered: " + game.incorrect + "</h2>");
        card.append("<h2>Unanswered Questions: " + (question.length - (game.incorrect + game.correct)) + "</h2>");
        card.append("<button id='startOver'>Play again?</button>");
        /* clearInterval
        dynamically add html to let them know of their results
        use jquery to add html of game.ocunter to the id of counter-number
        add how many correct answers they got
        add how many incorrect answers they got
        add how many unanswered
        add a start over button */
    },

    clicked = () => {
        clearInterval(timer);
        if (???????) {
            game.answeredCorrectly();
        }
            else {
                game.answeredIncorrectly();
            }
        /* clearInterval(timer)
        if/else statement for when an answer is clicked
            if correct run answeredCorrectly() function
            else run answeredIncorrectly() function */
    },

    answeredIncorrectly = () => {
        clearInterval(timer);
        game.incorrect++;
        card.html("<h2>Oh no! That was the wrong answer!</h2>");
        card.append("<h2>The correct answer was: " + question[game.currentQuestion].answer + "</h2>");
        card.append("<img src ='" + question[game.currentQuestion].image + "'/>");
        if (game.currentQuestion === question.length - 1) {
            setTimeout(game.results, 3000);
        }
            else {
                setTimeout(game.nextQuestion, 3000);
            }
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
        clearInterval(timer);
        game.correct++;
        card.html("<h2>You got that one right!</h2>")
        card.append("<img src ='" + question[game.currentQuestion].image + "'/>");
        if (game.currentQuestion === question.length - 1) {
            setTimeout(game.results, 3000);
        }
            else {
                setTimeout(game.nextQuestion, 3000);
            }
        
        /* add a point to correct columm
        clearInterval(timer)
        dynamically add html to let them know they are correct
        add image
        if/else statement
            if no more questions wait three seconds then show result
            else wait three seconds and show next question*/
    }, 

    reset = () => {
        game.currentQuestion = 0;
        game.counter = countStartNumber;
        game.correct = 0;
        game.incorrect = 0;
        game.loadQuestion();
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
