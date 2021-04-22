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
            name={'La Zytholoteam'}
            type={'brune'}
            level={59}
            brewery={'Hauts-de-France'}
            desc_brewery={"Berceau de nos 3 ingrédients exceptionnels, cette région habrite également les locaux de M2i formation, brasserie du savoir dans laquelle le maître brasseur Frédéric Girod apporte une attention toute particulière à la confection et à la réussite de la bière Zytholoteam. Sa sagesse et ses conseils avisés ont rendu possible la création de ce projet."}
            // brewery_id={beerData.id_brewery}
            flavours={'Créativité, force de caractère, passion'}
            // format={beerData.format}
            glass={'Pinte ou rien'}
            image={'../img/beer-about.png'}
            img_brewery={'../img/hauts-de-france.png'}
            title={"L'alliance parfaite"}
            description={"Chacun des ingrédients qui composent cette bière a été brassé avec amour pendant 9 mois. Sacha, le houblonné Picard, Étienne, l'orge Dunkerquois et Julien, le malt Roubaisien forment à eux trois, la Zytholoteam. Cette bière, alliant de belles saveurs créatives, une technique affinée et beaucoup de caractère, saura vous emerveiller."}
            />
            <Footer />
            <Navbar />
        </div>
    )
}

export default About
