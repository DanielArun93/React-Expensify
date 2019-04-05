import moment from 'moment';

const expenses = [
    {
        id: '1',
        description: 'Rent',
        amount: 12000,
        createdAt: 0,
        note: ''
    },
    {
        id: '2',
        description: 'Card Bill',
        amount: 800,
        createdAt: moment(0).subtract(4, 'days').valueOf(),
        note: ''
    },
    {
        id: '3',
        description: 'EB Bill',
        amount: 20000,
        createdAt: moment(0).add(4, 'days').valueOf(),
        note: ''
    }]

    export default expenses;