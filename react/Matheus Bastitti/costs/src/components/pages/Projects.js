import React from 'react'
import Message from '../layouts/Message'
import { useLocation } from 'react-router-dom'

function Projects() {

  const location = useLocation()

    let message = '';
    if(location.state) {
      message = location.state.message
    }

    console.log(message);
    

  return (
    <div>
      <h1>Meus Projetos</h1>

      {message && (
        <Message msg={message} type="success"></Message>
      )}
    </div>
  )
}

export default Projects
