import React, { useState } from 'react'
import './Banner.css'
import { Button } from '@material-ui/core';
import Search from './Search';
import { useNavigate } from 'react-router-dom';

function Banner() {
    const history = useNavigate();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="banner">

            <div className="banner__search">
                {showSearch && <Search />}
                <Button
                    onClick={() => setShowSearch(!showSearch)} className="banner__searchButton" variant="outlined">
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>

            <div className="banner__info">
                <h1>Thinking about your pets during the vacation?</h1>
                <h3>
                    Dont' worry we are here.
                </h3>
                <br/>
                <Button onClick={() => history('/Search')}
                    variant="outlined">Explore Nearby Hosts</Button>
            </div>
        </div>
    )
}

export default Banner