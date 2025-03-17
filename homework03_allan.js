console.log('\n--- Homework03.01---');
/*
Requirement:
Write a  program that generates 3 random numbers between 1 to 100 (1 and 100 are included)

Print true if the average of the random numbers is greater or equals 50. 
Print false if the average of the random numbers is less than 50.

Test data 1:
20, 70, 25

Expected Output 1: false


*/

let n1 = Math.ceil(Math.random() * 100);
let n2 = Math.ceil(Math.random() * 100);
let n3 = Math.ceil(Math.random() * 100);
let result = 0;

console.log(`Test Data = ${n1}, ${n2}, ${n3}`);

if ((n1 + n2 + n3) / 3 >= 50) result = "true";
else result = "false";

console.log(result);

console.log('\n--- Homework03.02---');
/*
Write a  program that generates 3 random numbers between 1 to 3 (1 and 3 are included)

-If all numbers are different, then print “NO MATCH”
-If any of those 2 numbers are equal, then print “DOUBLE MATCH”
-If all 3 numbers are equal, then print “TRIPLE MATCH”

Test data 1:
3, 3, 3

Expected Output 1: TRIPLE MATCH

Test data 2:
1, 3, 3

Expected Output 2: DOUBLE MATCH

Test data 3:
1, 2, 3

Expected Output 3: NO MATCH

Test data 4:
1, 1, 2

Expected Output 4: DOUBLE MATCH
*/

let no1 = Math.ceil(Math.random() * 3);
let no2 = Math.ceil(Math.random() * 3);
let no3 = Math.ceil(Math.random() * 3);

let match = 0;

if (no1 === no2 && no1 === no3 && no2 == no3) {
    match = "TRIPLE MATCH";
}
else if (no1 !== no2 && no1 !== no3 && no2 !== no3) {
    match = "NO MATCH";
}
else {
    match = "DOUBLE MATCH";
}
console.log(`Test Data = ${no1}, ${no2}, ${no3}`);
console.log(`Expected Output: ${match}`);

console.log('\n--- Homework03.03---');
/*
Requirement:
Write a function named as hasA() which takes a string word as an argument and returns true if given string has a character "a" or "A", and false otherwise when invoked.

NOTE: Assume you will not be given an empty word.
Examples:
hasA("Tech") 	-> false
hasA("Global") 	-> true
hasA("") 		-> false
hasA("Apple") 	-> true
*/


function hasA(word) {
    if(word.includes("a")) return "true" ;
    else return "false";
}

const words = ["Tech", "Global", "", "Apple"];

for (const element of words) {
    console.log(`hasA("${element}") -> ${hasA(element)}`);
}

console.log('\n--- Homework03.04---');

/*
Requirement:
Write a function named as doubleOrTripleWord() which takes a string word as an argument and returns the given word back tripled if the string length is even or doubled if the string length is odd when invoked.

Examples:
doubleOrTripleWord("Tech") 	-> "TechTechTech"
doubleOrTripleWord("Apple") 	-> "AppleApple”
doubleOrTripleWord("") 		-> ""
doubleOrTripleWord(" ") 		-> " "
doubleOrTripleWord("1") 	-> "11"
doubleOrTripleWord("22") 	-> "222222"
*/

function doubleOrTripleWord(word) {
    return word.length % 2 === 0 ? word + word + word : word + word;
}

const word = ["Tech", "Apple", "", " ", "1", "22"];

for (const element of word) {
    console.log(`doubleOrTripleWord("${element}") -> "${doubleOrTripleWord(element)}"`);
}

console.log('\n--- Homework03.05---');
/*
Requirement:
Write a function named as firstWord() which takes a string word as an argument and returns the first word from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
firstWord("Hello World") 		-> "Hello"
firstWord("I like JavaScript") 	-> "I"
firstWord("Hello") 		-> "Hello"
firstWord("") 		-> ""
firstWord("    ") 		-> ""
*/
function firstWord(word) {
    return word.split(" ")[0];
}

const words1 = ["Hello World", "I like JavaScript", "Hello", "", "    "];

for (const element of words1) {
    console.log(`firstWord("${element}") -> ${firstWord(element)}"`);
}

