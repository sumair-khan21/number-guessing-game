#! /usr/bin/env node
import inquirer from "inquirer";

//computer generate a random number

//user input for guessing number

//user input or computer random number compare and show the result

const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
  {
    name: "userGuessNumber",
    type: "number",
    message: "type any random number between: 1 to 6 = ",
  },
]);

if(answer.userGuessNumber === randomNumber){
          console.log("OH VERY GOOD JOB:)")
}else{
          console.log("SORRY YOU GUESS WRONG NUMBER:(")
}