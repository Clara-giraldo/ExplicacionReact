import logo from 'media/logo1.png';


function Header() {
    return(
    <header>

        <ul className="navbar">
            <li>
                <img src={logo} alt="Logo" className="logo" />
            </li>
            <li>
                <button className="Button mainButton">Nuevo post</button>
            </li>
            <li>
                <div className="buscar">
                    <input placeholder="Buscar una raza" />
                    <i className="fas fa-search Button iconobusqueda"></i>
                </div>
            </li>
            <li>
                <button className="Button mainButton"> Registro </button>
            </li>
            <li>
                <button className="Button ButtonSecundary">Login </button>
            </li>
        </ul>
    </header>
    )
}

export default Header;




/*otra forma para crear las funciones
    se declaran variables como const; es una variable constante o estatica

    const variablenumerica =3;
    const variabletexto = "este es un texto";
    const variableArray =[1,2,3,4];
    const variableobjeto ={
        llave1: 'valor1',
        llave2: 'valor2',
        llave3: 'valor3',
    }
    const listaoejtos = [
        {
        llave1: 'valor1',
        llave2: 'valor2',
        llave3: 'valor3',
        },
        {
        llave1: 'valor1',
        llave2: 'valor2',
        llave3: 'valor3',
        },
        {
        llave1: 'valor1',
        llave2: 'valor2',
        llave3: 'valor3',
        }
    ]

    hay variables que se pueden asignar a una funcion

    cont nombreFuncion = () =>{
        return "retorno de la funcion"
    }
al quedar un funcion en un variable se puede utilizar cuantas veces sea necesario

es igual que hacer 

(=>: arru funsion)

    fuction nombreFuncion = (){
        return "retorno de la funcion"
    }
*/

