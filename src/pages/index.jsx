import CardRazasPerros from 'Component/CardRazasPerros'
import logo from 'media/logo1.png';
import Pandora from 'media/Pandora.jpg';
import Tyson from 'media/tyson.jpg';


function Index() {
    return (
        <div>
        <header>

        <ul className="navbar">
            <li>
                <img src={logo} alt="Logo" className="logo"/>
                  
            </li>
            
            <li>
                <button className="Button mainButton">Nuevo post</button>
            </li>
            
                    
            
                <li>
                    <div className= "buscar">
                    <input placeholder="Buscar una raza"/>
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
        <main>
        <section>
            <h1>Razas de perros</h1>
            <CardRazasPerros nombreRaza='Pandora' imagen={Pandora}/>
            <CardRazasPerros nombreRaza='Tyson' imagen={Tyson}/>
        </section>
        <section></section>
        </main>
          <footer></footer>
        </div>

    )
}

export default Index;