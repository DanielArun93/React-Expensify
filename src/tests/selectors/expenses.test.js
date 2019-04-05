import moment from 'moment';
import Visiblexpenses from '../../selectors/expenses';
import expenses from '../../fixtures/expenses';


test('should filter expenses by text', () => {

    const filter = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = Visiblexpenses(expenses, filter);

    expect(result).toEqual([expenses[2],expenses[0]]);
})


test('should filter expenses by startDate', () => {

    const filter = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = Visiblexpenses(expenses, filter);

    expect(result).toEqual([expenses[2],expenses[0]]);
})

test('should filter expenses by endDate', () => {

    const filter = {
        text: '',
        sortBy: 'date',
        startDate:undefined,
        endDate: moment(0).add(2,'days')
    }
    const result = Visiblexpenses(expenses, filter);

    expect(result).toEqual([expenses[0],expenses[1]]);
})

test('should filter expenses by date', () => {

    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = Visiblexpenses(expenses, filter);

    expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);
})

test('should filter expenses by amount', () => {

    const filter = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = Visiblexpenses(expenses, filter);

    expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);
})