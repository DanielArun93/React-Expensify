import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from '../ExpenseListItem/ExpenseListItem';
import SelectedExpenses from '../../selectors/expenses';

export const ExpenseList = (props) => {
    return (
        <div>
            {
                props.expenses.length === 0 ?
                    (
                        <p>No Expenses</p>
                    ) :
                    (
                        props.expenses.map((expense) => {
                            return <ExpenseListItem {...expense} key={expense.id} />
                        })
                    )
            }

        </div>
    )
}

// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses:state.expenses,
//         filters:state.filters
//     }
// })(ExpenseList)

const mapStateToProps = (state) => {
    return {
        expenses: SelectedExpenses(state.expenses, state.filters)

    }
}
export default connect(mapStateToProps)(ExpenseList);
