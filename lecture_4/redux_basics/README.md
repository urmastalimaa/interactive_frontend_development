# Redux comment list example

To use:
```
npm install
npm test
npm start
```

## Explanation

* [redux](https://github.com/reactjs/redux)

Redux is the core design pattern and react-redux adds the necessary bindings for use of React.

All components have remained nearly the same from previous examples.

App container has been changed to use
[react-redux](https://github.com/reactjs/react-redux) to auto-create a
container component.

[Flux standard format](https://github.com/acdlite/flux-standard-action) is used for actions.

All tests are in the test/ folder. Component test have stayed the same,
container tests have been changed to reducer tests. Tests for trivial container
can be omitted. If there is logic in `mapStateToProps` or `mapDispatchToProps`,
extract that logic into _selector_ functions and test those in isolation.

`CommentForm` is changed to not have any internal state. This might or might not be desirable, depends on the use case. Check `CommentForm` for more information.

## Additional resources
[Redux official guides](redux.js.org)
