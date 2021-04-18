import React from 'react'
import { useRouter } from 'next/router'
// import BreweryInfos from '../components/BreweryInfos'
import { Grid } from '@material-ui/core';
import Header from '../components/Header'
import Footer from '../components/Footer'
import LogoTemplate from '../components/LogoTemplate';
import styles from '../../styles/components/Brewery.module.scss';

const Brewery = ({brewery, breweryBeersData}) => {
    const breweryBeers = breweryBeersData.beers;
    
    // console.log(breweryBeers.length)
        const resultIndexRandomize = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
            }
            return array;
        }
    
        resultIndexRandomize(breweryBeers)
        
        const breweriesBeersDisplay = breweryBeers.map((beer) => {
            return (
              <LogoTemplate
                key={beer.id}
                id={beer.id}
                name={beer.name}
                img={beer.image}
              />
            )
        }).splice(0, 3);

        
    return (
        <div className={styles.brewery}>
            <Header/>
            <main className={styles.brewery_mainsection}>
                <div className="container">
                    <section className={styles.brewery_infos}>
                        <Grid container spacing={5} justify="space-between">
                            <Grid item xs={12} md={6} lg={4}>
                                <figure className={styles.brewery_img}>
                                    <img src={`http://sachadordolo.fr/amasdemus/admin/assets/img/breweries/${brewery.logo}`} alt=""/>
                                </figure>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="sectionblock-infos">
                                    <h2 className="sectionblock-headtitle">{brewery.region}</h2>
                                    <hr className="sectionblock-underline" />
                                    <h3 className="sectionblock-title">{brewery.name}</h3>      
                                </div>
                                <p>{brewery.description}</p>
                            </Grid>
                        </Grid>
                    </section>
                    <section className={styles.brewery_beers}>
                        <div className="sectionblock-infos">
                            <h2 className="sectionblock-headtitle">{brewery.name}</h2>
                            <hr className="sectionblock-underline" />
                            <h3 className="sectionblock-title">Leurs bières</h3>      
                        </div>
                        <Grid container spacing={5}>
                            {breweriesBeersDisplay}
                        </Grid>
                    </section>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Brewery

export async function getServerSideProps(context) {
    const query = context.query.id;
    
    const breweryRes = await fetch(`http://sachadordolo.fr/amasdemus/admin/src/api/singleBrewery.php?id=${query}`)
    const brewery = await breweryRes.json()
    
    const breweryBeersRes = await fetch(`http://sachadordolo.fr/amasdemus/admin/src/api/singleBreweryBeers.php?id=${query}`)
    const breweryBeersData = await breweryBeersRes.json()

    return {
        props: {
            brewery,
            breweryBeersData
        },
    }
}

