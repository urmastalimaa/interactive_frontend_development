# Homework 3

## Build a word guessing game

* WordGame
  * Pick a random word from ['paper', 'grill', 'basil', 'hinge', 'ruler'] - target word
  * Users can submit guesses using a 'text' type input
  * For every guess, report to user whether it was correct and what letters were correct (same letter, same position as target word)
  * WordGame ends when user guesses target word exactly
  * Display "You won!" when user guessed correctly
  * WordGame should be implemented as an ES6 class and it should hold all relevant state
  * *WordGame must only hold game logic, it should not be a React component*
  * A corresponding React component should use an instance of _Game_
  * All WordGame code paths must be unit tested
* User input
  * Create an <input> element which accepts arbitrary text
  * Submit guess when enter is pressed while <input> element is focused
  * A finished game must not accept any more guesses
* Move history
  * Record every guess and display the guessed word with correct letters with green color and incorrect letters with red color.
  * Moves should be in chronological order in DOM
  * Moves should be displayed in **reverse** chronological order to user using flexbox (last guess at top)

## Presentational/Container components

* Move presentational components under components/ folder, container components under containers/ folder

## New game buttons

* Add two buttons for creating new games ("Create word game"/"Created number game")
* There should be no games initially
* When a new game button is clicked, create a new game (either word or number game)
* Games should be in chronological order (by creation) in DOM
* Games should be displayed in reverse chronological order to user (last created game at top)

## React components

* Every component should be as simple (have very little responsibilities) as possible
* Only have state in components that need it
* Always use pure function components when possible.
* All props must be validated

## Testing

* Enzyme usage is recommended but not required (can just use ReactTestUtils)
* All code paths for all React components must be unit tested
  * It is sufficient to have a _smoke test_ for dumb presentational components
  * Callbacks to presentational components must be tested (including validation of received arguments)
  * All paths for conditionals and edge cases for loops must be tested (each path in a different test)
  * Data flow and logic in container components must be tested.
