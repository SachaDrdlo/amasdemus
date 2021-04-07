import React, { useState } from 'react'
import BeerIllu from './BeerIllu'
import styles from '../../styles/components/Home.module.scss';
import beers from '../../beers.json'
import { Grid } from '@material-ui/core';



const HomePage = () => {

    const randomBeerImg = beers.map((beer) => {
        return (
            <BeerIllu
                key={beer.id}
                image={beer.image}
                name={beer.name}
                type={beer.type}
                level={beer.level}
            />
        )

    }).slice(0, 1)

    return (
        <div className="container">
            <div className={styles.hero_container}>
                <div className={styles.hero_container_logo}>
                    <img src="../img/logos/picto-green.png" alt="" />
                </div>
                <div className={styles.hero_container_content}>
                    <h1>Amas Demus</h1>
                    <hr />
                    <p>Pour les amateurs de terroir</p>
                </div>
            </div>
            {randomBeerImg}
        </div>
    )
}

export default HomePage
