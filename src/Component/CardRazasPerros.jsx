import {link} from 'react-router-dom';
/*creo un funcion que contiene un objeto para que en la principal me asuma dichos objetos 
los imput se deben poner entre llaves {}*/
function CardRazasPerros({ nombreRaza, imagen }) {
    return (
        <li className="breedcard">
            <link to = '/Pandora'/>
            <div className= "contenedorimage">
                <img src={imagen} alt={nombreRaza}/>
            </div>
            <link/>
            <span className="breedtitle">{nombreRaza}</span>    
        </li>
    )
    
    }
    export default CardRazasPerros;

    