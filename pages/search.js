import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Header from './components/Header'
import styles from '../styles/components/search.module.scss';
import Logo_template from './components/Logo_template'
import { Grid } from '@material-ui/core';

const search = ({ data }) => {

    const count = data.itemCount

    const listBeers = data.beers.map((beer) => {
        console.log(beer);
        return (
            <Logo_template
                id={beer.id}
                img={beer.image}
                name={beer.name}
            />
        )
    })

    return (
        <div>
            <Header />
            <div className={styles.beerSearch}>
                <div className="container">
                    <p>Résultat de recherche</p>
                    <hr className="green" />
                    <h1>{count} bières trouvées</h1>
                    <Grid container justify="space-evenly" spacing={5} className={styles.beerSearch_container}>
                        {listBeers}
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default search

export async function getServerSideProps(context) {
    const query = context.query.value
    const res = await fetch(`http://sachadordolo.fr/amasdemus/admin/src/api/searchBeer.php?search=${query}`)
    const data = await res.json()

    return {
        props: {
            data,
        },
    }
}
