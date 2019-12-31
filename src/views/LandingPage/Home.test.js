import React from 'react';
import { render } from 'react-dom';
import { shallow } from 'enzyme';

import Home from './index';
import Header from '../../shared/components/layout/Header';

describe('Home', () => {
  it('should not regress', () => {
    const component = shallow(<Home />);

    expect(component).toMatchSnapshot();
  });

  it('renders the Header without crashing', () => {
    const div = document.createElement('div');
    render(<Header />, div);
  });
});
