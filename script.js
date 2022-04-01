let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wie heißt die größte Yacht der Welt?",
        "answer_1": "Maria",
        "answer_2": "Laura",
        "answer_3": "Barbara",
        "answer_4": "Azzam",
        "right_answer": 4
    },
    {
        "question": "In welcher Stadt wurde Corona erstmald entdeckt?",
        "answer_1": "Salzburg",
        "answer_2": "Wuhan",
        "answer_3": "München",
        "answer_4": "London",
        "right_answer": 2
    },
    {
        "question": "Wie heißt der aktuelle James Bond Film?",
        "answer_1": "Keine Zeit zu sterben",
        "answer_2": "Die Wüstenblume",
        "answer_3": "Stirb langsam",
        "answer_4": "Skyfall",
        "right_answer": 1
    },
    {
        "question": "wie heißt der erfolgreichste Song von Hubert von Goisern?",
        "answer_1": "Heast as nit",
        "answer_2": "Brenna tuats guat",
        "answer_3": "Auf der Alm",
        "answer_4": "Juchiza",
        "right_answer": 2
    }
];

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');



function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        // Show End Screen
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none';

        document.getElementById('amount-of-questions').innerHTML = questions.length;
        document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
        document.getElementById('header-image').src = 'img/trophy.png';
    } else { //Show Question

        let percent = (currentQuestion + 1) / questions.length; //kann das auch gleich *100 gerechnet werden?
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style = `width: ${percent}%;`;


        let question = questions[currentQuestion];


        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];

        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;


    if (selectedQuestionNumber == question['right_answer']) {  //Richtige Frage beantwortet
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightQuestions++; //++ erhöht die Zahl um +1
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;  //z.B. von 0 auf 1

    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();



}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    document.getElementById('header-image').src = 'img/pencil.jpg';
    document.getElementById('questionBody').style = ''; //questionBody wieder anzeigen
    document.getElementById('endScreen').style = 'display: none'; //Endscreen ausblenden
    rightQuestions = 0;
    currentQuestion = 0;
    init();
}

