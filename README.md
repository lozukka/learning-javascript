## learning-javascript

Just some simple little projects where I learn Javascript

## What I do:

Learning Javascript, or re-learn. I asked AI(ChatGPT) to do me a learning path about Javascript. I also asked it to do a list of project that I could train my Javascript knowledge.

## What I have learned:

# Project 1: A temperature converter

User can give temperature in Celcius or Farenheit, the page converts it to Farenheit or Celsius.

I learned:

- how to read <input> values
- how to print to DOM
- variables and function

# Project 2: A simple calculator

User can give two numbers and an operator. The page show the result of the given math problem.

I learned:

- how to change <input> values to numbers
- if & else if & else structure
- also eventlistener!
- how to debug script when it doesn't work

# Project 3: A click counter

User can click a button. The page show how many times the button has been clicked.

I learned:

- this was kindof refresh project, where I needed to do again some basic things that I did in project 1 and 2
- add 1 to value
- manipulate the DOM

# Project 4: Greeting the name

User can give a name and the page greets with a proper greeting. The greeting depends what time of the day it is.

This time I did first my version of the assigment. Very simple and basic.
Then I asked ChatGPT to a script. Oh boy, I learned a lot.

- I added a function that gives a different greeting at different times of the day.
- I added a function that trims and normalize given text.
  -I wrote the submit event listener a little different this time.

# Project 5: A coin flip

User can click a button. The page show result: heads or tales. In the page is also stats about the coin tosses.

I first coded this project on my own and then asked ChatGPT for a solution.
I learned:

- Math.random and Math.floor

I added after AI:

- stats block
  I have noticed that it is easier to plan the javascript logic than at the beginning.

# Project 6: Multiply Table

User gives a number and the page show a table with every multiply answers up to that number.

I don't know why, but this consept was very hard to understand, visualize and plan. I used ChatGPT as a mentor for this. I felt a major leap in learning with this project.
I learned:

- how to plan functions (keep it simple and short!)
- for-loops
- how to use AI as a mentor and teacher

# Project 7: Guess the Number

User tries to guess what random number between 1-100 the computer has chocen. The page shows also how many times did the user guess before the right answer.

Even tho this was a little bit bigger project, it felt easy.
I learned:

- structure the script better
- plan the functions (one main function, other small helper functions)

After AI:

- I added !isNaN(input) to validation. I know I don't needed it because the form input type is number, but I may need it in future.

# Project 8: Character counter

User can write text to the page. A counter shows how many characters the text contains. The text also change to different color when a certain number of characters are reached.

I learned:

- how to read user input in real time
- how to count characters
- how to change color with javascript

# Project 9: Background color-switcher

Page contains two buttons. One button changes the background to a random color. The other change between light and dark background color.

I learned:

- classList.toggle
- a function to create a random color

Overall very proud of this little project

# Project 10: Password checker

User can write a password. The page checks does it meet the required rules. Page also shows is the password weak, medium or strong.

I learned:

- how to check strings:
  if (/[A-Z]/.test(password)); Big letters

  if (/[0-9]/.test(password)); Numbers

  if (/[^A-Za-z0-9]/.test(password)); Special characters

This project felt difficult. It was very hard to get started.

# Project 11: Timer

The finnished project shows a countdown. User can start and stop the timer.

I learned:

- setInterval and clearInterval
- I also did a version where the timer start at local time

# Project 12: Small quiz

User can answer a few questions. The page shows how many points the user got with the picked answers.

I learned:

- you can call functions from HTML-side
- I tried foreach-loop for the first time
- array from radio-buttons
- how to compare two arrays

# Project 13: Show all the days of one month

User can give a month and an year. The page shows a list of the days on that month.

I learned:

- played with date API

# Project 14: To do

User can make a to do list. User can also delete tasks, and the list is saved in local storage.

I learned

- how to use localstorage
- how to validate text

# Project 15: Shopping cart

User can add products to shopping cart. Shopping cart shows what items are in it and what is total sum of the chocen products. The shopping cart is also saved in local storage.

I learned

- how to use localstorage with array objects
- got more familiar with localstorage
