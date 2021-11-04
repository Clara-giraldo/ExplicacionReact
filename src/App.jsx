import logo from './media/logo1.png';
import './styles/App.css';
import Pandora from './media/Pandora.jpg';
import Tyson from './media/tyson.jpg';

function App() {
  return (
    <div className="App">
      
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
  );
}

function CardRazasPerros(props){
return(
              <li className="breedcard">
                  <div className= "contenedorimage">
                  <img src={props.imagen} alt={props.nombreRaza}/>
                  </div>
                  <span className="breedtitle">{props.nombreRaza}</span>    
              </li>
)

}
export default App;
