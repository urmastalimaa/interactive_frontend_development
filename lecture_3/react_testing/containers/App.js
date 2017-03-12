import React, {Component} from 'react';

import AppHeader from '../components/AppHeader';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastCommentId: 0,
      comments: []
    };
    this.addComment = this.addComment.bind(this);
  }

  addComment(comment) {
    const newCommentId = this.state.lastCommentId + 1;
    const newComments = this.state.comments.concat({...comment, id: newCommentId});
    this.setState({
      lastCommentId: newCommentId,
      comments: newComments
    });
  }

  render() {
    return (
      <div>
        <AppHeader />
        <CommentForm
          onSubmit={this.addComment}
          text='Submit comment'
        />
        <CommentList comments={this.state.comments}/>
      </div>
    );
  }
}

export default App;
