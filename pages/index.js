import React, { useState } from 'react'
import BeerIllu from './components/BeerIllu'
import Header from './components/Header'
import Navbar from './components/Navbar-bottom';
import Footer from './components/Footer'
import beers from '../beers.json'
import Logo_template from './components/Logo_template';
import styles from '../styles/components/Homepage.module.scss';
import { Grid } from '@material-ui/core';
import Link from 'next/link'

const HomePage = ({ beerFetch, breweriesFetch }) => {

  const beers = beerFetch.beers
  const breweries = breweriesFetch.breweries

  const randomBeerImg = beers.map((beer) => {
    return (
      <BeerIllu
        id={beer.id}
        key={beer.id}
        image={beer.image}
        name={beer.name}
        type={beer.type}
        level={beer.level}
      />
    )

  })


  const breweriesDisplay = breweries.map((brewery) => {
    return (
      <Logo_template
        key={brewery.id}
        id={brewery.id}
        img_brewery={brewery.logo}
        name_brewery={brewery.name}
      />
    )

  })

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.hero_container}>
            <div className={styles.hero_container_logo}>
              <img src="../img/logos/logo-picto-green.svg" alt="" />
            </div>
            <div className={styles.hero_container_content}>
              <h1>Amas Demus</h1>
              <hr className="grey" />
              <p>Pour les amateurs de terroir</p>
            </div>
          </div>
        </div>
      </div>

      {/* COMPOSANT BEERILLU */}
      {randomBeerImg}

      <div className={styles.discover}>
        <div className="container">
          <div className={styles.discover_container}>
            <div className={styles.discover_container_content}>
              <p>Bières du terroir</p>
              <hr className="beige" />
              <h1>Un monde de découverte</h1>
              <span><p>Un moment entre amis, au restaurant ou indécis devant l'innombrable choix de votre caviste, il n'y a ni lieu ni heure pour découvrir de nouvelles saveurs locales.</p></span>
              <div className={styles.discover_container_content_btn}>
                <Link href="/">
                  <a className={`beigeButton ${styles.beigeButton}`}>Découvrir les bières du terroir</a>
                </Link>
              </div>
            </div>
            <div className={styles.discover_container_img}>
              <img src="../img/illus/hop-discover-illu.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.breweries}>
        <div className="container">
          <div className={styles.breweries_text}>
            <p>De l'artisanal</p>
            <hr className="green" />
            <h1>Des brasseries locales</h1>
          </div>
          <Grid container spacing={5} className={styles.breweries_container}>
            {breweriesDisplay}
          </Grid>
        </div>
      </div>

      <div className={styles.about}>
        <div className="container">
          <Grid container spacing={5} direction="row-reverse" justify="space-between" className={styles.about_container}>
            <Grid item xs={12} sm={5} className={styles.about_container_text}>
              <p>Le projet</p>
              <hr className="green" />
              <h2>Amas Demus: un projet à la découverte du local</h2>
              <div className={styles.discover_container_content_btn}>
                <Link href="/">
                  <a className={`greenButton ${styles.greenButton}`}>Découvrir les bières du terroir</a>
                </Link>
              </div>
            </Grid>
            <Grid item xs={12} sm={5} className={styles.about_container_img}>
              <figure>
                <img src="../img/about.png" alt="" />
              </figure>
            </Grid>
          </Grid>
        </div>
      </div>
      <Navbar />
      <Footer />
    </div>





  )
}

export default HomePage

export async function getServerSideProps() {
  // Fetch de la bière aléatoire en page d'accueil
  const res = await fetch('http://sachadordolo.fr/amasdemus/admin/src/api/randomBeer.php')
  const beerFetch = await res.json()

  // Fetch des brasseries affichées après l'encart vert
  const response = await fetch(`http://sachadordolo.fr/amasdemus/admin/src/api/RandomBreweries.php`)
  const breweriesFetch = await response.json()

  return {
    props: {
      beerFetch,
      breweriesFetch,
    },
  }
}