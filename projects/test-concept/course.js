// Позиционируем окно с курсом на весь экран
window.moveTo(0, 0);
window.resizeTo(screen.availWidth, screen.availHeight);


// Тест
const answer1 = document.querySelectorAll('.answer-1'),
    answer2 = document.querySelectorAll('.answer-2'),
    answer3 = document.querySelectorAll('.answer-3'),
    answer4 = document.querySelectorAll('.answer-4'),
    answer5 = document.querySelectorAll('.answer-5'),
    answer6 = document.querySelectorAll('.answer-6'),
    answer7 = document.querySelectorAll('.answer-7'),
    answer8 = document.querySelectorAll('.answer-8'),
    answer9 = document.querySelectorAll('.answer-9'),
    answer10 = document.querySelectorAll('.answer-10'),
    answer11 = document.querySelectorAll('.answer-11'),
    answer12 = document.querySelectorAll('.answer-12'),
    answer13 = document.querySelectorAll('.answer-13'),
    answer14 = document.querySelectorAll('.answer-14'),
    answer15 = document.querySelectorAll('.answer-15'),
    answer16 = document.querySelectorAll('.answer-16'),
    answer17 = document.querySelectorAll('.answer-17'),
    answer18 = document.querySelectorAll('.answer-18'),
    answer19 = document.querySelectorAll('.answer-19'),
    answer20 = document.querySelectorAll('.answer-20'),
    answer21 = document.querySelectorAll('.answer-21'),
    answer22 = document.querySelectorAll('.answer-22'),
    answer23 = document.querySelectorAll('.answer-23'),
    answer24 = document.querySelectorAll('.answer-24'),
    answer25 = document.querySelectorAll('.answer-25'),
    answer26 = document.querySelectorAll('.answer-26'),
    answer27 = document.querySelectorAll('.answer-27'),
    answer28 = document.querySelectorAll('.answer-28'),
    answer29 = document.querySelectorAll('.answer-29'),
    answer30 = document.querySelectorAll('.answer-30'),
    answer31 = document.querySelectorAll('.answer-31'),
    answer32 = document.querySelectorAll('.answer-32'),
    answer33 = document.querySelectorAll('.answer-33'),
    answer34 = document.querySelectorAll('.answer-34'),
    answer35 = document.querySelectorAll('.answer-35'),
    answer36 = document.querySelectorAll('.answer-36'),
    answer37 = document.querySelectorAll('.answer-37'),
    answer38 = document.querySelectorAll('.answer-38'),
    answer39 = document.querySelectorAll('.answer-39'),
    answer40 = document.querySelectorAll('.answer-40'),
    answer41 = document.querySelectorAll('.answer-41'),
    answer42 = document.querySelectorAll('.answer-42'),
    btnCheckAnswer = document.querySelectorAll('.btn-check-answer'),
    WrightAnswers = document.querySelectorAll('.answer-wright'),
    WrongAnswers = document.querySelectorAll('.answer-wrong');

// Тесты
const BtnModule1Result = document.getElementById('module-1__results'),
    BtnModule2Result = document.getElementById('module-2__results'),
    BtnModule3Result = document.getElementById('module-3__results'),
    BtnModule4Result = document.getElementById('module-4__results'),
    final1Wrapper = document.querySelector('.final-1-wrapper'),
    final1 = document.querySelector('.final-1'),
    final2Wrapper = document.querySelector('.final-2-wrapper'),
    final2 = document.querySelector('.final-2'),
    final3Wrapper = document.querySelector('.final-3-wrapper'),
    final3 = document.querySelector('.final-3'),
    final4Wrapper = document.querySelector('.final-4-wrapper'),
    final4 = document.querySelector('.final-4'),
    steps = document.querySelectorAll('.step'),
    stepsValue = document.querySelectorAll('.step-value');

function CheckAnswer1() {

    if ($("input.wright_1").is(':checked')) {

        for (let i = 0; i < answer1.length; i++) {
            answer1[i].classList.add('disabled');
        };

        steps[0].classList.add('step-wright');
        stepsValue[0].classList.add('step-value-wright');

        btnCheckAnswer[0].classList.add('disabled');
        WrightAnswers[0].classList.add('color-green-100');

        WrongAnswers[0].classList.add('color-red-100');
        WrongAnswers[1].classList.add('color-red-100');

        scoreM1 += 1;
        WrightQuestionCount_m1 += 1;
        return;

    } else if ($("input.wrong_1").is(':checked')) {

        for (let i = 0; i < answer1.length; i++) {
            answer1[i].classList.add('disabled');
        }

        steps[0].classList.add('step-wrong');
        stepsValue[0].classList.add('step-value-wrong');

        btnCheckAnswer[0].classList.add('disabled');
        WrightAnswers[0].classList.add('color-green-100');

        WrongAnswers[0].classList.add('color-red-100');
        WrongAnswers[1].classList.add('color-red-100');


        scoreM1 += 1;
        return;
    } else {
        $('.toast-choose-answer').toast('show');
    };

};

function CheckAnswer2() {

    if ($("input.wright_2").is(':checked')) {

        for (let i = 0; i < answer2.length; i++) {
            answer2[i].classList.add('disabled');
        };

        steps[1].classList.add('step-wright');
        stepsValue[1].classList.add('step-value-wright');

        btnCheckAnswer[1].classList.add('disabled');
        WrightAnswers[1].classList.add('color-green-100');

        WrongAnswers[2].classList.add('color-red-100');
        WrongAnswers[3].classList.add('color-red-100');


        scoreM1 += 1;
        WrightQuestionCount_m1 += 1;
        return;

    } else if ($("input.wrong_2").is(':checked')) {

        for (let i = 0; i < answer2.length; i++) {
            answer2[i].classList.add('disabled');
        }

        steps[1].classList.add('step-wrong');
        stepsValue[1].classList.add('step-value-wrong');

        btnCheckAnswer[1].classList.add('disabled');
        WrightAnswers[1].classList.add('color-green-100');

        WrongAnswers[2].classList.add('color-red-100');
        WrongAnswers[3].classList.add('color-red-100');


        scoreM1 += 1;
        return;
    } else {
        $('.toast-choose-answer').toast('show');
    };

};

function CheckAnswer3() {
    let counts = $("input.wright_3:checked").length;

    if ($("input.wrong_3").is(':checked')) {

        for (let i = 0; i < answer3.length; i++) {
            answer3[i].classList.add('disabled');
        }

        steps[2].classList.add('step-wrong');
        stepsValue[2].classList.add('step-value-wrong');

        btnCheckAnswer[2].classList.add('disabled');

        WrightAnswers[2].classList.add('color-green-100');
        WrightAnswers[3].classList.add('color-green-100');
        WrightAnswers[4].classList.add('color-green-100');
        WrongAnswers[4].classList.add('color-red-100');
        WrongAnswers[5].classList.add('color-red-100');

        scoreM1 += 1;
        return;
    } else if (counts == 3) {

        for (let i = 0; i < answer3.length; i++) {
            answer3[i].classList.add('disabled');
        }

        steps[2].classList.add('step-wright');
        stepsValue[2].classList.add('step-value-wright');

        btnCheckAnswer[2].classList.add('disabled');


        WrightAnswers[2].classList.add('color-green-100');
        WrightAnswers[3].classList.add('color-green-100');
        WrightAnswers[4].classList.add('color-green-100');
        WrongAnswers[4].classList.add('color-red-100');
        WrongAnswers[5].classList.add('color-red-100');

        scoreM1 += 1;
        WrightQuestionCount_m1 += 1;
        return;
    } else if (counts > 0 && counts < 3) {

        for (let i = 0; i < answer3.length; i++) {
            answer3[i].classList.add('disabled');
        }

        btnCheckAnswer[2].classList.add('disabled');

        WrightAnswers[2].classList.add('color-green-100');
        WrightAnswers[3].classList.add('color-green-100');
        WrightAnswers[4].classList.add('color-green-100');
        WrongAnswers[4].classList.add('color-red-100');
        WrongAnswers[5].classList.add('color-red-100');

        steps[2].classList.add('step-wrong');
        stepsValue[2].classList.add('step-value-wrong');

        scoreM1 += 1;
        return;
    } else {

        $('.toast-choose-answer').toast('show');
    }


}

