Requirement:
console.log('\n--- Homework05.01---');
/*
Write a function named countPos() which takes an array of numbers as an argument and returns how
many elements are positive​ when invoked. 
Examples:
countPos([-45, 0, 0, 34, 5, 67]) 	-> 3
countPos([-23, -4, 0, 2, 5, 90, 123]) 	-> 4
countPos([0, -1, -2, -3]) 		-> 0
*/

const countPos = array => array.reduce((acc, curr) => curr > 0 ? acc + 1 : acc, 0);

const arr = [[-45, 0, 0, 34, 5, 67], [-23, -4, 0, 2, 5, 90, 123], [0, -1, -2, -3]];

for (const element of arr) {
    console.log(`countPos([ ${element} ]) 	-> ${countPos(element)}`);
}

console.log('\n--- Homework05.02---');
/*
Requirement:
Write a function named countA() which takes a string argument and returns how many A or a there are
in the given string when invoked.

NOTE: Ignore case sensitivity. 

Examples:
countA("TechGlobal is a QA bootcamp") 	-> 4
countA("QA stands for Quality Assurance") 	-> 5
countA("Cypress") 			-> 0
*/

const countA = string => string.toLowerCase().split("").reduce((acc, curr) => curr === "a" ? acc + 1 : acc, 0);

const str = ["TechGlobal is a QA bootcamp", "QA stands for Quality Assurance", "Cypress"];
for (const element of str) {
    console.log(`countA("${element}") 	-> ${countA(element)}`);
}

console.log('\n--- Homework05.03---');
/*
Requirement: 
Write a function named as countVowels() which takes a string word as an argument and returns the
count of the vowel letters when invoked.

NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello") 		-> 2
countVowels("Hello World") 		-> 3
countVowels("JavaScript is fun") 		-> 5
countVowels("") 			-> 0

*/

const countVowels = string => string.toLowerCase().split("").reduce((acc, curr) => "aeiou".includes(curr) ? acc + 1 : acc, 0);

const strs = ["Hello", "Hello World", "JavaScript is fun", ""];
for (const element of strs) {
    console.log(`countVowels("${element}") 		-> ${countVowels(element)}`);
}

console.log('\n--- Homework05.04---');
/*
Requirement: 
Write a function named as countConsonants() which takes a string word as an argument and returns the
 count of the consonant letters when invoked.

NOTE: A letter that is not vowel is considered as a consonant letter.Examples:
countConsonants("Hello") 		-> 3
countConsonants("Hello World") 		-> 8         should be 7 
countConsonants("JavaScript is fun") 		-> 12       should be to 10
countConsonants("") 			-> 0
*/
const countConsonants = string => string.toLowerCase().split("").filter(e => /[^aeiou\W0-9]/.test(e)).length;

const str1 = ["Hello", "Hello World", "JavaScript is fun", ""];
for (const element of str1) {
    console.log(`countConsonants("${element}") 		-> ${countConsonants(element)}`);
}

console.log('\n--- Homework05.05---');
/*
Requirement:
Write a function named countWords() which takes a string argument and returns the total count of
words in the given string when invoked.

NOTE: Be careful about the extra whitespaces before and after the string.
Examples:
countWords("     Javascript is fun       ") 		-> 3
countWords("Cypress is an UI automation tool.    ") 	-> 6
countWords("1 2 3 4") 				-> 4
*/

const countWords = string => string.trim().split(" ").length;

const str2 = ["     Javascript is fun       ", "Cypress is an UI automation tool.    ", "1 2 3 4"];
for (const element of str2) {
    console.log(`countWords("${element}") 		-> ${countWords(element)}`);
}

console.log('\n--- Homework05.06---');
/*
Requirement:
Write a function named as factorial() which takes a number as an argument and returns the factorial 
of the number when invoked.

NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

Assume you will not be given a negative number.
Examples:
factorial(5) 		-> 120
factorial(4)		-> 24
factorial(0)		-> 1
factorial(1)		-> 1
*/

function factorial(number) {
    let nFactorial = 1;
    if (number === 0) return 1;
    for (let i = 1; i <= number; i++) {
        nFactorial *= i;
    }
    return nFactorial;
}
console.log(`factorial(5) 		-> ${factorial(5)}`);
console.log(`factorial(4) 		-> ${factorial(4)}`);
console.log(`factorial(0) 		-> ${factorial(0)}`);
console.log(`factorial(1) 		-> ${factorial(1)}`);

