Cypress Glitch Signup
Overview
This project automates the signup process on the Glitch support site using Cypress and TypeScript, including logging in with a GitHub account.

Setup

Clone the repo:

- git clone https://github.com/Medmj/glitch-support-signin-cypress.git
- cd glitch-support-signin-cypress

Install dependencies:

- npm install

Create a cypress.env.json file in the project root:

{
"githubUsername": "your-github-username",
"githubPassword": "your-github-password"
}

Replace "your-github-username" with your actual GitHub username.
Replace "your-github-password" with your actual GitHub password.

Running Tests:
To run the tests, use:

- npx cypress open

This opens the Cypress Test Runner. You can also run tests in headless mode with:

- npx cypress run

The test verifies successful login by checking for user-specific elements on the Glitch support site.
