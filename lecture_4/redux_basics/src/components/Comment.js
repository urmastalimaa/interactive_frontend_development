import React from 'react';

const Comment = (props) => {
  return (
    <div className="comment">
      <h3 className="comment-author">
        {props.author} said:
      </h3>
      {props.children}
    </div>
  );
};

Comment.propTypes = {
  author: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default Comment;
