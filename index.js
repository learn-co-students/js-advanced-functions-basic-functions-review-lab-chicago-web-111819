function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = (adj='*') => {
    return (param="special") => {
        return `You are ${adj}${param}${adj}!`
    }
}

const Calculator = {
    add: (num1,num2) => {
        return num1 + num2
    },
    subtract: (num1,num2) => {
        return num1 - num2
    },
    multiply: (num1,num2) => {
        return num1 * num2
    },
    divide: (num1,num2) => {
        return num1 / num2
    }
}

let actionApplyer = (start, arr) => {
    arr.forEach((e) => {
        return start = e(start) 
    })

    return start
}