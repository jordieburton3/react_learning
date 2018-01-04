import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });  
});

test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('Should set sortBy to date', () => {
    const currentState = {
        test: '',
        startDate: undefined, 
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'Cake'
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('Cake');
});

test('Should set start date filter', () => {
    const action = {
        type: 'SET_START_DATE',
        date: moment(0)
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(moment(0));
});

test('Should set end date filter', () => {
    const action = {
        type: 'SET_END_DATE',
        date: moment(0)
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(moment(0));
});