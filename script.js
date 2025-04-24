// Объект с текстами на разных языках
const texts = {
    ru: {
        welcomeTitle: "Добро пожаловать в викторину!",
        welcomeMessage: "Выберите действие:",
        startButton: "Начать",
        continueButton: "Продолжить",
        recordsButton: "Рекорды",
        languageLabel: "Выберите язык:",
        selectMode: "Выберите режим игры:",
        timedMode: "С таймером",
        noTimerMode: "Без таймера",
        selectSubject: "Выберите предмет:",
        history: "История",
        informatics: "Информатика",
        chemistry: "Химия",
        correctAnswer: "Правильный ответ!",
        incorrectAnswer: "Неправильный ответ!"
    },
    uz: {
        welcomeTitle: "Viktorina sayohatiga xush kelibsiz!",
        welcomeMessage: "Amalni tanlang:",
        startButton: "Boshlash",
        continueButton: "Davom ettirish",
        recordsButton: "Rekordlar",
        languageLabel: "Tilni tanlang:",
        selectMode: "Oʻyin rejimini tanlang:",
        timedMode: "Taymer bilan",
        noTimerMode: "Taymersiz",
        selectSubject: "Fan tanlang:",
        history: "Tarix",
        informatics: "Informatika",
        chemistry: "Kimyo",
        correctAnswer: "To'g'ri javob!",
        incorrectAnswer: "Noto'g'ri javob!"
    },
    en: {
        welcomeTitle: "Welcome to the quiz!",
        welcomeMessage: "Choose an action:",
        startButton: "Start",
        continueButton: "Continue",
        recordsButton: "Records",
        languageLabel: "Choose a language:",
        selectMode: "Choose game mode:",
        timedMode: "With timer",
        noTimerMode: "No timer",
        selectSubject: "Choose a subject:",
        history: "History",
        informatics: "Informatics",
        chemistry: "Chemistry",
        correctAnswer: "Correct answer!",
        incorrectAnswer: "Incorrect answer!"
    }
};

let currentLanguage = "ru";
let timerInterval = null;
let timeLeft = 600; // 10 минут
let gameMode = "no-timer"; // по умолчанию
let currentQuestions = [];
let correctCount = 0;
let incorrectCount = 0;


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function changeLanguage() {
    currentLanguage = document.getElementById("language-select").value;
    document.getElementById("welcome-title").textContent = texts[currentLanguage].welcomeTitle;
    document.getElementById("welcome-message").textContent = texts[currentLanguage].welcomeMessage;
    document.getElementById("start-button").textContent = texts[currentLanguage].startButton;
    document.getElementById("continue-button").textContent = texts[currentLanguage].continueButton;
    document.getElementById("records-button").textContent = texts[currentLanguage].recordsButton;
    document.getElementById("language-label").textContent = texts[currentLanguage].languageLabel;
    document.getElementById("mode-title").textContent = texts[currentLanguage].selectMode;
    document.getElementById("timed-mode").textContent = texts[currentLanguage].timedMode;
    document.getElementById("no-timer-mode").textContent = texts[currentLanguage].noTimerMode;
    document.getElementById("select-subject-title").textContent = texts[currentLanguage].selectSubject;
    document.getElementById("history-button").textContent = texts[currentLanguage].history;
    document.getElementById("informatics-button").textContent = texts[currentLanguage].informatics;
    document.getElementById("chemistry-button").textContent = texts[currentLanguage].chemistry;
}

function startGame() {
    document.querySelector(".welcome-container").style.display = "none";
    document.querySelector(".mode-selection").style.display = "block";
}

function selectMode(mode) {
    gameMode = mode;
    document.querySelector(".mode-selection").style.display = "none";
    document.querySelector(".subject-container").style.display = "block";
    console.log("Выбран режим: ", mode);
}