function CheckAnswer4() {

    if ($("input.wright_4").is(':checked')) {

        for (let i = 0; i < answer4.length; i++) {
            answer4[i].classList.add('disabled');
        };

        steps[3].classList.add('step-wright');
        stepsValue[3].classList.add('step-value-wright');

        btnCheckAnswer[3].classList.add('disabled');
        WrightAnswers[5].classList.add('color-green-100');

        WrongAnswers[6].classList.add('color-red-100');
        WrongAnswers[7].classList.add('color-red-100');
        WrongAnswers[8].classList.add('color-red-100');

        scoreM1 += 1;
        WrightQuestionCount_m1 += 1;
        return;

    } else if ($("input.wrong_4").is(':checked')) {

        for (let i = 0; i < answer4.length; i++) {
            answer4[i].classList.add('disabled');
        }

        steps[3].classList.add('step-wrong');
        stepsValue[3].classList.add('step-value-wrong');


        btnCheckAnswer[3].classList.add('disabled');
        WrightAnswers[5].classList.add('color-green-100');

        WrongAnswers[6].classList.add('color-red-100');
        WrongAnswers[7].classList.add('color-red-100');
        WrongAnswers[8].classList.add('color-red-100');


        scoreM1 += 1;
        return;
    } else {
        $('.toast-choose-answer').toast('show');
    };

};

function CheckAnswer5() {

    if ($("input.wright_5").is(':checked')) {

        for (let i = 0; i < answer5.length; i++) {
            answer5[i].classList.add('disabled');
        };

        steps[4].classList.add('step-wright');
        stepsValue[4].classList.add('step-value-wright');

        btnCheckAnswer[4].classList.add('disabled');
        WrightAnswers[6].classList.add('color-green-100');

        WrongAnswers[9].classList.add('color-red-100');
        WrongAnswers[10].classList.add('color-red-100');
        WrongAnswers[11].classList.add('color-red-100');

        scoreM1 += 1;
        WrightQuestionCount_m1 += 1;
        return;

    } else if ($("input.wrong_5").is(':checked')) {

        for (let i = 0; i < answer5.length; i++) {
            answer5[i].classList.add('disabled');
        }

        steps[4].classList.add('step-wrong');
        stepsValue[4].classList.add('step-value-wrong');

        btnCheckAnswer[4].classList.add('disabled');
        WrightAnswers[6].classList.add('color-green-100');

        WrongAnswers[9].classList.add('color-red-100');
        WrongAnswers[10].classList.add('color-red-100');
        WrongAnswers[11].classList.add('color-red-100');


        scoreM1 += 1;
        return;
    } else {
        $('.toast-choose-answer').toast('show');
    };

};

function CheckAnswer6() {

    if ($("input.wright_6").is(':checked')) {

        for (let i = 0; i < answer6.length; i++) {
            answer6[i].classList.add('disabled');
        };

        steps[5].classList.add('step-wright');
        stepsValue[5].classList.add('step-value-wright');

        btnCheckAnswer[5].classList.add('disabled');
        WrightAnswers[7].classList.add('color-green-100');

        WrongAnswers[12].classList.add('color-red-100');
        WrongAnswers[13].classList.add('color-red-100');
        WrongAnswers[14].classList.add('color-red-100');

        scoreM1 += 1;
        WrightQuestionCount_m1 += 1;
        return;

    } else if ($("input.wrong_6").is(':checked')) {

        for (let i = 0; i < answer6.length; i++) {
            answer6[i].classList.add('disabled');
        }

        steps[5].classList.add('step-wrong');
        stepsValue[5].classList.add('step-value-wrong');

        btnCheckAnswer[5].classList.add('disabled');
        WrightAnswers[7].classList.add('color-green-100');

        WrongAnswers[12].classList.add('color-red-100');
        WrongAnswers[13].classList.add('color-red-100');
        WrongAnswers[14].classList.add('color-red-100');

        scoreM1 += 1;
        return;
    } else {
        $('.toast-choose-answer').toast('show');
    };

};

function CheckAnswer7() {
    let counts = $("input.wright_7:checked").length;

    if ($("input.wrong_7").is(':checked')) {

        for (let i = 0; i < answer7.length; i++) {
            answer7[i].classList.add('disabled');
        }

        steps[6].classList.add('step-wrong');
        stepsValue[6].classList.add('step-value-wrong');

        btnCheckAnswer[6].classList.add('disabled');

        WrightAnswers[8].classList.add('color-green-100');
        WrightAnswers[9].classList.add('color-green-100');

        WrongAnswers[15].classList.add('color-red-100');

        scoreM1 += 1;
        return;
    } else if (counts == 2) {

        for (let i = 0; i < answer7.length; i++) {
            answer7[i].classList.add('disabled');
        }

        steps[6].classList.add('step-wright');
        stepsValue[6].classList.add('step-value-wright');

        btnCheckAnswer[6].classList.add('disabled');


        WrightAnswers[8].classList.add('color-green-100');
        WrightAnswers[9].classList.add('color-green-100');

        WrongAnswers[15].classList.add('color-red-100');

        scoreM1 += 1;
        WrightQuestionCount_m1 += 1;
        return;
    } else if (counts > 0 && counts < 2) {

        for (let i = 0; i < answer7.length; i++) {
            answer7[i].classList.add('disabled');
        }

        steps[6].classList.add('step-wrong');
        stepsValue[6].classList.add('step-value-wrong');

        btnCheckAnswer[6].classList.add('disabled');

        WrightAnswers[8].classList.add('color-green-100');
        WrightAnswers[9].classList.add('color-green-100');

        WrongAnswers[15].classList.add('color-red-100');


        scoreM1 += 1;
        return;
    } else {

        $('.toast-choose-answer').toast('show');
    }


};

function CheckAnswer8() {

    if ($("input.wright_8").is(':checked')) {

        for (let i = 0; i < answer8.length; i++) {
            answer8[i].classList.add('disabled');
        };

        steps[7].classList.add('step-wright');
        stepsValue[7].classList.add('step-value-wright');

        btnCheckAnswer[7].classList.add('disabled');
        WrightAnswers[10].classList.add('color-green-100');
        WrongAnswers[16].classList.add('color-red-100');
        WrongAnswers[17].classList.add('color-red-100');

        scoreM1 += 1;
        WrightQuestionCount_m1 += 1;
        return;

    } else if ($("input.wrong_8").is(':checked')) {

        for (let i = 0; i < answer8.length; i++) {
            answer8[i].classList.add('disabled');
        }

        steps[7].classList.add('step-wrong');
        stepsValue[7].classList.add('step-value-wrong');

        btnCheckAnswer[7].classList.add('disabled');
        WrightAnswers[10].classList.add('color-green-100');
        WrongAnswers[16].classList.add('color-red-100');
        WrongAnswers[17].classList.add('color-red-100');

        scoreM1 += 1;
        return;
    } else {
        $('.toast-choose-answer').toast('show');
    };

};

function CheckAnswer9() {
    let counts = $("input.wright_9:checked").length;

    if ($("input.wrong_9").is(':checked')) {

        for (let i = 0; i < answer9.length; i++) {
            answer9[i].classList.add('disabled');
        }

        steps[8].classList.add('step-wrong');
        stepsValue[8].classList.add('step-value-wrong');

        btnCheckAnswer[8].classList.add('disabled');

        WrightAnswers[11].classList.add('color-green-100');
        WrightAnswers[12].classList.add('color-green-100');
        WrightAnswers[13].classList.add('color-green-100');
        WrightAnswers[14].classList.add('color-green-100');

        WrongAnswers[18].classList.add('color-red-100');

        scoreM1 += 1;
        return;
    } else if (counts == 4) {

        for (let i = 0; i < answer9.length; i++) {
            answer9[i].classList.add('disabled');
        }

        steps[8].classList.add('step-wright');
        stepsValue[8].classList.add('step-value-wright');


        btnCheckAnswer[8].classList.add('disabled');

        WrightAnswers[11].classList.add('color-green-100');
        WrightAnswers[12].classList.add('color-green-100');
        WrightAnswers[13].classList.add('color-green-100');
        WrightAnswers[14].classList.add('color-green-100');

        WrongAnswers[18].classList.add('color-red-100');

        scoreM1 += 1;
        WrightQuestionCount_m1 += 1;
        return;
    } else if (counts > 0 && counts < 4) {

        for (let i = 0; i < answer9.length; i++) {
            answer9[i].classList.add('disabled');
        }

        steps[8].classList.add('step-wrong');
        stepsValue[8].classList.add('step-value-wrong');

        btnCheckAnswer[8].classList.add('disabled');

        WrightAnswers[11].classList.add('color-green-100');
        WrightAnswers[12].classList.add('color-green-100');
        WrightAnswers[13].classList.add('color-green-100');
        WrightAnswers[14].classList.add('color-green-100');

        WrongAnswers[18].classList.add('color-red-100');

        scoreM1 += 1;
        return;
    } else {

        $('.toast-choose-answer').toast('show');
    }


}

