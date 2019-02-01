import React from 'react'
import './navbar.css';

function Navbar() {
    return (
        <div>
            <nav>
                <a id="logo" href="#">Weather</a>
                <a href="#">Main</a>
                <a href="#">Docs</a>
                <a href="#">Settings</a>
                <a href="#">About</a>
            </nav>
        </div>
    );
}

export default Navbar;