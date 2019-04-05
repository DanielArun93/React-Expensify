import uuid from 'uuid';
import database from '../firebase/firebase';

//Add expenses action generators
export const addExpense = (expense) => {
    return {
        type: 'ADDEXPENSES',
        expense
    }
}

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData

        const expense = { description, note, amount, createdAt };
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })

    }
}

//Remove expense
export const removeExpense = ({id} = {}) => {
    return {
        type: 'REMOVEEXPENSE',
        id
    }
}

//edit expense
export const editExpense = (id, update) => {
    return {
        type: 'EDITEXPENSE',
        id,
        update
    }
}