function CheckAnswer10() {

    if ($("input.wright_10").is(':checked')) {

        for (let i = 0; i < answer10.length; i++) {
            answer10[i].classList.add('disabled');
        };

        steps[9].classList.add('step-wright');
        stepsValue[9].classList.add('step-value-wright');

        btnCheckAnswer[9].classList.add('disabled');
        WrightAnswers[15].classList.add('color-green-100');
        WrongAnswers[19].classList.add('color-red-100');
        WrongAnswers[20].classList.add('color-red-100');
        WrongAnswers[21].classList.add('color-red-100');

        scoreM1 += 1;
        WrightQuestionCount_m1 += 1;
        return;

    } else if ($("input.wrong_10").is(':checked')) {

        for (let i = 0; i < answer10.length; i++) {
            answer10[i].classList.add('disabled');
        };

        steps[9].classList.add('step-wrong');
        stepsValue[9].classList.add('step-value-wrong');

        btnCheckAnswer[9].classList.add('disabled');
        WrightAnswers[15].classList.add('color-green-100');
        WrongAnswers[19].classList.add('color-red-100');
        WrongAnswers[20].classList.add('color-red-100');
        WrongAnswers[21].classList.add('color-red-100');

        scoreM1 += 1;
        return;
    } else {
        $('.toast-choose-answer').toast('show');
    };

};

function CheckAnswer11() {
    let counts = $("input.wright_11:checked").length;

    if ($("input.wrong_11").is(':checked')) {

        for (let i = 0; i < answer11.length; i++) {
            answer11[i].classList.add('disabled');
        }

        steps[11].classList.add('step-wrong');
        stepsValue[11].classList.add('step-value-wrong');

        btnCheckAnswer[10].classList.add('disabled');

        WrightAnswers[16].classList.add('color-green-100');
        WrightAnswers[17].classList.add('color-green-100');
        WrightAnswers[18].classList.add('color-green-100');

        WrongAnswers[22].classList.add('color-red-100');
        WrongAnswers[23].classList.add('color-red-100');

        scoreM2 += 1;
        return;
    } else if (counts == 3) {

        for (let i = 0; i < answer11.length; i++) {
            answer11[i].classList.add('disabled');
        }

        steps[11].classList.add('step-wright');
        stepsValue[11].classList.add('step-value-wright');

        btnCheckAnswer[10].classList.add('disabled');

        WrightAnswers[16].classList.add('color-green-100');
        WrightAnswers[17].classList.add('color-green-100');
        WrightAnswers[18].classList.add('color-green-100');

        WrongAnswers[22].classList.add('color-red-100');
        WrongAnswers[23].classList.add('color-red-100');

        scoreM2 += 1;
        WrightQuestionCount_m2 += 1;
        return;
    } else if (counts > 0 && counts < 3) {

        for (let i = 0; i < answer11.length; i++) {
            answer11[i].classList.add('disabled');
        }

        steps[11].classList.add('step-wrong');
        stepsValue[11].classList.add('step-value-wrong');

        btnCheckAnswer[10].classList.add('disabled');

        WrightAnswers[16].classList.add('color-green-100');
        WrightAnswers[17].classList.add('color-green-100');
        WrightAnswers[18].classList.add('color-green-100');

        WrongAnswers[22].classList.add('color-red-100');
        WrongAnswers[23].classList.add('color-red-100');


        scoreM2 += 1;
        return;
    } else {

        $('.toast-choose-answer').toast('show');
    }


};


function CheckAnswer12() {

    if ($("input.wright_12").is(':checked')) {

        for (let i = 0; i < answer12.length; i++) {
            answer12[i].classList.add('disabled');
        };

        steps[12].classList.add('step-wright');
        stepsValue[12].classList.add('step-value-wright');

        btnCheckAnswer[11].classList.add('disabled');

        WrightAnswers[19].classList.add('color-green-100');
        WrongAnswers[24].classList.add('color-red-100');
        WrongAnswers[25].classList.add('color-red-100');
        WrongAnswers[26].classList.add('color-red-100');

        scoreM2 += 1;
        WrightQuestionCount_m2 += 1;
        return;

    } else if ($("input.wrong_12").is(':checked')) {

        for (let i = 0; i < answer12.length; i++) {
            answer12[i].classList.add('disabled');
        };
        steps[12].classList.add('step-wrong');
        stepsValue[12].classList.add('step-value-wrong');

        btnCheckAnswer[11].classList.add('disabled');

        WrightAnswers[19].classList.add('color-green-100');
        WrongAnswers[24].classList.add('color-red-100');
        WrongAnswers[25].classList.add('color-red-100');
        WrongAnswers[26].classList.add('color-red-100');

        scoreM2 += 1;
        return;
    } else {
        $('.toast-choose-answer').toast('show');
    };

};


function CheckAnswer13() {
    let counts = $("input.wright_13:checked").length;

    if ($("input.wrong_13").is(':checked')) {


        for (let i = 0; i < answer13.length; i++) {
            answer13[i].classList.add('disabled');
        }

        steps[13].classList.add('step-wrong');
        stepsValue[13].classList.add('step-value-wrong');

        btnCheckAnswer[12].classList.add('disabled');

        WrightAnswers[20].classList.add('color-green-100');
        WrightAnswers[21].classList.add('color-green-100');
        WrightAnswers[22].classList.add('color-green-100');
        WrightAnswers[23].classList.add('color-green-100');

        WrongAnswers[27].classList.add('color-red-100');
        WrongAnswers[28].classList.add('color-red-100');
        WrongAnswers[29].classList.add('color-red-100');

        scoreM2 += 1;
        return;
    } else if (counts == 4) {


        for (let i = 0; i < answer13.length; i++) {
            answer13[i].classList.add('disabled');
        }
        steps[13].classList.add('step-wright');
        stepsValue[13].classList.add('step-value-wright');

        btnCheckAnswer[12].classList.add('disabled');

        WrightAnswers[20].classList.add('color-green-100');
        WrightAnswers[21].classList.add('color-green-100');
        WrightAnswers[22].classList.add('color-green-100');
        WrightAnswers[23].classList.add('color-green-100');

        WrongAnswers[27].classList.add('color-red-100');
        WrongAnswers[28].classList.add('color-red-100');
        WrongAnswers[29].classList.add('color-red-100');

        scoreM2 += 1;
        WrightQuestionCount_m2 += 1;
        return;
    } else if (counts > 0 && counts < 4) {

        for (let i = 0; i < answer13.length; i++) {
            answer13[i].classList.add('disabled');
        }


        steps[13].classList.add('step-wrong');
        stepsValue[13].classList.add('step-value-wrong');

        btnCheckAnswer[12].classList.add('disabled');

        WrightAnswers[20].classList.add('color-green-100');
        WrightAnswers[21].classList.add('color-green-100');
        WrightAnswers[22].classList.add('color-green-100');
        WrightAnswers[23].classList.add('color-green-100');

        WrongAnswers[27].classList.add('color-red-100');
        WrongAnswers[28].classList.add('color-red-100');
        WrongAnswers[29].classList.add('color-red-100');


        scoreM2 += 1;
        return;
    } else {

        $('.toast-choose-answer').toast('show');
    }


};

function CheckAnswer14() {

    if ($("input.wright_14").is(':checked')) {

        for (let i = 0; i < answer14.length; i++) {
            answer14[i].classList.add('disabled');
        };

        steps[14].classList.add('step-wright');
        stepsValue[14].classList.add('step-value-wright');

        btnCheckAnswer[13].classList.add('disabled');

        WrightAnswers[24].classList.add('color-green-100');

        WrongAnswers[30].classList.add('color-red-100');
        WrongAnswers[31].classList.add('color-red-100');
        WrongAnswers[32].classList.add('color-red-100');
        WrongAnswers[33].classList.add('color-red-100');

        scoreM2 += 1;
        WrightQuestionCount_m2 += 1;
        return;

    } else if ($("input.wrong_14").is(':checked')) {

        for (let i = 0; i < answer14.length; i++) {
            answer14[i].classList.add('disabled');
        };

        steps[14].classList.add('step-wrong');
        stepsValue[14].classList.add('step-value-wrong');

        btnCheckAnswer[13].classList.add('disabled');

        WrightAnswers[24].classList.add('color-green-100');

        WrongAnswers[30].classList.add('color-red-100');
        WrongAnswers[31].classList.add('color-red-100');
        WrongAnswers[32].classList.add('color-red-100');
        WrongAnswers[33].classList.add('color-red-100');

        scoreM2 += 1;
        return;
    } else {
        $('.toast-choose-answer').toast('show');
    };

};


