// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
	if (license !== 'No License') {
		return `\n [![License](https://img.shields.io/badge/license-${license}-blue.svg)]`;
	} else {
		return '';
	}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	if (license !== 'No License') {
		return `* [License](#license)\n`;
	} else {
		return '';
	}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	if (license !== 'No License') {
		return `## License \n This Project is Licensed under the ${license} license`;
	} else {
		return '';
	}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	return `# ${data.title}
${renderLicenseBadge(data.license)}
  ## Description
${data.description}
  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Contribution Guidelines](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  ${renderLicenseLink(data.license)}

  ## Installation 
${data.install}

  ## Usage
${data.usage}

  ## Credits
${data.credits}

  ## Contribution
${data.guidelines}

  ## Tests
${data.test}

${renderLicenseSection(data.license)}

  ## Questions 
  ${data.github} \n
  ${data.email}
`;
}

module.exports = generateMarkdown;
