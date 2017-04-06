import {
  postComment,
  COMMENT_POST_REQUESTED,
  COMMENT_POST_SUCCEEDED,
  COMMENT_POST_FAILED
} from '../../src/actions/index';

describe('postComment', () => {
  let xhr;
  let requests;

  beforeEach(() => {
    // Mock out XMLHttpRequest with sinon
    global.XMLHttpRequest = xhr = sinon.useFakeXMLHttpRequest();

    // Store XMLHttpRequests to respond to them
    requests = [];
    xhr.onCreate = (xhr) => requests.push(xhr);
  });

  afterEach(() => {
    xhr.restore();
  });

  context('when comment posted', () => {
    let dispatch;
    let localCommentId;

    beforeEach(() => {
      dispatch = sinon.stub();
      // postComment is an asynchronous action, it needs to be further called
      // with `store.dispatch`. Here we can use a stub function instead of an
      // actual `store.dispatch`
      postComment({author: 'author', text: 'text'})(dispatch);

      const action = dispatch.getCall(0).args[0];
      localCommentId = action.payload.localId;
    });

    it('dispatches comment post requested', () => {
      expect(dispatch).to.have.been.calledWith({
        type: COMMENT_POST_REQUESTED,
        payload: {localId: localCommentId, text: 'text', author: 'author'}
      });
    });

    it('uses different local id for next comment post', () => {
      postComment({author: 'author', text: 'text'})(dispatch);
      const secondCommentLocalId = dispatch.getCall(1).args[0].payload.localId;
      expect(secondCommentLocalId).not.to.eql(
        localCommentId
      );
    });

    it('dispatches comment post failed when xhr fails', () => {
      // Fails the pending request
      requests[0].respond(503, {}, JSON.stringify({error: 'error'}));

      expect(dispatch).to.have.been.calledWith({
        type: COMMENT_POST_FAILED,
        payload: {localId: localCommentId, error: 'error'}
      });
    });

    it('dispatches comment post succeeded when xhr succeeds', () => {
      // Pending request succeeds
      requests[0].respond(201, {}, JSON.stringify({id: 'comment-id'}));

      expect(dispatch).to.have.been.calledWith({
        type: COMMENT_POST_SUCCEEDED,
        payload: {localId: localCommentId, id: 'comment-id'}
      });
    });
  });
});
