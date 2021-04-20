import React from 'react'
import { useRouter } from 'next/router'
import { Grid } from '@material-ui/core';
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import LogoTemplate from '../../components/LogoTemplate';
import styles from '../../../styles/components/Brewery.module.scss';

const BeersType = ({ beers, type }) => {

    beers = beers.beers

    const beersDisplay = beers.map((beer) => {
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
            <Header/>
            <main className={styles.brewery_mainsection}>
                <div className="container">
                    <section className="sectionblock">
                        <div className="sectionblock-infos">
                            <h2 className="sectionblock-headtitle">Bières {type}s</h2>
                            <hr className="sectionblock-underline" />
                            <h3 className="sectionblock-title">Toutes les bières {type}s</h3>      
                        </div>
                        <Grid container spacing={5}>
                            {beersDisplay} 
                        </Grid>
                    </section>
                </div>
            </main>
            <Footer/>

        </div>
    )
}

export default BeersType

export async function getServerSideProps(context) {
    const type = encodeURI(context.query.type)
    
    const beersRes = await fetch(`https://sachadordolo\.fr/amasdemus/admin/src/api/allBeersByType.php?selection="${type}"`)
    const beers = await beersRes.json()
    
    

    return {
        props: {
            beers,
            type
        },
    }
}