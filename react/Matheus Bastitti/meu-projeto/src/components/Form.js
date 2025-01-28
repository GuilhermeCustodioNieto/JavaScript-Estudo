import {useState} from 'react'

function Form(){
    function enviou(e){
        e.preventDefault()
        console.log(`O usuário ${name} foi cadastrado com a senha ${password}`);
        
        
        console.log('Forms enviado');
        
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={enviou}>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)}></input>
                <label htmlFor="name">Senha:</label>
                <input type="password" name="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)}></input>
                <input type="submit" value="Enviar"></input>
            </form>
        </div>
    )
}

export default Form