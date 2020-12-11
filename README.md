# Planet Trivia

[![License: MIT](https://img.shields.io/badge/Licence-MIT-green.svg)](https://opensource.org/licenses/MIT)

A local multiplayer trivia game! Play with up to four people to test your trivia knowledge on various topics.

![planetTrivia](https://github.com/rajtandel21/trivia-planet/blob/development/src/images/triviaplanet.gif)

To visit the website click [here](https://trivia-planet.netlify.app)

## To use

Clone down the repo and `npm install` to download the packages
To start the app, use `npm start`

## Technologies used

- Figma
- HTML
- CSS
- JavaScript
- React
- Redux

## Process

Project started with some research on trivia apps and aligning them with the given project brief. Figma was used to generate a wireframe for both the redux data flow and the architecture of the app.
The majority of the coding was done as a whole group and in smaller sub teams.
Working code was pushed regularly to the development branch here on github.

## General Features

- Welcome page with general instructions
- Navbar with two buttons to toggle between game and welcome page

### Game Features:

> Multiplayer game for up to four players, each one identified by a player name

> Choice from three topics in both **true/false** and **multiple choice** game mode; choice of three difficulty levels

> Winner page displays the winner and allows players to play again with a dedicated button

## Wins and Challenges

| **Wins**                                     | **Challenges**                  |
| -------------------------------------------- | ------------------------------- |
| Testing coverage above 80%                   | Testing                         |
| All must haves completed in project          | Media queries                   |
|                                              | Implementing favicon in webpack |
|                                              | Refresh/restarting the game     |
| Succeeded in shuffling responses for players |                                 |

## Bugs

- Game currently needs a hard refresh to reset options if the _Play again_ button is not used
- Players cannot have the same name as the game will not render the same name for two individuals

## Future Features

- Display a tie message if there are two or more players with the same number of points
- Include a leader board
- Improve responsive layout for mobile devices (react native) and add functionality for smaller screens, such as responsive navbar

## Licence

[MIT Licence](https://opensource.org/licenses/mit-license.php)
