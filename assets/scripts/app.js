const defaultResult = 0 ;
let currentResult = defaultResult ;
let logEntries = []

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(initialResult, operation, enterNumber){
    const calcDescription = `${initialResult} ${operation} ${enterNumber}`;
    outputResult(currentResult,calcDescription)
}

function writeLog(operation, prevResult, number, result ){
    const logEntry = {
        operation: operation,
        prevResult: prevResult,
        number : number,
        result: result
       }
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
   const enterNumber = getUserNumberInput();
   const initialResult = currentResult ;
   currentResult += enterNumber;
   createAndWriteOutput(initialResult,'+',enterNumber)
   writeLog('ADD',initialResult,enterNumber,currentResult);
}

function multiply(){
    const enterNumber = getUserNumberInput();
   const initialResult = currentResult ;
   currentResult *= enterNumber;
   createAndWriteOutput(initialResult,'x',enterNumber)
   writeLog('MULTIPLY',initialResult,enterNumber,currentResult);
}

function divide(){
    const enterNumber = getUserNumberInput();
   const initialResult = currentResult ;
   currentResult /= enterNumber;
   createAndWriteOutput(initialResult,'/',enterNumber)
   writeLog('DIVIDE',initialResult,enterNumber,currentResult);
}

function subtract() {
    const enterNumber = getUserNumberInput();
   const initialResult = currentResult ;
   currentResult -= enterNumber;
   createAndWriteOutput(initialResult,'-',enterNumber)
   writeLog('SUBSTRACT',initialResult,enterNumber,currentResult);
 }


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);


