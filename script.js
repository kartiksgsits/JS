let result;

const operator = prompt("Enter your Arithmetic operator(either +,-,* or /):");

const x=parseFloat(prompt("Enetr your first number:"));
const y=parseFloat(prompt("Enetr your second number:"));

switch(operator)
{
    case '+':
        result=x+y;
        console.log(`${x}+${y}=${result}`);
        break;
    case '-':
        result=x-y;
        console.log(`${x}-${y}=${result}`);
        break;
    case '*':
        result=x*y;
        console.log(`${x}*${y}=${result}`);
        break;
    case '/':
        result=x/y;
        console.log(`${x}/${y}=${result}`);
        break;
    default:
        console.log("Operator is not an Arithmetic or valid");
        break;               
}