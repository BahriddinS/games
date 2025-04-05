const questions = {
    history: [
        {
            text: {
                ru: "Кто был первым президентом США?",
                en: "Who was the first president of the USA?",
                uz: "AQShning birinchi prezidenti kim edi?"
            },
            options: [
                { text: { ru: "Джордж Вашингтон", en: "George Washington", uz: "Jorj Vashington" }, correct: true },
                { text: { ru: "Авраам Линкольн", en: "Abraham Lincoln", uz: "Abraham Lincoln" }, correct: false },
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
    ],
    informatics: [
        {
            text: {
                ru: "Что такое HTML?",
                en: "What is HTML?",
                uz: "HTML nima?"
            },
            options: [
                { text: { ru: "Язык разметки", en: "Markup language", uz: "Teglar tili" }, correct: true },
                { text: { ru: "Язык программирования", en: "Programming language", uz: "Dasturlash tili" }, correct: false },
                { text: { ru: "Операционная система", en: "Operating system", uz: "Operatsion tizim" }, correct: false }
            ]
        },

        {
            text: {
                ru: "Что такое Операционная система?",
                uz: "Operatsion tizim nima?",
                en: "What is an Operating System?"
            },
            options: [
                {text: { ru: "Аппаратное обеспечение", uz: "Qurilma ta'minoti", en: "Hardware"} , correct: false },
                {text: { ru: "Интерфейс", uz: "Interfeys", en: "Interface" }, correct: false },
                {text: { ru: "Программное обеспечение", uz: "Dasturiy ta'minot", en: "Software" }, correct: true },
                {text: { ru: "Клавиатура", uz: "Klaviatura", en: "Keyboard" }, correct: false }
            ]
        },
        {
            text: {
                ru: "Что такое алгоритм?",
                uz: "Algoritm nima?",
                en: "What is an Algorithm?"
            },
            options: [
                { text: { ru: "Операционная система", uz: "Operatsion tizim", en: "Operating system" }, correct: false },
                { text: { ru: "Программное обеспечение", uz: "Dasturiy ta'minot", en: "Software" }, correct: false },
                { text: { ru: "Электронная почта", uz: "Elektron pochta", en: "Email" }, correct: false },
                { text: { ru: "Последовательность действий", uz: "Harakatlar ketma-ketligi", en: "Sequence of actions" }, correct: true }
            ]
        },
        {
            text: {
                ru: "Какое расширение имеет исполнимый файл в Windows?",
                uz: "Windows operatsion tizimida bajariladigan faylning kengaytmasi nima?",
                en: "What extension does an executable file have in Windows?"
            },
            options: [
                { text: { ru: ".txt", uz: ".txt", en: ".txt" }, correct: false },
                { text: { ru: ".jpg", uz: ".jpg", en: ".jpg" }, correct: false },
                { text: { ru: ".exe", uz: ".exe", en: ".exe" }, correct: true },
                { text: { ru: ".zip", uz: ".zip", en: ".zip" }, correct: false }
            ]
        },
        {
            text: {
                ru: "Что такое IP-адрес?",
                uz: "IP-manzil nima?",
                en: "What is an IP address?"
            },
            options: [
                { text: { ru: "Пароль для входа", uz: "Kirish paroli", en: "Login password" }, correct: false },
                { text: { ru: "Идентификатор устройства в сети", uz: "Tarmoqdagi qurilma identifikatori", en: "Device identifier in the network" }, correct: true },
                { text: { ru: "Расположение сервера", uz: "Serverning joylashuvi", en: "Server location" }, correct: false },
                { text: { ru: "Тип соединения", uz: "Ulanish turi", en: "Connection type" }, correct: false }
            ]
        },
        {
            text: {
                ru: "Какая из этих команд используется для создания новой папки в Windows?",
                uz: "Windows tizimida yangi papka yaratish uchun qaysi buyrug' ishlatiladi?",
                en: "Which of these commands is used to create a new folder in Windows?"
            },
            options: [
                { text: { ru: "mkdir", uz: "mkdir", en: "mkdir" }, correct: true },
                { text: { ru: "mkfolder", uz: "mkfolder", en: "mkfolder" }, correct: false },
                { text: { ru: "newdir", uz: "newdir", en: "newdir" }, correct: false },
                { text: { ru: "createfolder", uz: "createfolder", en: "createfolder" }, correct: false }
            ]
        },
        {
            text: {
                ru: "Какое расширение имеют файлы изображений в формате JPEG?",
                uz: "JPEG formatidagi rasm fayllarining kengaytmasi nima?",
                en: "What extension do JPEG image files have?"
            },
            options: [
                { text: { ru: ".jpeg", uz: ".jpeg", en: ".jpeg" }, correct: false },
                { text: { ru: ".jpg", uz: ".jpg", en: ".jpg" }, correct: true },
                { text: { ru: ".png", uz: ".png", en: ".png" }, correct: false },
                { text: { ru: ".bmp", uz: ".bmp", en: ".bmp" }, correct: false }
            ]
        }
        
        // ... другие вопросы
    ]
};
