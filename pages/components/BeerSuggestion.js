import React from 'react'
import styles from '../../styles/components/Home.module.scss';
import { Grid } from '@material-ui/core';
import Link from 'next/link'

// LES CHOSES A CHANGER : LES HREF DES LINK POUR CHAQUE BIERE

const BeerSuggestion = ({ name, image, title, paragraph }) => {
    return (
        <Grid container className={styles.beerSuggestion_container}>
            <div className={styles.beerSuggestion_container_txt}>
                {/* Pour changer dynamiquement le p et le h1 à l'appel du composant --> appeler title et paragraph */}
                <p>{paragraph}</p>
                <hr className="green" />
                <h1>{title}</h1>
            </div>
            <Grid item xs={12} sm={4}>
                <img src={`../../img/beers/redimensioned/${image}`} alt="" />
                <h3>{name}</h3>
                <Link href="/">
                    <a className="greenButton">Découvrir cette bière</a>
                </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
                <img src={`../../img/beers/redimensioned/${image}`} alt="" />
                <h3>{name}</h3>
                <Link href="/">
                    <a className="greenButton">Découvrir cette bière</a>
                </Link>
            </Grid>
            <Grid item xs={12} sm={3}>
                <img src={`../../img/beers/redimensioned/${image}`} alt="" />
                <h3>{name}</h3>
                <Link href="/">
                    <a className="greenButton">Découvrir cette bière</a>
                </Link>
            </Grid>
        </Grid>
    )
}

export default BeerSuggestion
