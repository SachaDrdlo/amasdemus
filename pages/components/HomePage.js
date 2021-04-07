import React from 'react'
import BeerIllu from './BeerIllu'
import styles from '../../styles/components/Home.module.scss';
import beers from '../../beers.json'

const HomePage = () => {

    console.log(beers);
    const randomBeer = beers.map((beer) => {
        console.log(beer);
        return (
            <BeerIllu
                key={beer.id}
                image={beer.image}
                title={beer.name}
            />
        )

    })

    return (
        <div className={styles.container}>
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

            {randomBeer}
        </div>
    )
}

export default HomePage
