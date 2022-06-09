# Ben's Diner

## University of Washington, Full Stack Coding Bootcamp

### Group Project #2

### Natalie Bulger, Wonjong Park, Courtney Struelens, Vlad Berka

## Assignment Description

This is a Full Stack Web Development *group project* for the UW Bootcamp. The goal of the project is to create a fully functional full stack web application using all technnologies learned to date.
(Including `HTML`, `CSS`, `JavaScript`, `Bootstrap`, `Node.JS`, `Express.JS`, `Handlebars.JS`, `MySQL`, `Sequelize ORM`, `Model-View-Controller Paradigm`, `Bcrypt`, `Express-Session`, `.env`, `connect-session-sequelize`)

This project stresses equal importance between project management and web development.
A development process shall be identified and agreed upon to assist with pushing code, pulling code, and merging code conflicts on GitHub. This process shall include the division of labor and tasks.

A mockup / wireframe shall be created by an individual within the project team and used as a visual goal. (`UX/UI`)

A project user story and acceptance criteria shall be created by the project team and used as a functionality goal. (`Product Manager/Owner`)

Project management shall be `Agile` and augmented with `Kanban` style organization: with individual tasks divided, assigned, and tracked.

The group developed user story, acceptance criteria, and mockup for the assignment are copied to the end of this document.

## Project Scope

FOOD APP!
Create a full stack web page application that allows restaurant customers to view a digital menu, and order food without a human server interface.
Menu items shall be displayed and added to a shopping cart on click, with routes navigating various button events.
The temporary shopping cart will save data using `local storage`.
The permanent order history will available in a `MySQL database`.

Testing routes will be available using `Insomnia`.

No starting code has been provided.
No guidance, project choices, or project direction has been provided.

## Generalized Tasks

Web Development Tasks:
- Use the Foundation front-end framework and populate the DOM with: buttons and text areas in an organized layout
- Write javascript functions to handle Google Translate API fetch operations (pull, `JSON` parse, write to the DOM, and save data)  
- Write javascript functions to handle Merriam-Webster API fetch operations (pull, `JSON` parse, write to the DOM and save data)
- Use `Buttons` and `listenerEvents` to add web app functionality and responsiveness
- Use `@media queries` to add project screen adaptability and responsiveness
- Store translate history in `localStorage`

Project Management Tasks:
- Create a wireframe goal for the web app
- Identify and divide tasks among group members 
- Develop a process to cleanly push and pull code to GitHub to reduce merge conflicts 
- Check in with group members and *communicate* changes and problems

## List of Files

-   README.md - This current read me file
-   gitignore - Git Ignore file to ignore node_modules, DS.Store, (Mac users), .env
-   server.js - The primary javascript file that runs the application
-   db/ - The primary directory that contains database information in JSON format
-   models/ - The directory which stores all model configurations and connectivity
-   routes/ - The dirctory which contains all route files and miscellaneous custom middleware
-   config/ - The directory which contains the connection.js file for sequelize connectivity
-   package.JSON - JSON package that stores modules and settings used
-   ~./assets/- Folder for stored screenshots and instructor provided demo.gif

# Original Homework Assignment Details

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## URL to the GitHub Repository

[GitHub Pages Link:https://github.com/wonjong2/Bens_Diner](https://github.com/wonjong2/Bens_Diner)

## URL to the Heroku Hosted Application

[Ben's Diner, Back End Functionality](https://bens-diner.herokuapp.com/)

## License

MIT License

Copyright (c) [2022] [Natalie Bulger, Wonjong Park, Courtney Struelens, Vlad Berka]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
