const chemistryQuestions = [
    {
        text: {
            ru: "Какой элемент обозначается символом 'O'?",
            en: "Which element is represented by the symbol 'O'?",
            uz: "'O' belgisi qaysi elementga tegishli?"
        },
        options: [
            { text: { ru: "Кислород", en: "Oxygen", uz: "Kislorod" }, correct: true },
            { text: { ru: "Золото", en: "Gold", uz: "Oltin" }, correct: false },
            { text: { ru: "Углерод", en: "Carbon", uz: "Uglerod" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Какая из этих частиц имеет отрицательный заряд?",
            en: "Which of these particles has a negative charge?",
            uz: "Quyidagilardan qaysi biri manfiy zaryadga ega?"
        },
        options: [
            { text: { ru: "Электрон", en: "Electron", uz: "Elektron" }, correct: true },
            { text: { ru: "Протон", en: "Proton", uz: "Proton" }, correct: false },
            { text: { ru: "Нейтрон", en: "Neutron", uz: "Neytron" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Сколько водородных атомов в молекуле воды (H₂O)?",
            en: "How many hydrogen atoms are in a water molecule (H₂O)?",
            uz: "Suv molekulasida (H₂O) nechta vodorod atomi bor?"
        },
        options: [
            { text: { ru: "2", en: "2", uz: "2" }, correct: true },
            { text: { ru: "1", en: "1", uz: "1" }, correct: false },
            { text: { ru: "3", en: "3", uz: "3" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Какой газ используется для дыхания человеком?",
            en: "Which gas is used for breathing by humans?",
            uz: "Odamlar nafas olish uchun qaysi gazdan foydalanadi?"
        },
        options: [
            { text: { ru: "Кислород", en: "Oxygen", uz: "Kislorod" }, correct: true },
            { text: { ru: "Азот", en: "Nitrogen", uz: "Azot" }, correct: false },
            { text: { ru: "Углекислый газ", en: "Carbon dioxide", uz: "Uglerod(IV) oksidi" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Какой металл самый лёгкий?",
            en: "Which metal is the lightest?",
            uz: "Eng yengil metall qaysi?"
        },
        options: [
            { text: { ru: "Литий", en: "Lithium", uz: "Litiy" }, correct: true },
            { text: { ru: "Железо", en: "Iron", uz: "Temir" }, correct: false },
            { text: { ru: "Медь", en: "Copper", uz: "Mis" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Что обозначает pH 7?",
            en: "What does pH 7 indicate?",
            uz: "pH 7 nimani anglatadi?"
        },
        options: [
            { text: { ru: "Нейтральная среда", en: "Neutral solution", uz: "Neytral muhit" }, correct: true },
            { text: { ru: "Кислая среда", en: "Acidic solution", uz: "Kislota muhit" }, correct: false },
            { text: { ru: "Щелочная среда", en: "Alkaline solution", uz: "Ishqoriy muhit" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Как называется процесс превращения жидкости в газ?",
            en: "What is the process of turning a liquid into a gas called?",
            uz: "Suyuqlik gazga aylanish jarayoni nima deb ataladi?"
        },
        options: [
            { text: { ru: "Испарение", en: "Evaporation", uz: "Bug'lanish" }, correct: true },
            { text: { ru: "Конденсация", en: "Condensation", uz: "Kondensatsiya" }, correct: false },
            { text: { ru: "Плавление", en: "Melting", uz: "Eritish" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Какой элемент является основным в органических соединениях?",
            en: "Which element is fundamental in organic compounds?",
            uz: "Organik birikmalarda asosiy element qaysi?"
        },
        options: [
            { text: { ru: "Углерод", en: "Carbon", uz: "Uglerod" }, correct: true },
            { text: { ru: "Кислород", en: "Oxygen", uz: "Kislorod" }, correct: false },
            { text: { ru: "Водород", en: "Hydrogen", uz: "Vodorod" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Что такое HCl?",
            en: "What is HCl?",
            uz: "HCl nima?"
        },
        options: [
            { text: { ru: "Соляная кислота", en: "Hydrochloric acid", uz: "Xlorid kislotasi" }, correct: true },
            { text: { ru: "Вода", en: "Water", uz: "Suv" }, correct: false },
            { text: { ru: "Серная кислота", en: "Sulfuric acid", uz: "Oltingugurt kislotasi" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Какой элемент является благородным газом?",
            en: "Which element is a noble gas?",
            uz: "Qaysi element inert gaz hisoblanadi?"
        },
        options: [
            { text: { ru: "Неон", en: "Neon", uz: "Neon" }, correct: true },
            { text: { ru: "Азот", en: "Nitrogen", uz: "Azot" }, correct: false },
            { text: { ru: "Кислород", en: "Oxygen", uz: "Kislorod" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Какая формула у серной кислоты?",
            en: "What is the formula of sulfuric acid?",
            uz: "Oltingugurt kislotasining formulasi qanday?"
        },
        options: [
            { text: { ru: "H₂SO₄", en: "H₂SO₄", uz: "H₂SO₄" }, correct: true },
            { text: { ru: "HNO₃", en: "HNO₃", uz: "HNO₃" }, correct: false },
            { text: { ru: "HCl", en: "HCl", uz: "HCl" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Какая формула воды?",
            en: "What is the formula of water?",
            uz: "Suvning formulasi qanday?"
        },
        options: [
            { text: { ru: "H₂O", en: "H₂O", uz: "H₂O" }, correct: true },
            { text: { ru: "HO₂", en: "HO₂", uz: "HO₂" }, correct: false },
            { text: { ru: "H₂", en: "H₂", uz: "H₂" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Что означает CO₂?",
            en: "What does CO₂ stand for?",
            uz: "CO₂ nimani anglatadi?"
        },
        options: [
            { text: { ru: "Углекислый газ", en: "Carbon dioxide", uz: "Uglerod(IV) oksidi" }, correct: true },
            { text: { ru: "Угарный газ", en: "Carbon monoxide", uz: "Uglerod(II) oksidi" }, correct: false },
            { text: { ru: "Кислород", en: "Oxygen", uz: "Kislorod" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Какая формула у метана?",
            en: "What is the formula of methane?",
            uz: "Metanning formulasi qanday?"
        },
        options: [
            { text: { ru: "CH₄", en: "CH₄", uz: "CH₄" }, correct: true },
            { text: { ru: "C₂H₆", en: "C₂H₆", uz: "C₂H₆" }, correct: false },
            { text: { ru: "C₃H₈", en: "C₃H₈", uz: "C₃H₈" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Сколько протонов в атоме водорода?",
            en: "How many protons are in a hydrogen atom?",
            uz: "Vodorod atomida nechta proton bor?"
        },
        options: [
            { text: { ru: "1", en: "1", uz: "1" }, correct: true },
            { text: { ru: "2", en: "2", uz: "2" }, correct: false },
            { text: { ru: "0", en: "0", uz: "0" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Какая формула у поваренной соли?",
            en: "What is the formula of table salt?",
            uz: "Osh tuzining formulasi qanday?"
        },
        options: [
            { text: { ru: "NaCl", en: "NaCl", uz: "NaCl" }, correct: true },
            { text: { ru: "KCl", en: "KCl", uz: "KCl" }, correct: false },
            { text: { ru: "Na₂SO₄", en: "Na₂SO₄", uz: "Na₂SO₄" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Как называется процесс образования осадка в растворе?",
            en: "What is the process of forming a precipitate in a solution called?",
            uz: "Eritmada cho‘kma hosil bo‘lish jarayoni nima deb ataladi?"
        },
        options: [
            { text: { ru: "Осаждение", en: "Precipitation", uz: "Cho'kma hosil bo'lish" }, correct: true },
            { text: { ru: "Растворение", en: "Dissolution", uz: "Eritish" }, correct: false },
            { text: { ru: "Фильтрация", en: "Filtration", uz: "Filtrlash" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Какой элемент обозначается символом 'Na'?",
            en: "Which element is represented by the symbol 'Na'?",
            uz: "'Na' belgisi qaysi elementni bildiradi?"
        },
        options: [
            { text: { ru: "Натрий", en: "Sodium", uz: "Natriy" }, correct: true },
            { text: { ru: "Неон", en: "Neon", uz: "Neon" }, correct: false },
            { text: { ru: "Азот", en: "Nitrogen", uz: "Azot" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Какая формула у азотной кислоты?",
            en: "What is the formula of nitric acid?",
            uz: "Azot kislotasining formulasi qanday?"
        },
        options: [
            { text: { ru: "HNO₃", en: "HNO₃", uz: "HNO₃" }, correct: true },
            { text: { ru: "H₂SO₄", en: "H₂SO₄", uz: "H₂SO₄" }, correct: false },
            { text: { ru: "H₃PO₄", en: "H₃PO₄", uz: "H₃PO₄" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Какая формула у аммиака?",
            en: "What is the formula of ammonia?",
            uz: "Ammiakning formulasi qanday?"
        },
        options: [
            { text: { ru: "NH₃", en: "NH₃", uz: "NH₃" }, correct: true },
            { text: { ru: "N₂H₄", en: "N₂H₄", uz: "N₂H₄" }, correct: false },
            { text: { ru: "NO₂", en: "NO₂", uz: "NO₂" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Что происходит при реакции нейтрализации?",
            en: "What happens during a neutralization reaction?",
            uz: "Neytrallanish reaksiyasida nima sodir bo‘ladi?"
        },
        options: [
            { text: { ru: "Кислота и основание образуют соль и воду", en: "An acid and a base form salt and water", uz: "Kislota va asos tuz va suv hosil qiladi" }, correct: true },
            { text: { ru: "Образуется только газ", en: "Only a gas is formed", uz: "Faqat gaz hosil bo‘ladi" }, correct: false },
            { text: { ru: "Раствор становится кислым", en: "The solution becomes acidic", uz: "Eritma kislotali bo‘ladi" }, correct: false }
        ],
        solution: {
            ru: "При нейтрализации кислота реагирует с основанием, образуются соль и вода.",
            en: "In neutralization, acid reacts with base to form salt and water.",
            uz: "Neytrallanishda kislota asos bilan reaksiyaga kirishib, tuz va suv hosil qiladi."
        }
    },
    {
        text: {
            ru: "Какой газ выделяется при реакции металла с кислотой?",
            en: "Which gas is released when a metal reacts with acid?",
            uz: "Metall kislotaga ta’sir qilganda qanday gaz ajraladi?"
        },
        options: [
            { text: { ru: "Водород", en: "Hydrogen", uz: "Vodorod" }, correct: true },
            { text: { ru: "Кислород", en: "Oxygen", uz: "Kislorod" }, correct: false },
            { text: { ru: "Углекислый газ", en: "Carbon dioxide", uz: "Uglerod(IV) oksidi" }, correct: false }
        ],
        solution: {
            ru: "Металлы, реагируя с кислотой, выделяют водород и образуют соль.",
            en: "Metals reacting with acids release hydrogen gas and form a salt.",
            uz: "Metallar kislota bilan reaksiyaga kirishganda vodorod ajraladi va tuz hosil bo‘ladi."
        }
    },
    {
        text: {
            ru: "Что из перечисленного является щёлочью?",
            en: "Which of the following is an alkali?",
            uz: "Quyidagilardan qaysi biri ishqor?"
        },
        options: [
            { text: { ru: "NaOH", en: "NaOH", uz: "NaOH" }, correct: true },
            { text: { ru: "HCl", en: "HCl", uz: "HCl" }, correct: false },
            { text: { ru: "H₂SO₄", en: "H₂SO₄", uz: "H₂SO₄" }, correct: false }
        ],
        solution: {
            ru: "NaOH — гидроксид натрия, это типичная щёлочь.",
            en: "NaOH is sodium hydroxide, a typical alkali.",
            uz: "NaOH — natriy gidroksid, bu odatiy ishqor hisoblanadi."
        }
    },
    {
        text: {
            ru: "Какой цвет придаёт лакмус в щелочной среде?",
            en: "What color does litmus turn in alkaline solution?",
            uz: "Lakmus ishqoriy muhitda qanday rangga o‘zgaradi?"
        },
        options: [
            { text: { ru: "Синий", en: "Blue", uz: "Ko‘k" }, correct: true },
            { text: { ru: "Красный", en: "Red", uz: "Qizil" }, correct: false },
            { text: { ru: "Жёлтый", en: "Yellow", uz: "Sariq" }, correct: false }
        ],
        solution: {
            ru: "В щелочной среде лакмус становится синим.",
            en: "In alkaline solution, litmus turns blue.",
            uz: "Ishqoriy muhitda lakmus ko‘k rangga aylanadi."
        }
    },
    {
        text: {
            ru: "Какая формула у оксида кальция?",
            en: "What is the formula of calcium oxide?",
            uz: "Kaltsiy oksidning formulasi qanday?"
        },
        options: [
            { text: { ru: "CaO", en: "CaO", uz: "CaO" }, correct: true },
            { text: { ru: "Ca(OH)₂", en: "Ca(OH)₂", uz: "Ca(OH)₂" }, correct: false },
            { text: { ru: "CaCO₃", en: "CaCO₃", uz: "CaCO₃" }, correct: false }
        ],
        solution: {
            ru: "CaO — это формула кальция и кислорода, оксид кальция.",
            en: "CaO is the formula for calcium oxide (calcium and oxygen).",
            uz: "CaO — bu kaltsiy va kisloroddan tashkil topgan kaltsiy oksidning formulasi."
        }
    },
    {
        text: {
            ru: "Какой из газов легче воздуха?",
            en: "Which of these gases is lighter than air?",
            uz: "Quyidagi gazlardan qaysi biri havodan yengil?"
        },
        options: [
            { text: { ru: "Водород", en: "Hydrogen", uz: "Vodorod" }, correct: true },
            { text: { ru: "Кислород", en: "Oxygen", uz: "Kislorod" }, correct: false },
            { text: { ru: "Углекислый газ", en: "Carbon dioxide", uz: "CO₂" }, correct: false }
        ],
        solution: {
            ru: "Водород — самый лёгкий газ, легче воздуха.",
            en: "Hydrogen is the lightest gas and lighter than air.",
            uz: "Vodorod eng yengil gaz bo‘lib, havodan yengil hisoblanadi."
        }
    },
    {
        text: {
            ru: "Какая степень окисления у кислорода в H₂O?",
            en: "What is the oxidation state of oxygen in H₂O?",
            uz: "H₂O dagi kislorodning oksidlanish darajasi qanday?"
        },
        options: [
            { text: { ru: "-2", en: "-2", uz: "-2" }, correct: true },
            { text: { ru: "0", en: "0", uz: "0" }, correct: false },
            { text: { ru: "+2", en: "+2", uz: "+2" }, correct: false }
        ],
        solution: {
            ru: "В воде кислород всегда имеет степень окисления -2.",
            en: "In water, oxygen always has an oxidation state of -2.",
            uz: "Suvda kislorodning oksidlanish darajasi har doim -2 bo‘ladi."
        }
    },
    {
        text: {
            ru: "Какой металл самый активный в ряду напряжений?",
            en: "Which metal is the most reactive in the reactivity series?",
            uz: "Faollik qatorida eng faol metall qaysi?"
        },
        options: [
            { text: { ru: "Калий", en: "Potassium", uz: "Kaliy" }, correct: true },
            { text: { ru: "Медь", en: "Copper", uz: "Mis" }, correct: false },
            { text: { ru: "Железо", en: "Iron", uz: "Temir" }, correct: false }
        ],
        solution: {
            ru: "Калий находится вверху ряда активности и очень реакционноспособен.",
            en: "Potassium is at the top of the reactivity series and very reactive.",
            uz: "Kaliy faollik qatorining eng yuqori qismida joylashgan va juda faol."
        }
    },
    {
        text: {
            ru: "Что такое валентность?",
            en: "What is valency?",
            uz: "Valentlik nima?"
        },
        options: [
            { text: { ru: "Способность атома соединяться с другим атомом", en: "Ability of an atom to bond with other atoms", uz: "Atomning boshqa atomlar bilan bog‘lanish qobiliyati" }, correct: true },
            { text: { ru: "Количество нейтронов", en: "Number of neutrons", uz: "Neytronlar soni" }, correct: false },
            { text: { ru: "Масса атома", en: "Mass of atom", uz: "Atom massasi" }, correct: false }
        ],
        solution: {
            ru: "Валентность — это число связей, которое атом может образовать.",
            en: "Valency is the number of bonds an atom can form.",
            uz: "Valentlik — bu atom hosil qila oladigan bog‘lar soni."
        }
    },
    {
        text: {
            ru: "Какой элемент содержится в органических соединениях?",
            en: "Which element is found in all organic compounds?",
            uz: "Barcha organik birikmalarda qaysi element bo‘ladi?"
        },
        options: [
            { text: { ru: "Углерод", en: "Carbon", uz: "Uglerod" }, correct: true },
            { text: { ru: "Водород", en: "Hydrogen", uz: "Vodorod" }, correct: false },
            { text: { ru: "Кислород", en: "Oxygen", uz: "Kislorod" }, correct: false }
        ],
        solution: {
            ru: "Все органические соединения содержат углерод.",
            en: "All organic compounds contain carbon.",
            uz: "Barcha organik birikmalarda uglerod mavjud bo‘ladi."
        }
    },
    {
        text: {
            ru: "Сколько молекул воды образуется при реакции: 2H₂ + O₂ → ?",
            en: "How many molecules of water are formed in the reaction: 2H₂ + O₂ → ?",
            uz: "2H₂ + O₂ → ? reaksiyasida nechta suv molekulasi hosil bo‘ladi?"
        },
        options: [
            { text: { ru: "2", en: "2", uz: "2 ta" }, correct: true },
            { text: { ru: "1", en: "1", uz: "1 ta" }, correct: false },
            { text: { ru: "4", en: "4", uz: "4 ta" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Что получится при реакции: NaOH + HCl → ?",
            en: "What is the product of: NaOH + HCl → ?",
            uz: "NaOH + HCl → ? reaksiyasida nima hosil bo‘ladi?"
        },
        options: [
            { text: { ru: "NaCl + H₂O", en: "NaCl + H₂O", uz: "NaCl + H₂O" }, correct: true },
            { text: { ru: "Na + Cl₂", en: "Na + Cl₂", uz: "Na + Cl₂" }, correct: false },
            { text: { ru: "H₂ + NaOH", en: "H₂ + NaOH", uz: "H₂ + NaOH" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Укажите уравнение разложения воды.",
            en: "Select the equation for the decomposition of water.",
            uz: "Suvning parchalanish tenglamasini tanlang."
        },
        options: [
            { text: { ru: "2H₂O → 2H₂ + O₂", en: "2H₂O → 2H₂ + O₂", uz: "2H₂O → 2H₂ + O₂" }, correct: true },
            { text: { ru: "H₂ + O₂ → H₂O", en: "H₂ + O₂ → H₂O", uz: "H₂ + O₂ → H₂O" }, correct: false },
            { text: { ru: "H₂O → H₂O₂", en: "H₂O → H₂O₂", uz: "H₂O → H₂O₂" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Какой продукт получится при реакции: Ca + 2HCl → ?",
            en: "What is the product of the reaction: Ca + 2HCl → ?",
            uz: "Ca + 2HCl → ? reaksiyasida nima hosil bo‘ladi?"
        },
        options: [
            { text: { ru: "CaCl₂ + H₂", en: "CaCl₂ + H₂", uz: "CaCl₂ + H₂" }, correct: true },
            { text: { ru: "CaH₂ + Cl₂", en: "CaH₂ + Cl₂", uz: "CaH₂ + Cl₂" }, correct: false },
            { text: { ru: "CaO + H₂O", en: "CaO + H₂O", uz: "CaO + H₂O" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Чему равна молярная масса H₂O?",
            en: "What is the molar mass of H₂O?",
            uz: "H₂O ning molyar massasi qancha?"
        },
        options: [
            { text: { ru: "18 г/моль", en: "18 g/mol", uz: "18 g/mol" }, correct: true },
            { text: { ru: "10 г/моль", en: "10 g/mol", uz: "10 g/mol" }, correct: false },
            { text: { ru: "20 г/моль", en: "20 g/mol", uz: "20 g/mol" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Какой газ выделится при: Zn + 2HCl → ?",
            en: "Which gas is released in: Zn + 2HCl → ?",
            uz: "Zn + 2HCl → ? reaksiyasida qaysi gaz ajraladi?"
        },
        options: [
            { text: { ru: "Водород (H₂)", en: "Hydrogen (H₂)", uz: "Vodorod (H₂)" }, correct: true },
            { text: { ru: "Кислород (O₂)", en: "Oxygen (O₂)", uz: "Kislorod (O₂)" }, correct: false },
            { text: { ru: "Азот (N₂)", en: "Nitrogen (N₂)", uz: "Azot (N₂)" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Уравнение горения метана (CH₄)?",
            en: "What is the combustion equation for methane (CH₄)?",
            uz: "Metanning (CH₄) yonish tenglamasi qaysi?"
        },
        options: [
            { text: { ru: "CH₄ + 2O₂ → CO₂ + 2H₂O", en: "CH₄ + 2O₂ → CO₂ + 2H₂O", uz: "CH₄ + 2O₂ → CO₂ + 2H₂O" }, correct: true },
            { text: { ru: "CH₄ + O₂ → CO + H₂", en: "CH₄ + O₂ → CO + H₂", uz: "CH₄ + O₂ → CO + H₂" }, correct: false },
            { text: { ru: "CH₄ → C + 2H₂", en: "CH₄ → C + 2H₂", uz: "CH₄ → C + 2H₂" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Какое вещество является продуктом: CO₂ + H₂O → ?",
            en: "What is the product of: CO₂ + H₂O → ?",
            uz: "CO₂ + H₂O → ? reaksiyasida nima hosil bo‘ladi?"
        },
        options: [
            { text: { ru: "H₂CO₃", en: "H₂CO₃", uz: "H₂CO₃" }, correct: true },
            { text: { ru: "H₂O₂", en: "H₂O₂", uz: "H₂O₂" }, correct: false },
            { text: { ru: "CO", en: "CO", uz: "CO" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Какой продукт при реакции: 2K + 2H₂O → ?",
            en: "What is the product of: 2K + 2H₂O → ?",
            uz: "2K + 2H₂O → ? reaksiyasida nima hosil bo‘ladi?"
        },
        options: [
            { text: { ru: "2KOH + H₂", en: "2KOH + H₂", uz: "2KOH + H₂" }, correct: true },
            { text: { ru: "K₂O + H₂", en: "K₂O + H₂", uz: "K₂O + H₂" }, correct: false },
            { text: { ru: "KH + O₂", en: "KH + O₂", uz: "KH + O₂" }, correct: false }
        ]
    },
    {
        text: {
            ru: "Какая формула известняка?",
            en: "What is the formula of limestone?",
            uz: "Ohaktoshning formulasi qanday?"
        },
        options: [
            { text: { ru: "CaCO₃", en: "CaCO₃", uz: "CaCO₃" }, correct: true },
            { text: { ru: "Ca(OH)₂", en: "Ca(OH)₂", uz: "Ca(OH)₂" }, correct: false },
            { text: { ru: "CaCl₂", en: "CaCl₂", uz: "CaCl₂" }, correct: false }
        ]
    }
];
