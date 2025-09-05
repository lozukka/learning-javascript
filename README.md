## learning-javascript

Just a collection of small projects where I learn (or re-learn) JavaScript.

## What I’m doing

I decided to practice JavaScript step by step. To help me, I asked AI (ChatGPT) to create a learning path and a list of projects I could use to strengthen my knowledge. Then I built each project, sometimes first on my own and sometimes with AI’s guidance.

## What I have learned:

# Project 1: A temperature converter

I learned:

- how to read <input> values
- how to print to the DOM
- variables and functions

I should add a warning-text, that shows when user gives an invalid or empty input. 

# Project 2: A simple calculator

I learned:

- how to convert <input> values into numbers
- if / else if / else structures
- event listeners!
- how to debug scripts when they don’t work

# A click counter

I learned:

- this was more of a refresher project, repeating basics from Project 1 and 2
- adding 1 to a value
- manipulating the DOM

# Project 4: Greeting by name

This time I first wrote my own version of the assignment — very simple and basic.
Then I asked ChatGPT for a script. Oh boy, I learned a lot.

I added:

- a function that gives different greetings depending on the time of day
- a function that trims and normalizes text input
- a slightly different way to write the submit event listener

These options would be cool to add in the future:
- make the greetings multilingual
- make a customizable greeting

# Project 5: A coin flip

I first coded this project on my own and then compared with ChatGPT’s version.

I learned:

- Math.random() and Math.floor()

I later added:

- a stats block to keep track of flips

I’ve noticed it’s already easier to plan the JavaScript logic compared to the beginning. (yey!)

# Project 6: Multiplication table

I don’t know why, but this concept was hard to understand, visualize, and plan. I used ChatGPT as a mentor here. Honestly, this project felt like a big leap forward.

I learned:

- how to plan functions (keep them short and simple!)
- for loops
- how to use AI as a mentor and teacher

# Project 7: Guess the number

Even though this was a bigger project, it felt surprisingly easy.

I learned:

- how to structure the script better
- planning one main function with smaller helper functions

After AI’s suggestion:

- I added !isNaN(input) to validation. Strictly speaking, I didn’t need it since the input type was number, but it might be useful later.

# Project 8: Character counter

I learned:

- how to read user input in real time
- how to count characters
- how to change color with JavaScript

# Project 9: Background color switcher

I learned:

- classList.toggle
- writing a function to create a random color

Overall, very proud of this little project.

# Project 10: Password checker

I learned:

- how to check strings:

if (/[A-Z]/.test(password))   // uppercase letters  
if (/[0-9]/.test(password))   // numbers  
if (/[^A-Za-z0-9]/.test(password))   // special characters


This project felt difficult — especially at the beginning.

# Project 11: Timer

I learned:

- setInterval and clearInterval
- I also made a version where the timer starts at local time

# Project 12: Small quiz

I learned:

- you can call functions from the HTML side
- I tried a forEach loop for the first time
- creating an array from radio buttons
- comparing two arrays

# Project 13: Show all the days of one month

I learned:

- experimenting with the Date API

# Project 14: To-do list

I learned:

- how to use localStorage
- how to validate text input

# Project 15: Shopping cart

I learned

- how to use localstorage with array objects
- got more familiar with localstorage

## Overall learnings so far

Looking back, I can see some real progress:

- I’ve moved from basic DOM manipulation to more structured code with functions and loops.
- Debugging is getting easier, and I now plan my logic more clearly before coding.
- I’ve practiced working independently and then comparing my solutions with AI, which often gave me new perspectives.
- I’m starting to recognize patterns and re-use ideas from earlier projects in later ones.

## What’s next?

Some possible next steps for learning:

- Bigger projects: I would like to combine several features (e.g., a quiz app and a score tracker).
- Best practices: I would like to learn about code organization, naming conventions, and comments to make scripts easier to read. 
- Real-world use cases: think about how these small projects could connect to real problems or apps (e.g., a password checker inside a signup form).