import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//Add expenses action generators
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}) => {

    return {
        type: 'ADDEXPENSES',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }

}

//Remove expense
const removeExpense = ({id} = {}) => {
    return {
        type: 'REMOVEEXPENSE',
        id
    }
}

//edit expense
const editExpense = (id, update) => {
    return {
        type: 'EDITEXPENSE',
        id,
        update
    }
}

//filter text
const filterText = (text = '') => {
    return {
        type: 'FILTER_TEXT',
        text
    }
}

//sortby date
const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    }
}

//sort by amount
const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    }
}

//set start date
const setStartDate = (date = undefined) => {
    return {
        type: 'SET_START_DATE',
        date
    }
}
//set end date
const setEndDate = (date = undefined) => {
    return {
        type: 'SET_END_DATE',
        date
    }
}

const expensesDefaultState = [];

const expensesReducer = (state = expensesDefaultState, action) => {
    switch (action.type) {
        case 'ADDEXPENSES':
            return [
                ...state,
                action.expense
            ]

        case 'REMOVEEXPENSE':
            return state.filter(({id}) => id != action.id)

        case 'EDITEXPENSE':
            return state.map((expense) => {
                if (expense.id == action.id) {
                    return {
                        ...expense,
                        ...action.update
                    }
                }
                else {
                    return expense;
                }
            })

        default:
            return state;
    }
}

const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filters, action) => {
    switch (action.type) {
        case 'FILTER_TEXT':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            }
        default:
            return state;
    }
}

//get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {

    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if(sortBy === 'amount'){
            return a.amount  < b.amount ? 1: -1;
        }
    })
}

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
}));

store.subscribe(() => {
    const state = store.getState();
    console.log('state',state);
    const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
    console.log('visibleExpense',visibleExpense);
})

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 5000, createdAt: 250 }));
const expenseTwo = store.dispatch(addExpense({ description: 'cogfeee', amount: 50, createdAt: 1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 250 }));


//store.dispatch(filterText('cog'));
// store.dispatch(filterText());

 store.dispatch(sortByAmount());
 //store.dispatch(sortByDate());

//store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
//store.dispatch(setEndDate(0));
// store.dispatch(setEndDate());


const demoState = {
    expenses: [
        {
            id: '345345345345',
            description: 'january rent',
            note: 'This is final payment',
            amount: 50000,
            createdAt: 0
        }],
    filters: {
        text: 'rent',
        sortBy: 'date', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}