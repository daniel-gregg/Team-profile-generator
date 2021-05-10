//Import required NPM packages
const inquirer = require('inquirer');
const renderCards = require('/renderCards.js')
let ANSWERS = [];

//Import local js modules
const questions = require("./lib/questions.js");

const updateAnswers = (newData) => {
    ANSWERS = [...ANSWERS, ...newData];
}

//Initialise app function - this runs the prompts in the console once the program is called with 'node index.js'
async function init() {
    let cont = true;
    console.log("start")
    const answersArray = await whileLoop(cont)
    console.log("out of while loop")

    //up to here!
    array.forEach(renderCards)

    console.log(answersArray)
}

const askQuestions = async () => {
    return await inquirer.prompt(questions)
}

const whileLoop = async(cont) => {
    let keepAskingQuestions = cont;
    while(cont) {
        console.log("asking questions")
        const newAnswers = await askQuestions()
        updateAnswers(newAnswers);
        keepAskingQuestions = newAnswers.Continue
    }
    return arr
}
// Function call to initialize app
init();