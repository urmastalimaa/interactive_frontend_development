const createPayloadForwardingAction = (type) => (payload) =>
  ({type: type, payload: payload});

let commentCounter = 1;

export const COMMENT_POST_REQUESTED = 'COMMENT_POST_REQUESTED';
export const commentPostRequested = ({author, text}) => ({
  type: COMMENT_POST_REQUESTED,
  payload: {
    author,
    text,
    localId: (commentCounter++).toString()
  }
});

export const COMMENT_POST_SUCCEEDED = 'COMMENT_POST_SUCCEEDED';
export const commentPostSucceeded = createPayloadForwardingAction(COMMENT_POST_SUCCEEDED);

export const COMMENT_POST_FAILED = 'COMMENT_POST_FAILED';
export const commentPostFailed = createPayloadForwardingAction(COMMENT_POST_FAILED);

export const GET_COMMENTS_REQUESTED = 'GET_COMMENTS_REQUESTED';
export const getCommentsRequested = createPayloadForwardingAction(GET_COMMENTS_REQUESTED);

export const GET_COMMENTS_SUCCEEDED = 'GET_COMMENTS_SUCCEEDED';
export const getCommentsSucceeded = createPayloadForwardingAction(GET_COMMENTS_SUCCEEDED);

export const GET_COMMENTS_FAILED = 'GET_COMMENTS_FAILED';
export const getCommentsFailed = createPayloadForwardingAction(GET_COMMENTS_FAILED);

export const FILTER_SET = 'FILTER_SET';
export const filterSet = createPayloadForwardingAction(FILTER_SET);
