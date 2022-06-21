
import React from 'react'
import spinnerImage from '../assets/spinner.gif'

const Spinner = () => {
    return (
        <React.Fragment>
            <div className='spinnerPage centered'>
                <img src = {spinnerImage} alt='' width='400' height='400'/>
            </div>
        </React.Fragment>
            
        
    )
}

export default Spinner