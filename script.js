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
        correctAnswer: "Правильных ответов:",
        incorrectAnswer: "Неправильных ответов:",
        analysisButton: "Анализ ответов",
        analysisTitle: "Анализ ответов",
        resultsTitle: "Результаты",
        totalQuestions: "Всего вопросов:",
        correctPercentage: "Процент правильных:",
        yourChoice: "Ваш выбор",
        timeIsUp: "Время вышло!",
        exportPDF: "Экспорт в PDF",
        backToResults: "Назад к результатам",
        mainMenu: "На главную"
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
        correctAnswer: "To'g'ri javoblar:",
        incorrectAnswer: "Noto'g'ri javoblar:",
        analysisButton: "Javoblar tahlili",
        analysisTitle: "Javoblar tahlili",
        resultsTitle: "Natijalar",
        totalQuestions: "Jami savollar:",
        correctPercentage: "To'g'ri javoblar foizi:",
        yourChoice: "Siz tanlagan",
        timeIsUp: "Vaqt tugadi!",
        exportPDF: "PDF ga eksport",
        backToResults: "Natijalarga qaytish",
        mainMenu: "Asosiy menyu"
    },
    en: {
        welcomeTitle: "Welcome to the quiz!",
        welcomeMessage: "Choose an action:",
        startButton: "Start",
        continueButton: "Continue",
        recordsButton: "Records",
        languageLabel: "Choose language:",
        selectMode: "Choose game mode:",
        timedMode: "With timer",
        noTimerMode: "No timer",
        selectSubject: "Choose subject:",
        history: "History",
        informatics: "Informatics",
        chemistry: "Chemistry",
        correctAnswer: "Correct answers:",
        incorrectAnswer: "Incorrect answers:",
        analysisButton: "Answer analysis",
        analysisTitle: "Answer analysis",
        resultsTitle: "Results",
        totalQuestions: "Total questions:",
        correctPercentage: "Correct percentage:",
        yourChoice: "Your choice",
        timeIsUp: "Time is up!",
        exportPDF: "Export to PDF",
        backToResults: "Back to results",
        mainMenu: "Main menu"
    }
};

// Game state
let currentLanguage = "ru";
let timerInterval = null;
let timeLeft = 600;
let gameMode = "no-timer";
let currentSubject = "";
let currentQuestions = [];
let userAnswers = [];
let correctCount = 0;
let incorrectCount = 0;
let currentQuestionIndex = 0;

// DOM elements
const elements = {
    welcomeContainer: document.querySelector(".welcome-container"),
    modeSelection: document.querySelector(".mode-selection"),
    subjectContainer: document.querySelector(".subject-container"),
    questionContainer: document.querySelector(".question-container"),
    resultsContainer: document.querySelector(".results-container"),
    analysisContainer: document.querySelector(".analysis-container"),
    questionText: document.getElementById("question-text"),
    questionOptions: document.getElementById("question-options"),
    resultsStats: document.getElementById("results-stats"),
    analysisContent: document.getElementById("analysis-content"),
    timer: document.getElementById("timer"),
    languageSelect: document.getElementById("language-select"),
    startButton: document.getElementById("start-button"),
    continueButton: document.getElementById("continue-button"),
    recordsButton: document.getElementById("records-button"),
    timedMode: document.getElementById("timed-mode"),
    noTimerMode: document.getElementById("no-timer-mode"),
    historyButton: document.getElementById("history-button"),
    informaticsButton: document.getElementById("informatics-button"),
    chemistryButton: document.getElementById("chemistry-button"),
    analysisBtn: document.getElementById("analysis-btn"),
    returnMainBtn: document.getElementById("return-main-btn"),
    backToResultsBtn: document.getElementById("back-to-results-btn"),
    exportPdfBtn: document.getElementById("export-pdf-btn"),
    mainMenuBtn: document.getElementById("main-menu-btn"),
    welcomeTitle: document.getElementById("welcome-title"),
    welcomeMessage: document.getElementById("welcome-message"),
    languageLabel: document.getElementById("language-label"),
    modeTitle: document.getElementById("mode-title"),
    selectSubjectTitle: document.getElementById("select-subject-title"),
    resultsTitle: document.getElementById("results-title"),
    analysisTitle: document.getElementById("analysis-title")
};

