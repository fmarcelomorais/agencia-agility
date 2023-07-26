import './BoxInfo.css'
import React from 'react'

const BoxInfo = ({title, text, icon}) => {
 
  return (
    <div className='Box'>
        <div className="infor">
            <span><i className={icon}></i></span>
            <h2>{title}</h2>  
           <p>{text}</p>
        </div>
    </div>
  )
}

export default BoxInfo
