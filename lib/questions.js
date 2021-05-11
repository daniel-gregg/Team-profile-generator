//An array of questions for user input providing input to the profile generator function
const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'Please enter the name of the employee',
    },
    {
      type: 'input',
      name: 'idNumber',
      message: 'Please enter the Identity Number of this employee',
    },
    {
      type: 'list',
      name: 'role',
      message: 'What role does this employee have?',
      choices: ['Manager','Engineer','Student']
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter the email of this employee'
    },
    {
      type: 'input',
      name: 'gitHubName',
      message: 'Please enter the github username of this employee',
      when: (answers) => answers.role !== 'Student'
    },
    {
      type: 'input',
      name: 'schoolName',
      message: 'Please enter the school of this person',
      when: (answers) => answers.role === 'Student'
    },
    {
      type: 'list',
      name: 'Continue',
      message: 'Do you want to add another employee?',
      choices: [{name: "Yes", value: true}, {name: "No", value: false}]
    }
  ];

module.exports = questions;
