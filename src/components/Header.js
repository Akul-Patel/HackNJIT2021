import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Header() {
    const history = useNavigate();
    return (
        <div className="header">
            <Link to='/'>
                <img className="header__icon" src="\app-logo-main.png" alt="" />
            </Link>

            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="header__right">
                <Button onClick={() => history('/host-form')}>Become a host</Button>
                <LanguageIcon />
                {/* <ExpandMoreIcon /> */}
                <Avatar />
            </div>
        </div>
    )
}

export default Header