function CheckAnswer15() {

    if ($("input.wright_15").is(':checked')) {

        for (let i = 0; i < answer15.length; i++) {
            answer15[i].classList.add('disabled');
        };

        steps[15].classList.add('step-wright');
        stepsValue[15].classList.add('step-value-wright');

        btnCheckAnswer[14].classList.add('disabled');

        WrightAnswers[25].classList.add('color-green-100');

        WrongAnswers[34].classList.add('color-red-100');
        WrongAnswers[35].classList.add('color-red-100');
        WrongAnswers[36].classList.add('color-red-100');

        scoreM2 += 1;
        WrightQuestionCount_m2 += 1;
        return;

    } else if ($("input.wrong_15").is(':checked')) {

        for (let i = 0; i < answer15.length; i++) {
            answer15[i].classList.add('disabled');
        };

        steps[15].classList.add('step-wrong');
        stepsValue[15].classList.add('step-value-wrong');

        btnCheckAnswer[14].classList.add('disabled');

        WrightAnswers[25].classList.add('color-green-100');

        WrongAnswers[34].classList.add('color-red-100');
        WrongAnswers[35].classList.add('color-red-100');
        WrongAnswers[36].classList.add('color-red-100');

        scoreM2 += 1;
        return;
    } else {
        $('.toast-choose-answer').toast('show');
    };

};

function CheckAnswer16() {
    let counts = $("input.wright_16:checked").length;

    if ($("input.wrong_16").is(':checked')) {

        for (let i = 0; i < answer16.length; i++) {
            answer16[i].classList.add('disabled');
        }

        steps[16].classList.add('step-wrong');
        stepsValue[16].classList.add('step-value-wrong');

        btnCheckAnswer[15].classList.add('disabled');

        WrightAnswers[26].classList.add('color-green-100');
        WrightAnswers[27].classList.add('color-green-100');
        WrightAnswers[28].classList.add('color-green-100');
        WrightAnswers[29].classList.add('color-green-100');

        WrongAnswers[37].classList.add('color-red-100');
        WrongAnswers[38].classList.add('color-red-100');

        scoreM2 += 1;
        return;

    } else if (counts == 4) {

        for (let i = 0; i < answer16.length; i++) {
            answer16[i].classList.add('disabled');
        }

        steps[16].classList.add('step-wright');
        stepsValue[16].classList.add('step-value-wright');

        btnCheckAnswer[15].classList.add('disabled');

        WrightAnswers[26].classList.add('color-green-100');
        WrightAnswers[27].classList.add('color-green-100');
        WrightAnswers[28].classList.add('color-green-100');
        WrightAnswers[29].classList.add('color-green-100');

        WrongAnswers[37].classList.add('color-red-100');
        WrongAnswers[38].classList.add('color-red-100');

        scoreM2 += 1;
        WrightQuestionCount_m2 += 1;
        return;
    } else if (counts > 0 && counts < 4) {

        for (let i = 0; i < answer16.length; i++) {
            answer16[i].classList.add('disabled');
        }

        steps[16].classList.add('step-wrong');
        stepsValue[16].classList.add('step-value-wrong');

        btnCheckAnswer[15].classList.add('disabled');

        WrightAnswers[26].classList.add('color-green-100');
        WrightAnswers[27].classList.add('color-green-100');
        WrightAnswers[28].classList.add('color-green-100');
        WrightAnswers[29].classList.add('color-green-100');

        WrongAnswers[37].classList.add('color-red-100');
        WrongAnswers[38].classList.add('color-red-100');


        scoreM2 += 1;
        return;
    } else {

        $('.toast-choose-answer').toast('show');
    }


};

function CheckAnswer17() {
    let counts = $("input.wright_17:checked").length;

    if ($("input.wrong_17").is(':checked')) {

        for (let i = 0; i < answer17.length; i++) {
            answer17[i].classList.add('disabled');
        }

        steps[17].classList.add('step-wrong');
        stepsValue[17].classList.add('step-value-wrong');

        btnCheckAnswer[16].classList.add('disabled');

        WrightAnswers[30].classList.add('color-green-100');
        WrightAnswers[31].classList.add('color-green-100');

        WrongAnswers[39].classList.add('color-red-100');
        WrongAnswers[40].classList.add('color-red-100');
        WrongAnswers[41].classList.add('color-red-100');

        scoreM2 += 1;
        return;

    } else if (counts == 2) {

        for (let i = 0; i < answer17.length; i++) {
            answer17[i].classList.add('disabled');
        }

        steps[17].classList.add('step-wright');
        stepsValue[17].classList.add('step-value-wright');

        btnCheckAnswer[16].classList.add('disabled');

        WrightAnswers[30].classList.add('color-green-100');
        WrightAnswers[31].classList.add('color-green-100');

        WrongAnswers[39].classList.add('color-red-100');
        WrongAnswers[40].classList.add('color-red-100');
        WrongAnswers[41].classList.add('color-red-100');

        scoreM2 += 1;
        WrightQuestionCount_m2 += 1;
        return;
    } else if (counts > 0 && counts < 2) {

        for (let i = 0; i < answer17.length; i++) {
            answer17[i].classList.add('disabled');
        }

        steps[17].classList.add('step-wrong');
        stepsValue[17].classList.add('step-value-wrong');

        btnCheckAnswer[16].classList.add('disabled');

        WrightAnswers[30].classList.add('color-green-100');
        WrightAnswers[31].classList.add('color-green-100');

        WrongAnswers[39].classList.add('color-red-100');
        WrongAnswers[40].classList.add('color-red-100');
        WrongAnswers[41].classList.add('color-red-100');

        scoreM2 += 1;
        return;
    } else {

        $('.toast-choose-answer').toast('show');
    }


};


function CheckAnswer18() {

    if ($("input.wright_18").is(':checked')) {

        for (let i = 0; i < answer18.length; i++) {
            answer18[i].classList.add('disabled');
        };

        steps[18].classList.add('step-wright');
        stepsValue[18].classList.add('step-value-wright');

        btnCheckAnswer[17].classList.add('disabled');

        WrightAnswers[32].classList.add('color-green-100');

        WrongAnswers[42].classList.add('color-red-100');
        WrongAnswers[43].classList.add('color-red-100');
        WrongAnswers[44].classList.add('color-red-100');

        scoreM2 += 1;
        WrightQuestionCount_m2 += 1;
        return;

    } else if ($("input.wrong_18").is(':checked')) {

        for (let i = 0; i < answer18.length; i++) {
            answer18[i].classList.add('disabled');
        };

        steps[18].classList.add('step-wrong');
        stepsValue[18].classList.add('step-value-wrong');

        btnCheckAnswer[17].classList.add('disabled');

        WrightAnswers[32].classList.add('color-green-100');

        WrongAnswers[42].classList.add('color-red-100');
        WrongAnswers[43].classList.add('color-red-100');
        WrongAnswers[44].classList.add('color-red-100');

        scoreM2 += 1;
        return;
    } else {
        $('.toast-choose-answer').toast('show');
    };

};


function CheckAnswer19() {

    if ($("input.wright_19").is(':checked')) {

        for (let i = 0; i < answer19.length; i++) {
            answer19[i].classList.add('disabled');
        };

        steps[19].classList.add('step-wright');
        stepsValue[19].classList.add('step-value-wright');

        btnCheckAnswer[18].classList.add('disabled');

        WrightAnswers[33].classList.add('color-green-100');

        WrongAnswers[45].classList.add('color-red-100');
        WrongAnswers[46].classList.add('color-red-100');
        WrongAnswers[47].classList.add('color-red-100');

        scoreM2 += 1;
        WrightQuestionCount_m2 += 1;
        return;

    } else if ($("input.wrong_19").is(':checked')) {

        for (let i = 0; i < answer19.length; i++) {
            answer19[i].classList.add('disabled');
        };

        steps[19].classList.add('step-wrong');
        stepsValue[19].classList.add('step-value-wrong');

        btnCheckAnswer[18].classList.add('disabled');

        WrightAnswers[33].classList.add('color-green-100');

        WrongAnswers[45].classList.add('color-red-100');
        WrongAnswers[46].classList.add('color-red-100');
        WrongAnswers[47].classList.add('color-red-100');

        scoreM2 += 1;
        return;
    } else {
        $('.toast-choose-answer').toast('show');
    };

};


function CheckAnswer20() {

    if ($("input.wright_20").is(':checked')) {

        for (let i = 0; i < answer20.length; i++) {
            answer20[i].classList.add('disabled');
        };

        steps[20].classList.add('step-wright');
        stepsValue[20].classList.add('step-value-wright');

        btnCheckAnswer[19].classList.add('disabled');

        WrightAnswers[34].classList.add('color-green-100');

        WrongAnswers[48].classList.add('color-red-100');
        WrongAnswers[49].classList.add('color-red-100');
        WrongAnswers[50].classList.add('color-red-100');

        scoreM2 += 1;
        WrightQuestionCount_m2 += 1;
        return;

    } else if ($("input.wrong_20").is(':checked')) {

        for (let i = 0; i < answer20.length; i++) {
            answer20[i].classList.add('disabled');
        };

        steps[20].classList.add('step-wrong');
        stepsValue[20].classList.add('step-value-wrong');

        btnCheckAnswer[19].classList.add('disabled');

        WrightAnswers[34].classList.add('color-green-100');

        WrongAnswers[48].classList.add('color-red-100');
        WrongAnswers[49].classList.add('color-red-100');
        WrongAnswers[50].classList.add('color-red-100');

        scoreM2 += 1;
        return;
    } else {
        $('.toast-choose-answer').toast('show');
    };

};


