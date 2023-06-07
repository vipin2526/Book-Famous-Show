import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Show from './Show'
import './Tranding.css'


function Tranding() {

    const [shows, setshows] = useState([]);
    
    useEffect(() => {
        async function getdata() {
            const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
            setshows(response.data);
        }
        getdata();
    }, [])


    return (
        <div className="main">
            {
                shows.map(ele => (<Show data={ele} key={ele.show.id}/>))
            }
        </div>
    )
}

export default Tranding;