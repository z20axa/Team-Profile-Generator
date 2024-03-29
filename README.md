# Team-Profile-Generator (Object-Oriented Programming)

## App Description

This app builds a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. 

This app also includes a unit test for every part of the code ensuring each passing.

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Technlogies Used

- [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4)

- [Jest package](https://www.npmjs.com/package/jest) 

- [File System 'fs' package](https://node.readthedocs.io/en/latest/api/fs/)

- [Node.js](https://nodejs.org/en/)

## Walkthrough Video Link

- Please follow [THIS LINK!](https://www.loom.com/share/966a1a04ab0f49659c1fa0ae3778a471)

## App Screenshots

![Capture1](./utils/public/images/Capture1.PNG)
![Capture2](./utils/public/images/Capture2.PNG)
![Capture3](./utils/public/images/Capture3.PNG)

