
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

// "Function-level Scope"
function outer(greeting, msg="It's a fine day to learn") {
  return function(name, lang="Python") {
    return `${greeting}, ${name}! ${msg} ${lang}`
  }
}
 
outer("Hello")("student", "JavaScript");



