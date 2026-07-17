# QA Automation Portfolio

End-to-end test suite built with [Playwright](https://playwright.dev/), covering login and page-load flows against [the-internet.herokuapp.com](https://the-internet.herokuapp.com/).

## About

This project is part of my ongoing move from manual/black-box testing into test automation. It demonstrates:

- Setting up a Playwright project from scratch
- Writing end-to-end tests in JavaScript
- Page-load verification with assertions
- A login flow test, including success and validation checks
- Cross-browser execution (Chromium, Firefox, WebKit)
- Video recording of test runs, configured in playwright.config.js

## Tech Stack

- Playwright (Node.js)
- JavaScript

## Project Structure

tests/
  example.spec.js   - Page-load verification
  login.spec.js      - Login flow, including assertions
playwright.config.js - Test runner config, including video recording

## Running the Tests

Clone the repo and install dependencies:

git clone https://github.com/CSantos1985/qa-automation-portfolio.git
cd qa-automation-portfolio
npm install

Run the full suite across all browsers:

npx playwright test

Run in headed mode (see the browser as it runs):

npx playwright test --headed

View the HTML report after a run:

npx playwright show-report

## About Me

I'm a QA Test Analyst with around 4.5 years of experience in manual and black-box testing, currently building test automation skills alongside a Level 4 Software Tester Apprenticeship.
