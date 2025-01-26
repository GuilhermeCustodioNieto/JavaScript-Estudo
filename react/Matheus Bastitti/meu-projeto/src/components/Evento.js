function Evento(){
    function meuEvento(){
        console.log('fui chamado');
        
    }

    return (
        <div>
            <p>Clique para ativar um evento</p>
            <button onClick={meuEvento}>Ativa!</button>

        </div>
    )
}

export default Evento