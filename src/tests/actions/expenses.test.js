import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, removeExpense, editExpense } from '../../actions/expenses';
import expenses from '../../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup remove expense', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({ id: '123abc', type: 'REMOVEEXPENSE' });
})

test('should setup edit expense', () => {
    const update = { description: "rent", amount: 54, note: "January rent" };
    const action = editExpense('123abc', update);
    expect(action).toEqual(
        {
            id: '123abc',
            type: 'EDITEXPENSE',
            update: { description: "rent", amount: 54, note: "January rent" }
        });
})

test('should setup addExpense obj with given values', () => {

    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADDEXPENSES',
        expense: expenses[2]
    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'this one is better',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'ADDEXPENSES',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        return database.ref(`expenses/${action[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    })


})

test('should add expense with defaulst to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'ADDEXPENSES',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        return database.ref(`expenses/${action[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    })
})

// test('should setup addExpense obj with default values', () => {
//     const action = addExpense();
//     const defaultObj = {
//         amount: 0,
//         note: "",
//         description: "",
//         createdAt: 0
//     }
//     expect(action).toEqual({
//         type: 'ADDEXPENSES',
//         expense: {
//             ...defaultObj,
//             id: expect.any(String)
//         }
//     })
// })