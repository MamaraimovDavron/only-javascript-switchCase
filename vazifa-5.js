let a = parseFloat(prompt("a = "));
let amal = prompt("Amal: ");
let b = parseFloat(prompt("b = "));

let result;

switch(amal){
    case "+":
        result = a + b;
        break;

    case "-":
        result = a - b;
        break;

    case "*":
        result = a * b;
        break;

    case "/":
        result = a / b;
        break;

    case "^":
        result = a ** b;
        break;

}

alert(a + amal + b + "= " + result);