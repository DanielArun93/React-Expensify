import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from '../../components/PageNotFound/PageNotFound';

test('should render PageNotFound', () => {
    const wrapper = shallow(<PageNotFound />);
    expect(wrapper).toMatchSnapshot();
})