import React from 'react'
import '../styles/spinner.css'

const Spinner = () => {
    return (
        <div className="lds-ripple">
            <div></div>
            <div></div>
        </div>
    )
}

export default Spinner