function CheckAnswer21() {
    let counts = $("input.wright_21:checked").length;

    if ($("input.wrong_21").is(':checked')) {

        for (let i = 0; i < answer21.length; i++) {
            answer21[i].classList.add('disabled');
        }

        steps[22].classList.add('step-wrong');
        stepsValue[22].classList.add('step-value-wrong');

        btnCheckAnswer[20].classList.add('disabled');

        WrightAnswers[35].classList.add('color-green-100');
        WrightAnswers[36].classList.add('color-green-100');
        WrightAnswers[37].classList.add('color-green-100');
        WrightAnswers[38].classList.add('color-green-100');

        WrongAnswers[51].classList.add('color-red-100');

        scoreM3 += 1;
        return;

    } else if (counts == 4) {

        for (let i = 0; i < answer21.length; i++) {
            answer21[i].classList.add('disabled');
        }

        steps[22].classList.add('step-wright');
        stepsValue[22].classList.add('step-value-wright');

        btnCheckAnswer[20].classList.add('disabled');

        WrightAnswers[35].classList.add('color-green-100');
        WrightAnswers[36].classList.add('color-green-100');
        WrightAnswers[37].classList.add('color-green-100');
        WrightAnswers[38].classList.add('color-green-100');

        WrongAnswers[51].classList.add('color-red-100');

        scoreM3 += 1;
        WrightQuestionCount_m3 += 1;
        return;
    } else if (counts > 0 && counts < 4) {

        for (let i = 0; i < answer21.length; i++) {
            answer21[i].classList.add('disabled');
        }

        steps[22].classList.add('step-wrong');
        stepsValue[22].classList.add('step-value-wrong');

        btnCheckAnswer[20].classList.add('disabled');

        WrightAnswers[35].classList.add('color-green-100');
        WrightAnswers[36].classList.add('color-green-100');
        WrightAnswers[37].classList.add('color-green-100');
        WrightAnswers[38].classList.add('color-green-100');

        WrongAnswers[51].classList.add('color-red-100');
        scoreM3 += 1;
        return;
    } else {

        $('.toast-choose-answer').toast('show');
    }


};

function CheckAnswer22() {

    if ($("input.wright_22").is(':checked')) {

        for (let i = 0; i < answer22.length; i++) {
            answer22[i].classList.add('disabled');
        };

        steps[23].classList.add('step-wright');
        stepsValue[23].classList.add('step-value-wright');

        btnCheckAnswer[21].classList.add('disabled');

        WrightAnswers[39].classList.add('color-green-100');

        WrongAnswers[52].classList.add('color-red-100');
        WrongAnswers[53].classList.add('color-red-100');
        WrongAnswers[54].classList.add('color-red-100');
        scoreM3 += 1;
        WrightQuestionCount_m3 += 1;
        return;

    } else if ($("input.wrong_22").is(':checked')) {

        for (let i = 0; i < answer22.length; i++) {
            answer22[i].classList.add('disabled');
        };

        steps[23].classList.add('step-wrong');
        stepsValue[23].classList.add('step-value-wrong');

        btnCheckAnswer[21].classList.add('disabled');

        WrightAnswers[39].classList.add('color-green-100');

        WrongAnswers[52].classList.add('color-red-100');
        WrongAnswers[53].classList.add('color-red-100');
        WrongAnswers[54].classList.add('color-red-100');
        scoreM3 += 1;
        return;
    } else {
        $('.toast-choose-answer').toast('show');
    };

};

function CheckAnswer23() {
    let counts = $("input.wright_23:checked").length;

    if ($("input.wrong_23").is(':checked')) {

        for (let i = 0; i < answer23.length; i++) {
            answer23[i].classList.add('disabled');
        }

        steps[24].classList.add('step-wrong');
        stepsValue[24].classList.add('step-value-wrong');

        btnCheckAnswer[22].classList.add('disabled');

        WrightAnswers[40].classList.add('color-green-100');
        WrightAnswers[41].classList.add('color-green-100');

        WrongAnswers[55].classList.add('color-red-100');
        WrongAnswers[56].classList.add('color-red-100');
        scoreM3 += 1;
        return;

    } else if (counts == 2) {

        for (let i = 0; i < answer23.length; i++) {
            answer23[i].classList.add('disabled');
        }

        steps[24].classList.add('step-wright');
        stepsValue[24].classList.add('step-value-wright');

        btnCheckAnswer[22].classList.add('disabled');

        WrightAnswers[40].classList.add('color-green-100');
        WrightAnswers[41].classList.add('color-green-100');

        WrongAnswers[55].classList.add('color-red-100');
        WrongAnswers[56].classList.add('color-red-100');
        scoreM3 += 1;
        WrightQuestionCount_m3 += 1;
        return;
    } else if (counts > 0 && counts < 2) {

        for (let i = 0; i < answer23.length; i++) {
            answer23[i].classList.add('disabled');
        }

        steps[24].classList.add('step-wrong');
        stepsValue[24].classList.add('step-value-wrong');

        btnCheckAnswer[22].classList.add('disabled');

        WrightAnswers[40].classList.add('color-green-100');
        WrightAnswers[41].classList.add('color-green-100');

        WrongAnswers[55].classList.add('color-red-100');
        WrongAnswers[56].classList.add('color-red-100');
        scoreM3 += 1;
        return;
    } else {

        $('.toast-choose-answer').toast('show');
    }


};


function CheckAnswer24() {

    if ($("input.wright_24").is(':checked')) {

        for (let i = 0; i < answer24.length; i++) {
            answer24[i].classList.add('disabled');
        };

        steps[25].classList.add('step-wright');
        stepsValue[25].classList.add('step-value-wright');

        btnCheckAnswer[23].classList.add('disabled');

        WrightAnswers[42].classList.add('color-green-100');

        WrongAnswers[57].classList.add('color-red-100');
        WrongAnswers[58].classList.add('color-red-100');
        WrongAnswers[59].classList.add('color-red-100');
        scoreM3 += 1;
        WrightQuestionCount_m3 += 1;
        return;

    } else if ($("input.wrong_24").is(':checked')) {

        for (let i = 0; i < answer24.length; i++) {
            answer24[i].classList.add('disabled');
        };

        steps[25].classList.add('step-wrong');
        stepsValue[25].classList.add('step-value-wrong');

        btnCheckAnswer[23].classList.add('disabled');

        WrightAnswers[42].classList.add('color-green-100');

        WrongAnswers[57].classList.add('color-red-100');
        WrongAnswers[58].classList.add('color-red-100');
        WrongAnswers[59].classList.add('color-red-100');
        scoreM3 += 1;
        return;
    } else {
        $('.toast-choose-answer').toast('show');
    };

};


function CheckAnswer25() {
    let counts = $("input.wright_25:checked").length;

    if ($("input.wrong_25").is(':checked')) {

        for (let i = 0; i < answer25.length; i++) {
            answer25[i].classList.add('disabled');
        }

        steps[26].classList.add('step-wrong');
        stepsValue[26].classList.add('step-value-wrong');

        btnCheckAnswer[24].classList.add('disabled');

        WrightAnswers[43].classList.add('color-green-100');
        WrightAnswers[44].classList.add('color-green-100');
        WrightAnswers[45].classList.add('color-green-100');
        WrightAnswers[46].classList.add('color-green-100');

        scoreM3 += 1;
        return;

    } else if (counts == 4) {

        for (let i = 0; i < answer25.length; i++) {
            answer25[i].classList.add('disabled');
        }

        steps[26].classList.add('step-wright');
        stepsValue[26].classList.add('step-value-wright');

        btnCheckAnswer[24].classList.add('disabled');

        WrightAnswers[43].classList.add('color-green-100');
        WrightAnswers[44].classList.add('color-green-100');
        WrightAnswers[45].classList.add('color-green-100');
        WrightAnswers[46].classList.add('color-green-100');

        scoreM3 += 1;
        WrightQuestionCount_m3 += 1;
        return;
    } else if (counts > 0 && counts < 4) {

        for (let i = 0; i < answer25.length; i++) {
            answer25[i].classList.add('disabled');
        }

        steps[26].classList.add('step-wrong');
        stepsValue[26].classList.add('step-value-wrong');

        btnCheckAnswer[24].classList.add('disabled');

        WrightAnswers[43].classList.add('color-green-100');
        WrightAnswers[44].classList.add('color-green-100');
        WrightAnswers[45].classList.add('color-green-100');
        WrightAnswers[46].classList.add('color-green-100');

        scoreM3 += 1;
        return;
    } else {

        $('.toast-choose-answer').toast('show');
    }


};



