import CardRazasPerros from 'Component/CardRazasPerros'
import Footer from 'Component/Footer';
import Header from 'Component/Header';
import Pandora from 'media/Pandora.jpg';
import Tyson from 'media/tyson.jpg';


function Index() {
    return (
        <div>
        <Header />
        <main>
        <section>
            <h1>Razas de perros</h1>
            <CardRazasPerros nombreRaza='Pandora' imagen={Pandora}/>
            <CardRazasPerros nombreRaza='Tyson' imagen={Tyson}/>
        </section>
        <section></section>
        </main>
          <Footer />
        </div>

    )
}

export default Index;