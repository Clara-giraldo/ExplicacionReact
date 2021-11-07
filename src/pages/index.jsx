import CardRazasPerros from 'Component/CardRazasPerros'
import Pandora from 'media/Pandora.jpg';
import Tyson from 'media/tyson.jpg';


function Index() {
    return (
            <section>
                <h1>Razas de perros</h1>
                <ul className="breedCardContainer">
                <CardRazasPerros nombreRaza='Pandora' imagen={Pandora}/>
                <CardRazasPerros nombreRaza='Pandora' imagen={Pandora}/>
                <CardRazasPerros nombreRaza='Pandora' imagen={Pandora}/>
                <CardRazasPerros nombreRaza='Tyson' imagen={Tyson}/>
                <CardRazasPerros nombreRaza='Tyson' imagen={Tyson}/>
                <CardRazasPerros nombreRaza='Tyson' imagen={Tyson}/>
                </ul>
            </section>
    

    );
}

export default Index;