// Utility functions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function updateUI() {
    const t = texts[currentLanguage];
    
    elements.welcomeTitle.textContent = t.welcomeTitle;
    elements.welcomeMessage.textContent = t.welcomeMessage;
    elements.startButton.textContent = t.startButton;
    elements.continueButton.textContent = t.continueButton;
    elements.recordsButton.textContent = t.recordsButton;
    elements.languageLabel.textContent = t.languageLabel;
    elements.modeTitle.textContent = t.selectMode;
    elements.timedMode.textContent = t.timedMode;
    elements.noTimerMode.textContent = t.noTimerMode;
    elements.selectSubjectTitle.textContent = t.selectSubject;
    elements.historyButton.textContent = t.history;
    elements.informaticsButton.textContent = t.informatics;
    elements.chemistryButton.textContent = t.chemistry;
    elements.analysisBtn.textContent = t.analysisButton;
    elements.resultsTitle.textContent = t.resultsTitle;
    elements.analysisTitle.textContent = t.analysisTitle;
    elements.exportPdfBtn.textContent = t.exportPDF;
    elements.backToResultsBtn.textContent = t.backToResults;
    elements.mainMenuBtn.textContent = t.mainMenu;
    elements.returnMainBtn.textContent = t.mainMenu;
}

// Game flow functions
function startGame() {
    elements.welcomeContainer.style.display = "none";
    elements.modeSelection.style.display = "block";
}

function selectMode(mode) {
    gameMode = mode;
    elements.modeSelection.style.display = "none";
    elements.subjectContainer.style.display = "block";
}

function loadSubjectQuestions(subject, callback) {
    const script = document.createElement("script");
    script.src = `${subject}.js`;
    script.onload = () => {
        let selectedQuestions;
        if (subject === "history") selectedQuestions = historyQuestions;
        else if (subject === "informatics") selectedQuestions = informaticsQuestions;
        else if (subject === "chemistry") selectedQuestions = chemistryQuestions;

        callback(shuffleArray(selectedQuestions));
    };
    document.body.appendChild(script);
}

function startSubject(subject) {
    currentSubject = subject;
    correctCount = 0;
    incorrectCount = 0;
    currentQuestionIndex = 0;
    userAnswers = [];
    
    loadSubjectQuestions(subject, (selectedQuestions) => {
        currentQuestions = selectedQuestions;
        elements.subjectContainer.style.display = "none";
        elements.questionContainer.style.display = "block";

        if (gameMode === "timer") {
            timeLeft = 600;
            elements.timer.style.display = "block";
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
            elements.timer.style.display = "none";
        }

        displayQuestion();
    });
}

function displayQuestion() {
    if (currentQuestionIndex < currentQuestions.length) {
        const question = currentQuestions[currentQuestionIndex];
        elements.questionText.textContent = question.text[currentLanguage];
        elements.questionOptions.innerHTML = "";

        const shuffledOptions = shuffleArray([...question.options]);

        shuffledOptions.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option.text[currentLanguage];
            button.onclick = () => checkAnswer(option);
            elements.questionOptions.appendChild(button);
        });
    } else {
        showFinalResults();
    }
}

function checkAnswer(selectedOption) {
    const buttons = elements.questionOptions.querySelectorAll("button");
    const currentQuestion = currentQuestions[currentQuestionIndex];

    userAnswers.push({
        question: currentQuestion,
        selected: selectedOption,
        correct: selectedOption.correct
    });

    buttons.forEach(btn => {
        btn.disabled = true;
        const optionText = btn.textContent;
        const isCorrect = currentQuestion.options.find(
            opt => opt.text[currentLanguage] === optionText
        )?.correct;

        if (isCorrect) {
            btn.classList.add("highlight-correct");
        }

        if (btn.textContent === selectedOption.text[currentLanguage] && !selectedOption.correct) {
            btn.classList.add("highlight-wrong");
        }
    });

    if (selectedOption.correct) {
        correctCount++;
    } else {
        incorrectCount++;
    }

    setTimeout(() => {
        currentQuestionIndex++;
        displayQuestion();
    }, 1500);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const seconds = (timeLeft % 60).toString().padStart(2, '0');
    elements.timer.textContent = `${minutes}:${seconds}`;
    elements.timer.classList.toggle("warning", timeLeft <= 60);
}

function endGameDueToTimeout() {
    elements.questionContainer.innerHTML = `
        <h2>${texts[currentLanguage].timeIsUp}</h2>
        <button onclick="showFinalResults()">${texts[currentLanguage].analysisButton}</button>
    `;
}

function showFinalResults() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    elements.questionContainer.style.display = "none";
    elements.resultsContainer.style.display = "block";

    elements.resultsStats.innerHTML = `
        <p><strong>${texts[currentLanguage].correctAnswer}</strong> ${correctCount}</p>
        <p><strong>${texts[currentLanguage].incorrectAnswer}</strong> ${incorrectCount}</p>
        <p><strong>${texts[currentLanguage].totalQuestions}</strong> ${currentQuestions.length}</p>
        <p><strong>${texts[currentLanguage].correctPercentage}</strong> ${Math.round((correctCount / currentQuestions.length) * 100)}%</p>
    `;
}

