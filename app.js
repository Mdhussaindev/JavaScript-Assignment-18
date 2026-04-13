let index = 0;
let score = 0;

let questions = [
    {
        question: "2 + 2 = ?",
        option1: "3",
        option2: "4",
        option3: "5",
        correctAnswer: "2"
    },
    {
        question: "5 × 3 = ?",
        option1: "15",
        option2: "10",
        option3: "8",
        correctAnswer: "1"
    },
    {
        question: "2 × 1 = ?",
        option1: "2",
        option2: "5",
        option3: "10",
        correctAnswer: "2"
    },
    {
        question: "Capital of Pakistan?",
        option1: "Lahore",
        option2: "Karachi",
        option3: "Islamabad",
        correctAnswer: "3"
    },
    {
        question: "10 ÷ 2 = ?",
        option1: "2",
        option2: "5",
        option3: "10",
        correctAnswer: "2"
    },
    {
        question: "HTML stands for?",
        option1: "Hyper Text Markup Language",
        option2: "High Text Machine Language",
        option3: "Home Tool Markup Language",
        correctAnswer: "1"
    }
];


var ques = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var button = document.getElementById("btn");
var timer = document.getElementById("timer");


function loadQuestion() {
    ques.innerText = questions[index].question;
    option1.innerText = questions[index].option1;
    option2.innerText = questions[index].option2;
    option3.innerText = questions[index].option3;

    button.disabled = true;
}


function enableBtn() {
    button.disabled = false;
}


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

    updateProgress(); 
}
}


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


loadQuestion();

let quizType = localStorage.getItem("quizType");

// example dynamic questions
if (quizType === "html") {
    questions = htmlQuestions;
}
if (quizType === "css") {
    questions = cssQuestions;
}
if (quizType === "js") {
    questions = jsQuestions;
}