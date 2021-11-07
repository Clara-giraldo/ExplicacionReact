import CardRazasPerros from 'Component/CardRazasPerros'
import Layout from 'Layouts/Layout';
import Pandora from 'media/Pandora.jpg';
import Tyson from 'media/tyson.jpg';


function Index() {
    return (
        <Layout>
            <section>
                <h1>Razas de perros</h1>
                <CardRazasPerros nombreRaza='Pandora' imagen={Pandora}/>
                <CardRazasPerros nombreRaza='Tyson' imagen={Tyson}/>
            </section>
        </Layout>

    )
}

export default Index;