//--------------------------------------------------UNIT - 1 :- Introduction to JavaScript-----------------------------------------------------------------

// const PromptSync = require("prompt-sync");

/*OBJECTIVE :: Understand the basic set up and environment for coding in JavaScript. */

/*
1. Most of theory part about how language is developed and history about language
2. Setting up development environment and installation process
3. Running javascript program and what is extension of this language points
*/


//--------------------------------------------------UNIT - 2 :- Basic Syntax and Operators-----------------------------------------------------------------

/*OBJECTIVE :: Learn the fundamental syntax and operators. */

/* PRACTICAL - 1 : Print hello world */
// console.log("Hello World!");

/* PRACTICAL - 2 : Print a variable */
// let a = 2;
// /*let is used to create local scope variable*/
// var b = 7;
// /*var is used to create a global scope variable*/
// const c = 8;
// /*const is used to create a constant global scope variable which's value can't be changed anywhere else in the program*/
// console.log(a);
// console.log(b);
// console.log(c);

/*PRACTICAL - 3 : Perform arithmetic operations on 2 variables by using arithmetic operators */
//Method 1: by using and doing calculation at console.log function
// let a = 6;
// let b = 3;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// //Other two operators are increment and decrement that is used in the loops mostly ++,--

//Method 2: by storing arithmetic operations in other variable and printing it
// let a = 6;
// let b = 3;
// var sum = a+b;
// var sub = a-b;
// var mul = a*b;
// var div = a/b;
// var mod = a%b;
// var exp = a**b;
// console.log(sum);
// console.log(sub);
// console.log(mul);
// console.log(div);
// console.log(mod);
// console.log(exp);
// //Other two operators are increment and decrement that is used in the loops mostly ++,--

/*PRACTICAL - 4 : Use of assignment operators to assign value */
/*This operators overwrite each other when declaring an global variable,using and assigning it in all program
give logical error so i used local scope ("{--scope--}") to prevent logical error that happened with me when i
done this same mistake */
// {
// let x = 6;
// let y = 3;
// x += y;
// console.log(x);
// }
// {
// let x = 6;
// let y = 3;
// x -= y;
// console.log(x);
// }
// {
// let x = 6;
// let y = 3;
// x *= y;
// console.log(x);
// }
// {
// let x = 6;
// let y = 3;
// x /= y;
// console.log(x);
// }
// {
// let x = 6;
// let y = 3;
// x %= y;
// console.log(x);
// }
// {
// let x = 6;
// let y = 3;
// x **= y;
// console.log(x);
// }

/*PRACTICAL - 5 : Use of comparison operators to compare two variables*/
// let a = 3;
// let b = 6;
// console.log(a==b);
// console.log(a===b);
// console.log(a!=b);
// console.log(a!==b);
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);

/*PRACTICAL - 6 : Use of ternary operator to compare values*/
// let a = true;
// console.log(a?true:false);
// a = false;
// console.log(a?true:false);
// a = 1;
// console.log(a?true:false);
// a = 0;
// console.log(a?true:false);

/*PRACTICAL - 7 : Use of logical operator to determine logic between variables*/
// let a = 6;
// let b = 3;
// console.log(a > 6 && b < 4);
// //in logical AND operator both conditions have to be true to get true as result otherwise it always gives false
// console.log(a < 6 || b < 4);
// //in logical OR operator from both conditions any one of condition is has to be true to get true result and if both is false then it gives false as results
// console.log(a==!b);
// console.log(!a==!b);
// //in logical NOT operator if a condition is true then NOT make it false it's simple work is to invert condition from given one and make opposite condition as result

/*PRACTICAL - 8 : Use of type operators to determine type of variable and check instance of two class or constructor function*/
// let a = "Hello RU";
// let arr = [2,"hello",9.2,true,'g'];

// console.log(typeof(a));
// console.log(typeof(b));

// console.log(arr instanceof Array);
// console.log(a instanceof Array);

/*PRACTICAL - 9 : Use of comment single-line comment and multi-line comments*/
//This is single-line comment defined by prefix "//"
/*This is multi-line comment defined by "/*" suffix and it's mirror sign as prefix and comment written between this suffix and prefix */
//Comment is a part of program that ignored by interpreter of js to write text in program and prevent errors and prevent execution of code while testing new code in same file


