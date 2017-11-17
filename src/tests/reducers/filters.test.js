import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const text = 'rent';
    const state = filtersReducer(undefined, {
        type: 'SET_TEXT_FILTER',
        textFilter: text
    });
    expect(state.text).toBe(text);
});

test('should be startDate filter', () => {
    const currentDate = moment(0);
    const state = filtersReducer(undefined, {
        type: 'SET_START_DATE',
        date: currentDate
    });
    expect(state.startDate).toEqual(currentDate);
});

test('should be endDate filter', () => {
    const currentDate = moment(0);
    const state = filtersReducer(undefined, {
        type: 'SET_END_DATE',
        date: currentDate
    });
    expect(state.endDate).toEqual(currentDate);
});