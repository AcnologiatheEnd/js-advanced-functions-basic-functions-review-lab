// Your code here
function saturdayFun(act="roller-skate") {
  return(`This Saturday, I want to ${act}!`)
}

function mondayWork(act="go to the office") {
  return(`This Monday, I will ${act}.`)
}

function wrapAdjective(val = "*") {
  return function(rtn = "special") {
    return(`You are ${val}${rtn}${val}!`)
  }
  
}

let Calculator = {}