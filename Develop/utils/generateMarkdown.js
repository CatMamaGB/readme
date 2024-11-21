// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'None') return '';
  return `![License](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-blue.svg)`;
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (license === 'None') return '';
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPL 3.0': 'https://www.gnu.org/licenses/gpl-3.0',
    'BSD 3': 'https://opensource.org/licenses/BSD-3-Clause'
  };
  return licenseLinks[license];
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (license === 'None') return 'This project is not licensed.';
  return `This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For additional questions, you can reach me through:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
