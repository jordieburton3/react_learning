import React from "react";
import ReactDOM from "react-dom";
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(addExpense({ 
    description: "Water Bill",
    note: "",
    amount: 4500,
}));

store.dispatch(addExpense({ 
    description: "Gas Bill",
    note: "",
    amount: 300,
    createdAt: 1000
}));

store.dispatch(addExpense({ 
    description: "Rent",
    note: "",
    amount: 109500,
}));

console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));
 
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));