import { createStore } from 'redux';

//action generators
const incrementBy = ({ incrementBy = 1 } = {}) => {
    return {
        type:'INCREMENT',
        incrementBy
    }
}

const decrementBy = ({ decrementBy = 1 } = {}) => {
    return {
        type:'DECREMENT',
        decrementBy
    }
}

const reset = () => {
    return {
        type:'RESET'
    }
}

const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
        //const incrementBy = action.incrementBy ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy 
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
}

const store = createStore(counterReducer);

//console.log(store.getState());
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementBy({incrementBy : 5}));

store.dispatch(incrementBy());

store.dispatch(decrementBy())

store.dispatch(decrementBy({decrementBy :10}))

store.dispatch(reset())
//console.log(store.getState());

