#! /usr/bin/env node
// Write a program that determines whether a given number is positive or negative.
import inquirer from "inquirer";
let number = await inquirer.prompt([
    {
        name: "number",
        message: "Please Enter a Number.",
        type: "number"
    },
]);
if (number.number >= 0) {
    console.log("The number is Positive.");
}
else if (number.number = 'null') {
    console.log("Please Enter a value in positive or negative. It is not a number (NaN)");
}
else {
    console.log("The number is Negative.");
}
