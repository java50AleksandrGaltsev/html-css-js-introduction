const array = [123, 9, 28, 3, 44];
array.sort(function(e1, e2) {
    return e1-e2;
    // return e2 - e1
   // return e1.toString().length -e2.toString().length;
//    let res = e1.toString().length - e2.toString().length
//    if(!res) {
//     res = e1 - e2;
//    }
//   return res;
});
console.log(`result of sorting [123, 9, 28, 3, 44] is ${array}`)
//HW #15
//********************************************* */
//task sort1
function evenOddSort (array) {
   return array.sort(function(e1, e2) {
       return e1 % 2 == 0 ? -1 : 1;
       
    })
    
    //sort arrray of numbers in the  order even numbers go before the odd ones
    // example input array[20, -10, 333, 1000, 552, 7, -7] => [20, -10, 1000, 552, 333, 7, -7]
}
//task sort2
function oddEvenSort (array) {
    return array.sort(function(e1, e2) {
        return e1 % 2 == 0 ? 1 : -1;
})
}
//task sort 3
function evenAscDesc(array) {
    return array.sort(function(e1, e2){
        let res = Math.abs(e1 % 2) - Math.abs(e2 % 2);
        if (res === 0) {
            res = e1 % 2 == 0 ? e1 - e2 : e2 - e1;
        }
        return res;
    })
}
//****************************************** */

//reduce
//find sum of the numbers in an array
function sum (array) {
    const res = array.reduce(function(res, cur) {
        return res + cur;
    });
    return res;
}
console.log(`sum([1,2,3,4,5]) returns ${sum([1,2,3,4,5])}`); 

[1, 2, 3, 4].reduce(function (x, y) {
    console.log(x,y);
    return x + y; 
}); // 1- function call x = 1, y = 2; 2 function call x =  undefind, y = 3, 3 func call x = undefind, y = 4

console.log([[0, 1], [2, 3]].reduce (
    (acc, cur) => {
        return acc.concat(cur);
    }, 
    [1, 2]
));
// 1) acc - [1, 2], cur - [0, 1]
//2) acc - [1, 2, 0, 1], cur - [2, 3]

//HW#15 
// task reduce 1
 function getMin (array) {
   return array.reduce(function (min, cur){
    return min > cur ? cur : min;
    
   })
   
  // return res;
 }
 //task reduce 2
 function getMax (array) {
     const res = array.reduce (function(res, index) {
        return res > index ? res = res : res = index;
     })
     return res;
 }
 //task reduce 3
 function getAverage (array) {
   const sum1 = sum(array);
   return sum1/array.length;
 }
 //task reduce 4
 function getMinMaxAvg (array) {
    const res = array.reduce(function (ar, cur){
        if (cur < ar[0]) {
            ar[0] = cur;
        } else if (cur > ar[1]) {
            ar[1] = cur;
        }
        ar[2] += cur;
        return ar;
    }, [array[0], array[0], 0]);
    res[2] /= array.length;
    return res;
 }
 console.log(`evenOddSort ([20, -10, 333, 1000, 552, 7, -7]) => ${evenOddSort ([20, -10, 333, 1000, 552, 7, -7])}`);``
 console.log(`oddEvenSort([20, -10, 333, 1000, 552, 7, -7]) => ${oddEvenSort([20, -10, 333, 1000, 552, 7, -7])}`);
 console.log (`evenAscDesc([20, -10, 333, 1000, 552, 7, -7]) => ${evenAscDesc([20, -10, 333, 1000, 552, 7, -7])}`);
 console.log(`minValue of array [20, -10, 333, 1000, 552, 7, -7] is ${getMin ([20, -10, 333, 1000, 552, 7, -7])}`);
 console.log (`maxValue of array [20, -10, 333, 1000, 552, 7, -7] is ${getMax ([20, -10, 333, 1000, 552, 7, -7])}`);
 console.log(`average of array ([20, -10, 333, 1000, 552, 7, -7]) is ${getAverage([20, -10, 333, 1000, 552, 7, -7])} `);
 console.log (`getMinMaxAvg ([20, -10, 333, 1000, 552, 7, -7]) => ${getMinMaxAvg ([20, -10, 333, 1000, 552, 7, -7])}`);