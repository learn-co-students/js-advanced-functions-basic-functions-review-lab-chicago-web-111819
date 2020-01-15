// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(wrapper = '*') {
    return function(adj = "special") {
        return `You are ${wrapper}${adj}${wrapper}!`
    }
}

const Calculator = {}

Calculator.add = function(x,y) {
    return x + y
}

Calculator.subtract = function(x,y) {
    return x - y
}

Calculator.multiply = function(x,y) {
    return x * y
}

Calculator.divide = function(x,y) {
    return x / y
}

function actionApplyer(int,funcArr) {
    let i = int
    funcArr.forEach( function(f) {
         i = f(i)
        })
    return i
}