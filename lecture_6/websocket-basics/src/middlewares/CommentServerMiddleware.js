import {
  GET_COMMENTS_REQUESTED,
  COMMENT_POST_REQUESTED,
} from '../actions/index';

import {
  getComments,
  postComment
} from '../actions/CommentServerActions';

const ACTION_TYPE_TO_SERVER_ACTION = {
  [GET_COMMENTS_REQUESTED]: getComments,
  [COMMENT_POST_REQUESTED]: postComment
};

const commentServerMiddleware = (store) => (next) => (action) => {
  const serverAction = ACTION_TYPE_TO_SERVER_ACTION[action.type];
  if (serverAction) {
    serverAction(action.payload)(store.dispatch);
  }
  return next(action);
};

export default commentServerMiddleware;
