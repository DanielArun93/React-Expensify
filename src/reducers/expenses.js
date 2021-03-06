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

export default expensesReducer;