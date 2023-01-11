const array = [10, 20, 30, -10, 11, 100];
//array.splice(2, 2);
 //const index = array.indexOf(30);
//removing all numbers from 30
// const res = array.splice(index, 10); //udalyaet is massive element po index, esli xotim poluchit udalenni element to stavim res
//array.splice(index, undefined, -1000)
//insert
//array.splice(index, 0, -10, -20);
//replace
// array.splice(index, 2, 20);
// const ar1 = [40,200];
// array.splice(index,1, ...ar1);
// const numbersPerPage = 2;
// const page = 2;
// const firstIndex = (page -1) * numbersPerPage;
// const pageNumbers = array.slice(firstIndex, 
//     firstIndex + numbersPerPage)
// const ar1 = array.map(multiply2);
// function multiply2(number) {
//     return number * 2;
// }
// const ar2 = array.map(function (number, index){
//     return index + 1 + '. ' + number;
// });
// const ar3 = array.map (function(number) {
// return `<li>${number}</li>`
// })
// const ulElement = `<ul>${ar3.join('')}</ul>`;

function coloringString (str1, str2) {
    //const ar1 = Array.from(str1);
    const arStr2 = Array.from(str2);
    const res = arStr2.map(function (symbol, index) {
        let color;
      if(symbol === str1[index]) {
        color = "green"
      } else {
        color = str1.includes(symbol) ? "yellow" : "red";
      }
      return color;
    })
    return res;
   

}
//getting array of numbers in a given range. Example as follows
// const min = 5;
// const max = 15;
// const ar4 = array.filter(function (number) {
//     return number >= min && number <= max;
// })
//getting new array of the elements of the source array with even index
// const ar5 = array.filter(function (__, index) {
//     return index % 2 === 0;
// })
//HW#14 (2) 
function getNumbersWithDigitsAmount (digitsAmount, array) {

    const res = array.filter (function (number) {
        const nDigits = getNumberDigits (number);
        return nDigits === digitsAmount;
        // if (number < 0) {
        //     number = -number;
        // }
        // let ind = number.toString();
        // if (ind.length == digitsAmount) {
        //     return number;
        // }
    })
return res;
}
function getNumberDigits (number) {
    number = Math.abs(Math.trunc(number));
    const res = number.toString().length;
    return res;
}
console.log (`coloringString ("pappy", "apple") returns -- ${coloringString ("pappy", "apple").join(' ')}` );
console.log(`getNumbersWithDigitsAmount (3, [1, 100, -100, 25, 1000]) returns  ${getNumbersWithDigitsAmount (3, [1, 100, -100, 25, 1000])}`);