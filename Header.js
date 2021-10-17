import React from "react"
import logo from '../logo.svg';

import './Header.css'

const Header = ({name, city, status}) => {
    
        return (
            <header className="header-header">
                <img src={logo} className="header-logo" alt="logo" />
                <p>
                    name: {name} city: {city} status: {status}
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        )
    
}

export default Header