function loadSubjectQuestions(subject, callback) {
    const script = document.createElement("script");
    script.src = `${subject}.js`;
    script.onload = () => {
        let selectedQuestions;
        if (subject === "history") {
            selectedQuestions = historyQuestions;
        } else if (subject === "informatics") {
            selectedQuestions = informaticsQuestions;
        } else if (subject === "chemistry") {
            selectedQuestions = chemistryQuestions;
        }
        callback(shuffleArray(selectedQuestions));
    };
    document.body.appendChild(script);
}

function startSubject(subject) {
    loadSubjectQuestions(subject, (selectedQuestions) => {
        currentQuestions = selectedQuestions;
        document.querySelector(".subject-container").style.display = "none";
        document.querySelector(".question-container").style.display = "block";

        if (gameMode === "timer") {
            timeLeft = 600;
            const timerDisplay = document.getElementById("timer");
            timerDisplay.style.display = "block";
            updateTimerDisplay();
            timerInterval = setInterval(() => {
                timeLeft--;
                updateTimerDisplay();
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    endGameDueToTimeout();
                }
            }, 1000);
        } else {
            document.getElementById("timer").style.display = "none";
        }

        displayQuestion(currentQuestions, 0);
    });
}

function displayQuestion(questionsArray, index) {
    if (index < questionsArray.length) {
        const question = questionsArray[index];
        const questionElement = document.getElementById("question-text");
        const optionsContainer = document.getElementById("question-options");

        questionElement.textContent = question.text[currentLanguage];
        optionsContainer.innerHTML = "";

        const shuffledOptions = shuffleArray([...question.options]);

        shuffledOptions.forEach(option => {
            const optionButton = document.createElement("button");
            optionButton.textContent = option.text[currentLanguage];
            optionButton.onclick = () => checkAnswer(option, questionsArray, index);
            optionsContainer.appendChild(optionButton);
        });
    } else {
        document.getElementById("question-container").innerHTML = "<p>Все вопросы завершены!</p>";
    }
}

function checkAnswer(selectedOption, questionsArray, currentIndex) {
    const buttons = document.querySelectorAll("#question-options button");

    buttons.forEach(btn => {
        btn.disabled = true;
        const isCorrect = questionsArray[currentIndex].options.find(opt => opt.text[currentLanguage] === btn.textContent)?.correct;

        if (isCorrect) {
            btn.classList.add("highlight-correct");
        }

        if (btn.textContent === selectedOption.text[currentLanguage] && !selectedOption.correct) {
            btn.classList.add("highlight-wrong");
        }
    });

    // Обновим счетчики
    if (selectedOption.correct) {
        correctCount++;
    } else {
        incorrectCount++;
    }

    setTimeout(() => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < questionsArray.length) {
            displayQuestion(questionsArray, nextIndex);
        } else {
            showFinalResults();
        }
    }, 1500);
}

function updateTimerDisplay() {
    const timerDisplay = document.getElementById("timer");
    const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const seconds = (timeLeft % 60).toString().padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;

    if (timeLeft <= 60) {
        timerDisplay.classList.add("warning");
    } else {
        timerDisplay.classList.remove("warning");
    }
}

function endGameDueToTimeout() {
    const container = document.querySelector(".question-container");
    const message = document.createElement("p");
    message.style.color = "#b80000";
    message.style.fontWeight = "bold";
    message.textContent = {
        ru: "Время вышло!",
        uz: "Vaqt tugadi!",
        en: "Time is up!"
    }[currentLanguage];

    container.innerHTML = "";
    container.appendChild(message);
    document.getElementById("timer").style.display = "none";
}

function showFinalResults() {
    const container = document.querySelector(".question-container");
    container.innerHTML = `
        <p><strong>${texts[currentLanguage].correctAnswer}</strong>: ${correctCount}</p>
        <p><strong>${texts[currentLanguage].incorrectAnswer}</strong>: ${incorrectCount}</p>
        <button onclick="location.reload()">${texts[currentLanguage].startButton}</button>
    `;
    if (timerInterval) {
        clearInterval(timerInterval);
    }
}
