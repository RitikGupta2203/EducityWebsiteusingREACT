import React from 'react'
import './Title.css'

// to receive the props provide the parameter in the title function
const Title = ({subTitle,title}) => {
  return (
    <div className='title'>
        {/* to be passed using props check the app.jsx file and title section*/}
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  )
}

export default Title
