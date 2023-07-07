import { useState } from 'react';
import './header.css';
function Header({getdata}) {

    const [name,setName]=useState('');
    return (
        <div className="header container-float">
            <div className="row">
                <div className="col-4 logo">Movie Ticket</div>
                <div className="col-5">
                    <div className='searchBox' >
                        <input type="text" id='inputdata' onKeyUp={(e) => {(e.key === 'Enter') ? getdata(name) :setName(e.target.value)}} />
                        <button className='searchBtn' onClick={()=>{getdata(name)}} />
                    </div>
                </div>
                <div className="col-3"></div>
            </div>


        </div>);
}

export default Header;