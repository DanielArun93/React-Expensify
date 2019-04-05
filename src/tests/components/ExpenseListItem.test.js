import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem/ExpenseListItem';

test('should create ExpenseListItem when expense obj is provided',() => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
    expect(wrapper).toMatchSnapshot();
})