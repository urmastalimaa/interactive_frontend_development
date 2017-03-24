# Homework 2

## Build a number guessing game in React

* All requirements related to installing and running the application carry over from previous homework requirements
* All requirements related to style and submission carry over from previous homework requirements
* Game
  * Pick a random integer between 0 and 9 (target number)
  * User can submit guesses
  * For every guess, report to user whether the guess was smaller/larger than the target number
  * Game ends when user guesses the target number exactly
  * Display "You won!" when user guessed correctly
  * Game should be implemented as an ES6 class and it should hold all relevant state
  * *Game must only hold game logic, it should not be a React component*
  * A corresponding React component should use an instance of _Game_
  * All Game code paths must be unit tested
* User input
  * Create an <input> element which accepts only numbers
  * Submit guess when enter is pressed while <input> element is focused
  * A finished game must not accept any more guesses
* Move history
  * Record every guess and display whether it was smaller/larger to the user
  * Incorrect guesses should have red text color
  * Correct guess should have green text color
  * Moves should be in chronological order in DOM
  * Moves should be displayed in **reverse** chronological order to user using flexbox (last guess at top)
* React components
  * Every component should be as simple (have very little responsibilities) as possible
  * Only have state in components that need it
  * Always use pure function components when possible.
  * All props must be validated
