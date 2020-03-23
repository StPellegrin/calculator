let history = [];
let count = 0;

//constant value formulaString declared for calculation that can't be redeclared
const calculation = (formulaString) =>{
    const result = eval(formulaString);
    //creating history display values
    const historyString = formulaString + " = " + result;
    //Push into a string to save history 
    history.push(historyString); 
    //Counter returning reference from history
    if(history.length > 0){
        document.getElementById("history").value = history[0];
    }
    return result
}

//Passing history function from above into display tracking value and sign 
const showHistory=(numericVal,sign)=>{
    //checking for both operands to be true
    if(sign === "-"){
        count -= numericVal;
    }
    else{
        count += numericVal;
    }
    //checking for params of count with OR operator else
    if(count >= history.length || count < 0){
        return 
    }
    else{
        document.getElementById("history").value = history[count];
    }
}