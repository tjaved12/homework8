# Home Work-8

# Template Engine - Employee Summary

The project must prompt the user to build an engineering team. An engineering
team consists of a manager, and any number of engineers and interns.

## Table of Contents

1. [About the Project](#about-the-project)
1. [User Stories](#user-stories)
1. [Development Strategy](#development-strategy)
1. [Demo](#demo)
1. [User Specifications](#user-spfications)
1. [Extra Futures/Spefications](#extra-futures/specifications)
1. [End Result](#end-result)
1. [Getting Started](#getting-started) 
1. [Tech Stack](#tech-stack)


## About The Project

The project is to build a software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. TWhen the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user.

## User Stories

```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles

```

## Development Strategy

* Use the [Inquirer npm package](https://github.com/SBoudrias/Inquirer.js/) to prompt the user for their email, id, and specific information based on their role with the company. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.

* Your app will run as a Node CLI to gather information about each employee.


In the `Develop` folder, there is a `package.json`, so make sure to `npm install`.

The dependencies are, [jest](https://jestjs.io/) for running the provided tests, and [inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user.

There are also unit tests to help you build the classes necessary.

It is recommended that you follow this workflow:

1. Run tests
2. Create or update classes to pass a single test case
3. Repeat


## Demo

![image](https://user-images.githubusercontent.com/66760710/92138417-57368400-eddc-11ea-98e3-0dbe32ddbb10.png)

## User Specifications

- [x] Fully functional, deployed application.

- [x] GitHub repository with a unique name and a README describing the project.

- [x] Manager can look at his Team gitHub and email information

- [x] Application uses icons to represent Roles of Team members.


## Getting Started

Go to  https://github.com/tjaved12/homework8


## Tech Stack

1. Fron-end: Materialize CSS
2. jQuery
3. Deployed on GitHub Pages
