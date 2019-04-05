import expensesReducer from '../../reducers/expenses';
import expenses from '../../fixtures/expenses';
import moment from 'moment';

test('should initialize expense reducer with default values', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([]);
})

test('should remove expense when id is given', () => {
    const action = {
        type: 'REMOVEEXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should remove expense when id is not in list', () => {
    const action = {
        type: 'REMOVEEXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('should add expense', () => {
    const action = {
        type: 'ADDEXPENSES',
        expense: {
            id: '5',
            description: 'Tution Fee',
            amount: 250,
            note: 'Jan Month Fee',
            createdAt: 1023
        }
    }

    const state = expensesReducer(expenses, action);
    expect(state.length).toBe(4);
})

test('should update expense when id is given', () => {
    const action = {
        type: 'EDITEXPENSE',
        id: expenses[2].id,
        update: {
            amount: 250,
            note: 'reduced bill'
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[2]).toEqual({
        id: '3',
        description: 'EB Bill',
        amount: 250,
        createdAt: moment(0).add(4, 'days').valueOf(),
        note: 'reduced bill'
    })
})

test('should not update expense when id is not match', () => {
    const action = {
        type: 'EDITEXPENSE',
        id: '9',
        update: {
            amount: 250,
            note: 'reduced bill'
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})