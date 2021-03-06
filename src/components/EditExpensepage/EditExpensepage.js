import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../../actions/expenses';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        //this.props.dispatch(editExpense(this.props.match.params.id, expense));
        this.props.editExpense(this.props.expense.id,expense);
        this.props.history.push('/');
    }

    onRemove = () => {
        //this.props.dispatch(removeExpense({ id: this.props.expense.id }));
        this.props.removeExpense({id:this.props.expense.id});
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit} />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        )
    }
}


const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        removeExpense: (id) => dispatch(removeExpense(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);