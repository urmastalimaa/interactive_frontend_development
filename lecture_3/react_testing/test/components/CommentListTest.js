import React from 'react';
import {shallow} from 'enzyme';

import CommentList from '../../components/CommentList';
import Comment from '../../components/Comment';

describe('CommentList', () => {
  // Any collection-like component should have a test for the empty case
  it('renders no Comment components without comments', () => {
    expect(shallow(<CommentList comments={[]} />))
      .to.not.contain.descendants(Comment);
  });

  // It is useful to test that child Components are created with correct props
  it('renders Comment component for each comment', () => {
    const comments = [
      {id: 1, author: 'a', text: 'a-text'},
      {id: 2, author: 'b', text: 'b-text'}
    ];

    const commentList = shallow(<CommentList comments={comments} />);

    expect(commentList).to.have.exactly(2).descendants(Comment);
    expect(commentList).to.contain(<Comment author="a" children="a-text"/>);
    expect(commentList).to.contain(<Comment author="b" children="b-text"/>);
  });
});

