import {
  COMMENT_SUBMITTED,
  TEXT_SET,
  AUTHOR_SET
} from '../actions/index.js';

const initialComments = [];
const initialAuthor = '';
const initialText = '';

const initialState = {
  comments: initialComments,
  author: initialAuthor,
  text: initialText
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_SUBMITTED: {
      const newComments = state.comments.concat({
        id: action.payload.id,
        author: state.author,
        text: state.text
      });
      return {...state, comments: newComments, author: '', text: ''};
    }
    case AUTHOR_SET: {
      return {...state, author: action.payload};
    }
    case TEXT_SET: {
      return {...state, text: action.payload};
    }
    default:
      return state;
  }
};

export default commentReducer;
