var randomNo, answerInput, quizStatus;
let questions;

function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

Question.prototype.displayQuestion = function () {
    console.log(this.question);
    for (i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
}

Question.prototype.checkAnswer = function (ans) {
    return (ans == this.correctAnswer);
}

question1 = new Question('What is HMTL?', ['Programming language', 'Markup language', 'Styling language'], 1);
question2 = new Question('What is JavaScript?', ['Programming language', 'Markup language', 'Styling language'], 0);
question3 = new Question('What is CSS?', ['Programming language', 'Markup language', 'Styling language'], 2);

questions = [question1, question2, question3];
score = 0;
quizStatus = true;

randomNo = Math.floor(Math.random() * questions.length);
questions[randomNo].displayQuestion();

while (quizStatus == true) {
    answerInput = prompt('Please enter your answer');
    validateAnswer(answerInput);
    nextQuestion();
}

function validateAnswer() {

    if (answerInput && answerInput.toLowerCase() !== 'exit') {
        if (questions[randomNo].checkAnswer(answerInput)) {
            score++;
            console.log('Your answer is correct!');
            console.log('Score: ' + score);
            console.log('_________________________');

        } else {
            console.log('Your answer is incorrect!');
            console.log('Score: ' + score);
            console.log('_________________________');
        }
    } else {
        quizStatus = false;
        console.log('Quiz exited!');
    }
}

function nextQuestion() {
    if (quizStatus) {
        randomNo = Math.floor(Math.random() * questions.length);
        questions[randomNo].displayQuestion();
    }
}