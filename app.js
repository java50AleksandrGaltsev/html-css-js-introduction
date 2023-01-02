// let str = "123a";
// let number = parseInt(str) + 10; //beret do symbola kotor ne mozet bit цифрой
// let str1 = "ff.5"
// let numInt = parseInt(str1, 16);
// let numFloat = parseFloat(str1);
function myParseInt (str, base) {
base = base || 10;
let res = NaN;
const firstIndex = str[0] === "-" ? 1 : 0;
let code = 1;
let index = firstIndex;
code = getCode(str[index], base);
if(code >= 0) {
    res = code;
    index ++;
}
while (index < str.length && code >= 0) {
    code = getCode (str[index], base);
    if (code >= 0) {
        res = res * base + code;
        
    }
    index++;
}

if (firstIndex === 1) {
    res = -res;
}
return res;
}
function getCode (symbol, base) {
   let res = -1;
   symbol = symbol.toLowerCase();
   const codeA = 'a'.charCodeAt();
   if ((symbol <= '9' && symbol >= '0') || (symbol >= 'a' && symbol<= 'z')) {
   res = symbol <= '9' ? +symbol : symbol.charCodeAt() - codeA + 10;
   if (res >= base) {
    res = -1;
   }
   }
   return res;
}
// let str1 = "ff";
// let str2 = "123";
// let str22 = "JAVA";
// let str3 = "123m";
// let str4 = "123.5"
// let num = parseInt (str1, 16);
// let myNum = myParseInt (str1, 16); // 16
// num = parseInt(str2);
// myNum = myParseInt(str2);
// num = parseInt(str22, 36);
// myNum = myParseInt(str22, 36);
// num = parseInt(str3);
// myNum = myParseInt (str3);
// num = parseInt(str4); // 123
// myNum = myParseInt(str4);
// let number = 255;
// let str = "" + number;
// str = number.toString(16);

function myToString(number, base) {
let res = '';

base = base || 10;
const sign = number < 0 ? "-" : "";
number = Math.abs(number);
const integerPart = Math.trunc(Math.abs(number));
let fractionPart = number - integerPart;
fractionPart = fractionPart ? '.' + converFractionPart(fractionPart, base) : '';
res = converIntegerPart(integerPart, base) + fractionPart;
return sign + res;
}
function converIntegerPart (number, base) {
    let res = '';
    do {
 const digit = number % base;   
 const symbol = getSymbol(digit);
res = symbol + res; 
number = Math.trunc(number/base);
} while(number);
return res;
}

function converFractionPart (number, base, precision) {
    let res = '';
    precision = precision || 7;
    let count = 0;
    let intPart;
    do {
        number *= base;
        intPart = Math.trunc (number);
        if (intPart != 0) {
            if (count == precision && intPart >= base / 2) {
                intPart ++;
            }
            const symb = getSymbol (intPart);
            res += symb;
            number = number - intPart;
        }
        count++;
    } while (intPart && count <= precision);
    return res;
}
function getSymbol (digit) {
     const codeA = 'a'.charCodeAt();
    if (digit < 10) {
        symbol = "" + digit;
    } else {
     const codeAscii = digit - 10 + codeA;
     symbol = String.fromCharCode(codeAscii);
}
return symbol;
}
// let num100 = 990500;
// let str100 = num100.toString();
// let myStr100 = myToString(num100);
// str100 = num100.toString(36);
// myStr100 = myToString (num100, 36);
// num100 = 123.45;
// str100 = num100.toString(16);
// myStr100 = myToString(num100, 16);
console.log(myToString ("-1.1", 36))
