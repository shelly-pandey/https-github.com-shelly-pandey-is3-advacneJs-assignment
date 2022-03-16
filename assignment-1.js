// 1. Write a function that accepts an array of numbers. Return a new array with all elements doubled
// Ex: double([1,2,3]) => [2,4,6]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function doubleElements(arrNumbers) {
    return arrNumbers.map(number => (number * 2));
}

console.log(doubleElements(numbers));


// 2. Write a function that accepts an array of numbers. Return a new array with only elements that are even number
// Ex: filterEven([1,2,3,4,5,6]) => [2,4,6]

function evenNumbers(arrNumbers) {
    return arrNumbers.filter(number => number % 2 == 0);
}

console.log(evenNumbers(numbers));


// 3. Write a function that accepts an array of student object. Each student object will have a name property. Return those students that has name length larger than 5
// Ex: const students = [{name: "abc"}, {name: "Umer Khan"}, {name: "Duy Nguyen"}]
//     filterStudent(students) => [{name: "Umer Khan"}, {name: "Duy Nguyen"}]

const students = [{ name: "Rithika" }, { name: "Umer" }, { name: "Duy" }]

function nameLength(arrStudents) {
    return arrStudents.filter(student => student.name.length > 5);
}

console.log(nameLength(students));

// 4. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the largest number
// Ex: largest(1,2,3,4,5,6) => 6
// Hint: use Math.max()

function largestNum(...arguments) {
    return Math.max(...arguments);
}

console.log(largestNum(2, 1, 3, 66, 222));

// 5. Write a function that accepts an unlimited amount of arguments. The arguments are of type number. Return the sum of all of them
// Ex: sum(1,2,3,4,5) => 15

function sumNum(...arguments) {
    return arguments.reduce(
        (previousValue, currentValue) => previousValue + currentValue
    )
}

console.log(sumNum(1, 2, 3, 4));