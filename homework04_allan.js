console.log('\n--- Homework04.01---');
/*
Requirement:
Write a program that outputs all the numbers that are divisible by 7 starting from 1 to 100 (both inclusive).

Expected Output:
7 
14
21
.
.
.
.
91
98
*/

for (let i = 1; i <= 100; i++) {
    if (i % 7 !== 0) continue;
    console.log(i);
}



console.log('\n--- Homework04.02---');

/*
Requirement:
Write a program that outputs all the numbers that are divisible by both 2 and 3 starting from 1 to 50 (both inclusive).

Expected Output:
6
12
18 
.
.
36
42
48
*/

for (let i = 1; i <= 50; i++) {
    if (i % (2 * 3) !== 0) continue;
    console.log(i);
}

console.log('\n--- Homework04.03---');
/*
Requirement:
Write a program that outputs all the numbers that are divisible by 5 starting from 100 to 50 (both inclusive).

Expected Output:
100
95
90
85
.
.
.
60
55
50
*/
for (let i = 100; i >= 50; i--) {
    if (i % 5 !==0 ) continue;
    console.log(i);
}

console.log('\n--- Homework04.04---');
/*
Requirement:
Write a program that outputs the squares of all numbers starting from 0 to 7 (both inclusive).
NOTE: Use loop!!!

Expected Output:
The square of 0 is =  0
The square of 1 is =  1
The square of 2 is =  4
The square of 3 is =  9
The square of 4 is =  16
The square of 5 is =  25
The square of 6 is =  36
The square of 7 is =  49
*/

for (let i = 0; i <= 7; i++) {
    console.log(`The square of ${i} is = ${i * i}`);
}

console.log('\n--- Homework04.05---');
/*
Requirement:
Write a program that finds sum of the numbers starting from 1 to 10 (both inclusive).
Calculation => 1+2+3+4+5+6+7+8+9+10

NOTE: Use loop!!!

Expected Output:
55
*/
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);

console.log('\n--- Homework04.06---');
/*
Requirement:
Write a program generates a random number between 1 and 10 (both inclusive).
And find the factorial of the number.

Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

For example:
5! = 5 × 4 × 3 × 2 × 1 = 120
4! = 4 × 3 × 2 × 1 = 24
0! (by convention) is defined as 1.
*/

const num = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let fact = num;
let mult = num;

for (let i = 1; i < num; i++) {
    fact *= i;
    mult = mult.toString() + " x " + (num - i).toString();
}
console.log(`${num}! = ${mult} = ${fact}`);

console.log('\n--- Homework04.07---');

/*
Requirement:
Write a program generates a random number between 1 and 100 (both inclusive).
Keep generating a new number till you get a number that is divisible by 5.

The program should also count how many attempts it takes to generate such a number.

Eventually, print the random number divisible by 5 with the number of attempts as below.

Expected Output:The random number is {randomNumber} and it took {attempts} attempt/s to generate it.
*/

let attempts = 0;
let randomNumber = 1;

while (randomNumber % 5 !== 0) {
    randomNumber = Math.floor(Math.random() * 100 - 1 + 1) + 1;
    attempts++;
}
console.log(`The random number is ${randomNumber} and it took ${attempts} attempt/s to generate it.`);


console.log('\n--- Homework04.08---');
/*
Requirement:
-Create an array that stores countries below.
Germany, Argentina, Ukraine, Romania

THEN:
-Output the entire array
-Ouput the entire array sorted lexicographically

Expected Result:
['Germany', 'Argentina', 'Ukraine', 'Romania' ]
[ 'Argentina', 'Germany', 'Romania', 'Ukraine' ]
*/
const array = ['Germany', 'Argentina', 'Ukraine', 'Romania' ];
console.log(array);
console.log(array.sort());

console.log('\n--- Homework04.09---');

/*
Requirement:
-Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 

THEN:
-Output the entire array
-Then, check if the array has Pluto element
	if it has Pluto, then output true
	if it does not have Pluto, output false

Expected Result:
[ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ]
true
*/
const cartoonDogs = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];

console.log(cartoonDogs);
console.log(cartoonDogs.includes('Pluto') ? 'true' : 'false');