console.log('\n--- Homework03.06---');
/*
Requirement:
Write a function named as lastWord() which takes a string word as an argument and returns the last word from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
lastWord("Hello World") 		-> "World"
lastWord("I like JavaScript") 	-> "JavaScript”
lastWord("Hello") 		-> "Hello"
lastWord("") 		-> ""
lastWord("    ") 		-> ""
*/
function lastWord(word) {
    return word.slice(word.lastIndexOf(" ") + 1);
}
const words2 = ["Hello World", "I like JavaScript", "Hello", "", "    "];

for (const element of words2) {
    console.log(`lastWord("${element}") -> "${lastWord(element)}"`);
}


console.log('\n--- Homework03.07---');

/*
Requirement: 
Write a function named as firstlastWord() which takes a string word as an argument and returns the first and last words from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
firstLastWord("Hello World") 	-> "HelloWorld"
firstLastWord("I like JavaScript") 	-> "IJavaScript”
firstLastWord("Hello") 		-> "HelloHello"
firstLastWord("") 		-> ""
firstLastWord("    ") 		-> ""
*/

function firstLastWord(word) {
    return word.includes(" ") ? word.split(" ")[0] + word.slice(word.lastIndexOf(" ") + 1) : word;
}

const words3 = ["Hello World", "I like JavaScript", "Hello", "", "    "];

for (const element of words3) {
    console.log(`firstLastWord("${element}") -> "${firstLastWord(element)}"`);
}

console.log('\n--- Homework03.08---');
/*
Requirement:
Write a function named as startVowel() which takes a string word as an argument and returns true if given string starts with a vowel, and false otherwise when invoked.

NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 
Examples:
startVowel("Hello") 	-> false
startVowel("Apple") 	-> true
startVowel("orange") 	-> true
startVowel("") 	-> false
startVowel("    ") 	-> false
startVowel("123") 	-> false
*/

function startVowel(word) {
    if (word !== "") {
        return word[0].toLowerCase().includes("a") ||
            word[0].toLowerCase().includes("e") ||
            word[0].toLowerCase().includes("i") ||
            word[0].toLowerCase().includes("o") ||
            word[0].toLowerCase().includes("u") ?
            "true" : "false" ;
    }
    else {
        return "false";
    }
}

const words4 = ["Hello", "Apple", "orange", "", "    ", "123"];

for (const element of words4) {
    console.log(`startVowel("${element}") -> ${startVowel(element)}`);
}

console.log('\n--- Homework03.09---');
/*
Requirement: 
Write a function named as swap4() which takes a string word as an argument and returns the string back with its first and last 4 characters swapped when invoked.

NOTE: Return empty string if the given string does not have 8 or more characters.

Examples:
swap4("abc") 	-> ""
swap4("JavaScript") 	-> "riptScJava"
swap4("TechGlobal") 	-> "obalGlTech"
swap4("") 		-> ""
swap4("    ") 		-> ""
swap4("Apple") 	-> ""
*/

function swap4(word) {
    if (word.length >= 8) {
        return word.slice(-4) + word.slice(4,-4) + word.slice(0,4);
    }
    else {
        return "";
    }
}

const words5 = ["abc", "JavaScript", "TechGlobal", "", "    ", "Apple"];

for (const element of words5) {
console.log(`swap4("${element}") -> "${swap4(element)}"`);
}

console.log('\n--- Homework03.10---');
/*
Requirement: 
Write a function named as swapFirstLastWord() which takes a string word as an argument and returns the string back with its first and last words swapped when invoked.

NOTE: Return empty string if the given string does not have 2 or more words.

Examples:
swapFirstLastWord("Hello World") 	-> "World Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like I"
swapFirstLastWord("foo bar foo bar") 	-> "bar bar foo foo"
swapFirstLastWord("") 		-> ""
swapFirstLastWord("    ") 		-> ""
swapFirstLastWord("Hello") 	-> ""
swapFirstLastWord("Hello   ") 	-> ""
*/

function swapFirstLastWord(word) {
    word = word.trim();
    if (word.includes(" ")){
        return word.slice(word.lastIndexOf(" ") + 1) + word.slice(word.indexOf(" "),word.lastIndexOf(" ") +1 ) + word.slice(0,word.indexOf(" "));
    }
    else {
        return "";
    }
}

const words6 = ["Hello World", "I like JavaScript", "foo bar foo bar", "", "    ", "Hello", "Hello   "];
for (const element of words6)
console.log(`swapFirstLastWord("${element}") -> "${swapFirstLastWord(element)}"`);