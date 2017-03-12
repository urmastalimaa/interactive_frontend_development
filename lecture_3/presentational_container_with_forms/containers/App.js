import React, {Component} from 'react';

import AppHeader from '../components/AppHeader';
import CommentList from '../components/CommentList';
import ControlledCommentForm from '../components/ControlledCommentForm';
import UncontrolledCommentForm from '../components/UncontrolledCommentForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastCommentId: 2,
      comments: [
        {author: 'React Reactson', text: 'This is one comment', id: 1},
        {author: 'Java Scriptson', text: 'This is another comment', id: 2}
      ]
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
    // Any components can expose functions such as focus, a form being
    // controlled/uncontrolled makes no difference.
    return (
      <div>
        <AppHeader />
        <ControlledCommentForm
          ref={(form) => this.controlledForm = form }
          onSubmit={(comment) => {
            this.addComment(comment);
            this.controlledForm.focus();
          }}
          text='Submit comment'
        />
        <UncontrolledCommentForm
          ref={(form) => this.uncontrolledForm = form }
          onSubmit={(comment) => {
            this.addComment(comment);
            this.uncontrolledForm.focus();
          }}
          text='Submit comment'
        />
        <CommentList comments={this.state.comments}/>
      </div>
    );
  }
}

export default App;