console.log('\n--- Homework04.10---');
/*
Requirement:
-Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael

THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
	if it has both, then output true
	if it does not have both, output false

Expected Result:
[ 'Azrael', 'Garfield', 'Sylvester', 'Tom' ]
false
*/
const cartoonCats = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];
console.log(cartoonCats.sort());
console.log(cartoonCats.includes('Garfield') && cartoonCats.includes('Felix') ? 'true' : 'false');

console.log('\n--- Homework04.11---');
/*
Requirement:
-Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75

THEN:
-Output the entire array
-Ouput each element

Expected Result:
[ 10.5, 20.75, 70, 80, 15.75 ]
10.5
20.75
70
80
15.75
*/
const numbers1 = [10.5, 20.75, 70, 80, 15.75];
console.log(numbers1);
for (const element of numbers1) {
     console.log(element);
}

console.log('\n--- Homework04.12---');
/*
Requirement:
-Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler

THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P', ignoring cases.
-Output how many elements has 'book' or 'pen' partial strings, ignoring cases.

Expected Result:
['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ]
Elements starting with 'B' or 'P' = 5
Elements having 'book' or 'pen' = 4 
*/
const items = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];
let bOrPcounter = 0;
let bookOrPenCounter = 0;

for (const element of items) {
    if (element[0].toLowerCase().includes('b') || element[0].toLowerCase().includes('p')) bOrPcounter++;
    if (element.toLocaleLowerCase().includes('book') || element.toLocaleLowerCase().includes('pen')) bookOrPenCounter++;
}
console.log(`Elements starting with 'B' or 'P' = ${bOrPcounter}`);
console.log(`Elements having 'book' or 'pen' = ${bookOrPenCounter}`);

console.log('\n--- Homework04.13---');
/*
Requirement:
-Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78

THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10

Expected Result:
[ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ]
Elements that are more than 10 = 5
Elements that are less than 10 = 4
Elements that are 10 = 2
*/

const numbers2 = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
/*
let moreThan10Count = 0;
let lessThan10Count = 0;
let equals10Count = 0;

for (const element of numbers2) {
    if (element > 10) moreThan10Count++ ;
    if (element < 10) lessThan10Count++ ;
    if (element === 10) equals10Count++ ;
}
console.log(numbers2);
console.log(`Elements that are more than 10 = ${moreThan10Count}`);
console.log(`Elements that are less than 10 = ${lessThan10Count}`);
console.log(`Elements that are 10 = ${equals10Count}`);*/

console.log(`Elements that are more than 10 = ` + numbers2.reduce((acc, curr) => curr > 10 ? acc + 1: acc, 0)); //try instance method
console.log(`Elements that are less than 10 = ` + numbers2.reduce((acc, curr) => curr < 10 ? acc + 1: acc, 0));
console.log(`Elements that are 10 = ` + numbers2.reduce((acc, curr) => curr === 10 ? acc + 1: acc, 0));

console.log('\n--- Homework04.14---');

/*
Requirement:
-Create 2 arrays that stores numbers below.
First array-> 		[ 5, 8, 13, 1, 2 ]
Second array -> 	[ 9, 3, 67, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will take the greatest value of same index from first 2 arrays and output the third array as well.

Expected Result:
1st array is =  [ 5, 8, 13, 1, 2 ]
2nd array is = [ 9, 3, 67, 1, 0 ]
3rd array is =  [ 9, 8, 67, 1, 2 ]
*/

const firstArray = [5, 8, 13, 1, 2];
const secondArray = [9, 3, 67, 1, 0];
/*const thirdArray = [];

for (let i = 0; i < firstArray.length; i++) {
    thirdArray.push(Math.max(firstArray[i] , secondArray[i]));
}*/
console.log(`1st array is = [ ${firstArray} ]`);
console.log(`2nd array is = [ ${secondArray} ]`);
//console.log(`3rd array is = [ ${thirdArray} ]`);

console.log(`3rd array is = [ ${firstArray.map((element, i) => Math.max(element, secondArray[i]))} ]`); //try instance method

