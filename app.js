
function getDigitsSum (number) {
number = Math.trunc(Math.abs(number));
let sum = 0;
do {
   const digit = number % 10; 
    number = Math.trunc (number/10);
    sum += digit;

} while (number);
return sum;
}


function computeExpression (expressionStr) {
    let res;
  try {
    res = eval(expressionStr); 
    return result;
  }  catch(e) {
    res =  NaN;
  }
return res;

}


function printAnanas () {
    const res = ("A" + + "A" + "AS").toLowerCase();
    console.log(res);
}
function reverse (number) {
    let res = number < 0 ? "-" : "";
    if (number < 0) {
        number = - number;
    }
    number = Math.trunc(number);
    do{
        const digit = number % 10;
        res += digit;
        number = Math.trunc (number/10);
    } while (number);
    return res;
}
console.log("result of getDigitSum (123.45) is " + getDigitsSum (123.45));
console.log ("result of getDigitSum (-280.123) is " + getDigitsSum (-280.123));
console.log ("result of getDigitSum (123) is " + getDigitsSum (123));
console.log("result of computeExpression (9000/((10+20) ** 2)) is " + computeExpression("9000/((10+20) ** 2)"));
console.log("result of computeExpression (9+100/2) is " + computeExpression("9+100/2"));
printAnanas ();
console.log ("result of reverse 123.45 is " + reverse (123.45));
console.log ("result of reverse -280.123 is " + reverse (-280.123));
console.log ("result of reverse 123 is " + reverse (123));
    