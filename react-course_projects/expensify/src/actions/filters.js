
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

export const expensesReducerDefaultState = [];



export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  sortBy: 'amount'
})

export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  sortBy: 'date'
})

export const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date: date
});

export const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date: date
});