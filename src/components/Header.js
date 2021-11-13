import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
import AuthNav from './auth-nav';

>>>>>>> f6d7f0512b3625a5c2771228f5813bb893127af3

function Header() {
    const history = useNavigate();
    return (
        <div className="header">
            <Link to='/'>
                <img className="header__icon" src="\app-logo-main.png" alt="" />
            </Link>

            <div className="header__center">
                <input type="text" />
                <Button onClick={() => history('/Search')}
                    ><SearchIcon /></Button>
            </div>

            <div className="header__right">
                <Button>Become a host</Button>
                <LanguageIcon />
                {/* <ExpandMoreIcon /> */}
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
