import React from 'react';
import './internetpage.css'
const Nointernet = () => {
    return (

        <div className="container1">
            <img
                src={process.env.PUBLIC_URL + 'nointernet.png'}
                className="no-internet"
                alt="No connection"
            />
            <div className="text">
                Oho!!! No Internet Connection
            </div>
            <div className="text1">
                Check Your Connection
            </div>
        </div>

    )
}

export default Nointernet;