//--------------------------------------------------UNIT - 3 :- Control Flow (Conditionals and Loops)--------------------------------------------------------

/*OBJECTIVE :: Master conditional statements and loops to control flow of your code. */

/*-------------------------------------------------MODULE 1: Conditionals statements-------------------------------------------------------------------------*/

/*PRACTICAL - 10 : Use if-else statement to check if a condition is true or not and handle o/p according to it. */
// const prompt = require('prompt-sync')();
// let a = parseInt(prompt("Enter a number :- "));
// let b = parseInt(prompt("Enter a number :- "));
// let sum = a+b;
// console.log(sum);
// if(sum < 10){
//     console.log("The sum of the given two numbers is less then 10!");
// }
// else{
//     console.log("The sum of the given two numbers is greater then 10!");
// }
/*
 Here the if condition is checked by interpreter and if if-condition satisfies and turn out to be true then
 the if block is executed otherwise else block is executed as default block of code. 
*/
/*
 USE CASES: if-else statement is used when any one of conditions has to be executed it can be if-condition otherwise 
 else-condition but both can't run at same time it can only run either if or else.
 Example : Check a greatest no from given 2 numbers, Check if a number is prime or not.
*/

/*PRACTICAL - 11 : Use of if-else-if statement / if-else-if ladder to check multiple possible condition in program.*/
//To check the grade of the student according to score.
//  const prompt = require('prompt-sync')();
//  let score = parseInt(prompt("Enter your score :- "));
//  if(score >= 90 && score <= 100){
//     console.log("Grade is A");
//     }
//  else if(score >= 80 && score < 90){
//     console.log("Grade is B");
//     }
//  else if(score >= 70 && score < 80){
//     console.log("Grade is C");
//     }
//  else if(score >= 60 && score < 70){
//     console.log("Grade is D");
//     }
//  else{
//     console.log("Grade is F");
//     }
/*
 Here the if else-if ladder is driving interpreter to check multiple conditions and if any one of conditions satisfies
 the specific block of code that is inside of that condition's statements runs and show o/p as designed in it, but what
 happens when any of that conditions don't satisfy that's a time when else block come in work, else block carries either
 errors or default statements inside it's block and executes simultaneously when any of upper conditions doesn't satisfy.
*/
/*
 USE CASES: When we don't know user's exact inputs but we know the multiple possible conditions that can be given by user 
 in input and give output according to input when a specific condition is satisfies. but when any of doesn't satisfy we have
 to run default block of code as error or default o/p 
 Example : Check a grade of students, Rock-paper-scissors game simulation.
*/
/*PRACTICAL - 12 : Use of switch statements in JavaScript to handle given inputs by user and give o/p according to input value*/
//To print a week day by inputting week day no.
// const prompt = require('prompt-sync')();
// let n = parseInt(prompt("Enter a day no from 1-7 :- "));

// switch(n){
//     case 1:
//         console.log("1. Monday ");
//         break;
//     case 2:
//         console.log("2. Tuesday ");
//         break;
//     case 3:
//         console.log("3. Wednesday ");
//         break;
//     case 4:
//         console.log("4. Thursday ");
//         break;
//     case 5:
//         console.log("5. Friday ");
//         break;
//     case 6:
//         console.log("6. Saturday ");
//         break;
//     case 7:
//         console.log("7. Sunday ");
//         break;
//     default:
//         console.log("Invalid day! Please enter day between 1-7...");
// }
/*
Here in program switch case handles 7 number inputs and give week day as output, and to prevent other cases to mixed up
together and mess up output the break statement is used. it simply terminate the interpreter to check further
conditions and it kicks out interpreter for further execution to prevent ruining the whole code, here default case 
handles errors that is inputted by a user and throws a error message as result.
*/
/*
USE CASES: Switch case statement is used when a user's input is known and we have to manipulate o/p according to i/p that is 
given by a user also if we have to run at least one block of code and have to handle errors too by throwing a error message 
at o/p window.
Example : Print a week day by no, Perform bank account actions with specific keywords.
*/

/*-------------------------------------------------MODULE 2: Loop and Loop Control-------------------------------------------------------------------------*/

