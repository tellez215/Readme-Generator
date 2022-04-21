// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license.license === 0) {
        return ""
    } else if (license == 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (license == 'GPL 3.0') {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license == 'Apache 2.0') {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
        `
    } else if (license == 'BSD 3') {
        return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    }


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
  # <em >Title 
  #
  ${data.Title}

  <br>

  ## <em>Description
  #
  ${data.Description}

  <br>

  ## <em>Installation
  #
  ${data.Installation}

  <br>

  ## <em>Usage
  # 
  ${data.Usage}

  <br>

  ## <em>License
  #
  ${data.License}

  <br>

  ## <em>Contribution
  #
  ${data.Contribution}

  <br>

  ## <em>Tests
  #
  ${data.Tests}

`;
}

module.exports = generateMarkdown;