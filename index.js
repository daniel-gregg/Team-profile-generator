//Import required NPM packages and modules
const inquirer = require('inquirer');
const engineerCardTemplate = require('./lib/engineerCardTemplate.js');
const managerCardTemplate = require('./lib/managerCardTemplate.js');
const studentCardTemplate = require('./lib/studentCardTemplate.js');
const renderCards = require('./lib/renderCards.js')

let ANSWERS = [];

//Import local js modules
const questions = require("./lib/questions.js");
const writeHtml = require('./lib/renderCards.js');

//Initialise app function - this runs the prompts in the console once the program is called with 'node index.js'
async function init() {
    let cont = true;
    const answersArray = await whileLoop(cont)

}

// Single run-through of the questions to fill out employee fields
const askQuestions = async () => {
    return await inquirer.prompt(questions)
}

//Loops through the questions while the user wants to add more employees.
const whileLoop = async(cont) => {
    let keepAskingQuestions = cont;
    while(keepAskingQuestions) {
        const newAnswers = await askQuestions()
        writeHtml(createCards(newAnswers));
        keepAskingQuestions = newAnswers.Continue
    }
}

//Creates a template literal 'card' for html insertion in the 'writeHtml' function 
const createCards = (el) => {
    if(el.role === "Manager"){
        return managerCardTemplate(el.name, el.idNumber, el.email, el.officeNumber)
    }
    
    if(el.role === "Engineer"){
        return engineerCardTemplate(el.name, el.idNumber, el.email, el.gitHubName)
    } 
    
    if(el.role === "Intern"){
        return studentCardTemplate(el.name, el.idNumber, el.email, el.schoolName)
    }
}

// Function call to initialize app
init();