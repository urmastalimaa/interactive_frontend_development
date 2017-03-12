# Presentational/container with forms

## Usage
```
npm install && npm start
```

## Explanation

### Presentational and container components

All React components have been extracted into separate files.
Presentational components are in components/ folder, container components in /containers/ folder.
All components that can be, are implemented as pure function components.

#### Presentational components

`AppHeader`, `CommentList` and `Comment` are all pure function components, they
simply use props for rendering.

Although CommentForms have state, they are still presentational. The forms just
render inputs and a button, but know nothing about submitting a comment.

#### Container components

App component holds (nearly) all state and logic. It _knows_ what comments have
been posted and what to do when submitting a comment, but it doesn't know
anything about how things look.

### Controlled forms

`ControlledCommentForm` syncs the state of its inputs with component state.
The `value` of inputs is linked to `state` and whenever an input changes, `state` is updated.
All state is therefore captured and tracked.
This is the preferred way to implement forms.

### Uncontrolled forms

`UncontrolledCommentForm` does not control the state of its inputs.
Instead it uses `ref` callback to save a reference to the raw DOM input to a component instance variable.
It is much easier to make a mistake and have input and application state go out of sync.
It is not recommended to use uncontrolled forms unless there is a good reason to.

### `ref` and native DOM functions

Native DOM functions with side-effects, such as `focus` can not be used in a declarative way.
One use-case for a `ref` callback is to save a reference to an element to be able to call `focus` on it later.
