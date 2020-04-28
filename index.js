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

let Calculator = {
  
  add: function (x, y) {
    return x + y
  },
  subtract: function (x, y) {
    return x - y
  },
  multiply: function (x, y) {
    return x * y
  },
  divide: function (x, y) {
    return x / y
  }
}

function actionApplyer(int, arr) {
  let ans = int
  for (let i = 0; i < arr.length; i++) {
    total = arr[i](total)
  }
  return ans
}