console.log('\n--- Homework04.15---');
/*
Requirement:
Write a function named as firstDuplicate() which takes an array argument and returns the first duplicated number in the array
when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the array. For two elements to
be considered as duplicated, value and data types of the elements must be same.

Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ])		-> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])		-> 5
firstDuplicate([ 5, '5', 3, 7, 4 ])		-> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])	-> 'abc'
firstDuplicate([ 1, 2, 3])			-> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ]) 	-> -1
*/
function firstDuplicate(first) {
    const firstDupe = [];
    firstDupe.push(first[0]);
    for (let i = 0; i < first.length; i++) {  
        if (firstDupe.includes(first[i + 1])) {
            return first[i + 1];
        }
        else if (first[i + 1] === undefined) { //reached end of array without finding a duplicate
            return "-1";
        }
        else {
          firstDupe.push(first[i]);
        }
    }
    return firstDupe;
}
console.log(`firstDuplicate([ 3, 7, 10, 0, 3, 10 ])		-> ${firstDuplicate([ 3, 7, 10, 0, 3, 10 ])}`);
console.log(`firstDuplicate([ 5, 7, 7, 0, 5, 10 ])		-> ${firstDuplicate([ 5, 7, 7, 0, 5, 10 ])}`);
console.log(`firstDuplicate([ 5, '5', 3, 7, 4 ])		-> ${firstDuplicate([ 5, '5', 3, 7, 4 ])}`);
console.log(`firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])		-> ${firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])}`);
console.log(`firstDuplicate([ 1, 2, 3])		-> ${firstDuplicate([ 1, 2, 3])}`);
console.log(`firstDuplicate([ 'foo', 'abc', '123', 'bar' ])		-> ${firstDuplicate([ 'foo', 'abc', '123', 'bar' ])}`);
/* tried ed's code
const firstDuplicate = (arr) => {
    let filtered = arr.filter(element => (arr.indexOf(element) !== arr.lastIndexOf(element)));
    return filtered.length > 0 ? filtered[0] : -1;
}
*/


console.log('\n--- Homework04.16---');

/*
Requirement:
Write a function named as getDuplicates() which takes an array argument and returns all the duplicated elements in the array when
invoked.

NOTE: Make your code dynamic that works for any array and return empty array if there are no duplicates in the array.
For two elements to be considered as duplicated,
value and data types of the elements must be same.

Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])		-> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ])			-> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ])	-> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])		-> [ ]
*/

const getDuplicates = (arr) => {
    let filtered = arr.filter(element => (arr.indexOf(element) !== arr.lastIndexOf(element))); // ed's code from Homework04.15. all duplicates
    let dups = [];
    for (const element of filtered) {
        if (dups.includes(element)) continue;
        dups.push(element);
    }
    return dups;
}
const arr = [ 0, -4, -7, 0, 5, 10, 45, -7, 0 ];
const arr1 = [ 1, 2, 5, 0, 7 ];
const arr2 = [ "'A'", "'foo'", "'12'" , 12, "'bar'", "'a'", "'a'", "'foo'" ];
const arr3 = [ "'foo'", "'12'" , 12, "'bar'", "'a'" ];
console.log(`getDuplicates([ ${arr} ])		-> [ ${getDuplicates(arr)} ]`);
console.log(`getDuplicates([ ${arr1} ])		-> [ ${getDuplicates(arr1)} ]`);
console.log(`getDuplicates([ ${arr2} ])		-> [ ${getDuplicates(arr2)} ]`);
console.log(`getDuplicates([ ${arr3} ])		-> [ ${getDuplicates(arr3)} ]`);



console.log('\n--- Homework04.17---');
/*
Requirement:
Write a function named as reverseStringWords() which takes a string as an argument and returns string back with each word
separately reversed when invoked.

NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces before and after words in the given string.

Examples:
reverseStringWords("Hello World") 		-> "olleH dlroW"
reverseStringWords("I like JavaScript") 	-> "I ekil tpircSavaJ"
reverseStringWords("Hello") 		-> "olleH"
reverseStringWords("") 			-> ""
reverseStringWords("    ") 		-> ""
*/

function reverseStringWords (string) {
    string.trim();
    let reversed = [];
    if (string.includes(" ")) {
        let arr4 = string.split(" ");
        for (const element of arr4) {
            reversed.push(element.split("").reverse().join(""));
        }
    } else {
        return string.split('').reverse().join("");
    }
    return reversed.join(" ");
}

