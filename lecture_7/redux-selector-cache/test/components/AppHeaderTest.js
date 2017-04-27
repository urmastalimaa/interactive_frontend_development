import React from 'react';
import {shallow} from 'enzyme';

import AppHeader from '../../src/components/AppHeader';

describe('AppHeader', () => {
  it('renders', () => {
    const wrapper = shallow(<AppHeader />);
    expect(wrapper).to.exist;
  });
});
