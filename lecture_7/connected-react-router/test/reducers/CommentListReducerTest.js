import reducer, {filterComments} from '../../src/reducers/CommentListReducer';
import {
  getCommentsRequested,
  getCommentsSucceeded,
  getCommentsFailed,
  commentPostRequested,
  commentPostSucceeded,
  commentPostFailed
} from '../../src/actions/index';

describe('CommentListReducer', () => {
  it('has no comments or pending request initially', () => {
    expect(reducer(undefined, {})).to.eql({comments: [], fetchState: {inFlight: false}});
  });

  it('sets request in flight when comments requested', () => {
    expect(
      reducer(undefined, getCommentsRequested())
    ).to.eql({
      comments: [],
      fetchState: {inFlight: true}
    });
  });

  it('sets comments when comment request succeeds', () => {
    const initialState = reducer(undefined, getCommentsRequested());
    expect(
      reducer(initialState, getCommentsSucceeded(['comment']))
    ).to.eql({
      comments: ['comment'],
      fetchState: {inFlight: false}
    });
  });

  it('sets error when comment request fails', () => {
    const initialState = reducer(undefined, getCommentsRequested());
    expect(
      reducer(initialState, getCommentsFailed('error'))
    ).to.eql({
      comments: [],
      fetchState: {inFlight: false, error: 'error'}
    });
  });

  it('adds in-flight comment when comment post requested', () => {
    const comment = {author: 'author', text: 'text'};
    const postCommentAction = commentPostRequested(comment);
    expect(
      reducer(undefined, postCommentAction)
    ).to.eql({
      comments: [{...comment, id: postCommentAction.payload.localId, inFlight: true}],
      fetchState: {inFlight: false}
    });
  });

  it('sets comment as not in flight when post succeeds', () => {
    const comment = {author: 'author', text: 'text'};
    const postCommentAction = commentPostRequested(comment);
    const initialState = reducer(undefined, postCommentAction);
    expect(
      reducer(initialState, commentPostSucceeded({id: 'id', localId: postCommentAction.payload.localId}))
    ).to.eql({
      comments: [{...comment, id: 'id', inFlight: false}],
      fetchState: {inFlight: false}
    });
  });

  it('removes comment when post fails', () => {
    const comment = {author: 'author', text: 'text'};
    const postCommentAction = commentPostRequested(comment);
    const initialState = reducer(undefined, postCommentAction);
    expect(
      reducer(initialState, commentPostFailed({localId: postCommentAction.payload.localId, error: 'error'}))
    ).to.eql({
      comments: [],
      fetchState: {inFlight: false}
    });
  });
});

describe('filterComments', () => {
  const comments = [
    {author: 'foo', text: 'red', id: 1},
    {author: 'bar', text: 'fooish', id: 2},
    {author: 'baz', text: 'light-red', id: 3}
  ];

  it('has all comments when filter empty', () => {
    expect(filterComments({comments, filterText: ''})).to.eql(comments);
  });

  it('matches authors', () => {
    expect(filterComments({comments, filterText: 'ba'})).to.eql([
      comments[1], comments[2]
    ]);
  });

  it('matches text', () => {
    expect(filterComments({comments, filterText: 'red'})).to.eql([
      comments[0], comments[2]
    ]);
  });

  it('matches author or text', () => {
    expect(filterComments({comments, filterText: 'foo'})).to.eql([
      comments[0], comments[1]
    ]);
  });
});
