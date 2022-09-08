// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');
// TODO: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		name: 'title',
		message: 'Enter a project title',
		validate: (nameInput) => {
			if (nameInput) {
				return true;
			} else {
				console.log('Please enter a title');
				return false;
			}
		},
	},
	{
		type: 'input',
		name: 'description',
		message: 'Enter project description',
	},
	{
		type: 'input',
		name: 'installation',
		message: 'Enter installation instructions',
	},
	{
		type: 'input',
		name: 'usage',
		message: 'Enter usage information',
	},
	{
		type: 'input',
		name: 'credits',
		message: 'Enter credits',
	},
	{
		type: 'input',
		name: 'guidelines',
		message: 'Enter contribution guidelines',
	},
	{
		type: 'input',
		name: 'test',
		message: 'Enter test instructions',
	},
	{
		type: 'checkbox',
		name: 'license',
		message: 'What license is used for this project?',
		choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'No License'],
	},
	{
		type: 'input',
		name: 'github',
		message: 'Enter your GitHub username',
	},
	{
		type: 'input',
		name: 'email',
		message: 'Enter your email address',
	},
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
	return fs.writeFileSync(path.join(process.cwd(), '/dist', fileName), data);
}

// TODO: Create a function to initialize app
async function init() {
	const answers = await inquirer.prompt(questions);
	writeToFile('README.md', generateMarkdown(answers));
	console.log('README generated');
}

// Function call to initialize app
init();
