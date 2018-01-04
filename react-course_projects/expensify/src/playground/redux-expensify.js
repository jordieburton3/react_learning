import { createStore, combineReducers } from "redux";

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const e1 = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 21000}));
const e2 = store.dispatch(addExpense({ description: 'Coffee', amount: 10, createdAt: -1000 }));

// console.log(e1.expense.id);
// store.dispatch(removeExpense({ id: e1.expense.id }));

// store.dispatch(editExpense(e2.expense.id, { amount: 700 }));
// console.log(store.getState());

//store.dispatch(setTextFilter(''));
// console.log(store.getState());

store.dispatch(sortByAmount());
// console.log(store.getState());

// store.dispatch(sortByDate());
// console.log(store.getState());

// store.dispatch(setStartDate());
// console.log(store.getState());

// store.dispatch(setEndDate(500));
// console.log(store.getState());

// store.dispatch(setStartDate());
// console.log(store.getState());




const demoState = {
  expenses: [
    {
      id: "poijasdfhwer",
      description: "January Rent",
      note: "This was the final paymernt for that address",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined
  }
};


const user = {
  name: 'Jen',
  age: 24
};

// console.log({
//   ...user,
//   location: "Philly",
//   age: 27
// });