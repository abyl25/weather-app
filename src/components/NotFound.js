import React from 'react'
import './Weather/details.css';

function NotFound(props) {
    return (
        <div>
            <h1 className="not-found">{props.message}</h1>
        </div>
    );
}

export default NotFound;
