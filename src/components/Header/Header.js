import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';


class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Expensify</h1>
                <NavLink to="/" activeClassName="is-active" exact>Home</NavLink><br />
                <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink><br />
                <NavLink to="/edit/:id" activeClassName="is-active">Edit Expense</NavLink><br />
                <NavLink to="/help" activeClassName="is-active">Help</NavLink>
            </div>
        )
    }
}

export default Header;