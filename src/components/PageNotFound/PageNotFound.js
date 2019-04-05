import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink } from 'react-router-dom';
class PageNotFound extends React.Component {
    render() {
        return (
            <div>
                <h1>Page not found 404!- <Link to="/">Go home</Link></h1>
            </div>
        )
    }
}

export default PageNotFound;