const historyQuestions = [
        {
            text: {
                ru: "Кто был первым президентом США?",
                en: "Who was the first president of the USA?",
                uz: "AQShning birinchi prezidenti kim edi?"
            },
            options: [
                { text: { ru: "Джордж Вашингтон", en: "George Washington", uz: "Jorj Vashington" }, correct: true },
                { text: { ru: "Авраам Линкольн", en: "Abraham Lincoln", uz: "Avram Linkoln" }, correct: false },
                { text: { ru: "Томас Джефферсон", en: "Thomas Jefferson", uz: "Tomas Jefferson" }, correct: false }
            ]
        },
        {
            text: {
                ru: "Когда началась Великая Отечественная война?",
                uz: "Ulug' Vatan urushi qachon boshlandi?",
                en: "When did the Great Patriotic War begin?"
            },
            options: [
                { text: { ru: "1 сентября 1939 года", uz: "1939-yil 1-sentabr", en: "September 1, 1939" }, correct: false },
                { text: { ru: "7 мая 1941 года", uz: "1941-yil 7-may", en: "May 7, 1941" }, correct: false },
                { text: { ru: "22 июня 1941 года", uz: "1941-yil 22-iyun", en: "June 22, 1941" }, correct: true },
                { text: { ru: "15 марта 1940 года", uz: "1940-yil 15-mart", en: "March 15, 1940" }, correct: false }
            ]
        },
        {
            text: {
                ru: "Какая дата является началом Второй мировой войны?",
                uz: "Ikkinchi Jahon urushi boshlanishi qaysi sana?",
                en: "What date marks the beginning of World War II?"
            },
            options: [
                { text: { ru: "22 июня 1941 года", uz: "1941-yil 22-iyun", en: "June 22, 1941" }, correct: false },
                { text: { ru: "1 сентября 1939 года", uz: "1939-yil 1-sentabr", en: "September 1, 1939" }, correct: true },
                { text: { ru: "7 декабря 1941 года", uz: "1941-yil 7-dekabr", en: "December 7, 1941" }, correct: false },
                { text: { ru: "3 мая 1941 года", uz: "1941-yil 3-may", en: "May 3, 1941" }, correct: false }
            ]
        },
        {
            text: {
                ru: "Какой год считается годом основания Рима?",
                uz: "Qaysi yil Rimning asos solingan yili hisoblanadi?",
                en: "What year is considered the founding year of Rome?"
            },
            options: [
                { text: { ru: "753 год до н. э.", uz: "M. A. 753-yil", en: "753 BC" }, correct: true },
                { text: { ru: "476 год н. э.", uz: "M. A. 476-yil", en: "476 AD" }, correct: false },
                { text: { ru: "1066 год", uz: "1066-yil", en: "1066" }, correct: false },
                { text: { ru: "300 год н. э.", uz: "M. A. 300-yil", en: "300 AD" }, correct: false }
            ]
        },
        {
            text: {
                ru: "Кто был основателем Монгольской империи?",
                uz: "Moʻgʻul imperiyasining asoschisi kim edi?",
                en: "Who was the founder of the Mongol Empire?"
            },
            options: [
                { text: { ru: "Темучин", uz: "Temuchin", en: "Temujin" }, correct: false },
                { text: { ru: "Чингисхан", uz: "Chingizxon", en: "Genghis Khan" }, correct: true },
                { text: { ru: "Кублай хан", uz: "Qublayxon", en: "Kublai Khan" }, correct: false },
                { text: { ru: "Ататюрк", uz: "Atatürk", en: "Atatürk" }, correct: false }
            ]
        },
        {
            text: {
                ru: "Какая страна была центром античной культуры?",
                uz: "Qaysi mamlakat qadimiy madaniyat markazi edi?",
                en: "Which country was the center of ancient culture?"
            },
            options: [
                { text: { ru: "Египет", uz: "Misr", en: "Egypt" }, correct: false },
                { text: { ru: "Италия", uz: "Italiya", en: "Italy" }, correct: false },
                { text: { ru: "Франция", uz: "Fransiya", en: "France" }, correct: false },
                { text: { ru: "Греция", uz: "Gretsiya", en: "Greece" }, correct: true }
            ]
        },
        {
            text: {
                ru: "Какой язык был основным языком Римской империи?",
                uz: "Rim imperiyasining asosiy tili qaysi edi?",
                en: "What was the main language of the Roman Empire?"
            },
            options: [
                { text: { ru: "Латынь", uz: "Lotin tili", en: "Latin" }, correct: true },
                { text: { ru: "Греческий", uz: "Grecha tili", en: "Greek" }, correct: false },
                { text: { ru: "Еврейский", uz: "Yahudiy tili", en: "Hebrew" }, correct: false },
                { text: { ru: "Арабский", uz: "Arab tili", en: "Arabic" }, correct: false }
            ]
        },
        {
            text: {
                ru: "Когда был основан Санкт-Петербург?",
                uz: "Sankt-Peterburg qachon asos solingan?",
                en: "When was Saint Petersburg founded?"
            },
            options: [
                { text: { ru: "1703 год", uz: "1703-yil", en: "1703" }, correct: true },
                { text: { ru: "1800 год", uz: "1800-yil", en: "1800" }, correct: false },
                { text: { ru: "1600 год", uz: "1600-yil", en: "1600" }, correct: false },
                { text: { ru: "1500 год", uz: "1500-yil", en: "1500" }, correct: false }
            ]
        },
        {
            text: {
                ru: "Когда была основана Московия?",
                uz: "Moskoviya qachon asos solingan?",
                en: "When was Muscovy founded?"
            },
            options: [
                { text: { ru: "11 век", uz: "XI asr", en: "11th century" }, correct: true },
                { text: { ru: "13 век", uz: "XIII asr", en: "13th century" }, correct: false },
                { text: { ru: "15 век", uz: "XV asr", en: "15th century" }, correct: false },
                { text: { ru: "9 век", uz: "IX asr", en: "9th century" }, correct: false }
            ]
        },
        // ... другие вопросы
];
