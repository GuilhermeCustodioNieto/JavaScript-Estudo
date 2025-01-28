import Button from "./evento/Button";

function Evento(){
    function meuEvento(){
        console.log('fui chamado');
        
    }

    function segundoEvento(){
        console.log(`ativando o segundo evento!`);
        
    }

    return (
        <div>
            <p>Clique para ativar um evento</p>
            <Button text="oiio" event={meuEvento}></Button>
            <Button text="teste2" event={segundoEvento}></Button>

        </div>
    )
}

export default Evento