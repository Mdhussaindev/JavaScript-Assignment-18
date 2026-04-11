function nextQuestion() {
    var options = document.getElementsByName("answer");

    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            var selected = options[i].value;
            var userAnswer = questions[index - 1][`option${selected}`];
            var correctAns = questions[index - 1].correctAnswer;


            if (userAnswer === correctAns) {
                score++;
            }

            options[i].checked = false;
            button.disabled = true;
        }
    }

    if (index > questions.length - 1) {
        document.querySelector(".quiz-box").innerHTML = `
            <h1>Quiz Finished 🎉</h1>
            <h2>Your Score: ${score}/${questions.length}</h2>
            <p>${Math.round((score / questions.length) * 100)}%</p>
        `;
    } else {
        ques.innerText = questions[index].question;
        option1.innerText = questions[index].option1;
        option2.innerText = questions[index].option2;
        option3.innerText = questions[index].option3;
        index++;
    }
}