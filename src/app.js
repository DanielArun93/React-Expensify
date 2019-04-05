import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { filterText, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import 'normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

// store.dispatch(addExpense({ description: 'rent', amount: 50, createdAt: 250 }));
// store.dispatch(addExpense({ description: 'water bill', amount: 1500, createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'eb bill', amount: 500, createdAt: 1000 }));
//store.dispatch(filterText('e'));

// setTimeout(() => {
// store.dispatch(filterText('haaans'));
// },3000)

const state = store.getState();
//console.log('state', state);
const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
console.log('visibleExpense', visibleExpense);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'));