/*PRACTICAL - 13 : Use loops to loop a specific action and do action till a specific condition don't terminate it.*/
//Use for loop to print a table of a number.
// const prompt = require('prompt-sync')();
// let n = parseInt(prompt("Enter a number :- "));
// let ans = 0;
// for(let i=1; i<11; i++){
//     ans = n * i;
//     console.log(+n +" x "+ i +" = " +ans);
// }

/*
Here when user give input about number that he/she want to print tores in n and for loop executes after it this loop has
a condition that i should remain less than 10 and till that time i should be incremented by +1 and inside loop block the 
statements multiplying n and i and reassigning ans value and storing that value in ans after all this table is being printed
in special brief way on console window.
*/
/*
USE CASES: for loop is used when we know the exact number of iterations that is going to be iterated and we know it's 
conditions also.
Example : Print a table by given number,To input array elements by user,To print array elements
NOTE:- for loop is most used and useful loop among all 2 other loops. it is known for it's known iterations count use.
*/

//=====for loop has other types too for..of,for..in,for await..of that is not yet mentioned but write here in future======//

// Use do-while loop to show countdown from 10 to 0
// let c = 10;
// do{
//     console.log(c);
//     c--;
// }
// while(c>=0);
/*
Here a small countdown timer from 10 to 0 built do while loop is used in this first the c assigned with value 10 after it
the interpreter entered in the do block that printed 10 and decreased it with 1 and then while condition is checked if while
satisfies then again interpreter go to do block otherwise not same repetitions done till while is true.
*/
/*
USE CASES: do-while loop is useful when we don't know number of iterations that loop has to iterate but know it's condition
and have to execute a block of code at least one time in program without relying on condition at first execution.
Example :- Countdown timer,User input validation,Menu selection in apps
*/
//NOTE:- do-while loop is one of the least used loop among other 2 loops. and it executes at least 1 time in program

//Use while loop to count length of string
// const prompt = require('prompt-sync')();
// let number = prompt("Enter a number :- ");
// let length = 0;
// while(number>0){
//     number = parseInt(number / 10);
//     length++;
// }
// console.log(length);
/*
Here user input is stored in number and initialized length variable with 0 as temporary value that is reassigned inside
while loop,while loop runs till numbers value can't get to 0 and number is divided by 10 that is converted to an integer
by parseInt function and length is incremented 1 when when loop is iterated it simply counting the string length. after 
all this the final length was printed and shown to the console window as output.
*/
/*
USE CASES:- while loop is used when you don't know exact number of iterations of loop that has to being performed by loop
but know exact conditions and only when conditions satisfies you want a loop to do it's job that strictly follows conditions
and work on condition's satisfaction and automatically breaks when it doesn't satisfy.
Example :- To count length of string without strlen function,Simple login attempts,Summing numbers till a specific limit.
*/
// NOTE: while loop is a strong condition sticked loops that strictly checks condition before execution.

/*PRACTICAL - 14 : Use break; and continue; statements in loops to manipulate loop outcome and flow of the loop.*/
//Use break statement in loop to avoid printing odd numbers of array.
// const prompt = require('prompt-sync')();
// let arr = [];
// // OPTIMIZE: 
// for(let i=0; i<6; i++){
//     arr[i] = parseInt(prompt("Enter number " +i +" :- "));
// }
// for(let i=0; i<6; i++){
//     if(arr[i] % 2 != 0){
//         break;
//     }
//     console.log("Even Numbers Are :- ",arr[i])
// }
/*Here in program 2 loops are iterated for different purpose's first for user input of array elements and second is for
printing final outcome of the program if condition is used to check if the number is even or odd in other hand break
statement inside the block of the if condition breaks the loop to prevent printing the odd numbers.
*/
/*
USE CASES:- break statement is used when we have to fully terminate the flow of the current operations.
Examples :- To avoid switch statements to overlap each others in switch scope {--}, Breaking out the nested loops,
Exiting a loop early.
*/
//NOTE: break statement terminate the whole process of specific action and guide it towards the start over from beginning.

