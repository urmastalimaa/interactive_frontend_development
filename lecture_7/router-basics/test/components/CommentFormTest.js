import React from 'react';
import {shallow} from 'enzyme';

import CommentForm from '../../src/components/CommentForm';

describe('CommentForm', () => {
  it('renders', () => {
    expect(shallow(
      <CommentForm
        text='text'
        onSubmit={sinon.stub()}
      />
    )).to.exist;
  });

  it('calls submit with author and text when submit button clicked', () => {
    const onSubmit = sinon.stub();
    const form = shallow(<CommentForm onSubmit={onSubmit} text='text' />);

    form.setState({author: 'author', text: 'text'});

    form.find('button').simulate('click');
    expect(onSubmit).to.have.been.calledWith({author: 'author', text: 'text'});
  });

  it('clears state when submit button clicked', () => {
    const form = shallow(<CommentForm onSubmit={sinon.stub()} text='text' />);

    form.setState({author: 'author', text: 'text'});
    form.find('button').simulate('click');
    expect(form.state()).to.eql({author: '', text: ''});
  });
});
