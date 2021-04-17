import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import styles from '../../styles/components/Beers.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Filters from '../components/Filters'
import LogoTemplate from '../components/LogoTemplate'

export default function Beers({ blondBeers, tripleBeers, amberBeers }) {
    blondBeers = blondBeers.beers
    tripleBeers = tripleBeers.beers
    amberBeers = amberBeers.beers

    const blondType = blondBeers[0].type
    const tripleType = tripleBeers[0].type
    const amberType = amberBeers[0].type


    const [opened, setOpened] = useState(false);
    const breakpoint = 992;

    const getFilters = (e) => {
        e.currentTarget.id === 'filter' ? setOpened(!opened) : null
    }

    useEffect(() => {
        document.body.classList.add("filters");
        document.body.classList.add("filters__active", opened);

    }, [opened])



    const blondList = blondBeers.map((blondBeer) => {
        return (
            <LogoTemplate
                key={blondBeer.id}
                id={blondBeer.id}
                img={blondBeer.image}
                name={blondBeer.name}
            />
        )
    })
    
    const tripleList = tripleBeers.map((tripleBeer) => {
        return (
            <LogoTemplate
                key={tripleBeer.id}
                id={tripleBeer.id}
                img={tripleBeer.image}
                name={tripleBeer.name}
            />
        )
    })

    const amberList = amberBeers.map((amberBeer) => {
        return (
            <LogoTemplate
                key={amberBeer.id}
                id={amberBeer.id}
                img={amberBeer.image}
                name={amberBeer.name}
            />
        )
    })

    return (
        <div className={styles.beerspage}>
            <Header />
            <main>
                <div className={`${styles.filters_container} ${opened ? styles.filters_container_active : null}`}>
                    <div className="container">
                        <button id="filter" className={styles.filters_btn} onClick={(e) => getFilters(e)}>
                            <img src="/img/icons/filter-icon.svg" alt="" />
                            <p>Filtres</p>
                        </button>
                    </div>
                </div>
                {/* <Filters /> */}

                <div className="container">
                    <section className="sectionblock">
                        <div className="sectionblock-infos">
                            <h2 className="sectionblock-headtitle">Bières {blondType}s</h2>
                            <hr className="sectionblock-underline" />
                            <h3 className="sectionblock-title">Belles blondes</h3>      
                        </div>
                        <Grid container item className={styles.breweries_container}>
                            {blondList}
                        </Grid>
                    </section>
                    <section className={styles.beers_section}>
                        <div className="sectionblock-infos">
                            <h2 className="sectionblock-headtitle">Bières {tripleType}s</h2>
                            <hr className="sectionblock-underline" />
                            <h3 className="sectionblock-title">Triples saveurs</h3>      
                        </div>
                        <Grid container item className={styles.breweries_container}>
                            {tripleList}
                        </Grid>
                    </section>
                    <section className={styles.beers_section}>
                        <div className="sectionblock-infos">
                            <h2 className="sectionblock-headtitle">Bières {amberType}s</h2>
                            <hr className="sectionblock-underline" />
                            <h3 className="sectionblock-title">Mousses d'ambre</h3>      
                        </div>
                        <Grid container item className={styles.breweries_container}>
                            {amberList}
                        </Grid>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    )
}


export async function getServerSideProps() {
    const blonde = encodeURI("blonde")
    const triple = encodeURI("triple")
    const amber = encodeURI("ambrée")
    
    const blondRes = await fetch(`http://sachadordolo.fr/amasdemus/admin/src/api/selectBeersByType.php?selection="${blonde}"`)
    const blondBeers = await blondRes.json()
    
    const tripleRes = await fetch(`http://sachadordolo.fr/amasdemus/admin/src/api/selectBeersByType.php?selection="${triple}"`)
    const tripleBeers = await tripleRes.json()
    
    const amberRes = await fetch(`http://sachadordolo.fr/amasdemus/admin/src/api/selectBeersByType.php?selection="${amber}"`)
    const amberBeers = await amberRes.json()
    
    

    return {
        props: {
            blondBeers,
            tripleBeers,
            amberBeers
        },
    }
}