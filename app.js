const employee1 = {"id" : 123, name: "Vasya", birthYear: 2000, 
salary: 15000, address: {city: "Lod", country: "Israel"}};
const employee2 = {"id" : 123, name: "Vasya", birthYear: 2000, 
salary: 15000, address: {city: "Lod", country: "Israel"}};
console.log(`employee1==emploee2 is ${employee1 == employee2}`) //raznie ssilki poetomy false
const emploee3 = employee1;
console.log(`employee3==emploee1 is ${emploee3 == employee1}`) //=== iz primitivov tipi dannih
emploee3.salary = 20000;
console.log(`employee1 salary = ${employee1.salary}`)
function createEmployee(id, name, birthYear, salary, city, country) {
    return {id, name, birthYear, salary, address : {city, country} } //{id} = id : id, prosto syntaxic dlya udobstva
}
//stroim massiv objects
//indexof, includes - dlya massive s objects ne rabotaet, tk metods osnovani na ==, eto ne podhodit dlya objects
const employees = [
    createEmployee(123, "Vasya", 2000, 15000, "Lod", "Israel"),
    createEmployee(124, "David", 1985, 15500, "Tel Aviv", "Israel"),
    createEmployee(125, "Sara",  1985, 20000, "New-York", "USA"),
    createEmployee(126, "Avraham", 1990, 13000, "London", "UK"),
    createEmployee(127, "Moshe", 2000, 15000, "Rehovot", "Israel"),
    createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "Gorgia"),
    createEmployee(129, "Sasha", 2000, 25000, "Ramat Gan", "Israel"),
    createEmployee(130, "Victor", 2003, 10000, "Arad", "Israel")
]
//const index = employees.indexOf(createEmployee(126, "Avraham", 1990, 13000, "London", "UK")); tak nepravilno
// const index = employees.findIndex(function (eml) {
//     return eml.id === 126;
// })
// const employee = employees.find(function(eml) {
//     return eml.id === 126;
// })
//HW 18
function getEmployee (employees, id) {
    
    return employees.find(empl => empl.id === id);
    
}
function getEmployeesBySalary (employees, salaryFrom, salaryTo) {
    return employees.filter(empl => empl.salary >= salaryFrom && empl.salary <= salaryTo);
}
function getEmployeesByCity (employees, city) {
    return employees.filter(empl => empl.address.city == city);
}
function getEmploeeNames (employees) {
    return employees.map (empl => empl.name);
}
function sortEmployeesByAge (employees) {
   employees.sort ((empl1,empl2) => empl2.birthYear - empl1.birthYear);

}
function computeSalaryBudget (employees) {
    employees.reduce((res, empl) => res + empl.salary, 0);
    
}
console.log(`(employees, 126) = ${getEmployee(employees, 126)}`);
console.log (getEmployeesBySalary(employees, 10000, 15000));
console.log(getEmployeesByCity(employees, "Lod"));
console.log(getEmploeeNames(employees));
console.log(sortEmployeesByAge(employees));
console.log(computeSalaryBudget(employees));
