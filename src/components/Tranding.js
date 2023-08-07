import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Show from './Show'
import './Tranding.css'
import Header from './header'

function Tranding() {

    const [shows, setshows] = useState([]);

    async function getdata(showName) {
        if(showName){
        const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${showName}`);
        setshows(response.data);}
    }
    useEffect(() => {
        getdata("shows");
    }, [])

    return (
        <div className="main">
            <Header getdata={getdata} />
            {
                shows.map(ele => (<Show data={ele} key={ele.show.id} />))
            }
        </div>
    )
}

export default Tranding;