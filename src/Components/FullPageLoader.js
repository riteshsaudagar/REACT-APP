import React from 'react'
import './FullPageLoader.css';

const FullPageLoader = () => {
    return (
        <div className="fp-container">
           <img src="/Spinner.gif" className="fp-loader" alt="loading" /> 
        </div>
    )
}

export default FullPageLoader;