import React from 'react';
import {shallow} from 'enzyme';

import Comment from '../../src/components/Comment';

describe('Comment', () => {
  it('renders', () => {
    expect(shallow(
      <Comment author='author'>text</Comment>
    )).to.exist;
  });

  it('renders contained element', () => {
    expect(shallow(
      <Comment author='author'>contained</Comment>
    )).to.include.text('contained');
  });
});
