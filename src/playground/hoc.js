//Higher Order Component -- hoc "A Component returns another Wrapped Component"

//code reusability
//props manipulation
//state abstraction
//render hijacking

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {   
    return (
        <div>
            <h1>Info</h1>
            <p>Details : {props.info}</p>
        </div>
    )
}


//basic hoc Component
const AdminInfo = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth && <p>This is from Admin...</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}


const HOC = AdminInfo(Info);
ReactDOM.render(<HOC info="This is Secret Info.." isAuth={true}/>, document.getElementById('app'));

