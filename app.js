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
function createEmployee(id, name, birthYear, salary, city, country) {
    return {id, name, birthYear, salary, address : {city, country} } //{id} = id : id, prosto syntaxic dlya udobstva
}
class Company {
    #employees //object key: < id value>, value: reference to Employee object
    constructor() {
        this.#employees = {};
    }
    addEmloyee (empl) {
        //TODO
        //adds empl into #emloyees object
        //returns false if employee with a given id value already exist
    }
    removeEmployee(id) {
        //TODO
        //removes employee with a given id from #employees object
        //retuns true if removed
        //returns false if employee with the id doesn't exist
    }
    getEmployeesCountry(country) {
        //TODO
        //returns array of employee object having field "contry" equeled to a given countries
    }
    getEmployeesByAge (age) {
        //TODO
        //returns array of employee object with a given age
    }
    getEmploeesBySalaries(salaryFrom, salaryTo) {
        //TODO
        //returns array of employee objects with salary in a given closed range[]
        //if salary from < 0, then get employees with salary less or equal salaryTo
        //if salaryTo, 0, then get employees with salary greater or equal salaryTo
        //if salaryFrom < 0 && salaryTo < 0, then get all employees
    }
}