//Use continue statement in loop to skip even numbers from 1 to 50
// for(i=1; i<51; i++){
//     if(i % 2 == 0){
//         continue;
//     }
//     console.log(i);
// }
/*
Here the for loop iterated from 1 to 100 and if condition is checking for the even numbers if even number found then 
continue statement skips that specific iteration and guide interpreter towards the next iteration just after skipped 
iteration.
*/
/*
USE CASES: continue statement is used in actions when we don't want to terminate whole flow but to just skip one specific
part of that action in program.
Example :- To ignore errors in loop, Filtering the data dynamically, Optimizing the nested loops.
*/
//NOTE: continue statement skips the specific part of the flow instead of breaking whole flow like break statement.

/*PRACTICAL - 15 :- Use ternary in program in order to check simple conditions as alternative of if-else statement.*/
//Use ternary operator to check largest number among two numbers.
// const prompt = require('prompt-sync')();
// let a = parseInt(prompt("Enter a number :- "));
// let b = parseInt(prompt("Enter a number :- "));
// let max = a>b ? a : b;
// console.log("Maximum number is :- ",+max);
/*Here are two inputs are taken from user by prompt function and ternary operator is checking the condition that
which number is greatest among these two numbers and store it in max variable and print the max variable in console
window.
*/
/*
USE CASES: ternary operator is used when we have to check simple conditions in program and want to reduce the code into
small piece of code instead if else statement in the program it can be also used as if-else statement short handed 
alternative.
Example :- To check simple condition in program where it can be alternative of if-else statement,
Conditional assignment, Short-handed function logic, Default value selection.
*/
//NOTE: It can be used as short code of if-else statement when we have to reduce code complexity.

//--------------------------------------------------UNIT - 4 :- Functions----------------------------------------------------------------------------------//

/*OBJECTIVE :: Understand how to create and use functions. */


/*-------------------------------------------------MODULE 1: System Defined functions-------------------------------------------------------------------------*/
/*
DEFINITION: System defined functions are the functions which are already defined in JavaScript and we can use them in our program.
without defining it again.
Example :- console.log(), console.error(), console.table(), console.time(), console.timeEnd(), console.assert(),
setTimeout(), setInterval(), clearInterval(), clearTimeout(), setImmediate(), clearImmediate(),
*/

/*-------------------------------------------------MODULE 2: User Defined functions-------------------------------------------------------------------------*/
/*
DEFINITION: User defined functions that are the functions which are defined by user in their program for specific task.
*/
/*
USE CASES: User defined functions are used to reduce the code complexity, Reusability of code, 
Improves the readability of code, Improves the maintainability of code, Improves the scalability of code.
*/
/*PRACTICAL - 16 :- Use user defined function to do certain tasks in program.*/

//Use function to make a bank account system.
 
// const prompt = require('prompt-sync')();
// let balance = 0;
// balance = Number(balance);

// function deposit(amount) {
//     balance += amount;
//     console.log("Amount deposited successfully.");
//     }
// function withdraw(amount) {
//     if (amount > balance) {
//         console.log("Insufficient balance.");
//         }
//         else {
//             balance -= amount;
//             console.log("Amount withdrawn successfully.");
//             }
//             }
// function checkBalance() {
//     console.log("Your current balance is: ", +balance);
//     }
//     function main() {
//         while (true) {
//             console.log("1. Deposit");
//             console.log("2. Withdraw");
//             console.log("3. Check Balance");
//             console.log("4. Exit");
//             let choice = prompt("Enter your choice: ");
//             switch (choice) {
//                 case '1':
//                     let amount = parseInt(prompt("Enter amount to deposit: "));
//                     deposit(amount);
//                     break;
//                 case '2':
//                     let amount1 = parseInt(prompt("Enter amount to withdraw: "));
//                     withdraw(amount1);
//                     break;
//                 case '3':
//                     checkBalance();
//                     break;
//                 case '4':
//                     console.log("Thank you for using our bank account system.");
//                     return ;
//                 default:
//                     console.log("Invalid choice. Please try again.");
//                 }
//             }
//         }
// main();
/* 
Here in the program a various functions are declared for specific actions like deposit, withdraw, check balance and 
main function which is the entry point of the program. The main function contains a while loop which keeps on asking 
the user for their choice and based on the choice it calls the respective function. The program also handles the invalid
choice by displaying an error message. The program also handles the insufficient balance by displaying an error message.
*/
//INCOMPLETE: More user defined function based programs are still pending write down that here when when come in mind.