console.log('\n--- Homework05.07---');
/*
Requirement: 
Write a function named as isPalindrome() which takes a string word as an argument and returns true 
if the word is palindrome or returns false otherwise when invoked.

NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam

NOTE: your function should ignore case sensitivity


Examples:
isPalindrome("Hello") 		-> false
isPalindrome("Kayak") 		-> true 
isPalindrome("civic") 		-> true
isPalindrome("abba") 		-> true
isPalindrome("ab  a") 		-> false
isPalindrome("123454321") 	-> true
isPalindrome("A") 		-> true
isPalindrome("") 		-> true

*/
const isPalindrome = string => string.toLowerCase().split("").reverse().join("") === string.toLowerCase();

const str3 = ["Hello", "Kayak", "civic", "abba", "ab  a", "123454321", "A", ""];
for (const element of str3) {
    console.log(`isPalindrome(${element}) 		-> ${isPalindrome(element)}`);
}

console.log('\n--- Homework05.08---');
/*
Requirement: 
Write a function named as countMultipleWords() which takes an array as an argument and returns the
count of the elements that has multiple words when invoked.

NOTE: Be careful about the extra whitespaces before and after the array element.
Examples:
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) 		-> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) 		-> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) 	-> 4
countMultipleWords([ ]) 					-> 0
*/

const countMultipleWords = array => array.filter(e => (e.includes(" "))).reduce((acc, curr) => curr.trim().includes(" ") ? acc + 1 : acc, 0);

const arr6 = [[ "foo", "", "    ", "foo bar", "     foo" ], [ "foo", "bar", "foobar", "     foobar   " ], [ "f o o", "b a r", "foo bar", "     foo bar   " ], [ ]];
for (const element of arr6) {
    console.log(`countMultipleWords([ ${element} ]) 		-> ${countMultipleWords(element)}`);
}

console.log('\n--- Homework05.09---');
/*
Requirement: 
Write a function named as count3OrLess() which takes a string word as an argument and returns the 
count of the words that has 3 characters or less when invoked.

Examples:
count3OrLess("Hello") 			-> 0
count3OrLess("Hi John") 			-> 1
count3OrLess("JavaScript is fun") 		-> 2
count3OrLess("My name is John Doe") 	-> 3
count3OrLess("") 			-> 0
*/

const count3OrLess = string => string.trim().split(" ").reduce((acc, curr) => curr === "" ? 0 : curr.length <= 3 ? acc + 1 : acc, 0);

const stringWords = ["Hello", "Hi John", "JavaScript is fun", "My name is John Doe", ""];
for (const element of stringWords) {
    console.log(`count3OrLess("${element}") 			-> ${count3OrLess(element)}`);
}

console.log('\n--- Homework05.10---');
/*
Requirement:
Write a function named as isPrime() which takes a number as an argument and returns true if the number
is prime or returns false otherwise when invoked.

NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It cannot 
be divided by any other number. The smallest prime number is 2 and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there is no negative prime numbers.

Examples:
isPrime(5) 		-> true
isPrime(2) 		-> true
isPrime(29) 		-> true
isPrime(-5)		-> false
isPrime(0)		-> false
isPrime(1)		-> false

*/
function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

const testNums = [5, 2, 29, -5, 0, 1];
for (const element of testNums) {
    console.log(`isPrime(${element}) 		-> ${isPrime(element)}`);
}
console.log('\n--- Homework05.11---');
/*
Requirement:
Write a function named add() which takes two array of numbers as argument and returns a new array 
with sum of given arrays elements.

NOTE: Be careful about the array sizes as they could be different.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2]​) 		-> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) 	-> [16, 11, 9,  3, 2, 7, 5, 10, 34]​
add([-5, 6, -3, 11], [5, -6, 3, -11]) 		-> [0, 0, 0, 0]

*/

function add(array1, array2) {
    if(array1.length > array2.length) {
        for(let i = 0; i < array1.length; i++) {
            array2.push(0);
        }
        return array1.map((sum, i) => sum + array2[i]);
    }
    else if(array2.length > array1.length) {
        for(let i = 0; i < array2.length; i++) {
            array1.push(0);
        }
        return array2.map((sum, i) => sum + array1[i]);
    }
    else {
        return array1.map((sum, i) => sum + array2[i]);
    }
}

console.log(`add([3, 0, 0, 7, 5, 10], [6, 3, 2]​) 		-> [ ${add([3, 0, 0, 7, 5, 10], [6, 3, 2])} ]`);
console.log(`add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) 		-> [ ${add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])} ]`);
console.log(`add([-5, 6, -3, 11], [5, -6, 3, -11]) 		-> [ ${add([-5, 6, -3, 11], [5, -6, 3, -11])} ]`);

