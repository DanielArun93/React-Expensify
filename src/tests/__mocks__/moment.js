//import moment from 'moment';
const moment = require.requireActual('moment');

export default (timeStamp = 0) => {
    return moment(timeStamp);
}