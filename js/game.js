(() => {

    /* КОНСТАНТЫ */

    /*ЧАСТИ ТЕЛА ПЕРСОНАЖА */
    const arrOfHeroHear = [
            "url(assets/img/hear-hero-1.png)",
            "url(assets/img/hear-hero-2.png)",
            "url(assets/img/hear-hero-3.png)",
            "url(assets/img/hear-hero-4.png)",
            "url(assets/img/hear-hero-5.png)",
            "url(assets/img/hear-hero-6.png)"
        ],
        arrOfHeroBody = [
            "url(assets/img/body-hero-1.png)",
            "url(assets/img/body-hero-2.png)",
            "url(assets/img/body-hero-3.png)",
            "url(assets/img/body-hero-4.png)",
            "url(assets/img/body-hero-5.png)",
            "url(assets/img/body-hero-6.png)"
        ],
        arrOfHeroHead = [
            "url(assets/img/head-hero-1.png)",
            "url(assets/img/head-hero-2.png)",
            "url(assets/img/head-hero-3.png)",
            "url(assets/img/head-hero-4.png)",
            "url(assets/img/head-hero-5.png)",
            "url(assets/img/head-hero-6.png)"
        ],
        arrOfHeroHands = [
            "url(assets/img/hand-hero-1.png)",
            "url(assets/img/hand-hero-2.png)",
            "url(assets/img/hand-hero-3.png)",
            "url(assets/img/hand-hero-4.png)",
            "url(assets/img/hand-hero-5.png)",
            "url(assets/img/hand-hero-6.png)"
        ],
        arrOfHeroLegs = [
            "url(assets/img/leg-hero-1.png)",
            "url(assets/img/leg-hero-2.png)",
            "url(assets/img/leg-hero-3.png)",
            "url(assets/img/leg-hero-4.png)",
            "url(assets/img/leg-hero-5.png)",
            "url(assets/img/leg-hero-6.png)"
        ],
        arrOfHeroShorts = [
            "url(assets/img/shorts-hero-1.png)",
            "url(assets/img/shorts-hero-2.png)",
            "url(assets/img/shorts-hero-3.png)",
            "url(assets/img/shorts-hero-4.png)",
            "url(assets/img/shorts-hero-5.png)",
            "url(assets/img/shorts-hero-6.png)"
        ];

    /*ЧАСТИ ТЕЛА МОНСТРА */
    const arrOfMonsterBody = [
            "url(assets/img/body-monster-1.png)",
            "url(assets/img/body-monster-2.png)",
            "url(assets/img/body-monster-3.png)"
        ],
        arrOfMonsterHead = [
            "url(assets/img/head-monster-1.png)",
            "url(assets/img/head-monster-2.png)",
            "url(assets/img/head-monster-3.png)",
            "url(assets/img/head-monster-4.png)",
            "url(assets/img/head-monster-5.png)"
        ],
        arrOfMonsterHands = [
            "url(assets/img/hand-monster-1.png)",
            "url(assets/img/hand-monster-2.png)",
            "url(assets/img/hand-monster-3.png)"
        ],
        arrOfMonsterLegs = [
            "url(assets/img/leg-monster-1.png)",
            "url(assets/img/leg-monster-2.png)",
            "url(assets/img/leg-monster-3.png)"
        ];

    /*ЧАСТИ ИМЕН МОНСТРА */
    const monsterNameAdj = [
            "Terrible",
            "Evil",
            "Snotty"
        ],
        monsterNameRace = [
            "Ogre",
            "Dwarf",
            "Goblin"
        ],
        monsterName = [
            "Mike",
            "Louise",
            "Jake"
        ];

    /* ИГРОВЫЕ КАРТЫ */
    const backgroundMaps = ["url(assets/img/bg-gameField-1.png)",
        "url(assets/img/bg-gameField-2.jpg)",
        "url(assets/img/bg-gameField-3.jpg)"
    ];

    /* АУДИО ЭФФЕКТЫ */
    const audioEffect = {
        stormCast: "assets/audio/storm-cast.mp3",
        stormCastTime: 4800,
        victory: "assets/audio/victory.mp3",
        victoryTime: 1250,
        defeat: "assets/audio/defeat.mp3",
        defeatTime: 1140,
        fireRain: "assets/audio/firerain.mp3",
        fireRainTime: 1700,
        heal: "assets/audio/heal-cast.mp3",
        healTime: 2000,
        earthShake: "assets/audio/earthshake-cast.mp3",
        earthShakeTime: 1290,
        getDamagePerson: "assets/audio/get-damage-person.mp3",
        getDamagePersonTime: 200,
        getDamageMonster: "assets/audio/get-damage-monster.mp3",
        getDamageMonsterTime: 270
    };

    /* СЛОВА ДЛЯ ЗАДАНИЯ DRAG & DROP */
    const dropTaskWords = [
        "teacher",
        "driver",
        "job",
        "work",
        "doctor",
        "student",
        "apple",
        "mouse",
        "brother",
        "sister",
        "father",
        "mother",
        "computer"
    ];

    /* ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ */

    let nameOfPerson,
        myPerson = {
            hear: arrOfHeroHear[0],
            body: arrOfHeroBody[0],
            head: arrOfHeroHead[0],
            hands: arrOfHeroHands[0],
            shorts: arrOfHeroShorts[0],
            legs: arrOfHeroLegs[0]
        },
        Monster = {
            body: arrOfMonsterBody[0],
            head: arrOfMonsterHead[0],
            hands: arrOfMonsterHands[0],
            legs: arrOfMonsterLegs[0]
        },
        countOfUsers = 0,
        currentResult = -1;

    /* ПОЛОСА ЗАГРУЗКИ*/
    $('.loader').gradientProgressBar({
        value: 1,
        size: 750,
        fill: {
            gradient: ["blue", "lightblue", "lightyellow", "yellow"]
        }
    });

    /* СМЕНА ЭКРАНА ЗАГРУЗКИ НА МЕНЮ */
    window.onload = () => {
        setTimeout(() => {
            changeFields(".loading", ".menu");
        }, 5500);
    };

    /* ОБРАБОТЧИКИ КНОПОК */

    /* СМЕНА ЭКРАНОВ */

    /* РЕЗУЛЬТАТЫ -> РЕГИСТРАЦИЯ */
    $(".try-agaim-btn").on("click", () => {
        changeFields(".result", ".registration");
    });

    /* МЕНЮ -> РЕКОРДЫ */
    $(".show-records").on("click", () => {
        createRecordTable();
        changeFields(".menu", ".records");
    });

    /* МЕНЮ -> РЕГИСТРАЦИЯ */
    $(".start-game").on("click", () => {
        changeFields(".menu", ".registration");
    });

    /* РЕЗУЛЬТАТЫ -> МЕНЮ */
    $(".back-to-menu").on("click", () => {
        changeFields(".result", ".menu");
    });

    /* РЕКОРДЫ -> МЕНЮ */
    $(".back-to-menu-r").on("click", () => {
        changeFields(".records", ".menu");
    });

    /* ОТМЕНА СТАНДАРТНОГО ДЕЙСТВИЯ ФОРМЫ(РЕГСТРАЦИЯ) */
    $(".regForm").on("click", (e) => {
        e.preventDefault();
    });

    /* КНОПКА СДАТЬСЯ(КОНЕЧ ИГРЫ) */
    $(".surrender-btn").on("click", () => {
        gameOver();
    });

    /* МОДАЛЬНЫЕ ОКНА ЗАКЛИНАНИЙ*/

    /* ОТКРЫТЬ ОКНО ЗАКЛИНАНИЙ*/
    $(".open-cast-menu").on("click", () => {
        openCastMenu();
    });

    /* ЗАКРЫТИЯ ОКНА ЗАКЛИНАНИЙ */
    $('#modalContainer').click(() => {
        $("#modalContainer").addClass('out');
        $('main').removeClass('modal-active');
        $('main').off("mousemove");
    });

    /* МОДАЛЬНОЕ ОКНО ЗАДАНИЯ(ВЫБОР ЗАКЛИНАНИЯ) */

    /* АРИФМЕТИЧЕСКОЕ ОКНО ЗАДАЧИ */
    $("#mathCast").on("click", () => {
        openMathTaskMenu();
    });


    /* ОКНО ЗАДАЧИ АУДИРОВАНИЯ */
    $("#healCast").on("click", () => {
        openHealTaskMenu();
    });

    /* ОКНО ЗАДАЧИ ПЕРЕВОДА */
    $("#translateCast").on("click", () => {
        openTranslateTaskMenu();
    });

    /* ОКНО DRAG & DROP ЗАДАЧИ */
    $("#dropCast").on("click", () => {
        openDropTaskMenu();
    });

    /* РЕГИСТРАЦИЯ -> НАСТРОЙКА ПЕРСОНАЖА(ВАЛИДАЦИЯ ДАННЫХ) */
    $("#btnForHero").on("click", () => {
        let email = $(".registration #email"),
            firstName = $(".registration #firstName"),
            lastName = $(".registration #lastName");
        if (firstName.val() == "") {
            firstName.addClass('wrong-name');
            lastName.removeClass('wrong-name');
            email.removeClass('wrong-name');
        } else if (lastName.val() == "") {
            firstName.removeClass('wrong-name');
            lastName.addClass('wrong-name');
            email.removeClass('wrong-name');
        } else if (!validateEmail(email.val())) {
            firstName.removeClass('wrong-name');
            lastName.removeClass('wrong-name');
            email.addClass('wrong-name');
        } else {
            firstName.removeClass('wrong-name');
            lastName.removeClass('wrong-name');
            email.removeClass('wrong-name');
            changeFields(".registration", ".choose-hero");
            setTimeout(() => {
                if (!document.querySelector(".slick-initialized")) {
                    $(".center").slick({
                        dots: false,
                        infinite: true,
                        centerMode: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        focusOnSelect: true,
                        arrows: false,
                        swipe: false
                    });
                }
            }, 1000);
        }
    });

    /* НАСТРОЙКА ПЕРСОНАЖА(ПРЕВЬЮ) (ЦВЕТ КОЖИ, ОДЕЖДА) */
    $(".choose-hero").on("click", (e) => {
        if (e.target.parentNode.className == "btn-person") {
            changePerson(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className.split("-options")[0],
                e.target.parentNode.id.split("-")[1]);
        }
    });

    /* СОЗДАНИЕ ПЕРСОНАЖА И ПРОВЕРКА ВАЛИДНОГО ИМЕНИ */
    $(".create-person-btn").on("click", () => {
        nameOfPerson = $("#nameOfPerson").val();
        const inputPersonName = document.querySelector("#nameOfPerson");
        if (nameOfPerson == "") {
            inputPersonName.className += " wrong-name";
        } else {
            inputPersonName.className = "person-name-input";
            startGame();
        };
    });

    /* MUTE/UNMUTE МУЗЫКИ */
    $(".music-btn").on("click", () => {
        if (document.querySelector("#bg-music").muted == false) {
            document.querySelector(".music-btn").style.backgroundImage = "url(assets/img/sound-off.png)";
            document.querySelector("#bg-music").muted = true;
            document.querySelector("#cast-effects").muted = true;
            document.querySelector("#cast-effects-2").muted = true;
        } else {
            document.querySelector(".music-btn").style.backgroundImage = "url(assets/img/sound-on.png)";
            document.querySelector("#bg-music").muted = false;
            document.querySelector("#cast-effects").muted = false;
            document.querySelector("#cast-effects-2").muted = false;
        }
    });

    /* ФУКНЦИИ */

    /* ОБЩИЕ */

    /* ЗАПУСК ИГРЫ */
    const startGame = () => {
        currentResult = -1;
        runGameMusic();
        changeFields(".choose-hero", ".game-field");
        newLevel();
    };

    /* ИНИЦИАЛИЗАЦИЯ УРОВНЯ */
    const newLevel = () => {
        currentResult++;
        resetGameField();
        setBGMap();
        createPerson();
        createMonster();
        animatePersonOut();
        animateMonsterOut();
        setPersonName();
        setMonsterName();
        animatePersonBar();
        animateMonsterBar();
        animateBtns();

    };

    /* ОБНУЛЕНИЕ ПРОШЛОГО УРОВНЯ */
    const resetGameField = () => {
        setTimeout(() => {
            $('.model-person').removeClass("person-heart");
            $('.model-monster').removeClass("monster-heart");
            $('.model-person').removeClass("person-down");
            $('.model-monster').removeClass("monster-down");
            getRegen(100, ".bar-person");
            getRegen(100, ".bar-monster");
        }, 800);
    };

    /* УРОВЕНЬ ПРОЙДЕН(ОТКРЫТИЯ ЭКРАНА МЕЖДУ РАУНДАМИ) */
    const levelComplete = () => {
        $('.modal-task').addClass('modal-open');
        $('.pause').addClass("model-task-active");
        setTimeout(() => {
            $('.modal-task').removeClass('modal-open');
            $('.pause').removeClass("model-task-active");
            newLevel();
        }, 2500);
    };

    /* КОНЕЦ ИГРЫ */
    const gameOver = () => {
        changeFields(".game-field", ".result");
        runMenuMusic();
        saveUserToLS();
        $('input#firstName').val("");
        $('input#lastName').val("");
        $('input#email').val("");
        $('#nameOfPerson').val("");
        $('#modalContainer').removeClass("six out");
        $('.result .score-result').html(currentResult);
    };

    /* ГЕНЕРАЦИЯ КАРТЫ(ФОНА) СРАЖЕНИЯ */
    const setBGMap = () => {
        let randomMap = backgroundMaps[Math.floor(Math.random() * 3)];
        document.querySelector('.game-field .container').style.backgroundImage = randomMap;
    };

    /* СМЕНА ИГРОВОГО ЭКРАНА */
    const changeFields = (fieldCurrent, field2Next) => {
        $(fieldCurrent).css({
            "opacity": "1"
        }).animate({
            "opacity": 0
        });
        setTimeout(() => {
            $(fieldCurrent).css({
                "display": "none"
            });
        }, 1000);
        setTimeout(() => {
            $(field2Next).css({
                "opacity": "0",
                "display": "block",
            }).animate({
                "opacity": 1
            })
        }, 1000);
    }

    /* РАБОТА С ПЕРСОНАЖЕМ И МОНСТРОМ */

    /* УСТАНОВКА НИКНЕЙМА ПЕРСОНАЖА */
    const setPersonName = () => {
        $('.person-name').html(nameOfPerson);
    };

    /* ГЕНЕРАЦИЯ НИКНЕЙМА МОНСТРА */
    const setMonsterName = () => {
        let randomMonsterName = "";
        randomMonsterName += monsterNameAdj[Math.floor(Math.random() * monsterNameAdj.length)] + " " +
            monsterNameRace[Math.floor(Math.random() * monsterNameRace.length)] + " " +
            monsterName[Math.floor(Math.random() * monsterName.length)] + " ";
        $('.monster-name').html(randomMonsterName);
    };

    /* ИЗМЕНЕНИЯ ПРЕВЬЮ ПЕРСОНАЖА */
    const changePerson = (changingPart, ulrToChange) => {
        switch (changingPart) {
            case "hear":
                myPerson[changingPart] = arrOfHeroHear[ulrToChange - 1];
                break;
            case "body":
                myPerson[changingPart] = arrOfHeroBody[ulrToChange - 1];
                break;
            case "shorts":
                myPerson[changingPart] = arrOfHeroShorts[ulrToChange - 1];
                break;
            case "skin":
                myPerson["hands"] = arrOfHeroHands[ulrToChange - 1];
                myPerson["head"] = arrOfHeroHead[ulrToChange - 1];
                myPerson["legs"] = arrOfHeroLegs[ulrToChange - 1];
                break;
            default:
                break;
        }
        if (changingPart == "skin") {
            document.querySelector(".handl-preview").style.backgroundImage = arrOfHeroHands[ulrToChange - 1];
            document.querySelector(".handr-preview").style.backgroundImage = arrOfHeroHands[ulrToChange - 1];
            document.querySelector(".legl-preview").style.backgroundImage = arrOfHeroLegs[ulrToChange - 1];
            document.querySelector(".legr-preview").style.backgroundImage = arrOfHeroLegs[ulrToChange - 1];
            document.querySelector(".head-preview").style.backgroundImage = arrOfHeroHead[ulrToChange - 1];
        } else {
            document.querySelector("." + changingPart + "-preview").style.backgroundImage = myPerson[changingPart];
        }
    };

    /* ГЕНЕРАЦИЯ МОНСТРА И ЕГО ОТОБРАЖЕНИЕ */
    const createMonster = () => {
        Monster.body = arrOfMonsterBody[Math.floor(Math.random() * arrOfMonsterBody.length)];
        Monster.head = arrOfMonsterHead[Math.floor(Math.random() * arrOfMonsterHead.length)];
        Monster.hands = arrOfMonsterHands[Math.floor(Math.random() * arrOfMonsterHands.length)];
        Monster.legs = arrOfMonsterLegs[Math.floor(Math.random() * arrOfMonsterLegs.length)];
        document.querySelector(".body-monster").style.backgroundImage = Monster.body;
        document.querySelector(".head-monster").style.backgroundImage = Monster.head;
        document.querySelector(".handl-monster").style.backgroundImage = Monster.hands;
        document.querySelector(".handr-monster").style.backgroundImage = Monster.hands;
        document.querySelector(".legl-monster").style.backgroundImage = Monster.legs;
        document.querySelector(".legr-monster").style.backgroundImage = Monster.legs;
    };

    /* ОТОБРАЖЕНИЕ ПЕРСОНАЖА */
    const createPerson = () => {
        document.querySelector(".hear-person").style.backgroundImage = myPerson.hear;
        document.querySelector(".body-person").style.backgroundImage = myPerson.body;
        document.querySelector(".head-person").style.backgroundImage = myPerson.head;
        document.querySelector(".handl-person").style.backgroundImage = myPerson.hands;
        document.querySelector(".handr-person").style.backgroundImage = myPerson.hands;
        document.querySelector(".shorts-person").style.backgroundImage = myPerson.shorts;
        document.querySelector(".legl-person").style.backgroundImage = myPerson.legs;
        document.querySelector(".legr-person").style.backgroundImage = myPerson.legs;
    };

    /* РАБОТА СО ЗДОРОВЬЕМ */

    /* ОБРАБОТКА ПОТЕРИ ЗДОРОВЬЯ */
    const getDamage = (lostHealth, target) => {
        let hBar = $(target),
            bar = hBar.find('.bar'),
            hit = hBar.find('.hit'),
            total = hBar.attr('data-total'),
            value = hBar.attr('data-value'),
            damage = lostHealth * 10,
            newValue = (value - damage <= 0 ? 0 : value - damage),
            barWidth = (newValue / total) * 100,
            hitWidth = (damage / value) * 100 + "%";
        if ($(".bar-monster").attr('data-value') !== 0 && $(".bar-person").attr('data-value') !== 0) {
            hit.css('width', hitWidth);
            hBar.attr('data-value', newValue);
            setTimeout(() => {
                hit.css({
                    'width': '0'
                });
                bar.css('width', barWidth + "%");
            }, 500);
            let width = value / 10,
                healthValue = setInterval(() => {
                    if (width <= barWidth) {
                        clearInterval(healthValue);
                    } else {
                        width--;
                        $(target + " span").html(width + "%");
                    }
                }, 10);
            if (newValue == 0 && target == ".bar-monster") {
                setTimeout(() => {
                    $('.model-monster').addClass("monster-down");
                }, 900);
                setTimeout(() => {
                    musicEffect(audioEffect.victory);
                }, 1800);
                setTimeout(() => {
                    levelComplete();
                }, 3500);
            } else if (newValue == 0 && target == ".bar-person") {
                setTimeout(() => {
                    $('.model-person').addClass("person-down");
                }, 900);
                setTimeout(() => {
                    musicEffect(audioEffect.defeat);
                }, 1800);
                setTimeout(() => {
                    gameOver();
                }, 3000);
            }
        }
    };

    /* ОБРАБОТКА ВОССТАНОВЛЕНИЯ ЗДОРОВЬЯ */
    const getRegen = (gainedHealth, target) => {
        let hBar = $(target),
            bar = hBar.find('.bar'),
            hit = hBar.find('.hit'),
            total = +hBar.attr('data-total'),
            value = +hBar.attr('data-value'),
            heal = +gainedHealth * 10,
            newValue = +(value + heal >= 1000 ? 1000 : value + heal),
            hitWidth = (newValue * 100) / total + "%";
        hBar.attr('data-value', newValue);
        hit.css({
            'width': '0'
        });
        bar.css('width', hitWidth);
        let width = value / 10;
        let healthValue = setInterval(() => {
            if (width >= +newValue / 10) {
                clearInterval(healthValue);
            } else {
                width++;
                $(target + " span").html(width + "%");
            }
        }, 10);
    };

    /* РАБОТА С ОКНАМИ */

    /* ОТКРЫТИЯ ОКНА АРИФМЕТИЧЕСКИХ ЗАДАЧ */
    const openMathTaskMenu = () => {
        $(".task-math #answer").val("");
        $('.modal-task').addClass('modal-open');
        $('.task-math').addClass("model-task-active");
        let condition = createCondition();
        $('.task-math .condition').html(condition.expression);
        $(".task-math .result-input").on("click", () => {
            let userAnswer = $('.task-math #answer').val();
            const inputAnswer = document.querySelector(".task-math #answer");
            if (userAnswer == "") {
                inputAnswer.className = "wrong-name";
            } else {
                inputAnswer.className = "";
                checkMathTask(condition);
                $('.task-math .result-input').prop('onclick', null).off('click');
            };
        });
    };

    /* ОТКРЫТИЯ ОКНА АУДИРОВАНИЯ ЗАДАЧ */
    const openHealTaskMenu = () => {
        $(".task-heal #answer").val("");
        $('.modal-task').addClass('modal-open');
        $('.task-heal').addClass("model-task-active");
        createAudio();
        $(".task-heal .result-input").on("click", () => {
            let userAnswer = $('.task-heal #answer').val();
            const inputAnswer = document.querySelector(".task-heal #answer");
            if (userAnswer == "") {
                inputAnswer.className = "wrong-name";
            } else {
                inputAnswer.className = "";
                checkHealTask();
                $('.task-heal .result-input').prop('onclick', null).off('click');
            };
        });
    };

    /* ОТКРЫТИЯ ОКНА ЗАДАЧИ ПЕРЕВОДА */
    const openTranslateTaskMenu = () => {
        $(".task-translate #answer").val("");
        $('.modal-task').addClass('modal-open');
        $('.task-translate').addClass("model-task-active");
        createWord();
        $(".task-translate .result-input").on("click", () => {
            let userAnswer = $('.task-translate #answer').val();
            const inputAnswer = document.querySelector(".task-translate #answer");
            if (userAnswer == "") {
                inputAnswer.className = "wrong-name";
            } else {
                inputAnswer.className = "";
                checkTranslateTask();
                $('.task-translate .result-input').prop('onclick', null).off('click');
            };
        });
    };

    /* ОТКРЫТИЯ ОКНА DRAG & DROP ЗАДАЧИ */
    const openDropTaskMenu = () => {
        $("#sortable").sortable();
        $("#sortable").disableSelection();
        $(".task-drop #answer").val("");
        $('.modal-task').addClass('modal-open');
        $('.task-drop').addClass("model-task-active");
        createWordDrop();
        $(".task-drop .result-input").on("click", () => {
            checkDropTask();
            $('.task-drop .result-input').prop('onclick', null).off('click');
            setTimeout(() => {
                const liElements = document.querySelectorAll("#sortable li");
                for (let i = 0; i < liElements.length; i++) {
                    document.querySelectorAll("#sortable li")[0].remove();
                }
            }, 4000);
        });
    };

    /* ЗАКРЫТИЕ ОКОН ЗАДАЧ */
    const hideModelTask = () => {
        $('.task-math .result-input').prop('onclick', null).off('click');
        $('.task-heal .result-input').prop('onclick', null).off('click');
        $('.task-translate .result-input').prop('onclick', null).off('click');
        $('.task-drop .result-input').prop('onclick', null).off('click');
        $('.modal-task').removeClass('modal-open');
        $('.task-math').removeClass("model-task-active");
        $('.task-heal').removeClass("model-task-active");
        $('.task-translate').removeClass("model-task-active");
        $('.task-drop').removeClass("model-task-active");
    };

    /* ЗАКРЫТИЯ ОКНА ЗАДАЧ, ПЕРЕХОД К ИГРОВОМУ ОКНУ */
    const backToGame = () => {
        $('.scroll-left.seccess-message').removeClass("active-seccess-mess");
        $('.scroll-left.fault-message').removeClass("active-fault-mess");
        hideModelTask();
    };

    /* ОТКРЫТИЯ ОКНА ЗАКЛИНАНИЙ */
    const openCastMenu = () => {
        $('#modalContainer').removeClass("six out").addClass("six");
        $('main').addClass('modal-active');
        $('main').on("mousemove", (e) => {
            let img = $(".arrow-cast-menu"),
                imgpos = img.offset();
            center = {
                x: imgpos.left + img.width() / 2,
                y: imgpos.top + img.height() / 2
            };
            let point = {
                    x: e.pageX,
                    y: e.pageY
                },
                r = get_angle(center, point);
            img.css("transform", "rotate(" + r + "deg)");
            img.css("-moz-transform", "rotate(" + r + "deg)");
            img.css("-webkit-transform", "rotate(" + r + "deg)");
            img.css("-o-transform", "rotate(" + r + "deg)");
        });
    };

    /* ПРОВЕРКА ПРАВИЛЬНОСТИ РЕШЕНИЯ АРИФМЕТИЧЕСКОЙ ЗАДАЧИ */
    const checkMathTask = (condition) => {
        let userAnswer = $('.task-math #answer').val();
        let flagTrue = false;
        if (condition.result == userAnswer) {
            flagTrue = true;
            showMessageCorrect();
            setTimeout(() => {
                animateStormCast();
            }, 4500);
        }
        if (flagTrue == false) {
            showMessageIncorrect();
            setTimeout(() => {
                animateMonsterCast();
            }, 4500);
        } else {
            setTimeout(() => {
                if ($(".bar-monster").attr('data-value') != 0) {
                    if ($(".bar-person").attr('data-value') != 0) {
                        animateMonsterCast();
                    }
                }
            }, 9000);
        }
    };

    /* ПРОВЕРКА ПРАВИЛЬНОСТИ ЗАДАЧИ АУДИРОВАНИЯ */
    const checkHealTask = () => {
        let randomData = $('.task-heal #listning-word source').attr("src");
        let userAnswer = $('.task-heal #answer').val();
        $.getJSON('../json/listening.json', (Listening) => {
            let flagTrue = false;
            for (let i = 0; i < Listening.data.length; i++) {
                if (Listening.data[i].url == randomData) {
                    for (let j = 0; j < Listening.data[i].word.length; j++) {
                        if (Listening.data[i].word[j] == userAnswer) {
                            flagTrue = true;
                            showMessageCorrect();
                            setTimeout(() => {
                                animateHealCast();
                            }, 4500);
                        }
                    }
                }
            }
            if (flagTrue == false) {
                showMessageIncorrect();
                setTimeout(() => {
                    animateMonsterCast();
                }, 4700);
            } else {
                setTimeout(() => {
                    if ($(".bar-monster").attr('data-value') != 0) {
                        if ($(".bar-person").attr('data-value') != 0) {
                            animateMonsterCast();
                        }
                    }
                }, 9000);
            }
        });
    };

    /* ПРОВЕРКА ПРАВИЛЬНОСТИ ЗАДАЧИ ПЕРЕВОДА */
    const checkTranslateTask = () => {
        let randomWord = $('.task-translate .condition').html();
        let userAnswer = $('.task-translate #answer').val();
        $.getJSON('../json/dictionary.json', (Dictionary) => {
            let flagTrue = false;
            for (let i = 0; i < Dictionary.words.length; i++) {
                if (Dictionary.words[i].en == randomWord) {
                    for (let j = 0; j < Dictionary.words[i].ru.length; j++) {
                        if (Dictionary.words[i].ru[j] == userAnswer) {
                            flagTrue = true;
                            showMessageCorrect();
                            setTimeout(() => {
                                animateEarthCast();
                            }, 4500);
                        }
                    }

                }
            }
            if (flagTrue == false) {
                showMessageIncorrect();
                setTimeout(() => {
                    animateMonsterCast();
                }, 4700);
            } else {
                setTimeout(() => {
                    if ($(".bar-monster").attr('data-value') != 0) {
                        if ($(".bar-person").attr('data-value') != 0) {
                            animateMonsterCast();
                        }
                    }
                }, 8000);
            }
        });
    };

    /* ПРОВЕРКА ПРАВИЛЬНОСТИ РЕШЕНИЯ DRAG & DROP */
    const checkDropTask = () => {
        let flagTrue = false;
        let allLi = document.querySelectorAll("#sortable li");
        let userAnswer = "";
        let answer = false;
        for (let i = 0; i < allLi.length; i++) {
            userAnswer += allLi[i].innerHTML.split("</span>")[1];
        }
        for (let i = 0; i < dropTaskWords.length; i++) {
            if (userAnswer == dropTaskWords[i]) {
                answer = true;
            }
        }
        if (answer) {
            flagTrue = true;
            showMessageCorrect();
            setTimeout(() => {
                animateFirerainCast();
            }, 4500);
        }
        if (flagTrue == false) {
            showMessageIncorrect();
            setTimeout(() => {
                animateMonsterCast();
            }, 4500);
        } else {
            setTimeout(() => {
                if ($(".bar-monster").attr('data-value') != 0) {
                    if ($(".bar-person").attr('data-value') != 0) {
                        animateMonsterCast();
                    }
                }
            }, 8000);
        }
    };

    /* ЗАКЛИНАНИЯ ГРОЗА(АРИФМЕТИЧЕСКОЕ) */
    const animateStormCast = () => {
        musicEffect(audioEffect.stormCast);
        $('.cloud').addClass('show');
        $('.rain').addClass('show');
        $(".cloud.show").animate({
            left: "800px"
        }, 3000);
        setTimeout(() => {
            $('.lightning').addClass('show');
            $(".lightning").animate({
                height: "300px"
            }, 500);
            setTimeout(() => {
                $(".lightning").removeClass('show');
            }, 600);
            setTimeout(() => {
                $(".cloud").removeClass('show');
                $('.rain').removeClass('show');
            }, 850);
            $('.model-monster').addClass('monster-heart');
            musicEffect2(audioEffect.getDamageMonster);
            setTimeout(() => {
                $('.model-monster').removeClass('monster-heart');
            }, 500);
            setTimeout(() => {
                $('.model-monster').removeClass('monster-heart');
            }, 500);
            getDamage(30, ".bar-monster");
            setTimeout(() => {
                $(".cloud").css({
                    left: "200px"
                });
                $(".lightning").css({
                    height: "0px"
                });
            }, 1000);
        }, 3100);
    };

    /* РАБОТА С АНИМАЦИЕЙ */

    /* АНИМАЦИЯ ЗАКЛИНАНИЯ ИСЦЕЛЕНИЯ */
    const animateHealCast = () => {
        musicEffect(audioEffect.heal);
        $('.light-heal').addClass('lightbright');
        setTimeout(() => {
            $('.light-heal').removeClass('lightbright');
            getRegen(50, ".bar-person");
        }, 2000);
    };

    /* АНИМАЦИЯ ЗАКЛИНАНИЯ EARTHSHAKE */
    const animateEarthCast = () => {
        musicEffect(audioEffect.earthShake);
        $('.earthshake').addClass('show');
        setTimeout(() => {
            $('.earthshake img:nth-child(1)').addClass('show');
        }, 200);
        setTimeout(() => {
            $('.earthshake img:nth-child(2)').addClass('show');
        }, 400);
        setTimeout(() => {
            $('.earthshake img:nth-child(3)').addClass('show');
        }, 600);
        setTimeout(() => {
            $('.earthshake img:nth-child(4)').addClass('show');
        }, 800);
        setTimeout(() => {
            $('.earthshake img:nth-child(5)').addClass('show');
        }, 1000);
        setTimeout(() => {
            $('.model-monster').addClass('monster-heart');
            musicEffect2(audioEffect.getDamageMonster);
            setTimeout(() => {
                $('.model-monster').removeClass('monster-heart');
            }, 500);
            getDamage(35, ".bar-monster");
        }, 1000);
        setTimeout(() => {
            $('.earthshake').removeClass('show');
            $('.earthshake img:nth-child(1)').removeClass('show');
            $('.earthshake img:nth-child(2)').removeClass('show');
            $('.earthshake img:nth-child(3)').removeClass('show');
            $('.earthshake img:nth-child(4)').removeClass('show');
            $('.earthshake img:nth-child(5)').removeClass('show');
        }, 2000);
    };

    /* АНИМАЦИЯ ЗАКЛИНАНИЯ FIRERAIN */
    const animateFirerainCast = () => {

        $('.firerain').addClass('show');
        musicEffect(audioEffect.fireRain);
        setTimeout(() => {
            $('.model-monster').addClass('monster-heart');
            musicEffect2(audioEffect.getDamageMonster);
            setTimeout(() => {
                $('.model-monster').removeClass('monster-heart');
            }, 500);
            $('.firerain').removeClass('show');
            getDamage(40, ".bar-monster");
        }, 1500);

    };

    /* АНИМАЦИЯ ЗАКЛИНАНИЯ МОНСТРА */
    const animateMonsterCast = () => {

        $('.fireball').addClass('show');
        musicEffect(audioEffect.fireRain);
        setTimeout(() => {
            $('.model-person').addClass('person-heart');
            musicEffect2(audioEffect.getDamagePerson);
            setTimeout(() => {
                $('.model-person').removeClass('person-heart');
            }, 500);
            $('.fireball').removeClass('show');
            getDamage(35, ".bar-person");
        }, 1500);

    };

    /* АНИМАЦИЯ ВЫХОДА ПЕРСОНАЖА */
    const animatePersonOut = () => {
        $('.model-person').css({
            left: "-260px"
        });
        setTimeout(() => {
            $('.model-person').animate({
                left: "50px"
            }, 2500);
        }, 1500);
    };

    /* АНИМАЦИЯ ВЫХОДА МОНСТРА */
    const animateMonsterOut = () => {
        $('.model-monster').css({
            right: "-260px"
        });
        setTimeout(() => {
            $('.model-monster').animate({
                right: "50px"
            }, 2500);
        }, 2000);
    };

    /* АНИМАЦИЯ ВЫХОДА ПАНЕЛИ ПЕРСОНАЖА */
    const animatePersonBar = () => {
        $('.bar-person').css({
            left: "-420px"
        });
        $('.person-name').css({
            left: "-350px"
        });
        setTimeout(() => {
            $('.bar-person').animate({
                left: "25px"
            }, 1500);
            $('.person-name').animate({
                left: "30px"
            }, 1500);
        }, 3500);
    };

    /* АНИМАЦИЯ ВЫХОДА ПАНЕЛИ МОНСТРА */
    const animateMonsterBar = () => {
        $('.bar-monster').css({
            right: "-420px"
        });
        $('.monster-name').css({
            right: "-350px"
        });
        setTimeout(() => {
            $('.bar-monster').animate({
                right: "25px"
            }, 1500);
            $('.monster-name').animate({
                right: "30px"
            }, 1500);
        }, 3500);
    };

    /* АНИМАЦИЯ ВЫХОДА ПАНЕЛИ КНОПОК */
    const animateBtns = () => {
        $('.surrender').css({
            top: "-80px"
        });
        $('.cast-menu-btn').css({
            top: "-80px"
        });
        setTimeout(() => {
            $('.surrender').animate({
                top: "30px"
            }, 1500);
            $('.cast-menu-btn').animate({
                top: "30px"
            }, 1500);
        }, 3500);
    };

    /* РАСЧЕТ УГЛА ДЛЯ УКАЗАТЕЛЯ ВЫБОРА ЗАКЛИНАНИЙ */
    const get_angle = (center, point) => {
        let x = point.x - center.x,
            y = point.y - center.y;
        if (x == 0) return (y > 0) ? 180 : 0;
        let a = Math.atan(y / x) * 180 / Math.PI;
        a = (x > 0) ? a + 90 : a + 270;
        return a;
    };

    /* ГЕНЕРАЦИЯ АРИФМЕТИЧЕСКОГО ВЫРАЖЕНИЯ */
    const createCondition = () => {
        const sign = ['+', '-', '*', '/'];
        let numberA = Math.floor(Math.random() * 101),
            numerB = Math.floor(Math.random() * 101),
            randomSign = Math.floor(Math.random() * 3),
            result = (randomSign == 0 ? numberA + numerB :
                randomSign == 1 ? numberA - numerB :
                randomSign == 2 ? numberA * numerB :
                numberA / numerB);
        return {
            expression: "" + numberA + " " + sign[randomSign] + " " + numerB + " = ",
            result: result
        };
    };

    /* ГЕНЕРАЦИЯ СЛОВА ДЛЯ АУДИРОВАНИЯ */
    const createAudio = () => {
        let randomData = {};
        $.getJSON('../json/listening.json', (Listening) => {
            let randomNumber = Math.floor(Math.random() * Listening.data.length);
            randomData.url = Listening.data[randomNumber].url;
            $('.task-heal #listning-word source').attr("src", randomData.url);
            document.querySelector('.task-heal #listning-word').load();
        });
    };

    /* ГЕНЕРАЦИЯ СЛОВА ДЛЯ ПРЕВОДА */
    const createWord = () => {
        let randomWord = {};
        $.getJSON('../json/dictionary.json', (Dictionary) => {
            let randomNumber = Math.floor(Math.random() * Dictionary.words.length);
            randomWord.en = Dictionary.words[randomNumber].en;
            randomWord.ru = Dictionary.words[randomNumber].ru;
            $('.task-translate .condition').html(randomWord.en);
        });
    };

    /* ГЕНЕРАЦИЯ И ОТРИСОВКА СЛОВА DRAG & DROP */
    const createWordDrop = () => {
        let randomNumber = Math.floor(Math.random() * dropTaskWords.length);
        let word = dropTaskWords[randomNumber];
        let wordRand = [];
        for (let i = 0; i < word.length; i++) {
            wordRand.push(i);
        }
        wordRand.sort(compareRandom);
        for (let i = 0; i < wordRand.length; i++) {
            wordRand[i] = word[wordRand[i]];
        }
        for (let i = 0; i < word.length; i++) {
            let ul = document.querySelector("#sortable");
            let li = document.createElement('li');
            li.className = "ui-state-default";
            li.innerHTML = '<span class="ui-icon ui-icon-arrowthick-2-n-s"></span>' + wordRand[i];
            ul.appendChild(li);
        }
    }

    /* ОТОБРАЖЕНИЕ ПРАВИЛЬНОГО РЕШЕНИЯ ЗАДАЧИ */
    const showMessageCorrect = () => {
        $('.scroll-left.seccess-message').addClass("active-seccess-mess");
        setTimeout(() => {
            backToGame();
        }, 4000);
    };

    /* ОТОБРАЖЕНИЕ НЕПРАВИЛЬНОГО РЕШЕНИЯ ЗАДАЧИ */
    const showMessageIncorrect = () => {
        $('.scroll-left.fault-message').addClass("active-fault-mess");
        setTimeout(() => {
            backToGame();
        }, 4000);
    };

    /* ЗВУКОВЫЕ ЭФФЕКТЫ */
    const musicEffect = (effectURL) => {
        $('#cast-effects').attr("src", effectURL);
        document.querySelector('#cast-effects').load();
        document.querySelector('#cast-effects').play();
    };

    /* ЗВУКОВЫЕ ЭФФЕКТЫ 2 */
    const musicEffect2 = (effectURL) => {
        $('#cast-effects-2').attr("src", effectURL);
        document.querySelector('#cast-effects-2').load();
        document.querySelector('#cast-effects-2').play();
    };

    /* СОЗДАНИЕ ТАБЛИЦЫ РЕКОРДОВ */
    const createRecordTable = () => {
        countOfUsers = 0;
        const trElements = document.querySelectorAll(".tr-element");
        for (let i = 0; i < trElements.length; i++) {
            document.querySelectorAll(".tr-element")[0].remove();
        }
        countUsers();
        let arrOfUsers = [];
        for (let i = 0; i < countOfUsers; i++) {
            let localValue = localStorage.getItem('userGame' + i);
            let scoreBuff = Number(localValue.split(",")[3]);
            arrOfUsers.push({
                user: localValue,
                score: scoreBuff
            });

        }
        arrOfUsers.sort(compareScore);
        for (let i = 0; i < (arrOfUsers.length > 10 ? 10 : arrOfUsers.length); i++) {
            let table = document.querySelector("#TableOfRecords");
            let tr1 = document.createElement('tr');
            tr1.className = "tr-element";
            tr1.innerHTML = "<td id='number" + i + "'" + "> </td > <td id='firstName1" + i + "'" +
                "> </td > <td id='lastName1" + i + "'" + "> </td> <td id='email1" + i + "'" +
                "> </td> <td id='score1" + i + "'" + "> </td>";
            table.appendChild(tr1);
            document.querySelector("#number" + i).innerHTML = i + 1;
            document.querySelector("#firstName1" + i).innerHTML = arrOfUsers[i].user.split(",")[0];
            document.querySelector("#lastName1" + i).innerHTML = arrOfUsers[i].user.split(",")[1];
            document.querySelector("#email1" + i).innerHTML = arrOfUsers[i].user.split(",")[2];
            document.querySelector("#score1" + i).innerHTML = arrOfUsers[i].user.split(",")[3];
        }
    };

    /* КОЛИЧЕСТВО ИГРОКОВ */
    const countUsers = () => {
        countOfUsers = 0;
        for (let i = 0; i < localStorage.length; i++) {
            let buffer = localStorage.getItem("userGame" + i);
            if (buffer) {
                countOfUsers++;
            }
        }
    };

    /* ПРОВЕРКА НА ВАЛИДНУЮ ПОЧТУ */
    const validateEmail = (email) => {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    /* ЗАПИСЬ ПОЛЬЗОВАТЕЛЯ В LocalStorage */
    const saveUserToLS = () => {
        countUsers();
        localStorage.setItem('userGame' + countOfUsers, [document.querySelector("#firstName").value,
            document.querySelector("#lastName").value, document.querySelector("#email").value,
            currentResult
        ]);
    };

    /* РЕГУЛИРОВКА ГРОМКОСТИ */
    (() => {
        let bgMusic = document.querySelector("#bg-music");
        let castEffects = document.querySelector("#cast-effects");
        let castEffects2 = document.querySelector("#cast-effects-2");
        bgMusic.volume = 0.05; //0.05
        castEffects.volume = 0.1; //0.05
        castEffects2.volume = 0.1; //0.05
    })();

    /* ЗАПУСК МУЗЫКИ МЕНЮ*/
    const runMenuMusic = () => {
        $('#bg-music source').attr("src", "assets/audio/bg-music.mp3");
        $('#bg-music').load();
    };

    /* ЗАПУСК МУЗЫКИ ИГРЫ(БИТВЫ)*/
    const runGameMusic = () => {
        $('#bg-music source').attr("src", "assets/audio/bg-music-game.mp3");
        $('#bg-music').load();
    };

    /* СОРТИРОВКА РЕКОРДОВ ПО ОЧКАМ */
    const compareScore = (userA, userB) => {
        return userB.score - userA.score;
    }

    /* ПЕРЕМЕШАТЬ ЭЛЕМЕНТЫ МАССИВА */
    const compareRandom = (a, b) => {
        return Math.random() - 0.5;
    }
})();