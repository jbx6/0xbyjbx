var questions = [
  {
    question: 'What is the capital of France?',
    choices: ['London', 'Berlin', 'Paris', 'Madrid'],
    correctAnswer: 'Paris',
    explanation: 'Paris is the capital of France.'
  },
  {
    question: 'What is the capital of England?',
    choices: ['Paris', 'London', 'Berlin', 'Madrid'],
    correctAnswer: 'London',
    explanation: 'London is the capital of England.'
  },
  {
    question: 'What is my name?',
    choices: ['Jeremy', 'James', 'Jordan', 'Josh'],
    correctAnswer: 'Jeremy',
    explanation: 'My name is Jeremy!'
  },
  {
    question: 'There is a greater prevalence of mental illness in individuals with ADHD (in comparison with ASD). True or false?',
    choices: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'ADHD is more predictive of poor mental health in adults.'
  }
  // Add more questions as needed
];

var currentQuestionIndex = 0;
var correctCount = 0;
var incorrectCount = 0;

function displayQuestion() {
  var question = questions[currentQuestionIndex];

  let quizHtml = `
    <div class="card">
      <header class="card_head">
        <div class="header-container">
          <span class="question">${question.question}</span>
        </div> 
      </header>
      <div class="card_body">
        <div class="choices">
          ${question.choices.map((choice, index) => 
            `
            <input type="radio" id="choice${index}" name="question" value="${choice}">
            <label for="choice${index}">${choice}</label><br>
            `
          ).join('')}
          <div>
            <div style="display: flex; flex-direction: row-reverse;">
              <button onclick="checkAnswer()">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  document.getElementById('quizContainer').innerHTML = quizHtml;
}

function checkAnswer() {
  var userAnswer = document.querySelector('input[name="question"]:checked').value;
  var question = questions[currentQuestionIndex];

  if (userAnswer === question.correctAnswer) {
    correctCount++;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      displayScore();
    }
  } else {
    incorrectCount++;
    document.getElementById('quizContainer').innerHTML = `
    <div class="card">
      <header class="card_head">
        <div class="header-container">
          <span class="question">Almost...</span>
        </div> 
      </header>
      <div class="card_body">
        <div class="correctAnswer">
          <span class="explanation">The answer is... ${question.correctAnswer}</span>
        </div>
        <div class="explanation">
          <details>
          <summary>Explanation</summary>
            <ul>
              <li>${question.explanation}</li>
              <br>
            </ul>  
          </details>
        </div>
          <div>
            <div style="display: flex; flex-direction: row-reverse;">
              <button onclick="nextQuestion()">Next</button>
            </div>
          </div>
      </div>
    </div>
    `;
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    displayScore();
  }
}

function displayScore() {
  document.getElementById('quizContainer').innerHTML = `
    <p>You've completed the quiz!</p>
    <p>Your score: ${correctCount} correct, ${incorrectCount} incorrect.</p>
    <button onclick="restartQuiz()">Restart Quiz</button>
  `;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  correctCount = 0;
  incorrectCount = 0;
  displayQuestion();
}

// Start the quiz
displayQuestion();


function useful() {
  let htmlElement = document.getElementById("feedbackOutput");

  let htmlContent = `<p>We appreciate your feedback! ✅</p>`;

  htmlElement.innerHTML = htmlContent;
};

function reportAProlem() {
  let htmlBackgroundElement = document.getElementById("greenContainer");

  let htmlContainerElement = document.createElement('div');

  htmlContainerElement.style.padding = "20px"
  htmlContainerElement.style.display = "flex"
  htmlContainerElement.style.flexDirection = "column"

  htmlBackgroundElement.style.height = "500px";

  let labelName = document.createElement('label');
  labelName.innerText = "Name";
  labelName.style.paddingRight = "10px"
  let inputName = document.createElement('input');
  //inputName.style.borderBottom('10px');

  let br = document.createElement('br');

  let inputEmail = document.createElement('input')
  let labelEmail = document.createElement('label');
  labelEmail.innerText = "e-mail";
  labelEmail.style.paddingRight = "10px"

  let labelTextField = document.createElement('label');
  labelTextField.innerText = "PLease write as brief as or in-deph explanation. If you choose to leave contact details, and conect, we may reach out in the future.";
  labelTextField.style.paddingRight = "10px"

  let textArea = document.createElement('textarea');




  htmlBackgroundElement.appendChild(htmlContainerElement)

  htmlContainerElement.appendChild(labelName)

  htmlContainerElement.appendChild(inputName)

  htmlContainerElement.appendChild(br)

  htmlContainerElement.appendChild(labelEmail);

  htmlContainerElement.appendChild(inputEmail);

  htmlContainerElement.appendChild(br)

  htmlContainerElement.appendChild(labelTextField)

  htmlContainerElement.appendChild(textArea)
}