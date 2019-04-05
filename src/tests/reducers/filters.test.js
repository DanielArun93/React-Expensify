import moment from 'moment';
import filterReducer from '../../reducers/filters';


test('should initialise reducer with default state', () => {
    // like below state for filter is set in reducer
    // const filters = {
    //     text: '',
    //     sortBy: 'date',
    //     startDate: moment().startOf('month'),
    //     endDate: moment().endOf('month')
    // };

    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })

})

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const state = filterReducer(currentState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
})

test('should set text', () => {
    const state = filterReducer(undefined, { type: 'FILTER_TEXT' ,text:'rent'});
    expect(state.text).toBe('rent');
})

test('should set startDate', () => {
    const date = moment();
    const action = {
        type: 'SET_START_DATE',
        date
    }
    const state = filterReducer(undefined, action);
    expect(state.startDate).toEqual(date);
})

test('should set startDate', () => {
    const date = moment();
    const action = {
        type: 'SET_END_DATE',
        date
    }
    const state = filterReducer(undefined, action);
    expect(state.endDate).toEqual(date);
})