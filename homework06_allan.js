console.log('\n--- Homework06.01---');
/*
Requirement:
Write a function named noSpace() which takes a string as argument and returns a new string with
all the spaces removed.
Examples:
noSpace("") -> ""
noSpace("Javascript") -> "Javascript"
noSpace(" Hello ") -> "Hello"
noSpace(" Hello World ") -> "HelloWorld”
noSpace("Tech Global") -> "TechGlobal"
*/

const noSpace = string => string.split(" ").filter(e => /[^ ]/.test(e)).join("");

const strings1 = ["", "Javascript", " Hello ", " Hello World ", "Tech Global"];
strings1.forEach(x => console.log(`noSpace("${x}") -> "${noSpace(x)}"`));

console.log('\n--- Homework06.02---');
/*
Requirement:
Write a function named replaceFirstLast() which takes a string argument and returns a new string
with the first and last characters replaced.
NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
Examples:
replaceFirstLast("") -> ""
replaceFirstLast("Hello") -> "oellH"
replaceFirstLast("Tech Global") -> "lech GlobaT"
replaceFirstLast("A") -> ""
replaceFirstLast(" A ") -> ""
*/

function replaceFirstLast(string) {
    let str = string.trim();
    const firstChar = str.slice(-1);
    const midChar = str.slice(1, str.length - 1);
    const lastChar = str.slice(0, 1);

    return str.length < 2 ? "" : firstChar + midChar + lastChar;
    }

const strings2 = ["", "Hello", "Tech Global", "A", " A "];
strings2.forEach(e => console.log(`replaceFirstLast("${e}") -> "${replaceFirstLast(e)}"`));

console.log('\n--- Homework06.03---');
/*
Requirement:
Write a function named hasVowel() which takes a string argument and returns true if the string 
has a vowel, returns false if the string doesn’t contain any vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
Examples:
hasVowel("") -> false
hasVowel("Javascript") -> true
hasVowel("Tech Global") -> true
hasVowel("1234") -> false
hasVowel("ABC") -> true
*/
const hasVowel = string => /[aeiou]/.test(string.toLowerCase());

const strings3 = ["", "Javascript", "Tech Global", "1234", "ABC"];
strings3.forEach(e => console.log(`hasVowel("${e}") -> ${hasVowel(e)}`));


console.log('\n--- Homework06.04---');
/*
Requirement:
Write a function named checkAge() which takes a number argument to be considered as the 
yearOfBirth and returns a message below based on the given year.
If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023.
Examples:
checkAge(2015) -> "AGE IS NOT ALLOWED"
checkAge(2007) -> "AGE IS ALLOWED"
checkAge(2050) -> "AGE IS NOT VALID"
checkAge(1920) -> "AGE IS ALLOWED"
checkAge(1800) -> "AGE IS NOT VALID"
*/
function checkAge(yearOfBirth) {
    let age = 2025 - yearOfBirth;
    return age >= 16 && age <= 120 ? "AGE IS ALLOWED" : age < 16 && age > 0 ? "AGE IS NOT ALLOWED" : "AGE IS NOT VALID";
}
const birthYears = [2015, 2007, 2050, 1920, 1800];
birthYears.forEach(e => console.log(`checkAge(${e}) -> ${checkAge(e)}`));

console.log('\n--- Homework06.05---');
/*
Requirement:
Write a function named averageOfEdges() which takes three number arguments and will return 
average of min and max numbers .
Examples:
averageOfEdges(0, 0, 0) -> 0
averageOfEdges(0, 0, 6) -> 3
averageOfEdges(-2, -2, 10) -> 4
averageOfEdges(-3, 15, -3) -> 6
averageOfEdges(10, 13, 20) -> 15
*/

function averageOfEdges(number1, number2, number3) {
    let min = Math.min(number1, number2, number3);
    let max = Math.max(number1, number2, number3);
    return (min + max) / 2;
}

console.log(`averageOfEdges(0, 0, 0) -> ${averageOfEdges(0, 0, 0)}`);
console.log(`averageOfEdges(0, 0, 6) -> ${averageOfEdges(0, 0, 6)}`);
console.log(`averageOfEdges(-2, -2, 10) -> ${averageOfEdges(-2, -2, 10)}`);
console.log(`averageOfEdges(-3, 15, -3) -> ${averageOfEdges(-3, 15, -3)}`);
console.log(`averageOfEdges(10, 13, 20) -> ${averageOfEdges(10, 13, 20)}`);

