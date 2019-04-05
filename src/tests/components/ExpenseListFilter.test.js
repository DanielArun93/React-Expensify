import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilter } from '../../components/ExpenseListFilter/ExpenseListFilter';
import { filters, altFilters } from '../../fixtures/filters';
import moment from 'moment';

let filterText, sortByAmount, sortByDate, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    filterText = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilter
        filters={filters}
        filterText={filterText}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
    />)
})

test('should render component correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should render component with values', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
})

test('should handle text change', () => {
    wrapper.setProps({
        filters: altFilters
    })

    wrapper.find('input').simulate('change', {
        target: { value: filters.text }
    })

    expect(filterText).toHaveBeenLastCalledWith(filters.text);

})

test('should sort by date', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'date' }
    })
    expect(sortByDate).toHaveBeenCalled();
})

test('should sort by Amount', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'amount' }
    })
    expect(sortByAmount).toHaveBeenCalled();
})

// test('should handle date changes', () => {
//     // wrapper.setProps({
//     //     filters: altFilters
//     // })
//     const start = moment(0);
//     const end = moment(0).add(4, 'days');
//     wrapper.find('DateRangePicker').prop('onDatesChange')({
//         start,
//         end
//     })
//     expect(setStartDate).toHaveBeenLastCalledWith(start);
//     expect(setEndDate).toHaveBeenLastCalledWith(end);
// })