function CheckAnswer26() {
    let counts = $("input.wright_26:checked").length;

    if ($("input.wrong_26").is(':checked')) {

        for (let i = 0; i < answer26.length; i++) {
            answer26[i].classList.add('disabled');
        }

        steps[27].classList.add('step-wrong');
        stepsValue[27].classList.add('step-value-wrong');

        btnCheckAnswer[25].classList.add('disabled');

        WrightAnswers[47].classList.add('color-green-100');
        WrightAnswers[48].classList.add('color-green-100');
        WrightAnswers[49].classList.add('color-green-100');
        WrightAnswers[50].classList.add('color-green-100');
        WrightAnswers[51].classList.add('color-green-100');

        WrongAnswers[60].classList.add('color-red-100');

        scoreM3 += 1;
        return;

    } else if (counts == 5) {

        for (let i = 0; i < answer26.length; i++) {
            answer26[i].classList.add('disabled');
        }

        steps[27].classList.add('step-wright');
        stepsValue[27].classList.add('step-value-wright');

        btnCheckAnswer[25].classList.add('disabled');

        WrightAnswers[47].classList.add('color-green-100');
        WrightAnswers[48].classList.add('color-green-100');
        WrightAnswers[49].classList.add('color-green-100');
        WrightAnswers[50].classList.add('color-green-100');
        WrightAnswers[51].classList.add('color-green-100');

        WrongAnswers[60].classList.add('color-red-100');

        scoreM3 += 1;
        WrightQuestionCount_m3 += 1;
        return;
    } else if (counts > 0 && counts < 5) {

        for (let i = 0; i < answer26.length; i++) {
            answer26[i].classList.add('disabled');
        }

        steps[27].classList.add('step-wrong');
        stepsValue[27].classList.add('step-value-wrong');

        btnCheckAnswer[25].classList.add('disabled');

        WrightAnswers[47].classList.add('color-green-100');
        WrightAnswers[48].classList.add('color-green-100');
        WrightAnswers[49].classList.add('color-green-100');
        WrightAnswers[50].classList.add('color-green-100');
        WrightAnswers[51].classList.add('color-green-100');

        WrongAnswers[60].classList.add('color-red-100');

        scoreM3 += 1;
        return;
    } else {

        $('.toast-choose-answer').toast('show');
    }


};



function CheckAnswer27() {

    if ($("input.wright_27").is(':checked')) {

        for (let i = 0; i < answer27.length; i++) {
            answer27[i].classList.add('disabled');
        };

        steps[28].classList.add('step-wright');
        stepsValue[28].classList.add('step-value-wright');

        btnCheckAnswer[26].classList.add('disabled');

        WrightAnswers[52].classList.add('color-green-100');

        WrongAnswers[61].classList.add('color-red-100');
        WrongAnswers[62].classList.add('color-red-100');
        WrongAnswers[63].classList.add('color-red-100');
        scoreM3 += 1;
        WrightQuestionCount_m3 += 1;
        return;

    } else if ($("input.wrong_27").is(':checked')) {

        for (let i = 0; i < answer27.length; i++) {
            answer27[i].classList.add('disabled');
        };

        steps[28].classList.add('step-wrong');
        stepsValue[28].classList.add('step-value-wrong');

        btnCheckAnswer[26].classList.add('disabled');

        WrightAnswers[52].classList.add('color-green-100');

        WrongAnswers[61].classList.add('color-red-100');
        WrongAnswers[62].classList.add('color-red-100');
        WrongAnswers[63].classList.add('color-red-100');
        scoreM3 += 1;
        return;
    } else {
        $('.toast-choose-answer').toast('show');
    };

};


function CheckAnswer28() {

    if ($("input.wright_28").is(':checked')) {

        for (let i = 0; i < answer28.length; i++) {
            answer28[i].classList.add('disabled');
        };

        steps[29].classList.add('step-wright');
        stepsValue[29].classList.add('step-value-wright');

        btnCheckAnswer[27].classList.add('disabled');

        WrightAnswers[53].classList.add('color-green-100');

        WrongAnswers[64].classList.add('color-red-100');
        WrongAnswers[65].classList.add('color-red-100');
        WrongAnswers[66].classList.add('color-red-100');
        scoreM3 += 1;
        WrightQuestionCount_m3 += 1;
        return;

    } else if ($("input.wrong_28").is(':checked')) {

        for (let i = 0; i < answer28.length; i++) {
            answer28[i].classList.add('disabled');
        };

        steps[29].classList.add('step-wrong');
        stepsValue[29].classList.add('step-value-wrong');

        btnCheckAnswer[27].classList.add('disabled');

        WrightAnswers[53].classList.add('color-green-100');

        WrongAnswers[64].classList.add('color-red-100');
        WrongAnswers[65].classList.add('color-red-100');
        WrongAnswers[66].classList.add('color-red-100');
        scoreM3 += 1;
        return;
    } else {
        $('.toast-choose-answer').toast('show');
    };

};


function CheckAnswer29() {
    let counts = $("input.wright_29:checked").length;

    if ($("input.wrong_29").is(':checked')) {

        for (let i = 0; i < answer29.length; i++) {
            answer29[i].classList.add('disabled');
        }

        steps[30].classList.add('step-wrong');
        stepsValue[30].classList.add('step-value-wrong');

        btnCheckAnswer[28].classList.add('disabled');

        WrightAnswers[54].classList.add('color-green-100');
        WrightAnswers[55].classList.add('color-green-100');
        WrightAnswers[56].classList.add('color-green-100');

        WrongAnswers[67].classList.add('color-red-100');

        scoreM3 += 1;
        return;

    } else if (counts == 3) {

        for (let i = 0; i < answer29.length; i++) {
            answer29[i].classList.add('disabled');
        }

        steps[30].classList.add('step-wright');
        stepsValue[30].classList.add('step-value-wright');

        btnCheckAnswer[28].classList.add('disabled');

        WrightAnswers[54].classList.add('color-green-100');
        WrightAnswers[55].classList.add('color-green-100');
        WrightAnswers[56].classList.add('color-green-100');

        WrongAnswers[67].classList.add('color-red-100');

        scoreM3 += 1;
        WrightQuestionCount_m3 += 1;
        return;
    } else if (counts > 0 && counts < 3) {

        for (let i = 0; i < answer29.length; i++) {
            answer29[i].classList.add('disabled');
        }

        steps[30].classList.add('step-wrong');
        stepsValue[30].classList.add('step-value-wrong');

        btnCheckAnswer[28].classList.add('disabled');

        WrightAnswers[54].classList.add('color-green-100');
        WrightAnswers[55].classList.add('color-green-100');
        WrightAnswers[56].classList.add('color-green-100');

        WrongAnswers[67].classList.add('color-red-100');
        scoreM3 += 1;
        return;
    } else {

        $('.toast-choose-answer').toast('show');
    }

};


function CheckAnswer30() {

    if ($("input.wright_30").is(':checked')) {

        for (let i = 0; i < answer30.length; i++) {
            answer30[i].classList.add('disabled');
        };

        steps[31].classList.add('step-wright');
        stepsValue[31].classList.add('step-value-wright');

        btnCheckAnswer[29].classList.add('disabled');

        WrightAnswers[57].classList.add('color-green-100');

        WrongAnswers[68].classList.add('color-red-100');
        WrongAnswers[69].classList.add('color-red-100');
        scoreM3 += 1;
        WrightQuestionCount_m3 += 1;
        return;

    } else if ($("input.wrong_30").is(':checked')) {

        for (let i = 0; i < answer30.length; i++) {
            answer30[i].classList.add('disabled');
        };

        steps[31].classList.add('step-wrong');
        stepsValue[31].classList.add('step-value-wrong');

        btnCheckAnswer[29].classList.add('disabled');

        WrightAnswers[57].classList.add('color-green-100');

        WrongAnswers[68].classList.add('color-red-100');
        WrongAnswers[69].classList.add('color-red-100');
        scoreM3 += 1;
        return;
    } else {
        $('.toast-choose-answer').toast('show');
    };

};


