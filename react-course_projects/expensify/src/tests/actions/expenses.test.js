import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('Shold setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should edit expense', () => {
    const action = editExpense('123abc', { note: 'hi there' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note:'hi there'
        }
    })
});

test('should setup add exepsne with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt:100,
        note: 'This was last months rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('shoud setup add expense with default value', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: "",
            note: "",
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});