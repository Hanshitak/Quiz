const quizData = [
    {
        question:"What is the css?",
        a:"Cascading Style Sheets",
        b:"Creative Style Sheets",
        c:"Colorful Style Sheets",
        d:"Computer Style Sheets",
        correct:"a"
    },
    {
        question:"Which HTML tag is used to create a hyperlink?",
        a:"<link>",
        b:"<href>",
        c:"<a>",
        d:"<src>",
        correct:"b"
    }
    ,{
        question:"Which CSS property controls the text size?",
        a:"font-size",
        b:"text-size",
        c:"text-style",
        d:"font-style",
        correct:"a"

    }
    ,{
        question:"Which tag is used to define a list item in an ordered list?",
        a:"<item>",
        b:"<li>",
        c:"<ol>",
        d:"<ul>",
        correct:"b"

    }
    ,{
        question:"Which element is used to create a drop-down list?",
        a:"<input>",
        b:"<list>",
        c:"<dropdown>",
        d:"<select>",
        correct:"d"

    }
    ,{
        question:"Which property is used to change the background color of an element?",
        a:"bgcolor",
        b:"background-color",
        c:"color",
        d:"bg-color",
        correct:"b"
    }
];
const quizs = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz]; // scores of it

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});