import React from 'react'
import { images } from "../constants";

function Spinner () {
  return (
    <div className='d-flex justify-content-center'>
        <img src={images.Spinner} alt="spin" style={{width: "50px", marginTop: "20px"}} />
    </div>
  )
}

export default Spinner