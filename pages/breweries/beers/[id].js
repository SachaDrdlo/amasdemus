import { useRouter } from 'next/router'
import { Grid } from '@material-ui/core';
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import GoBackButton from '../../components/GoBackButton'
import LogoTemplate from '../../components/LogoTemplate';
import styles from '../../../styles/components/Brewery.module.scss';
import beer from '../../beers/[id]';

const BreweryId = ({ breweryBeersData }) => {

    const breweryBeers = breweryBeersData.beers;

    const breweryNameObject = breweryBeers.find(beer => beer.brewery_name)
    const breweryName = breweryNameObject.brewery_name


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
        <div>
            <Header/>
            <GoBackButton/>
            <main className="container">
                <section className={styles.brewery_beers}>
                    <div className="sectionblock-infos">
                        <h2 className="sectionblock-headtitle">{breweryName}</h2>
                        <hr className="sectionblock-underline" />
                        <h3 className="sectionblock-title">Toutes leurs bières</h3>
                    </div>
                    <Grid container spacing={5}>
                        {breweriesBeersDisplay}
                    </Grid>
                </section>

            </main>

            <Footer/>
        </div>
    )
}

export default BreweryId

export async function getServerSideProps(context) {
    const query = context.query.id;

    const breweryBeersRes = await fetch(`https://sachadordolo.fr/amasdemus/admin/src/api/singleBreweryBeers.php?id=${query}`)
    const breweryBeersData = await breweryBeersRes.json()

    return {
        props: {
            breweryBeersData
        },
    }
}
