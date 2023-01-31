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
// console.log(`(employees, 126) = ${getEmployee(employees, 126)}`);
// console.log (getEmployeesBySalary(employees, 10000, 15000));
// console.log(getEmployeesByCity(employees, "Lod"));
 console.log(getEmploeeNames(employees));
// console.log(sortEmployeesByAge(employees));
// console.log(computeSalaryBudget(employees));
let field = "salary";

//console.log(employees[0][field]);
//function kotoraya raspechativaetznachenie polya
function displayFieldValue(employees,index, field) {
    console.log(employees [index] [field])
}
//displayFieldValue(employees, 3, "birthYear");
// employees[0].salary = 20000;
// employees[0].department = "QA"; //dobavlyaem pole v object
// displayFieldValue(employees, 0, "department");
// delete employees[0].department //udalyaem pole v object
// displayFieldValue(employees, 0, "department");
function computeMinMaxSalary (employees) {
  const res = employees.reduce((res, empl) => { //zamikanie
        if (res.minSalary > empl.salary) {
            res.minSalary = empl.salary;
                } else if (res.maxSalary < empl.salary) {
                    res.maxSalary = empl.salary;
                }
                res.avgSalary += empl.salary;
                return res;
                 
    }, {minSalary: employees[0].salary, maxSalary: employees[0].salary, avgSalary: 0});
    res.avgSalary /= employees.length;
    return res;
}
//poluchit konkretnoe znachenie
function displayValue (minMaxAvg, field) {
    console.log(`value of the field ${field} is ${minMaxAvg[field]}`)
};
const minMaxAvg = computeMinMaxSalary(employees);
// displayValue(minMaxAvg, "avgSalary")
// displayValue(minMaxAvg, "minSalary")
// displayValue(minMaxAvg, "maxSalary")
 
//zadacha s interviu
//est massive strok, raspechatat skolko raz vstrechaetsya ta ili inaya stroka v massive i raspechatka dolzhna bit v poryadke ubivaniya chastoti vstrechaemosti
//esli chastota vstrechaemosti odinakovaya to poryadok po alfavitu strok
const strings = ["b", "xyz", "lmn", "xyz", "lmn", "xyz", "a"];
// res = xyz -> 3
//lmn -> 2
//a -> 1
//b -> 1
function displayStringOccurrences(strings) {
    //poluchaem object gde pole eto stroka, a znachenie skolko stroka vstrechaetsya
    const stringOccurrences = getStringOccurrences(strings);
    //poluchaem dvuxmerni massiv
    const arrayOccurrences = Object.entries(stringOccurrences);
    arrayOccurrences.sort(stringComparator);
    arrayOccurrences.forEach(entry => console.log(`${entry[0]} -> ${entry[1]}`));
}
function getStringOccurrences (strings) {
    const res = {};
    strings.forEach(str => {
        if (!res[str]) {
            res[str] = 1;
        } else {
            res[str]++;
        }
    });
    return res;
}
function stringComparator(entry1, entry2) {
    let res = entry2[1] - entry1[1];
    if(res == 0) {
        res = entry1[0] < entry2[0] ? -1 : 1
    }
    return res;
}
//displayStringOccurrences(strings)
//HW#19
function getMostPopulatedCountry(employees) {
   const arrayOccurrencesContries = getOccurrencesCountries(employees);
   return arrayOccurrencesContries[0];
    //returns country with most amount of employees
}
function getOccurrencesCountries(employees) {
    const countries = employees.map(empl => empl.address.country);
    const countriesOccurrences = getStringOccurrences(countries);
    const arrayCountries = Object.entries(countriesOccurrences);
    arrayCountries.sort(stringComparator);
   return arrayCountries.map(entry => entry[0]);

}
function getMostPopulatedCountries (employees, counter) {
    const arrayOccurrencesContries = getOccurrencesCountries(employees);
    return arrayOccurrencesContries.slice(0, counter);
    //returns a given number (counter) of countries with most amount of employees
}


function isAnagram (word, anagram) {
    let res = false;
    if(word.length == anagram.length) {
       const res = compareLetters(word, anagram);
    } 
    return res;
    
    //returns true if a given anagram is indeed an anagram of a given word
    //anagram must have only same length as word 
    //anagram must have only same letters as word
    //hello anagram example: elolh, olleh, ohell, lehol.
    //examples none anagrams: eloll, ....

}
function compareLetters (word, anagram) {
    let res = false;
    if(word.length === anagram.length) {
    const letters = Array.from(word);
    const lettersOccurrances = getStringOccurrences(letters);
    const anagramLetters = Array.from(anagram);
    res = anagramLetters.every(letter => {
        let res = false;
        if (lettersOccurrances[letter]) {
            res = true;
            lettersOccurrances[letter]--;
            if(lettersOccurrances[letter] == 0) {
                delete lettersOccurrances[letter];
            }
        }
        return res;
    })
}
}
console.log(getMostPopulatedCountry(employees));
console.log(getMostPopulatedCountries(employees, 2));