console.log('\n--- Homework05.12---');
/*
Requirement: 
Write a function named as removeExtraSpaces() which takes a string word as an argument and returns 
the string back with all extra spaces removed when invoked.

Examples:
removeExtraSpaces("Hello") 		-> "Hello" 
removeExtraSpaces("      Hello    World     ") 	-> "Hello World" 
removeExtraSpaces("     JavaScript is          fun") 	-> "JavaScript is fun”
removeExtraSpaces("") 			-> ""
*/

const removeExtraSpaces = string => string.trim().split(" ").filter(e => /[^ ]/.test(e)).join(" ");

const strWords = ["Hello", "      Hello    World     ", "     JavaScript is          fun", ""];
for (const element of strWords) {
    console.log(`removeExtraSpaces("${element}") 		-> "${removeExtraSpaces(element)}"`);
}
console.log('\n--- Homework05.13---');
/*
Requirement: 
Write a function named findClosestTo10() which takes an array of numbers as argument and returns the
closest element to 10 from the given array.

NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, return the smaller number.
Examples:
findClosestTo10([10, -13, 5, 70, 15, 57]​) 	-> 5
findClosestTo10([10, -13, 8, 12, 15, -20]) 	-> 8
findClosestTo10([0, -1, -2]) 		-> 0

*/
function findClosestTo10(array) {
    let arr7 = array.map(e => e - 10);
    for(const element of arr7) {
        if(element < 0) {
            let filtered = arr7.filter(e => e < 0);
            max = Math.max(...filtered);
        }
        if(element > 0) {
            let filtered = arr7.filter(e => e > 0);
            min = Math.min(...filtered);
        }
    }
    return Math.min((10 - max), (10 - min));
}

console.log(findClosestTo10([10, -13, 5, 70, 15, 57]));

console.log('\n--- Homework05.14---');
/*
Requirement: 
Write a function named as isEmailValid() which takes a string email as an argument and returns true 
if the email is valid or returns false otherwise when invoked.

NOTE: A VALID EMAIL:
should NOT have any space.
should not have more than one “@” character.
should be in the given format <2+chars>@<2+chars>.<2+chars> meaning
There should be at least characters before @ character.
There should be at least 2 characters between @ and . Characters.
There should be at least 2 characters after the . character.

Examples:
isEmailValid("") 			-> false
isEmailValid("@gmail.com") 		-> false
isEmailValid("johndoe@yahoo") 		-> false
isEmailValid("johndoe@.com") 		-> false
isEmailValid("a@outlook.com") 		-> false
isEmailValid("johndoe@a.com") 		-> false
isEmailValid("johndoe@@gmail.com") 	-> false
isEmailValid("johndoe@gmail.com") 		-> true

*/

function isEmailValid(email) {
    if(email.includes(" ") || !(email.includes("@")) || email.indexOf("@") !== email.lastIndexOf("@") ||
    email.length < 8 || email.indexOf("@") < 2 || !(email.includes(".")) || 
    email.lastIndexOf(".") - email.indexOf("@") < 3 || email.length - 1 - email.lastIndexOf(".") < 2) {
        return false;
    }
    else {
        return true;
    }
}

const emailArray = ["", "@gmail.com", "johndoe@yahoo", "johndoe@.com", "a@outlook.com", "johndoe@a.com", "johndoe@@gmail.com", "johndoe@gmail.com"];

for (const element of emailArray) {
    console.log(`isEmailValid("${element}") 			-> ${isEmailValid(element)}`);
}

console.log('\n--- Homework05.15---');
/*
Requirement: 
Write a function named as isPasswordValid() which takes a string email as an argument and returns 
true if the password is valid or returns false otherwise when invoked.

NOTE: A VALID PASSWORD:
should have length of 8 to 16 (both inclusive).
should have at least 1 digit, 1 uppercase, 1 lowercase and 1 special char.
should NOT have any space.

Examples:
isPasswordValid("") 			-> false
isPasswordValid("abcd") 			-> false
isPasswordValid("abcd1234") 		-> false
isPasswordValid("Abcd1234") 		-> false
isPasswordValid("Chicago12345US!#$%") 	-> false
isPasswordValid("Abcd1234$") 		-> true
isPasswordValid("Chicago123$") 		-> true
isPasswordValid("Test1234#") 		-> true
*/

function isPasswordValid(password) {
    return (password.length > 7 && password.length < 17 && !(password.includes(" ")) && /[0-9]/.test(password) &&
    /[A-Z]/.test(password) && /[a-z]/.test(password) && /\W/.test(password));
}

const passwordArray = ["", "abcd", "abcd1234", "Abcd1234", "Chicago12345US!#$%", "Abcd1234$", "Chicago123$", "Test1234#"];

for(const element of passwordArray) {
    console.log(`isPasswordValid("${element}") 			-> ${isPasswordValid(element)}`);
}

