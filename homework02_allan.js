console.log('\n--- Homework02.01---');
/*
Requirement:
Convert given Strings below to number data types and find their sum, product, division, subtraction, remainder and exponentiation.

let str1 = "5", str2 = "2";

Expected results:
The sum of 5 and 2 is = 7
The product of 5 and 2 is = 10
The division of 5 and 2 is = 2.5
The subtraction of  5 and 2 is = 3
The remainder of 5 and 2 is = 1
The exponentiation of 5 and 2 is = 25


NOTE: expected results should exactly match!!!
*/

let str1 = "5", str2 = "2";

console.log(`Expected results:
The sum of ${Number(str1)} and ${Number(str2)}  is = ${Number(str1) + Number(str2)}
The product of ${Number(str1)} and ${Number(str2)}  is = ${Number(str1) * Number(str2)}
The division of ${Number(str1)} and  ${Number(str2)}  is = ${Number(str1) / Number(str2)}
The subtraction of ${Number(str1)} and  ${Number(str2)}  is = ${Number(str1) - Number(str2)}
The remainder of ${Number(str1)} and ${Number(str2)}  is = ${Number(str1) % Number(str2)}
The exponentiation of ${Number(str1)} and ${Number(str2)}  is = ${Number(str1) ** Number(str2)}`);

console.log('\n--- Homework02.02---');
/*
Requirement:
Convert given Strings below to number data types and find the greatest and smallest values and find the average and absolute difference of them.

let s1 = "200", s2 = "-50";

Expected results:
The greatest value is = 200
The smallest value is = -50
The average is = 75
The absolute difference is = 250

NOTE: expected results should exactly match!!!
*/
let s1 = "200", s2 = "-50";

console.log(`Expected results:
The greatest value is = ${Math.max(Number(s1),Number(s2))}
The smallest value is = ${Math.min(Number(s1),Number(s2))}
The average is = ${(Number(s1) + Number(s2)) / 2}
The absolute difference is = ${Math.abs(Number(s1) - Number(s2))}`);

console.log('\n--- Homework02.03---');
/*
Requirement:
Write a program that generates 2 random numbers between 1 and 50 (both 1 and 50 are included). Then, find the absolute difference of these numbers.
 
Test Data:5, 27
Expected Output:
The absolute difference between numbers is = 22
*/

let random1 = Math.ceil(Math.random()*50);
let random2 = Math.ceil(Math.random()*50);

console.log(`Test Data: ${random1}, ${random2}
Expected Output:
The absolute difference between numbers is = ${Math.abs(random1 - random2)}`);

console.log('\n--- Homework02.04---');
/*
Requirement:
Write a program that generates 5 random numbers between 1 and 50 (both 1 and 50 are included). Then, find the max and min of these numbers.
 
Test Data:3, 15, 45, 20, 25
Expected Output:
The max value = 45
The min value = 3
*/
let ran1 = Math.ceil(Math.random()*50);
let ran2 = Math.ceil(Math.random()*50);
let ran3 = Math.ceil(Math.random()*50);
let ran4 = Math.ceil(Math.random()*50);
let ran5 = Math.ceil(Math.random()*50);

console.log(`Test Data: ${ran1}, ${ran2}, ${ran3}, ${ran4}, ${ran5}
Expected Output:
The max value is = ${Math.max(ran1, ran2, ran3, ran4, ran5)}
The min value is = ${Math.min(ran1, ran2, ran3, ran4, ran5)}`);

console.log('\n--- Homework02.05---');
/*
Requirement:
Write a program that generates 3 random numbers between 50 and 100 both included. 
First print the numbers
Then, find the sum of these numbers
 
Test Data:55, 67, 90
Expected Output:
The number 1 = 55
The number 2 = 67
The number 3 = 90
The sum of numbers is = 212
*/

let n1 = Math.ceil(Math.random() * 50 + 50);
let n2 = Math.ceil(Math.random() * 50 + 50);
let n3 = Math.ceil(Math.random() * 50 + 50);

console.log(`Test Data: ${n1}, ${n2}, ${n3}
Expected Output:
The number 1 = ${n1}
The number 2 = ${n2}
The number 3 = ${n3}
The sum of the numbers is = ${n1 + n2 + n3}`);

console.log('\n--- Homework02.06---');
/*
Requirement:
Write a program that generates 3 random numbers between 1 and 100 (1 and 100 are included) and find if all the numbers are more than 25.

Print true if all numbers are greater than 25.
Print false if any of the number is less than or equals 25.
*/

let no1 = Math.ceil(Math.random() * 100);
let no2 = Math.ceil(Math.random() * 100);
let no3 = Math.ceil(Math.random() * 100);

let result = 0;

if (no1 > 25 && no2 > 25 && no3 > 25) result = "true";
else result = "false";

console.log(`Test Data: ${no1}, ${no2}, ${no3}`);
console.log(result);

console.log('\n--- Homework02.07---');
/*
Requirement:
Assume you are given a name let name = "David"; 
Print out the length of the name
Find the first character in the name and print it
Find the last character in the name and print it
Find the first 3 characters in the name and print them
Find the last 3 characters in the name and print them

Expected Output:The length of the name is = 5
The first character in the name is = D
The last character in the name is = d
The first 3 characters in the name are = Dav
The last 3 characters in the name are = vid
*/

let name = "David";

console.log(`The length of the name is = ${name.length}
The firs character in the name is = ${name[0]}
The last character in the name is = ${name[name.length - 1]}
The first 3 characters in the name are = ${name.slice(0,3)}
The last 3 characters in the name are = ${name.slice(-3)}`);
