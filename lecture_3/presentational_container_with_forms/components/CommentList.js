import React from 'react';
import Comment from './Comment';

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
      <h2>Comments:</h2>
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

export default CommentList;
