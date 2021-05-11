//Import required NPM packages and modules
const inquirer = require('inquirer');
const cardTemplate = require('./lib/cardTemplate.js');
const studentCardTemplate = require('./lib/studentCardTemplate.js');
const renderCards = require('./lib/renderCards.js')

let ANSWERS = [];

//Import local js modules
const questions = require("./lib/questions.js");
const writeHtml = require('./lib/renderCards.js');

const updateAnswers = (newData) => {
    ANSWERS = [...ANSWERS, newData];
}

//Initialise app function - this runs the prompts in the console once the program is called with 'node index.js'
async function init() {
    let cont = true;
    const answersArray = await whileLoop(cont)

    //up to here!
    console.log(ANSWERS)
    ANSWERS.forEach(x => createCards(x))
}

const askQuestions = async () => {
    return await inquirer.prompt(questions)
}

const whileLoop = async(cont) => {
    let keepAskingQuestions = cont;
    while(keepAskingQuestions) {
        const newAnswers = await askQuestions()
        updateAnswers(newAnswers);
        keepAskingQuestions = newAnswers.Continue
    }
}
// Function call to initialize app
init();

const createCards = (el) => {
    if(el.role != "student"){
        const name = el.name
        const id = el.idNumber
        const role = el.role
        const email = el.email
        const github = el.gitHubName
        writeHtml(cardTemplate(name, id, role, email, github))
    } else {
        const name = el.name
        const id = el.idNumber
        const email = el.email
        const school = el.schoolName
        writeHtml(studentCardTemplate(name, id, email, school))
    }
}