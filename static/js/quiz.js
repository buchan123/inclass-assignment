const questions = [
  {
    question: "Who Prime Minister of India?",
    answers: ["Manmohan Singh", "Narendra Modi", "Amit Shah", "Joe Biden"],
    correctIndex: 1,
  },
  {
    question: "What is the surface temperature of the sun?",
    answers: ["1,233 K", "101,300 K", "12,130 K", "5,778 K"],
    correctIndex: 3,
  },
];

let correct = 0;
let incorrect = 0;

function createQuestion(questionPrompt, options, correctOptionIndex) {
  const questionContainer = document.createElement("div");

  const prompt = document.createElement("h3");
  prompt.appendChild(document.createTextNode(questionPrompt));
  questionContainer.appendChild(prompt);

  const optionContainer = document.createElement("div");
  const correctOption = options[correctOptionIndex];

  for (const option of options) {
    const optionInput = document.createElement("input");
    optionInput.type = "radio";
    optionInput.value = option;
    optionInput.className = questionPrompt;

    const optionLabel = document.createElement("label");
    optionLabel.for = option;
    optionLabel.innerText = option;
    optionLabel.id = option;

    optionInput.addEventListener("click", function () {
      if (correctOption === option) {
        let temp = document.getElementById(correctOption);
        temp.style.color = "green";
        correct++;
      } else {
        let temp = document.getElementById(option);
        temp.style.color = "red";
        incorrect++;
      }
      let temp = document.getElementsByClassName(questionPrompt);
      for (const abc of temp) {
        abc.disabled = true;
      }
    });

    optionInput.textContent = option;
    optionContainer.appendChild(optionInput);
    optionContainer.appendChild(optionLabel);
  }

  questionContainer.appendChild(optionContainer);

  return questionContainer;
}

const quizQuestions = document.getElementById("quiz-questions");

for (const questionObj of questions) {
  const questionElement = createQuestion(
    questionObj.question,
    questionObj.answers,
    questionObj.correctIndex
  );
  quizQuestions.appendChild(questionElement);
}

function submitQuiz() {
  alert("Correct Questions :" + correct + " Incorrect Questions :" + incorrect);
}
