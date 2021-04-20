import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Header from './components/Header'
import styles from '../styles/components/search.module.scss';
import LogoTemplate from './components/LogoTemplate'
import { Grid } from '@material-ui/core';

const search = ({ data }) => {


    let count = 0;

    // Fonction qui permet de checker si le tableau data.beers renvois quelque chose ou non
    // Si oui -> renvois data.itemCount
    // Si non -> renvois la valeur initial de la variable count, soit 0
    const countIfDefined = () => {
        // ItemCount renvoyé dans le tableau beers
        const itemCount = data.itemCount

        data.beers !== undefined ? count = itemCount : count;

        return count;
    }

    // Fonction qui permet de checker si le tableau data.beers renvois quelque chose ou non
    // Si oui -> renvois le map
    // Si non renvois NULL
    const defined = () => {

        if (data.beers !== undefined) {
            const listBeers = data.beers.map((beer) => {
                return (
                    <LogoTemplate
                        id={beer.id}
                        key={beer.id}
                        img={beer.image}
                        name={beer.name}
                    />
                )
            })

            return listBeers
        } else {
            return (
                null
            )
        }
    }

    return (
        <div>
            <Header />
            <div className={styles.beerSearch}>
                <div className="container">
                    <p>Résultat de recherche</p>
                    <hr className="green" />
                    <div>
                        <h1>{countIfDefined()} {countIfDefined() > 1 ? 'bières trouvées' : 'bière trouvée'}</h1>
                        <Grid container spacing={5} className={styles.beerSearch_container}>
                            {defined()}
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default search

export async function getServerSideProps(context) {
    const query = context.query.value
<<<<<<< HEAD
    const res = await fetch(`https://sachadordolo.fr/amasdemus/admin/src/api/searchBeer.php?search=${query}`)
=======
    const res = await fetch(`https://sachadordolo\.fr/amasdemus/admin/src/api/searchBeer.php?search=${query}`)
>>>>>>> c2e331773b309b262acc797924a00d43227f690c
    const data = await res.json()

    return {
        props: {
            data,
        },
    }
}
