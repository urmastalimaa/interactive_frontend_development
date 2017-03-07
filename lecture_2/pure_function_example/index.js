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

const CommentForm = (props) => {
  return (
    <button className='comment-form' onClick={props.onSubmit}>
      {props.text}
    </button>
  );
};
CommentForm.defaultProps = {text: 'Submit a comment'};
CommentForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  text: React.PropTypes.string
};


/*
  `App` is still a class Component as it has state. Pure functions by
  definition cannot have state.
*/
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

  render() {
    return (
      <div className='app'>
        <h1>Comments</h1>
        <CommentList comments={this.state.comments}/>
        <CommentForm onSubmit={() => console.log('posting comment!')} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
