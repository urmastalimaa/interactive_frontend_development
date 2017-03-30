import reducer, {filterComments} from '../../src/reducers/CommentListReducer';
import {
  commentSubmitted,
} from '../../src/actions/index';

// Note that reducer tests have nothing to do with React.

describe('CommentListReducer', () => {
  it('has no comments initially', () => {
    expect(reducer(undefined, {})).to.eql([]);
  });

  it('adds a comment when comment submitted', () => {
    const firstComment = {author: 'first-author', text: 'first-text'};
    const secondComment = {author: 'second-author', text: 'second-text'};

    const stateAfterFirstComment = reducer(undefined, commentSubmitted(firstComment));
    // Previous state can be passed to the reducer
    const stateAfterSecondComment = reducer(stateAfterFirstComment, commentSubmitted(secondComment));
    expect(stateAfterSecondComment.length).to.eq(2);

    expect(stateAfterSecondComment[0].author).to.eq('first-author');
    expect(stateAfterSecondComment[0].text).to.eq('first-text');

    expect(stateAfterSecondComment[1].author).to.eq('second-author');
    expect(stateAfterSecondComment[1].text).to.eq('second-text');
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
