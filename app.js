 const rectangle = {width: 20, height: 10, square: function(){
    return this.width * this.height;
 }, perimeter: function ()  {
     return   this.width * 2 + this.height * 2
}}
// this.width = 100;
// this.height = 200;
// console.log(this);
//  console.log(rectangle.square());
//  console.log(rectangle.perimeter());
class Rectangle { //nazvanie class s bolshoi bukvi
    #width;
    #height;
    constructor(width, height ) { //v js mozhet bit odin constructor
        this.#height = height;
        this.#width = width;
    }
    square() {
        return this.#width * this.#height;
    }
    perimeter() {
        return this.#width * 2 + this.#height * 2;
    }  

}
const rectangle1 = new Rectangle (3, 4);
console.log(rectangle1.square());
console.log(rectangle1.perimeter());
/*HW#21*/
//Emploe structure and function cresteEmployee() taken from previous HW
