function plus() {
    let firstNumber = Number(document.getElementById('number1').value);
    let secondNumber = Number(document.getElementById('number2').value);
    
    let resultNumber = firstNumber + secondNumber;
    document.getElementById('result').innerHTML = resultNumber;   
}

function minus() {
    let firstNumber = Number(document.getElementById('number1').value);
    let secondNumber = Number(document.getElementById('number2').value);
    
    let resultNumber = firstNumber - secondNumber;    
    document.getElementById('result').innerHTML = resultNumber;
}

function divide() {
    let firstNumber = Number(document.getElementById('number1').value);
    let secondNumber = Number(document.getElementById('number2').value);
    
    let resultNumber = firstNumber / secondNumber;    
    document.getElementById('result').innerHTML = resultNumber;
}

function multiply() {
    let firstNumber = Number(document.getElementById('number1').value);
    let secondNumber = Number(document.getElementById('number2').value);
    
    let resultNumber = firstNumber * secondNumber;    
    document.getElementById('result').innerHTML = resultNumber;
}

function changeBackground_1() {
    let variable= document.getElementById('div__background');
    variable.style.background = '#33ccff';
}

function changeBackground_2() {
    let variable = document.getElementById('result');
    variable.style.background = '#3300ff';
}