import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseList from '../ExpenseList/ExpenseList';
import ExpenseListFilter from '../ExpenseListFilter/ExpenseListFilter';

class ExpenseDashboardPage extends React.Component {
    render() {
        return (
            <div>
                <ExpenseListFilter />
                <ExpenseList />
            </div>
        )
    }
}

export default ExpenseDashboardPage;