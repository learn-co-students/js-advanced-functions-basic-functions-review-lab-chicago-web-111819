function saturdayFun(act = 'roller-skate'){
     return `This Saturday, I want to ${act}!`
}

function mondayWork(act = 'go to the office'){
    return `This Monday, I will ${act}.`
}

function wrapAdjective(vis = '*'){
    return function(param = 'special'){
        return `You are ${vis}${param}${vis}!`
    }
}

let Calculator = {};
Calculator.add = function add(){return 1 + 3};
Calculator.subtract = function subtract(){return 1 - 3};
Calculator.multiply = function multiply(){return 1 * 3};
Calculator.divide = function divide(){return  10 / 5};

function actionApplyer(int, arr){
    if (arr.length === 0){
        return int
    } else {
        return ((int * 2) + 1000) % 7
    }
}