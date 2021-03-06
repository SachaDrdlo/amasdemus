import React, { useState } from 'react'
import BeerIllu from '../components/BeerIllu'
import Header from '../components/Header'
import Navbar from '../components/Navbar-bottom';
import Footer from '../components/Footer'
import LogoTemplate from '../components/LogoTemplate';
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
      <LogoTemplate
        key={brewery.id}
        id={brewery.id}
        img={brewery.logo}
        name={brewery.name}
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
              <hr className="greyCenter" />
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
              <div className="sectionblock-infos sectionblock-infos__beige">
                <p className="sectionblock-headtitle">Bières du terroir</p>
                <hr className="sectionblock-underline sectionblock-underline__center" />
                <h2 className="sectionblock-title">Un monde de découverte</h2>
              </div>
              <span><p>Un moment entre amis, au restaurant ou indécis devant l'innombrable choix de votre caviste, il n'y a ni lieu ni heure pour découvrir de nouvelles saveurs locales.</p></span>
              <div className={styles.discover_container_content_btn}>
                <Link href="/beers">
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
          <div className="sectionblock-infos">
            <p className="sectionblock-headtitle">De l'artisanal</p>
            <hr className="sectionblock-underline" />
            <h2 className="sectionblock-title">Des brasseries locales</h2>
          </div>
          <Grid container item className={styles.breweries_container}>
            {breweriesDisplay}
          </Grid>
        </div>
      </div>

      <div className={styles.about}>
        <div className="container">
          <Grid container spacing={5} direction="row-reverse" justify="space-between" className={styles.about_container}>
            <Grid item xs={12} sm={5} className={styles.about_container_text}>
              <div className="sectionblock-infos">
                <p className="sectionblock-headtitle">Le projet</p>
                <hr className="sectionblock-underline" />
                <h2 className="sectionblock-title">Amas Demus: un projet à la découverte du local</h2>
              </div>
              <div className={styles.discover_container_content_btn}>
                <Link href="/about">
                  <a className={`greenButton ${styles.greenButton}`}>À propos du projet</a>
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
  const res = await fetch(`${process.env.API_PATH}randomBeer.php`)
  const beerFetch = await res.json()

  // Fetch des brasseries affichées après l'encart vert
  const response = await fetch(`${process.env.API_PATH}randomBreweries.php`)
  const breweriesFetch = await response.json()

  return {
    props: {
      beerFetch,
      breweriesFetch,
    },
  }
}