import React from 'react';
import { connect } from 'react-redux';
//import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
//import 'react-dates/lib/css/_datepicker.css';
import { filterText, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';

export class ExpenseListFilter extends React.Component {
    state = {
        calendarFocused: null
    }

    onDateChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }

    onTextChange = (e) => {
        this.props.filterText(e.target.value);
        console.log(e.target.value);
    }

    onSortChange = (e) => {
        e.target.value === "date" ? this.props.sortByDate() : this.props.sortByAmount();
    }
    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={this.onTextChange} />

                <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId="your_unique_start_date_id"
                    endDateId="your_unique_end_date_id"
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDateChange}
                    focusedInput={this.state.calendarFocused}
                    showClearDates={true}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}


const mapStateToProps = (state, props) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        filterText: (text) => dispatch.filterText(text),
        sortByAmount: () => dispatch.sortByAmount(),
        sortByDate: () => dispatch.sortByDate(),
        setStartDate: (startDate) => dispatch.setStartDate(startDate),
        setEndDate: (endDate) => dispatch.setEndDate(endDate)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilter);