import React from 'react'
import { useRouter } from 'next/router'
// import BreweryInfos from '../components/BreweryInfos'
import { Grid } from '@material-ui/core';
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../../styles/components/Brewery.module.scss';

const Brewery = ({brewery}) => {

    return (
        <div className={styles.brewery}>
            <Header/>
            <main className={styles.brewery_mainsection}>
                <div className="container">
                <Grid container spacing={5} justify="space-between">
                    <Grid item xs={12} md={6}>
                        <figure className={styles.brewery_img}>
                            <img src={`http://sachadordolo.fr/amasdemus/admin/assets/img/breweries/${brewery.logo}`} alt=""/>
                        </figure>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <p>{brewery.region}</p>
                        <hr className="green" />
                        <h2>{brewery.name}</h2>
                        <p>{brewery.description}</p>
                    </Grid>
                </Grid>
                </div>

            </main>
            <Footer/>
        </div>
    )
}

export default Brewery

export async function getServerSideProps(context) {
    const query = context.query.id;
    const res = await fetch(`http://sachadordolo.fr/amasdemus/admin/src/api/singleBreweryBeers.php?id=${query}`)
    const breweryBeers = await res.json()

    return {
        props: {
            breweryBeers,
        },
    }
}