console.log('\n--- Homework06.06---');
/*
Requirement:
Write a function named noA() which takes an array of strings as argument and will return a new 
array with all elements starting with "A" or "a" replaced with "###".
Examples:
noA(["javascript", "hello", "123", "xyz"]) -> ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"]) -> ["###", "123", "###", "javascript"]
noA(["apple", "abc", "ABC", "Alex", "A"]) -> ["###", "###", "###", "###", "###"]
*/

const noA = strArray => strArray.map(e => /[Aa]/.test(e[0]) ? "###" : e);

console.log(`noA(["javascript", "hello", "123", "xyz"]) -> [${noA(["javascript", "hello", "123", "xyz"])}]`);
console.log(`noA(["apple", "123", "ABC", "javascript"]) -> [${noA(["apple", "123", "ABC", "javascript"])}]`);
console.log(`noA(["apple", "abc", "ABC", "Alex", "A"]) -> [${noA(["apple", "abc", "ABC", "Alex", "A"])}]`);

console.log('\n--- Homework06.07---');
/*
Requirement:
Write a function named no3and5() which takes an array of integer numbers as argument and will 
return a new array with elements replaced by conditions below.
If element can be divided by 5, replace it with 99 
If element can be divided by 3, replace it with 100 
If element can be divided by both 3 and 5, replace it with 101
Examples:
no3and5([7, 4, 11, 23, 17]) -> [7, 4, 11, 23, 17]
no3and5([3, 4, 5, 6]) -> [100, 4, 99, 100]
no3and5([10, 11, 12, 13, 14, 15]) -> [99, 11, 100, 13, 14, 101]
*/

const no3and5 = numbers => numbers.map(e => e % 5 === 0 && e % 3 === 0 ? "101" : e % 5 === 0 ? "99" : e % 3 === 0 ? "100" : e);

console.log(`no3and5([7, 4, 11, 23, 17]) -> [${no3and5([7, 4, 11, 23, 17])}]`);
console.log(`no3and5([3, 4, 5, 6]) -> [${no3and5([3, 4, 5, 6])}]`);
console.log(`no3and5([10, 11, 12, 13, 14, 15]) -> [${no3and5([10, 11, 12, 13, 14, 15])}]`);

console.log('\n--- Homework06.08---');
/*
Requirement:
Write a function named countPrimes() which takes an array of integer numbers as argument and 
will return the number of the prime numbers in the given array.
NOTE: Prime number is a number that can be divided only by 1 and itself .
NOTE: Negative numbers cannot be prime .
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc. 
NOTE: Smallest prime number is 2.
Examples:
countPrimes([-10, -3, 0, 1]) -> 0
countPrimes([7, 4, 11, 23, 17]) -> 4
countPrimes([41, 53, 19, 47, 67]) -> 5
*/

function countPrimes(numbers) {
    let counter = 0;
    for(const number of numbers) {
        function isPrime(number) {
            if (number <= 1) return false;
            for (let i = 2; i < number; i++) {
                if (number % i === 0) return false;
            }
            return true;
        }
        if(isPrime(number)) counter++;
    }
    return counter;
}
const testArrays = [[-10, -3, 0, 1], [7, 4, 11, 23, 17], [41, 53, 19, 47, 67]];
testArrays.forEach(e => console.log(`countPrimes([${e}]) -> ${countPrimes(e)}`));


console.log('\n--- Homework06.09---');
/*
Requirement:
Write a function named removeDuplicates() which takes an array argument and returns a new 
array with all the duplicates removed.
Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]) -> [10, 20, 35, 60, 70]
removeDuplicates([1, 2, 5, 2, 3]) -> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1]) -> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) -> ["abc", "xyz", "123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"]) -> ["1", "2", "3"]
*/
const removeDuplicates = array => array.map((e, i) => i !== array.indexOf(e) ? "" : e).filter(e => /[^]/.test(e));

const testArrays1 = [[10, 20, 35, 20, 35, 60, 70, 60], [1, 2, 5, 2, 3], [0, -1, -2, -2, -1,], 
["abc", "xyz", "123", "ab", "abc", "ABC"], ["1", "2", "3", "2", "3"]];

testArrays1.forEach(e => console.log(removeDuplicates(e)));

