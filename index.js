var calc = document.getElementById("algeb");

function display(char){
    calc.value += char;
}

function clearAll(){
    calc.value = "";
}

function backSpace(){
    calc.value = calc.value.slice(0, -1);
}

function calculate(operator){
    calc.value = eval(calc.value);
    if(operator){
        calc.value += operator;
    }
}