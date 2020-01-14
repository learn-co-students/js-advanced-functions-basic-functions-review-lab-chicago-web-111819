
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

// "Function-level Scope"
function outer(greeting, msg = "It's a fine day to learn") {
  return function(name, lang = "Python") {
    return `${greeting}, ${name}! ${msg} ${lang}`
  }
}
 
outer("Hello")("student", "JavaScript");


function wrapAdjective(nicety = "*") {
  return function(adjective = "special") {
    return `You are ${nicety}${adjective}${nicety}!`;
  };
}

let Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};

function actionApplyer(startingNum, actions) {
  let resultingNum = startingNum;
  for(let i = 0; i < actions.length; i++) {
    resultingNum = actions[i](resultingNum);
  }
  return resultingNum;
}



