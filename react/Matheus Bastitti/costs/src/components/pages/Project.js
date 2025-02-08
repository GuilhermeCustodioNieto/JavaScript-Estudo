import React from 'react'
import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layouts/Loading'
import Container from '../layouts/Container'
import ProjectForm from '../project/ProjectForm'
import Message from '../layouts/Message'
import ServiceForm from '../service/ServiceForm'

import {parse, v4 as uuidv4} from 'uuid'
import ServiceCard from '../service/ServiceCard'

function Project() {
    const id = useParams().id
    

    const [project, setProject] = useState([]);
    const [services, setServices] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [showServiceForm, setShowServiceForm] = useState(false);
    const [message, setMessage] = useState();
    const [type, setType] = useState();

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            .then(resp => resp.json())
            .then(data => {
                setProject(data)
                
                
            })
            .catch(err => console.log(err))
        }, 300)
    }, [id])

    function removeService(id, cost) {
        const servicesUpdated = project.services.filter(
          (service) => service.id !== id,
        )
    
        const projectUpdated = project
    
        projectUpdated.services = servicesUpdated
        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)
    
        fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(projectUpdated),
        })
          .then((resp) => resp.json())
          .then((data) => {
            setProject(projectUpdated)
            setServices(servicesUpdated)
            setMessage('Serviço removido com sucesso!')
            setType('success')
          })
      }


    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    function createService(project) {
        const lastService = project.services[project.services.length - 1]
        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost
        const newCost = parseFloat(project.costs) + parseFloat(lastServiceCost)

        
        

        if(newCost > parseFloat(project.budget)) {
            setMessage('Orçamento ultrapassado, verifique o valor do serviço')
            setType('error')
            
            
            return false
        }

        project.cost = newCost

        
            fetch(`http://localhost:5000/projects`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(project)
            }).then((resp) => resp.json())
            .then((data) => {
                setProject(data)
                setServices(data.services)
                setShowServiceForm(false)
                
            }).catch(err => console.log(err))
        

        
        
    }
    

    function editPost(project) {
        setMessage('')

        if(project.budget < project.costs) { 
            setMessage('O orçamento não pode ser menor que o custo do projeto')
            setType('Error')
            return false
        }

        console.log('Projeto antes do envio:', project);

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data)
            setShowProjectForm(false)

            setMessage('Projeto atualizado')
            setType('success')
            
        })
        .catch(err => console.log(err))
        
    }

  return (
    <>
    {project.name ? (
        <div className={styles.project_details}>
           <Container customClass='column'>
                {message && <Message type={type} msg={message}></Message>}
                <div className={styles.details_container}>
                    <h1>Projeto: {project.name}</h1>
                    <button onClick={toggleProjectForm} className={styles.btn}>
                        {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                    </button>

                    {!showProjectForm ? (
                        <div className={styles.project_info}>
                            <p>
                                <span>Categoria: </span>{project.category.name}
                            </p>
                            <p>
                                <span>Total de Orçamento: </span> R${project.budget}
                            </p>
                            <p>
                                <span>Total utilizado: </span> R${project.costs}
                            </p>
                        </div>
                    ) : (
                        <div className={styles.project_info}>
                            <ProjectForm handleSubmit={editPost} btnText="Concluir edição" 
                            projectData={project}
                            ></ProjectForm>
                        </div>
                    )}
                </div>
                <div className={styles.service_form_container}>
                    <h2>Adicione um serviço:</h2>
                    <button onClick={toggleServiceForm} className={styles.btn}>
                        {!showServiceForm ? 'Adicionar serviço projeto' : 'Fechar'}
                    </button>

                    <div className={styles.project_info}>
                        {showServiceForm && (
                            <ServiceForm 
                                handleSubmit={createService}
                                textBtn="Adicionar serviço"
                                projectData={project}
                            ></ServiceForm>
                        )}
                    </div>
                </div>
                <h2>Serviços</h2>
                <Container customClass='start'>
                        {services.length > 0 && services.map((service) => (
                            <ServiceCard
                            id={service.id}
                            name={service.name}
                            cost={service.cost}
                            description={service.description}
                            key={service.id}
                            handleRemove={removeService}>
                            </ServiceCard>
                        )) }

                        {services.length === 0 && <p>Não há serviços cadastrados</p>}

                        
                </Container>
            </Container> 
        </div>
    ) : (<Loading></Loading>)}
    </>
  )
}

export default Project
