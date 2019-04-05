import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from'../components/ExpenseDashboardpage/ExpenseDashboardpage';
import AddExpensePage from '../components/AddExpensePage/AddExpensePage';
import EditExpensePage from '../components/EditExpensepage/EditExpensepage';
import HelpPage from '../components/HelpPage/HelpPage';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import Header from '../components/Header/Header';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={ExpenseDashboardPage} exact></Route>
                    <Route path="/create" component={AddExpensePage}></Route>
                    <Route path="/edit/:id" component={EditExpensePage}></Route>
                    <Route path="/help" component={HelpPage}></Route>
                    <Route component={PageNotFound}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;