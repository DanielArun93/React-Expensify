import moment from 'moment';
import { filterText, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';

test('should set up textfilter with given string', () => {
    const action = filterText('rent');
    expect(action).toEqual({
        type: 'FILTER_TEXT',
        text: 'rent'
    })
})

test('should set up textfilter with default value', () => {
    const action = filterText('');
    expect(action).toEqual({
        type: 'FILTER_TEXT',
        text: ''
    })
})

test('should set up sortByAmount', () => {
    const action = sortByAmount();
    expect(action).toEqual({ type: 'SORT_BY_AMOUNT' })
})

test('should set up sortByDate', () => {
    const action = sortByDate();
    expect(action).toEqual({ type: 'SORT_BY_DATE' })
})



test('should set up setStartDate with default', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({ type: 'SET_START_DATE',date:moment(0) })
})



test('should set up setEndDate with default', () => {
    const action = setEndDate(moment(1));
    expect(action).toEqual({ type: 'SET_END_DATE',date:moment(1) })
})