function showAnalysis() {
    elements.resultsContainer.style.display = "none";
    elements.analysisContainer.style.display = "block";
    elements.analysisContent.innerHTML = "";

    userAnswers.forEach((answer, index) => {
        const question = answer.question;
        const isCorrect = answer.selected.correct;
        const div = document.createElement("div");
        div.className = "question-analysis";

        div.innerHTML = `
            <p><strong>${index + 1}. ${question.text[currentLanguage]}</strong></p>
            <p class="${isCorrect ? 'correct-answer' : 'user-wrong-answer'}">
                ${isCorrect ? '✓' : '✗'} ${answer.selected.text[currentLanguage]}
                ${!isCorrect ? `(${texts[currentLanguage].yourChoice})` : ''}
            </p>
            ${!isCorrect ? `
                <p class="correct-answer">✓ ${question.options.find(opt => opt.correct).text[currentLanguage]}</p>
            ` : ''}
        `;

        elements.analysisContent.appendChild(div);
    });
}

function exportToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Title
    doc.setFontSize(20);
    doc.setTextColor(40, 40, 40);
    doc.text(texts[currentLanguage]?.analysisTitle || "Analysis", 105, 20, { align: 'center' });

    // Summary
    doc.setFontSize(14);
    doc.text(`${texts[currentLanguage]?.correctAnswer || "Correct Answers"}: ${correctCount}`, 20, 40);
    doc.text(`${texts[currentLanguage]?.incorrectAnswer || "Incorrect Answers"}: ${incorrectCount}`, 20, 50);
    doc.text(`${texts[currentLanguage]?.totalQuestions || "Total Questions"}: ${currentQuestions.length}`, 20, 60);
    doc.text(`${texts[currentLanguage]?.correctPercentage || "Correct Percentage"}: ${Math.round((correctCount / currentQuestions.length) * 100)}%`, 20, 70);

    // Detailed analysis
    let y = 90;
    doc.setFontSize(12);

    userAnswers.forEach((answer, index) => {
        const question = answer.question;
        const isCorrect = answer.selected?.correct || false;

        // Question
        doc.setTextColor(40, 40, 40);
        doc.setFont(undefined, 'bold');
        const questionText = question.text[currentLanguage] || "Вопрос отсутствует";
        doc.text(`${index + 1}. ${questionText}`, 20, y);
        y += 8;

        // User answer
        doc.setFont(undefined, 'normal');
        doc.setTextColor(isCorrect ? 46 : 231, isCorrect ? 204 : 76, isCorrect ? 113 : 60);
        doc.text(`${isCorrect ? '✓' : '✗'} ${answer.selected.text[currentLanguage] || "Нет ответа"} ${!isCorrect ? `(${texts[currentLanguage]?.yourChoice || "Your Choice"})` : ''}`, 25, y);
        y += 8;

        // Correct answer if wrong
        if (!isCorrect) {
            doc.setTextColor(39, 174, 96);
            const correctOption = question.options?.find(opt => opt.correct) || { text: "Нет верного ответа" };
            doc.text(`✓ ${correctOption.text[currentLanguage] || "Нет ответа"}`, 25, y);
            y += 8;
        }

        y += 10;

        // New page if needed
        if (y > 270) {
            doc.addPage();
            y = 20;
        }
    });

    doc.save("quiz_results.pdf");
}

function returnToMain() {
    location.reload();
}

function returnToResults() {
    elements.analysisContainer.style.display = "none";
    elements.resultsContainer.style.display = "block";
}

// Event listeners
function setupEventListeners() {
    // Language change
    elements.languageSelect.addEventListener("change", () => {
        currentLanguage = elements.languageSelect.value;
        localStorage.setItem("quizLang", currentLanguage);
        updateUI();
    });
    
    // Main buttons
    elements.startButton.addEventListener("click", startGame);
    
    // Mode selection
    elements.timedMode.addEventListener("click", () => selectMode("timer"));
    elements.noTimerMode.addEventListener("click", () => selectMode("no-timer"));
    
    // Subject selection
    elements.historyButton.addEventListener("click", () => startSubject("history"));
    elements.informaticsButton.addEventListener("click", () => startSubject("informatics"));
    elements.chemistryButton.addEventListener("click", () => startSubject("chemistry"));
    
    // Results and analysis
    elements.analysisBtn.addEventListener("click", showAnalysis);
    elements.returnMainBtn.addEventListener("click", returnToMain);
    elements.backToResultsBtn.addEventListener("click", returnToResults);
    elements.exportPdfBtn.addEventListener("click", exportToPDF);
    elements.mainMenuBtn.addEventListener("click", returnToMain);
}

// Initialize the game
window.addEventListener("DOMContentLoaded", () => {
    // Load saved language
    const savedLang = localStorage.getItem("quizLang");
    if (savedLang) {
        elements.languageSelect.value = savedLang;
        currentLanguage = savedLang;
    }
    
    updateUI();
    setupEventListeners();
});
