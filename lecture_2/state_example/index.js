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

class App extends Component {
  constructor(props) {
    super(props); // every component must call superclass constructor with props
    this.state = {comments: []};

    let id = 1;
    setInterval(() => {
      this.setState({
        comments: this.state.comments.concat([
          {author: 'React Reactson', text: `This is one comment #{id}`, id: id},
          {author: 'Java Scriptson', text: `This is another comment #{id + 1}`, id: id + 1}
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
        <CommentForm onSubmit={() => console.log('posting comment!')} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
