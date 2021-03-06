import React from 'react'
import { Grid } from '@material-ui/core';
import styles from '../../styles/components/Breweries.module.scss'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import LogoTemplate from '../../components/LogoTemplate';
import Navbar from '../../components/Navbar-bottom';

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
            <Navbar />
        </div>
    )
}

async function getBreweries() {

    const res = await fetch(`${process.env.API_PATH}allBreweries.php`)
    const data = await res.json()
    return data;
}

export async function getServerSideProps() {
    const data = await getBreweries();
    return {
        props: {
            data
        }
    }
}