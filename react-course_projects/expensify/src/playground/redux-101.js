import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
})

const setCount = ({ newCount  }) => ({
    type: 'SET',
    count: newCount
});

const resetCount = () => ({
    type: 'RESET'
});


const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    //console.log(store.getState());
})

console.log(store.getState());

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 18 }));

store.dispatch(incrementCount());

unsubscribe();

console.log(store.getState());

store.dispatch(decrementCount({ decrementBy: 55 }));

console.log(store.getState());


store.dispatch(setCount({ newCount:500 }))

console.log(store.getState());

store.dispatch(resetCount());

console.log(store.getState());