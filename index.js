// code your solution here
function saturdayFun(act='roller-skate'){
    return `This Saturday, I want to ${act}!`
}

function mondayWork(action="go to the office"){
    return `This Monday, I will ${action}.`
}


function wrapAdjective(arg1 = '*'){
    return function(arg2 ='special'){
        return `You are ${arg1}${arg2}${arg1}!`
    }
}