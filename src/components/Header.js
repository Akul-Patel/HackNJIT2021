import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom'
import AuthNav from './auth-nav';


function Header() {
    return (
        <div className="header">
            <Link to='/'>
                <img className="header__icon" src="/airbnb-logo.png" alt="" />
            </Link>
            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            
            </div>
            <div className="nav-container mb-3">
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <div className="container">
                        <div className="navbar-brand logo" />
                            <AuthNav />
                    </div>
                </nav>
            </div>


        </div>
    )
}

export default Header
