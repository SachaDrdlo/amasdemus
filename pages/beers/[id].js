import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core';
import GoBackButton from '../components/GoBackButton'
import LogoTemplate from '../components/LogoTemplate'
import Navbar from '../components/Navbar-bottom';
import BeerInfos from '../components/BeerInfos'
import Header from '../components/Header'
import Footer from '../components/Footer'
import beers from '../../beers.json'

const beer = ({ beerData, sameTypeBeers }) => {

    sameTypeBeers = sameTypeBeers.beers

    const sameTypeBeersSelection = sameTypeBeers.map((beer) => {

        return (
            <LogoTemplate
                key={beer.id}
                id={beer.id}
                name={beer.name}
                img={beer.image}
            />
        )

    })

    return (
        <div>
            <Header />
            <GoBackButton />
            <div>
                <BeerInfos
                    key={beerData.id}
                    name={beerData.name}
                    type={beerData.type}
                    level={beerData.level}
                    brewery={beerData.breweries}
                    desc_brewery={beerData.desc_brewery}
                    brewery_id={beerData.id_brewery}
                    flavours={beerData.flavours}
                    format={beerData.format}
                    glass={beerData.glass}
                    image={beerData.image}
                    img_brewery={beerData.img_brewery}
                    title={beerData.title}
                    description={beerData.description}
                />
            </div>
            <div className="container">
                <div className="sectionblock">
                    <div className="sectionblock-infos">
                        <h2 className="sectionblock-headtitle">Bières similaires</h2>
                        <hr className="sectionblock-underline" />
                        <h3 className="sectionblock-title">D'autres bières</h3>
                    </div>
                </div>
                <Grid container spacing={5}>
                    {sameTypeBeersSelection}
                </Grid>
            </div>
            <Footer />
            <Navbar />
        </div>
    )
}

export default beer

export async function getServerSideProps(context) {
    const query = context.query.id;

    const beerDataRes = await fetch(`https://sachadordolo.fr/amasdemus/admin/src/api/singleBeer.php?id=${query}`)
    const beerData = await beerDataRes.json()

    const beerId = beerData.id
    const beerType = encodeURI(beerData.type)
    const sameTypeRes = await fetch(`https://sachadordolo.fr/amasdemus/admin/src/api/singleBeerSelectOtherBeers.php?id=${beerId}&selection="${beerType}"`)
    const sameTypeBeers = await sameTypeRes.json()

    return {
        props: {
            beerData,
            sameTypeBeers
        },
    }
}