function CheckAnswer31() {

    if ($("input.wright_31").is(':checked')) {

        for (let i = 0; i < answer31.length; i++) {
            answer31[i].classList.add('disabled');
        };

        steps[33].classList.add('step-wright');
        stepsValue[33].classList.add('step-value-wright');

        btnCheckAnswer[30].classList.add('disabled');

        WrightAnswers[58].classList.add('color-green-100');

        WrongAnswers[70].classList.add('color-red-100');
        WrongAnswers[71].classList.add('color-red-100');
        scoreM4 += 1;
        WrightQuestionCount_m4 += 1;
        return;

    } else if ($("input.wrong_31").is(':checked')) {

        for (let i = 0; i < answer31.length; i++) {
            answer31[i].classList.add('disabled');
        };

        steps[33].classList.add('step-wrong');
        stepsValue[33].classList.add('step-value-wrong');

        btnCheckAnswer[30].classList.add('disabled');

        WrightAnswers[58].classList.add('color-green-100');

        WrongAnswers[70].classList.add('color-red-100');
        WrongAnswers[71].classList.add('color-red-100');
        scoreM4 += 1;
        return;
    } else {
        $('.toast-choose-answer').toast('show');
    };

};

function CheckAnswer32() {

    if ($("input.wright_32").is(':checked')) {

        for (let i = 0; i < answer32.length; i++) {
            answer32[i].classList.add('disabled');
        };

        steps[34].classList.add('step-wright');
        stepsValue[34].classList.add('step-value-wright');

        btnCheckAnswer[31].classList.add('disabled');

        WrightAnswers[59].classList.add('color-green-100');

        WrongAnswers[72].classList.add('color-red-100');
        WrongAnswers[73].classList.add('color-red-100');
        scoreM4 += 1;
        WrightQuestionCount_m4 += 1;
        return;

    } else if ($("input.wrong_32").is(':checked')) {

        for (let i = 0; i < answer32.length; i++) {
            answer32[i].classList.add('disabled');
        };

        steps[34].classList.add('step-wrong');
        stepsValue[34].classList.add('step-value-wrong');

        btnCheckAnswer[31].classList.add('disabled');

        WrightAnswers[59].classList.add('color-green-100');

        WrongAnswers[72].classList.add('color-red-100');
        WrongAnswers[73].classList.add('color-red-100');
        scoreM4 += 1;
        return;
    } else {
        $('.toast-choose-answer').toast('show');
    };

};


function CheckAnswer33() {
    let counts = $("input.wright_33:checked").length;

    if ($("input.wrong_33").is(':checked')) {

        for (let i = 0; i < answer33.length; i++) {
            answer33[i].classList.add('disabled');
        }

        steps[35].classList.add('step-wrong');
        stepsValue[35].classList.add('step-value-wrong');

        btnCheckAnswer[32].classList.add('disabled');

        WrightAnswers[60].classList.add('color-green-100');
        WrightAnswers[61].classList.add('color-green-100');
        WrightAnswers[62].classList.add('color-green-100');


        scoreM4 += 1;
        return;

    } else if (counts == 3) {

        for (let i = 0; i < answer33.length; i++) {
            answer33[i].classList.add('disabled');
        }

        steps[35].classList.add('step-wright');
        stepsValue[35].classList.add('step-value-wright');

        btnCheckAnswer[32].classList.add('disabled');

        WrightAnswers[60].classList.add('color-green-100');
        WrightAnswers[61].classList.add('color-green-100');
        WrightAnswers[62].classList.add('color-green-100');


        scoreM4 += 1;
        WrightQuestionCount_m4 += 1;
        return;
    } else if (counts > 0 && counts < 3) {

        for (let i = 0; i < answer33.length; i++) {
            answer33[i].classList.add('disabled');
        }

        steps[35].classList.add('step-wrong');
        stepsValue[35].classList.add('step-value-wrong');

        btnCheckAnswer[32].classList.add('disabled');


        WrightAnswers[60].classList.add('color-green-100');
        WrightAnswers[61].classList.add('color-green-100');
        WrightAnswers[62].classList.add('color-green-100');

        scoreM4 += 1;
        return;
    } else {

        $('.toast-choose-answer').toast('show');
    }

};

function CheckAnswer34() {
    let counts = $("input.wright_34:checked").length;

    if ($("input.wrong_34").is(':checked')) {

        for (let i = 0; i < answer34.length; i++) {
            answer34[i].classList.add('disabled');
        }

        steps[36].classList.add('step-wrong');
        stepsValue[36].classList.add('step-value-wrong');

        btnCheckAnswer[33].classList.add('disabled');

        WrightAnswers[63].classList.add('color-green-100');
        WrightAnswers[64].classList.add('color-green-100');
        WrightAnswers[65].classList.add('color-green-100');
        WrightAnswers[66].classList.add('color-green-100');


        scoreM4 += 1;
        return;

    } else if (counts == 4) {

        for (let i = 0; i < answer34.length; i++) {
            answer34[i].classList.add('disabled');
        }

        steps[36].classList.add('step-wright');
        stepsValue[36].classList.add('step-value-wright');

        btnCheckAnswer[33].classList.add('disabled');

        WrightAnswers[63].classList.add('color-green-100');
        WrightAnswers[64].classList.add('color-green-100');
        WrightAnswers[65].classList.add('color-green-100');
        WrightAnswers[66].classList.add('color-green-100');


        scoreM4 += 1;
        WrightQuestionCount_m4 += 1;
        return;
    } else if (counts > 0 && counts < 4) {

        for (let i = 0; i < answer34.length; i++) {
            answer34[i].classList.add('disabled');
        }

        steps[36].classList.add('step-wrong');
        stepsValue[36].classList.add('step-value-wrong');

        btnCheckAnswer[33].classList.add('disabled');


        WrightAnswers[63].classList.add('color-green-100');
        WrightAnswers[64].classList.add('color-green-100');
        WrightAnswers[65].classList.add('color-green-100');
        WrightAnswers[66].classList.add('color-green-100');

        scoreM4 += 1;
        return;
    } else {

        $('.toast-choose-answer').toast('show');
    }

};

function CheckAnswer35() {
    let counts = $("input.wright_35:checked").length;

    if ($("input.wrong_35").is(':checked')) {

        for (let i = 0; i < answer35.length; i++) {
            answer35[i].classList.add('disabled');
        }

        steps[37].classList.add('step-wrong');
        stepsValue[37].classList.add('step-value-wrong');

        btnCheckAnswer[34].classList.add('disabled');

        WrightAnswers[67].classList.add('color-green-100');
        WrightAnswers[68].classList.add('color-green-100');
        WrongAnswers[74].classList.add('color-red-100');
        WrongAnswers[75].classList.add('color-red-100');

        scoreM4 += 1;
        return;

    } else if (counts == 2) {

        for (let i = 0; i < answer35.length; i++) {
            answer35[i].classList.add('disabled');
        }

        steps[37].classList.add('step-wright');
        stepsValue[37].classList.add('step-value-wright');

        btnCheckAnswer[34].classList.add('disabled');

        WrightAnswers[67].classList.add('color-green-100');
        WrightAnswers[68].classList.add('color-green-100');
        WrongAnswers[74].classList.add('color-red-100');
        WrongAnswers[75].classList.add('color-red-100');


        scoreM4 += 1;
        WrightQuestionCount_m4 += 1;
        return;
    } else if (counts > 0 && counts < 2) {

        for (let i = 0; i < answer35.length; i++) {
            answer35[i].classList.add('disabled');
        }

        steps[37].classList.add('step-wright');
        stepsValue[37].classList.add('step-value-wright');

        btnCheckAnswer[34].classList.add('disabled');

        WrightAnswers[67].classList.add('color-green-100');
        WrightAnswers[68].classList.add('color-green-100');
        WrongAnswers[74].classList.add('color-red-100');
        WrongAnswers[75].classList.add('color-red-100');

        scoreM4 += 1;
        return;
    } else {

        $('.toast-choose-answer').toast('show');
    }

};

function CheckAnswer36() {
    let counts = $("input.wright_36:checked").length;

    if ($("input.wrong_36").is(':checked')) {

        for (let i = 0; i < answer36.length; i++) {
            answer36[i].classList.add('disabled');
        }

        steps[38].classList.add('step-wrong');
        stepsValue[38].classList.add('step-value-wrong');

        btnCheckAnswer[35].classList.add('disabled');

        WrightAnswers[69].classList.add('color-green-100');
        WrightAnswers[70].classList.add('color-green-100');
        WrightAnswers[71].classList.add('color-green-100');
        WrightAnswers[72].classList.add('color-green-100');

        scoreM4 += 1;
        return;

    } else if (counts == 4) {

        for (let i = 0; i < answer36.length; i++) {
            answer36[i].classList.add('disabled');
        }

        steps[38].classList.add('step-wright');
        stepsValue[38].classList.add('step-value-wright');

        btnCheckAnswer[35].classList.add('disabled');

        WrightAnswers[69].classList.add('color-green-100');
        WrightAnswers[70].classList.add('color-green-100');
        WrightAnswers[71].classList.add('color-green-100');
        WrightAnswers[72].classList.add('color-green-100');


        scoreM4 += 1;
        WrightQuestionCount_m4 += 1;
        return;
    } else if (counts > 0 && counts < 4) {

        for (let i = 0; i < answer36.length; i++) {
            answer36[i].classList.add('disabled');
        }

        steps[38].classList.add('step-wrong');
        stepsValue[38].classList.add('step-value-wrong');

        btnCheckAnswer[35].classList.add('disabled');

        WrightAnswers[69].classList.add('color-green-100');
        WrightAnswers[70].classList.add('color-green-100');
        WrightAnswers[71].classList.add('color-green-100');
        WrightAnswers[72].classList.add('color-green-100');

        scoreM4 += 1;
        return;
    } else {

        $('.toast-choose-answer').toast('show');
    }

};

