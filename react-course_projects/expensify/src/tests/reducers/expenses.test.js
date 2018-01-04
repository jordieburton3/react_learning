import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
    const state = expensesReducer(undefined, '@@INIT');
    expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        remove: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        remove: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('Should add an expense', () => {
    const expense = {
        description: 'hi',
        amount: 10,
        createdAt: 0,
        note: ''
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state.length === 4);
    expect(state[3]).toEqual(expense);
});

test('Should edit expense', () => {
    const updates = {
        description: 'New Descritpion'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates
    }
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe('New Descritpion');
});

test('Should not edit if id not found', () => {
    const expectedState = expensesReducer(expenses, {
        type: 'default'
    });
    const updates = {
        description: 'Updated'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '69',
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expectedState);
});