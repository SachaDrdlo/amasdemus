import React from 'react'
import { useRouter } from 'next/router'
// import BreweryInfos from '../components/BreweryInfos'
import { Grid } from '@material-ui/core';
import Link from 'next/link'
import Header from '../components/Header'
import GoBackButton from '../components/GoBackButton'
import Navbar from '../components/Navbar-bottom';
import Footer from '../components/Footer'
import LogoTemplate from '../components/LogoTemplate';
import styles from '../../styles/components/Brewery.module.scss';

const Brewery = ({ brewery, breweryBeersData }) => {
    const breweryBeers = breweryBeersData.beers;
    const breweryId = brewery.id

    const breweriesBeersDisplay = breweryBeers.map((beer) => {
        return (
            <LogoTemplate
                key={beer.id}
                id={beer.id}
                name={beer.name}
                img={beer.image}
            />
        )
    })

    return (
        <div className={styles.brewery}>
            <Header />
            <GoBackButton />
            <main className={styles.brewery_mainsection}>
                <div className="container">
                    <section className={styles.brewery_infos}>
                        <Grid container spacing={5} justify="space-between">
                            <Grid item xs={12} md={6} lg={4}>
                                <figure className={styles.brewery_img}>
                                    <img src={`https://sachadordolo.fr/amasdemus/admin/assets/img/breweries/${brewery.logo}`} alt="" />
                                </figure>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="sectionblock-infos">
                                    <p className="sectionblock-headtitle">{brewery.region}</p>
                                    <hr className="sectionblock-underline" />
                                    <h1 className="sectionblock-title">{brewery.name}</h1>
                                </div>
                                <p>{brewery.description}</p>
                            </Grid>
                        </Grid>
                    </section>
                    <section className={styles.brewery_beers}>
                        <div className="sectionblock-infos">
                            <p className="sectionblock-headtitle">{brewery.name}</p>
                            <hr className="sectionblock-underline" />
                            <h2 className="sectionblock-title">Leurs bières</h2>
                        </div>
                        <Grid container spacing={5}>
                            {breweriesBeersDisplay}
                        </Grid>
                        <div className='beers-btn'>
                            <Link href={`/breweries/beers/${breweryId}`}>
                                <a className="discoverBtn">
                                    Découvrir leurs bières
									<svg className="discover-arrow-svg" width="42" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M40.36 5.762H5.613l5.756-3.868c.642-.432.645-1.134.006-1.568-.64-.433-1.678-.435-2.32-.003L.482 6.085l-.002.001c-.64.432-.642 1.136 0 1.57h.002l8.572 5.763c.642.431 1.681.43 2.32-.004.64-.434.637-1.136-.005-1.567l-5.756-3.87H40.36c.907 0 1.641-.495 1.641-1.107s-.734-1.109-1.64-1.109z" /></svg>
                                </a>
                            </Link>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
            <Navbar />
        </div>
    )
}

export default Brewery

export async function getServerSideProps(context) {
    const query = context.query.id;

    const breweryRes = await fetch(`https://sachadordolo.fr/amasdemus/admin/src/api/singleBrewery.php?id=${query}`)
    const brewery = await breweryRes.json()

    const breweryBeersRes = await fetch(`https://sachadordolo.fr/amasdemus/admin/src/api/singleBreweryThreeBeers.php?id=${query}`)
    const breweryBeersData = await breweryBeersRes.json()

    return {
        props: {
            brewery,
            breweryBeersData
        },
    }
}