function CheckAnswer37() {

    if ($("input.wright_37").is(':checked')) {

        for (let i = 0; i < answer37.length; i++) {
            answer37[i].classList.add('disabled');
        };

        steps[39].classList.add('step-wright');
        stepsValue[39].classList.add('step-value-wright');

        btnCheckAnswer[36].classList.add('disabled');

        WrightAnswers[73].classList.add('color-green-100');
        WrongAnswers[76].classList.add('color-red-100');
        WrongAnswers[77].classList.add('color-red-100');

        scoreM4 += 1;
        WrightQuestionCount_m4 += 1;
        return;

    } else if ($("input.wrong_37").is(':checked')) {

        for (let i = 0; i < answer37.length; i++) {
            answer37[i].classList.add('disabled');
        };

        steps[39].classList.add('step-wrong');
        stepsValue[39].classList.add('step-value-wrong');

        btnCheckAnswer[36].classList.add('disabled');

        WrightAnswers[73].classList.add('color-green-100');
        WrongAnswers[76].classList.add('color-red-100');
        WrongAnswers[77].classList.add('color-red-100');

        scoreM4 += 1;
        return;
    } else {
        $('.toast-choose-answer').toast('show');
    };

};

function CheckAnswer38() {

    if ($("input.wright_38").is(':checked')) {

        for (let i = 0; i < answer38.length; i++) {
            answer38[i].classList.add('disabled');
        };

        steps[40].classList.add('step-wright');
        stepsValue[40].classList.add('step-value-wright');

        btnCheckAnswer[37].classList.add('disabled');

        WrightAnswers[74].classList.add('color-green-100');
        WrongAnswers[78].classList.add('color-red-100');
        WrongAnswers[79].classList.add('color-red-100');

        scoreM4 += 1;
        WrightQuestionCount_m4 += 1;
        return;

    } else if ($("input.wrong_38").is(':checked')) {

        for (let i = 0; i < answer38.length; i++) {
            answer38[i].classList.add('disabled');
        };

        steps[40].classList.add('step-wrong');
        stepsValue[40].classList.add('step-value-wrong');

        btnCheckAnswer[37].classList.add('disabled');

        WrightAnswers[74].classList.add('color-green-100');
        WrongAnswers[78].classList.add('color-red-100');
        WrongAnswers[79].classList.add('color-red-100');

        scoreM4 += 1;
        return;
    } else {
        $('.toast-choose-answer').toast('show');
    };

};

function CheckAnswer39() {
    let counts = $("input.wright_39:checked").length;

    if ($("input.wrong_39").is(':checked')) {

        for (let i = 0; i < answer39.length; i++) {
            answer39[i].classList.add('disabled');
        }

        steps[41].classList.add('step-wrong');
        stepsValue[41].classList.add('step-value-wrong');

        btnCheckAnswer[38].classList.add('disabled');

        WrightAnswers[75].classList.add('color-green-100');
        WrightAnswers[76].classList.add('color-green-100');
        WrightAnswers[77].classList.add('color-green-100');

        WrongAnswers[80].classList.add('color-red-100');
        WrongAnswers[81].classList.add('color-red-100');


        scoreM4 += 1;
        return;

    } else if (counts == 3) {

        for (let i = 0; i < answer39.length; i++) {
            answer39[i].classList.add('disabled');
        }

        steps[41].classList.add('step-wright');
        stepsValue[41].classList.add('step-value-wright');

        btnCheckAnswer[38].classList.add('disabled');

        WrightAnswers[75].classList.add('color-green-100');
        WrightAnswers[76].classList.add('color-green-100');
        WrightAnswers[77].classList.add('color-green-100');

        WrongAnswers[80].classList.add('color-red-100');
        WrongAnswers[81].classList.add('color-red-100');


        scoreM4 += 1;
        WrightQuestionCount_m4 += 1;
        return;
    } else if (counts > 0 && counts < 3) {

        for (let i = 0; i < answer39.length; i++) {
            answer39[i].classList.add('disabled');
        }

        steps[41].classList.add('step-wrong');
        stepsValue[41].classList.add('step-value-wrong');

        btnCheckAnswer[38].classList.add('disabled');

        WrightAnswers[75].classList.add('color-green-100');
        WrightAnswers[76].classList.add('color-green-100');
        WrightAnswers[77].classList.add('color-green-100');

        WrongAnswers[80].classList.add('color-red-100');
        WrongAnswers[81].classList.add('color-red-100');

        scoreM4 += 1;
        return;
    } else {

        $('.toast-choose-answer').toast('show');
    }

};

function CheckAnswer40() {

    if ($("input.wright_40").is(':checked')) {

        for (let i = 0; i < answer40.length; i++) {
            answer40[i].classList.add('disabled');
        };

        steps[42].classList.add('step-wright');
        stepsValue[42].classList.add('step-value-wright');

        btnCheckAnswer[39].classList.add('disabled');

        WrightAnswers[78].classList.add('color-green-100');

        WrongAnswers[82].classList.add('color-red-100');
        WrongAnswers[83].classList.add('color-red-100');
        WrongAnswers[84].classList.add('color-red-100');

        scoreM4 += 1;
        WrightQuestionCount_m4 += 1;
        return;

    } else if ($("input.wrong_40").is(':checked')) {

        for (let i = 0; i < answer40.length; i++) {
            answer40[i].classList.add('disabled');
        };

        steps[42].classList.add('step-wrong');
        stepsValue[42].classList.add('step-value-wrong');

        btnCheckAnswer[39].classList.add('disabled');

        WrightAnswers[78].classList.add('color-green-100');

        WrongAnswers[82].classList.add('color-red-100');
        WrongAnswers[83].classList.add('color-red-100');
        WrongAnswers[84].classList.add('color-red-100');

        scoreM4 += 1;
        return;
    } else {
        $('.toast-choose-answer').toast('show');
    };

};

function CheckAnswer41() {

    if ($("input.wright_41").is(':checked')) {

        for (let i = 0; i < answer41.length; i++) {
            answer41[i].classList.add('disabled');
        };

        steps[43].classList.add('step-wright');
        stepsValue[43].classList.add('step-value-wright');

        btnCheckAnswer[40].classList.add('disabled');

        WrightAnswers[79].classList.add('color-green-100');

        WrongAnswers[85].classList.add('color-red-100');

        scoreM4 += 1;
        WrightQuestionCount_m4 += 1;
        return;

    } else if ($("input.wrong_41").is(':checked')) {

        for (let i = 0; i < answer41.length; i++) {
            answer41[i].classList.add('disabled');
        };

        steps[43].classList.add('step-wrong');
        stepsValue[43].classList.add('step-value-wrong');

        btnCheckAnswer[40].classList.add('disabled');

        WrightAnswers[79].classList.add('color-green-100');

        WrongAnswers[85].classList.add('color-red-100');

        scoreM4 += 1;
        return;
    } else {
        $('.toast-choose-answer').toast('show');
    };

};

function CheckAnswer42() {

    if ($("input.wright_42").is(':checked')) {

        for (let i = 0; i < answer42.length; i++) {
            answer42[i].classList.add('disabled');
        };

        steps[44].classList.add('step-wright');
        stepsValue[44].classList.add('step-value-wright');

        btnCheckAnswer[41].classList.add('disabled');

        WrightAnswers[80].classList.add('color-green-100');

        WrongAnswers[86].classList.add('color-red-100');
        WrongAnswers[87].classList.add('color-red-100');
        WrongAnswers[88].classList.add('color-red-100');

        scoreM4 += 1;
        WrightQuestionCount_m4 += 1;
        return;

    } else if ($("input.wrong_42").is(':checked')) {

        for (let i = 0; i < answer42.length; i++) {
            answer42[i].classList.add('disabled');
        };

        steps[44].classList.add('step-wrong');
        stepsValue[44].classList.add('step-value-wrong');

        btnCheckAnswer[41].classList.add('disabled');

        WrightAnswers[80].classList.add('color-green-100');

        WrongAnswers[86].classList.add('color-red-100');
        WrongAnswers[87].classList.add('color-red-100');
        WrongAnswers[88].classList.add('color-red-100');


        scoreM4 += 1;
        return;
    } else {
        $('.toast-choose-answer').toast('show');
    };

};