console.log(`reverseStringWords("Hello World") 		-> "${reverseStringWords("Hello World")}"`);
console.log(`reverseStringWords("I Like JavaScript") 		-> "${reverseStringWords("I like JavaScript")}"`);
console.log(`reverseStringWords("Hello") 		-> "${reverseStringWords("Hello")}"`);
console.log(`reverseStringWords("") 		-> "${reverseStringWords("")}"`);
console.log(`reverseStringWords("    ") 		-> "${reverseStringWords("    ")}"`);

console.log('\n--- Homework04.18---');
/*Requirement:
Write a function named as getEvens() which takes 2 number arguments and returns all the even numbers as an array stored from
smallest even number to greatest even number when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no even numbers in the range of given
2 numbers. Assume you will not be given negative numbers.

Examples:
getEvens(2, 7)	-> [ 2, 4, 6 ]
getEvens(17, 5)	-> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4)	-> [ 4 ]
getEvens(3, 3)	-> [ ]
*/
function getEvens(num1, num2) {
    let evens = [];
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        if (i % 2 !== 0) continue;
        evens.push(i);
    }
    return evens;
}

console.log(`getEvens(2, 7)	-> [ ${getEvens(2, 7)} ]`);
console.log(`getEvens(17, 5)	-> [ ${getEvens(17, 5)} ]`);
console.log(`getEvens(4, 4)	-> [ ${getEvens(4, 4)} ]`);
console.log(`getEvens(3, 3)	-> [ ${getEvens(3, 3)} ]`);

console.log('\n--- Homework04.19---');
/*
Requirement:
Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the numbers divisible by 5 as an array
stored from first found match to last found match when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no numbers divisible by 5 in the range
of given 2 numbers. 
Assume you will not be given negative numbers.

Examples:
getMultipleOf5(3, 17)	-> [ 5, 10, 15]
getMultipleOf5(23, 5)	-> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5)	-> [ 5 ]
getMultipleOf5(2, 4)	-> [ ]
*/

function getMultipleOf5(num1, num2) {
    let multipleOf5 = [];
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        if (i % 5 !== 0) continue;
        multipleOf5.push(i);
    }
    if (num1 > num2) multipleOf5.reverse();
    return multipleOf5;
}

console.log(`getMultipleOf5(3, 17)	-> [ ${getMultipleOf5(3, 17)} ]`);
console.log(`getMultipleOf5(23, 5)	-> [ ${getMultipleOf5(23, 5)} ]`);
console.log(`getMultipleOf5(5, 5)	-> [ ${getMultipleOf5(5, 5)} ]`);
console.log(`getMultipleOf5(2, 4)	-> [${getMultipleOf5(2, 4)} ]`);

console.log('\n--- Homework04.20---');
/*
Requirement:
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string composed with below requirements when invoked.
You need to find all the numbers within the range of given 2 numbers (both inclusive) and store them in a string from smallest to
greatest number with a ' | ' separator for each number.
You will need to convert numbers divisible by 3 to 'Fizz'
You will need to convert numbers divisible by 5 to 'Buzz'
You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.

Examples:
fizzBuzz(13, 18)	-> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" 
fizzBuzz(12, 5)	-> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
fizzBuzz(5, 5)	-> "Buzz"
fizzBuzz(9, 6)	-> "Fizz | 7 | 8 | Fizz"
*/

function fizzBuzz(num1, num2) {
    let arr5 = [];
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        arr5.push(i);
    }
    return arr5.map(e => e % 5 === 0 && e % 3 === 0 ? "FizzBuzz" : e % 5 === 0 ? "Buzz" : e % 3 === 0 ? "Fizz" : e).join(" | ");
}

console.log(`fizzBuzz(13, 18)	-> "${fizzBuzz(13, 18)}"`);
console.log(`fizzBuzz(12, 5)	-> "${fizzBuzz(12, 5)}"`);
console.log(`fizzBuzz(5, 5)	-> "${fizzBuzz(5, 5)}"`);
console.log(`fizzBuzz(9, 6)	-> "${fizzBuzz(9, 6)}"`);