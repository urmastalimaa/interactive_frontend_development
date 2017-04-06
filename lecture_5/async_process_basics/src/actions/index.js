import jsonAjax from '../JSONAjaxRequest';

const SERVER_ADDRESS = 'http://localhost:8081';

let commentCounter = 1;
const createPayloadForwardingAction = (type) => (payload) =>
  ({type: type, payload: payload});

// Define simple, payload forwarding actions for each state of the asynchronous
// process.
export const COMMENT_POST_REQUESTED = 'COMMENT_POST_REQUESTED';
export const commentPostRequested = createPayloadForwardingAction(COMMENT_POST_REQUESTED);

export const COMMENT_POST_SUCCEEDED = 'COMMENT_POST_SUCCEEDED';
export const commentPostSucceeded = createPayloadForwardingAction(COMMENT_POST_SUCCEEDED);

export const COMMENT_POST_FAILED = 'COMMENT_POST_FAILED';
export const commentPostFailed = createPayloadForwardingAction(COMMENT_POST_FAILED);

// Define one method which executes the asynchronous process
export const postComment = ({author, text}) => {
  return (dispatch) => {
    const localId = (commentCounter++).toString();
    dispatch(commentPostRequested({author, text, localId}));
    jsonAjax(
      SERVER_ADDRESS + '/comments',
      'POST',
      {author, text},
      ({id}) => dispatch(commentPostSucceeded({localId, id})),
      ({error} = {}) => dispatch(commentPostFailed({localId, error}))
    );
  };
};

// Repeat same pattern as before
export const GET_COMMENTS_REQUESTED = 'GET_COMMENTS_REQUESTED';
export const getCommentsRequested = createPayloadForwardingAction(GET_COMMENTS_REQUESTED);

export const GET_COMMENTS_SUCCEEDED = 'GET_COMMENTS_SUCCEEDED';
export const getCommentsSucceeded = createPayloadForwardingAction(GET_COMMENTS_SUCCEEDED);

export const GET_COMMENTS_FAILED = 'GET_COMMENTS_FAILED';
export const getCommentsFailed = createPayloadForwardingAction(GET_COMMENTS_FAILED);

export const getComments = () => {
  return (dispatch) => {
    dispatch(getCommentsRequested());
    jsonAjax(
      SERVER_ADDRESS + '/comments',
      'GET', null, (comments) => dispatch(getCommentsSucceeded(comments)),
      ({error} = {}) => dispatch(getCommentsFailed(error))
    );
  };
};

export const FILTER_SET = 'FILTER_SET';
export const filterSet = createPayloadForwardingAction(FILTER_SET);
