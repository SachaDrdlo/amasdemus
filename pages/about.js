import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import LogoTemplate from './components/LogoTemplate'
import Navbar from './components/Navbar-bottom'
import BeerInfos from './components/BeerInfos'
import BeerIllu from './components/BeerIllu'
import BreweryTemplate from './components/BreweryTemplate'

const About = () => {
    return (
        <div>
            <Header />

            <BeerInfos
            // key={beerData.id}
            name={'Team Zobar'}
            type={'brune'}
            level={18}
            brewery={'Hauts-de-France'}
            desc_brewery={"Nous sommes exceptionnel regardez ce qu'on a réussi à faire je vous en supplie lets go c'est parti j'adore la bière j'aime le sexe et ensuite j'adore la bière en faisant du sexe Etienne est un gros puant ainsi que Julien la longue mèche mdr allez zé barti tout le monde pour un nouveau tour"}
            // brewery_id={beerData.id_brewery}
            flavours={'Créatif, salé, branleur'}
            // format={beerData.format}
            glass={'Pinte ou rien'}
            image={'../img/about.png'}
            img_brewery={'../img/hauts-de-france.png'}
            title={'La dream team'}
            description={"Nous sommes exceptionnel regardez ce qu'on a réussi à faire je vous en supplie lets go c'est parti j'adore la bière j'aime le sexe et ensuite j'adore la bière en faisant du sexe Etienne est un gros puant ainsi que Julien la longue mèche mdr allez zé barti tout le monde pour un nouveau tour"}
            />
            <Footer />
            <Navbar />
        </div>
    )
}

export default About