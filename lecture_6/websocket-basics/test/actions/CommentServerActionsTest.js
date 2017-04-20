import {
  COMMENT_POST_SUCCEEDED,
  COMMENT_POST_FAILED
} from '../../src/actions/index';

import {
  postComment,
} from '../../src/actions/CommentServerActions';

describe('postComment', () => {
  let xhr;
  let requests;
  let dispatch;

  beforeEach(() => {
    // Mock out XMLHttpRequest with sinon
    global.XMLHttpRequest = xhr = sinon.useFakeXMLHttpRequest();

    // Store XMLHttpRequests to respond to them
    requests = [];
    xhr.onCreate = (xhr) => requests.push(xhr);
    dispatch = sinon.stub();
  });

  afterEach(() => {
    xhr.restore();
  });

  it('dispatches comment post failed when xhr fails', () => {
    postComment({localId: 'local-id', author: 'author', text: 'text'})(dispatch);

    // Fails the pending request
    requests[0].respond(503, {}, JSON.stringify({error: 'error'}));

    expect(dispatch).to.have.been.calledWith({
      type: COMMENT_POST_FAILED,
      payload: {localId: 'local-id', error: 'error'}
    });
  });

  it('dispatches comment post succeeded when xhr succeeds', () => {
    postComment({localId: 'local-id', author: 'author', text: 'text'})(dispatch);

    // Pending request succeeds
    requests[0].respond(201, {}, JSON.stringify({id: 'comment-id'}));

    expect(dispatch).to.have.been.calledWith({
      type: COMMENT_POST_SUCCEEDED,
      payload: {localId: 'local-id', id: 'comment-id'}
    });
  });
});
