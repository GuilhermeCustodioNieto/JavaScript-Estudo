import React from 'react'

function Container(props) {
    console.log(props.children);
    

  return (
    <div className={`container ${props.customClass}`}>
      {props.children}
    </div>
    
  )
}

export default Container
