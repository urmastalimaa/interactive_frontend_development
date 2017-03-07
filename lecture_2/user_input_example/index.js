import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const Comment = (props) => {
  return (
    <div className="comment">
      <h2 className="comment-author">
        {props.author}
      </h2>
      {props.children}
    </div>
  );
};

Comment.propTypes = {
  author: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
};

const CommentList = (props) => {
  const commentElements = props.comments.map((comment) => {
    return (
      <Comment author={comment.author} key={comment.id}>
        {comment.text}
      </Comment>
    );
  });
  return (
    <div className="comment-list">
      {commentElements}
    </div>
  );
};

CommentList.propTypes = {
  comments: React.PropTypes.arrayOf(React.PropTypes.shape({
    author: React.PropTypes.string,
    id: React.PropTypes.number,
    text: React.PropTypes.string
  })).isRequired
};

/*
  There are two different input fields rendered in `CommentForm`.

  Both have `value={this.state.text}` binding the value of the input with
  component state. This means that if you try to type into the field and state
  does not change, the input value stays same, effectively disabling typing
  altogether. The second input also has an `onChange` function which will
  update state and therefore input the input value, allowing typing.

  React also logs a warning to console about input misuse first the first
  input.
*/
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: 'unchangeable text'
    };
  }

  handleAuthorChange(event) {
    this.setState({author: event.target.value});
  }

  onSubmit() {
    this.props.onSubmit({author: this.state.author, text: this.state.text});
  }

  render() {
    return (
      <div className='comment-form'>
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
        />
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange.bind(this)}
        />
        <button className='comment-form' onClick={this.onSubmit.bind(this)}>
          Submit comment
        </button>
      </div>
    );
  }
}
CommentForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        {author: 'React Reactson', text: 'This is one comment', id: 1},
        {author: 'Java Scriptson', text: 'This is another comment', id: 2}
      ]
    };
  }

  handleCommentSubmit({author, text}) {
    const lastComment = this.state.comments[this.state.comments.length - 1];
    this.setState({
      comments: this.state.comments.concat({author, text, id: lastComment.id + 1})
    });
  }

  render() {
    return (
      <div className='app'>
        <h1>Comments</h1>
        <CommentList comments={this.state.comments}/>
        <CommentForm onSubmit={this.handleCommentSubmit.bind(this)} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
