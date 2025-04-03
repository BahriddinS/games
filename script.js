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
        informatics: "Информатика"
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
        informatics: "Informatika"
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
        informatics: "Informatics"
    }
};

let currentLanguage = "ru";

// Функция для изменения языка
function changeLanguage() {
    currentLanguage = document.getElementById("language-select").value;

    // Обновляем текст на главном экране
    document.getElementById("welcome-title").textContent = texts[currentLanguage].welcomeTitle;
    document.getElementById("welcome-message").textContent = texts[currentLanguage].welcomeMessage;
    document.getElementById("start-button").textContent = texts[currentLanguage].startButton;
    document.getElementById("continue-button").textContent = texts[currentLanguage].continueButton;
    document.getElementById("records-button").textContent = texts[currentLanguage].recordsButton;
    document.getElementById("language-label").textContent = texts[currentLanguage].languageLabel;

    // Обновляем текст выбора режима
    document.getElementById("mode-title").textContent = texts[currentLanguage].selectMode;
    document.getElementById("timed-mode").textContent = texts[currentLanguage].timedMode;
    document.getElementById("no-timer-mode").textContent = texts[currentLanguage].noTimerMode;

    // Обновляем текст выбора предмета
    document.getElementById("select-subject-title").textContent = texts[currentLanguage].selectSubject;
    document.getElementById("history-button").textContent = texts[currentLanguage].history;
    document.getElementById("informatics-button").textContent = texts[currentLanguage].informatics;
}

// Функция для начала игры (переход к выбору режима)
function startGame() {
    document.querySelector(".welcome-container").style.display = "none";
    document.querySelector(".mode-selection").style.display = "block";
}

// Функция для выбора режима и перехода к выбору предмета
function selectMode(mode) {
    document.querySelector(".mode-selection").style.display = "none";
    document.querySelector(".subject-container").style.display = "block";
    console.log("Выбран режим: ", mode);
}

// Функция для выбора предмета
function startSubject(subject) {
    console.log("Выбран предмет: ", subject);
    document.querySelector(".subject-container").style.display = "none";
}
