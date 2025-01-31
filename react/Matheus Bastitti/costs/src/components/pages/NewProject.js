import React from 'react'
import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'
import {useNavigate} from 'react-router-dom'

function NewProject() {

  const navigate = useNavigate()

  function createPost(project) {
    // initialize costs and services
    project.costs = 0
    project.services = []

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
      'Content-Type': "application/json"
      }, 
      body: JSON.stringify(project)
    })
    .then(
      (resp) => resp.json()
    )
    .then(
      (data) => {
        const state = {message: "Projeto criado com sucesso"}
        navigate('/projects', {state})
      }
    )
    .catch(err => console.log(err));
    
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <p>Formulário</p>

      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"></ProjectForm>
    </div>
  )
}

export default NewProject