console.log('\n--- Homework06.10---');
/*
Requirement: 
Write a method named isDateFormatValid() that takes a string as an 
argument and returns true if the given date is valid or returns false otherwise.
Expected Format: nn/nn/nnnn
So, it must be presented as <2digits>/<2digits>/<4digits>
Examples:
isDateFormatValid("") -> false
isDateFormatValid("15/30/2020") -> false
isDateFormatValid("10-30-2020 ") -> false
isDateFormatValid("10.30.2020") -> false
isDateFormatValid("5/30/2020") -> false
isDateFormatValid("05/30/2020 ") -> true
isDateFormatValid("10/2/2020") -> false
isDateFormatValid("10/02/2020 ") -> true
*/
function isDateFormatValid(date) {
    let trimmedDate = date.trim();
    const checkLength = trimmedDate.length === 10;
    const checkSeparator = trimmedDate.charAt(2) === "/" && trimmedDate.charAt(5) === "/";
    const checkDay = trimmedDate.slice(0, 2) <= 12;
    const checkMonth = trimmedDate.charAt(3) + trimmedDate.charAt(4) <= 31;
    const year = trimmedDate.slice(-4);
    let checkYear = true;
    
    if(/[\WA-Za-z]/.test(year)) checkYear = false;
    return checkLength && checkSeparator && checkDay && checkMonth && checkYear;
}
const dates = ["", "15/30/2020", "10-30-2020 ", "10.30.2020", "5/30/2020", "05/30/2020 ", "10/2/2020", "10/02/2020 "]
dates.forEach(e => console.log(`isDateFormatValid("${e}") -> ${isDateFormatValid(e)}`));

console.log('\n--- Homework06.11---');
/*
Requirement: 
Write a method named secondMax() takes an array argument and returns the 
second max number from the array.
NOTE: Assume that you will not be given empty array and if the array has only 
1 element, it will be returned as second max number.
NOTE: Be careful when there is multiple max numbers.
Examples:
secondMax([7, 4, 4, 4, 23, 23, 23]) -> 7
secondMax([3, 4, 5, 6]) -> 5
secondMax([10]) -> 10
*/
function secondMax(array) {
    if (array.length === 1) return array[0];
    return array.map((e, i) => i !== array.indexOf(e) ? "" : e).filter(e => e !== "").sort((a, b) => b - a)[1];
}

const testNums1 = [[7, 4, 4, 4, 23, 23, 23],[3, 4, 5, 6], [10]];
testNums1.forEach(e => console.log(`secondMax([${e}]) -> ${secondMax(e)}`));

console.log('\n--- Homework06.12---');
/*
Requirement: 
Write a method named secondMin() takes an array argument and returns the 
second min number from the array.
NOTE: Assume that you will not be given empty array and if the array has only 
1 element, it will be returned as second min number.
NOTE: Be careful when there is multiple min numbers.
Examples:
secondMax([7, 4, 4, 4, 23, 23, 23]) -> 7
secondMax([3, 4, 5, 6]) -> 4
secondMax([10]) -> 10
*/

function secondMin(array) {
    if (array.length === 1) return array[0];
    return array.map((e, i) => i !== array.indexOf(e) ? "" : e).filter(e => e !== "").sort((a, b) => a - b)[1];
}

const testNums2 = [[7, 4, 4, 4, 23, 23, 23],[3, 4, 5, 6], [10]];
testNums2.forEach(e => console.log(`secondMin([${e}]) -> ${secondMin(e)}`));

console.log('\n--- Homework06.13---');
/*
Requirement: 
Write a method named mostRepeated() takes an array argument and returns the most 
counted element from the array.
NOTE: Assume that you will not be given empty array and the count of one element will 
always be more than the others.
Examples:
mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]) -> 4
mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]) -> "pen"
mostRepeated([10]) -> 10
mostRepeated(["TechGlobal"]) -> "TechGlobal"
*/
function mostRepeated(array) {
    const counterObject = {};
    if(array.length === 1) return array[0];
    for(const element of array) {
        counterObject[element] = (counterObject[element] || 0) + 1;
    }
    let value = Object.values(counterObject).reduce((acc, curr) => Math.max(acc, curr));

    for(const key in counterObject) {
        if(value === counterObject[key]) return key;
    }
}
const array1 = [[4, 7, 4, 4, 4, 23, 23, 23], ["pen", "pencil", "pen", "123", "abc", "pen", "pencil"], [10], ["TechGlobal"]];
array1.forEach(e => console.log(`mostRepeated([${e}]) -> ${mostRepeated(e)}`));