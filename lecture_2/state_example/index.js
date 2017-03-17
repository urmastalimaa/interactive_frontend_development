import React, {Component} from 'react';
import ReactDOM from 'react-dom';

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
  CommentList has been updated to receive `comments` as props.
  An instance of `Comment` component is created for each comment in `comments`
  array.
  When dealing with lists of elements, each unique element must have a special
  `key` property.
  This allows React to distinguish between elements that changed vs elements
  that were removed and replaced with a different element.
*/
class CommentList extends Component {
  render() {
    const commentElements = this.props.comments.map((comment) => {
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
  }
}

/*
  `App` component now has state: inserted comments.
  Initial comments state is set to empty array in constructor.

  In the constructor we also mimic receiving new components using
  `setInterval`, every 5 seconds 2 new components are 'received' and added to
  state.

  We pass down the state as props to `CommentList`. Whenever state changes,
  `App` and all its children are re-rendered.
*/
class App extends Component {
  constructor(props) {
    super(props); // every component must call superclass constructor with props
    this.state = {comments: []};

    let id = 1;
    setInterval(() => {
      this.setState({
        comments: this.state.comments.concat([
          {author: 'React Reactson', text: `This is one comment ${id}`, id: id},
          {author: 'Java Scriptson', text: `This is another comment ${id + 1}`, id: id + 1}
        ])
      });
      id += 2;
    }, 5000);
  }

  render() {
    return (
      <div className='app'>
        <h1>Comments</h1>
        <CommentList comments={this.state.comments}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
