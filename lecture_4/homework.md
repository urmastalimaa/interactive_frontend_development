* No new functionality

# Refactor
* Apply feedback for previous homeworks, get ready for new functionality

# react-redux containers
* Create two different containers, one for new game buttons and one for ongoing games
* Containers must be created using `connect` from react-redux
* Use created containers in root (App) container
* Only current input state is allowed to be in React, all other state management must be moved to Redux

# Game state
* Move all game *state* and *logic* from ES6 classes to redux
* Find a proper place where to choose the random number/word! (Hint: It's not in a reducer)

# Actions
* Actions must contain only plain JavaScript objects
* Action names must describe what happened, not what to do

# Reducers
* All reducers must be pure functions
* All reducer code paths must be tested

# Application layout
* Use the suggested folder structure

# Redux dev tools
* Integrate redux store with redux dev tools
* Make sure that action/state change history is readable and understandable
