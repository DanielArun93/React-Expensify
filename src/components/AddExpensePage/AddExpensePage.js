import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../../actions/expenses';

export class AddExpensePage extends React.Component {

    onSubmit = (expense) => {
        //this.props.dispatch(addExpense(expense));
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    }
    
    render() {
        return (
             <div>
                <h1>Add Expense</h1>
                <ExpenseForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddExpense: (expense) => dispatch(startAddExpense(expense))
    }
}

export default connect(undefined,mapDispatchToProps)(AddExpensePage);