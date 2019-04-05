import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';


export default class ExpenseForm extends React.Component {

    state = {
        description: this.props.expense ? this.props.expense.description : '',
        amount: this.props.expense ? (this.props.expense.amount / 100).toString() : '',
        note: this.props.expense ? this.props.expense.note : '',
        createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
        calendarFocused: false,
        error: ''
    }

    handleDescription = (e) => {
        const description = e.target.value;
        this.setState((prevState) => ({ description: description }))
    }

    handlenote = (e) => {
        const note = e.target.value;
        this.setState((prevState) => ({ note: note }))
    }

    handleAmount = (e) => {
        // e.persist(); 
        // this.setState(() => ({amount:e.target.value}))
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }

    }

    onFocusChange = ({focused}) => {
        this.setState(() => ({ calendarFocused: focused }));
    }

    onhandleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => {
                return {
                    error: "Please Provide Description and Amount Details"
                }
            })
        }
        else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }

    render() {

        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onhandleSubmit}>
                    <input type="text" placeholder="Description" value={this.state.description} onChange={this.handleDescription} />
                    <input type="number" placeholder="Amount" value={this.state.amount} onChange={this.handleAmount} />

                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false} />
                    <textarea placeholder="Add a note for ur Expense(optional)" value={this.state.note} onChange={this.handlenote}></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}