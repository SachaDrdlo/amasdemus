import React from 'react'
import { Grid } from '@material-ui/core';
import styles from '../../styles/components/Breweries.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LogoTemplate from '../components/LogoTemplate';
// import BrewerySuggestion from '../components/BrewerySuggestion';

export default function Breweries({ data }) {
    const breweries = data.breweries;
    return (
        <div>
            <Header />
            <main className="container">
                <section className="sectionblock">
                    <div className="sectionblock-infos">
                        <h2 className="sectionblock-headtitle">De l'artisanal</h2>
                        <hr className="sectionblock-underline" />
                        <h3 className="sectionblock-title">Des brasseries locales</h3>
                    </div>
                    <Grid container item className={styles.breweries_container}>
                        {breweries.map((brewery) => (
                                <LogoTemplate
                                key={brewery.id}
                                id={brewery.id}
                                img={brewery.logo}
                                name={brewery.name}
                            />
                        ))}
                    </Grid>
                </section>
            </main>
            <Footer />
        </div>
    )
}

async function getBreweries() {
<<<<<<< HEAD
    const res = await fetch('https://sachadordolo.fr/amasdemus/admin/src/api/allBreweries.php')
=======
<<<<<<< HEAD
    const res = await fetch('https://sachadordolo.fr/amasdemus/admin/src/api/allBreweries.php')
=======
    const res = await fetch('https://sachadordolo\.fr/amasdemus/admin/src/api/allBreweries.php')
>>>>>>> c2e331773b309b262acc797924a00d43227f690c
>>>>>>> fe17dbd9c20edda014824f462e123acc65f46bfd
    const data = await res.json()
    return data;
}

export async function getServerSideProps(){
    const data = await getBreweries();
    return {
        props: {
            data
        }
    }
}