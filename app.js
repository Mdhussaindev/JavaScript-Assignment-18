let index = 0;
let score = 0;

// Questions
let questions = [
    {
        question: "2 + 2 = ?",
        option1: "3",
        option2: "4",
        option3: "5",
        correctAnswer: "2"
    },
    {
        question: "5 + 3 = ?",
        option1: "5",
        option2: "8",
        option3: "10",
        correctAnswer: "2"
    }
];

// DOM
var ques = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var button = document.getElementById("btn");
var timer = document.getElementById("timer");

// Load Question
function loadQuestion() {
    ques.innerText = questions[index].question;
    option1.innerText = questions[index].option1;
    option2.innerText = questions[index].option2;
    option3.innerText = questions[index].option3;

    button.disabled = true;
}

// Enable Button
function enableBtn() {
    button.disabled = false;
}

// Next Question
function nextQuestion() {
    let options = document.getElementsByName("answer");
    let selected = null;

    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selected = options[i].value;
            options[i].checked = false;
        }
    }

    function updateProgress() {
    let percent = (index / questions.length) * 100;
    document.getElementById("progressBar").style.width = percent + "%";
}

    // CHECK ANSWER (FIXED)
    if (selected === questions[index].correctAnswer) {
        score++;
    }

    index++;

    if (index >= questions.length) {
        document.querySelector(".quiz-box").innerHTML = `
            <h1>Quiz Finished 🎉</h1>
            <h2>Score: ${score}/${questions.length}</h2>
        `;
        return;
    }

    loadQuestion();

    function loadQuestion() {
    ques.innerText = questions[index].question;
    option1.innerText = questions[index].option1;
    option2.innerText = questions[index].option2;
    option3.innerText = questions[index].option3;

    button.disabled = true;

    updateProgress(); // ✅ ADD THIS
}
}

// TIMER
let min = 1;
let sec = 10;

setInterval(function () {
    timer.innerHTML = `${min}:${sec < 10 ? "0" + sec : sec}`;
    sec--;

    if (sec < 0) {
        if (min === 0) {
            nextQuestion();
            min = 1;
            sec = 10;
        } else {
            min--;
            sec = 59;
        }
    }
}, 1000);

// START
loadQuestion();