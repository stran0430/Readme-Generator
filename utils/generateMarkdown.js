// Creating a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

//Creating a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title} 
${renderLicenseBadge(data.license)}

## Description
${data.description}

---


[A deployed version can be viewed here.](${data.link})

## Screenshot
![alt-text](${data.screenshot})

## Table of Contents

1. [Description](#description)
2. [Usage](#usage)
3. [Installation](#installation)
5. [License](#license)
6. [Contributors](#contributors)
7. [Tests](#tests)
8. [Contact Information](#contact-information)


## Usage
${data.usage}

---


## Installation
${data.installation}

<br>
  To clone the repo:

     git clone ${data.clone}


    
    
## License
${renderLicenseBadge(data.license)}


---

## Contributors
${data.contributors}

---


## Tests
${data.test}

---
## Contact Information

* GitHub Username: ${data.creator}
* GitHub Email: ${data.email}
`;
}

module.exports = generateMarkdown;
