import React, { useState } from 'react'
import './Search.css'
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Button } from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import { useNavigate } from 'react-router-dom';

function Search() {

    const history = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className="search">
            {/* <br/>
            <br/> */}
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2>Number of Animal(s)  <PetsIcon /></h2>
            <input min={0} defaultValue={1} type="number" />
            <Button onClick={() => history('/search')}>Search WildHoods</Button>
        </div>
    )
}

export default Search
