import React from 'react'
import loading from './loading.gif'

const Spinner = () =>{
    return (
      <div className="text-center">
        <img src={loading} alt="loading" style={{ width: '70px', height: '70px'}} />
      </div>
    )
}

export default Spinner
