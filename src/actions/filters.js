//filter text
export const filterText = (text = '') => {
    return {
        type: 'FILTER_TEXT',
        text
    }
}

//sortby date
export const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    }
}

//sort by amount
export const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    }
}

//set start date
export const setStartDate = (date = undefined) => {
    return {
        type: 'SET_START_DATE',
        date
    }
}
//set end date
export const setEndDate = (date = undefined) => {
    return {
        type: 'SET_END_DATE',
        date
    }
}