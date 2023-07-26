import './Display.css'
import React from 'react'

const Display = ({icon, text, bgcolor}) => {
  return (
    <div className='Display' style={{backgroundColor: bgcolor}}>
        <span><i className={icon}></i> {text}</span>
    </div>
  )
}

export default Display
