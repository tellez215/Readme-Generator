// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
  ## <em >Title 
  ${data.Title}

  <br>

  ## <em>Description
  ${data.Description}

  <br>

  ## <em>Installation
  ${data.Installation}

  <br>

  ## <em>Usage 
  ${data.Usage}

  <br>

  ## <em>License
  ${data.License}

  <br>

  ## <em>Contribution
  ${data.Contribution}

  <br>

  ## <em>Tests
  ${data.Tests}

`;
}

module.exports = generateMarkdown;