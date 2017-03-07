import React, {Component} from 'react';
import ReactDOM from 'react-dom';

/*
  Has `author` and `children` props. `children` is a special prop that has
  containted components.
*/
class Comment extends Component {
  render() {
    return (
      <div className='comment'>
        <h2 className='author'>
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
}

/*
  Passes `author` prop to multiple `Comment`s. Also passes an inline text
  component as `children` to `Comment`. Has no props itself.
*/
class CommentList extends Component {
  render() {
    return (
      <div className='comment-list'>
        <Comment author='React Reactson'>This is one comment</Comment>
        <Comment author='Java Scriptson'>This is another comment</Comment>
      </div>
    );
  }
}

/*
  Has `onSubmit` and `text` props. `onSubmit` is a callback function, it will
  be called whenever the button is clicked (i.e form is submitted).
  Note that `CommentForm` does not handle any submitting logic by itself, the
  parent component that creates the callback function contains submission
  logic.
  CommentForm is only a view that represents one kind of a form (which has no
  fields and which you submit by clicking a button).

  `CommentForm` also specifies `defaultProps` to initialize the `text` prop if
  it is not specified in props.
*/
class CommentForm extends Component {
  render() {
    return (
      <button className='comment-form' onClick={this.props.onSubmit}>
        {this.props.text}
      </button>
    );
  }
}
CommentForm.defaultProps = {text: 'Submit a comment'};

/*
  App is a composition of `CommentList` and `CommentForm`. Form submission is
  handled by just logging a line to console.
  Has no props.
*/
class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Comments</h1>
        <CommentList />
        <CommentForm onSubmit={() => console.log('posting comment!')} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
