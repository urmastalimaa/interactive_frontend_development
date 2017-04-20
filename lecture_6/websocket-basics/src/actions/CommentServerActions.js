import jsonAjax from '../JSONAjaxRequest';

import {
  getCommentsSucceeded,
  getCommentsFailed,
  commentPostSucceeded,
  commentPostFailed
} from './index';

const SERVER_ADDRESS = 'http://localhost:8081';

export const getComments = () => (dispatch) => {
  jsonAjax(
    SERVER_ADDRESS + '/comments',
    'GET', null, (comments) => dispatch(getCommentsSucceeded(comments)),
    ({error} = {}) => dispatch(getCommentsFailed(error))
  );
};

export const postComment = ({localId, author, text}) => (dispatch) => {
  jsonAjax(
    SERVER_ADDRESS + '/comments',
    'POST',
    {author, text},
    ({id}) => dispatch(commentPostSucceeded({localId, id})),
    ({error} = {}) => dispatch(commentPostFailed({localId, error}))
  );
};
