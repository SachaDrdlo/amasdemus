import React from 'react'
import Link from 'next/link'
import { useEffect, useState, useCallback, createContext, useContext } from 'react';
import { Grid } from '@material-ui/core';
import styles from '../../styles/components/Beers.module.scss'
import Header from '../components/Header'
import GoBackButton from '../components/GoBackButton'
import Footer from '../components/Footer'
import Filters from '../components/Filters'
import LogoTemplate from '../components/LogoTemplate'

export default function Beers({ blondBeers, tripleBeers, amberBeers, typesFilters, locationsFilters, flavoursFilters }) {
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
        document.body.classList.add("filters__active")
    }

    const [beerFilters, setBeerFilters] = useState([]);
    const callbackFunction = (filterResponse) => {
        // Bravo à Sacha le grand
        const beerState = [...beerFilters]
        const filterIn = beerState.find((filter) => {
            return filterResponse == filter
        })

        if (filterIn) {
            const remainingFilters = beerState.filter(item => item !== filterIn)
            setBeerFilters(remainingFilters)
        } else {
            setBeerFilters([...beerFilters, filterResponse])
        }
    }

    useEffect(() => {
        document.body.classList.add("filters");
        // a enlever
        document.body.classList.add("filters__active")


    }, [])

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

    const typesList = typesFilters.beers.map((type) => {
        return (
            type
        )
    })
    const locationsList = locationsFilters.beers.map((location) => {
        return (
            location
        )
    })
    const flavoursList = flavoursFilters.beers.map((flavour) => {
        return (
            flavour
        )
    })

    return (
        <div className={styles.beerspage}>
            <Header />
            <main>
                <div className={`${styles.filters_container} ${opened ? styles.filters_container_active : null}`}>
                    <GoBackButton />
                    <div className="container">
                        <button id="filter" className={styles.filters_btn} onClick={(e) => getFilters(e)}>
                            <img src="/img/icons/filter-icon.svg" alt="" />
                            <p>Filtres</p>
                        </button>
                    </div>
                </div>
                <Filters
                    types={typesList}
                    locations={locationsList}
                    flavours={flavoursList}
                    parentCallback={callbackFunction}
                />

                <div className="container">
                    <section className="sectionblock">
                        <div className="sectionblock-infos">
                            <h2 className="sectionblock-headtitle">Bières blondes</h2>
                            <hr className="sectionblock-underline" />
                            <h3 className="sectionblock-title">Belles blondes</h3>
                        </div>
                        <Grid container item className={styles.breweries_container}>
                            {blondList}
                        </Grid>
                        <Link href={`/beers/type/${blondType}`}>
                            <a className={`beigeButton ${styles.beigeButton}`}>Découvrir toutes les bières blondes</a>
                        </Link>
                    </section>
                    <section className={styles.beers_section}>
                        <div className="sectionblock-infos">
                            <h2 className="sectionblock-headtitle">Bières triples</h2>
                            <hr className="sectionblock-underline" />
                            <h3 className="sectionblock-title">Triples saveurs</h3>
                        </div>
                        <Grid container item className={styles.breweries_container}>
                            {tripleList}
                        </Grid>
                        <Link href={`/beers/type/${tripleType}`}>
                            <a className={`beigeButton ${styles.beigeButton}`}>Découvrir toutes les bières triples</a>
                        </Link>
                    </section>
                    <section className={styles.beers_section}>
                        <div className="sectionblock-infos">
                            <h2 className="sectionblock-headtitle">Bières ambrées</h2>
                            <hr className="sectionblock-underline" />
                            <h3 className="sectionblock-title">Mousses d'ambre</h3>
                        </div>
                        <Grid container item className={styles.breweries_container}>
                            {amberList}
                        </Grid>
                        <Link href={`/beers/type/${amberType}`}>
                            <a className={`beigeButton ${styles.beigeButton}`}>Découvrir les bières ambrées</a>
                        </Link>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    )
}


export async function getServerSideProps({ params }) {
    console.log(params)


    const blonde = encodeURI("blonde")
    const triple = encodeURI("triple")
    const amber = encodeURI("ambrée")

    const blondRes = await fetch(`https://sachadordolo.fr/amasdemus/admin/src/api/selectBeersByType.php?selection="${blonde}"`)
    const blondBeers = await blondRes.json()

    const tripleRes = await fetch(`https://sachadordolo.fr/amasdemus/admin/src/api/selectBeersByType.php?selection="${triple}"`)
    const tripleBeers = await tripleRes.json()

    const amberRes = await fetch(`https://sachadordolo.fr/amasdemus/admin/src/api/selectBeersByType.php?selection="${amber}"`)
    const amberBeers = await amberRes.json()


    // APPEL FILTERS ITEMS
    const typeRes = await fetch(`https://sachadordolo.fr/amasdemus/admin/src/api/getFilterTypeItem.php`)
    const typesFilters = await typeRes.json()

    const locationRes = await fetch(`https://sachadordolo.fr/amasdemus/admin/src/api/getFilterLocationItem.php`)
    const locationsFilters = await locationRes.json()

    const flavourRes = await fetch(`https://sachadordolo.fr/amasdemus/admin/src/api/getFilterFlavourItem.php`)
    const flavoursFilters = await flavourRes.json()


    return {
        props: {
            blondBeers,
            tripleBeers,
            amberBeers,
            typesFilters,
            locationsFilters,
            flavoursFilters
        }
    }
}