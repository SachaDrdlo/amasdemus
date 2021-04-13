import React, { useState, useEffect } from 'react'
import styles from '../../styles/components/Home.module.scss';
import Link from 'next/link'
import { Grid } from '@material-ui/core';
import { useRouter } from 'next/router';

const BreweryTemplate = ({ brewery_img, brewery, brewery_txt, id }) => {

    const router = useRouter()
    const path = router.route
    const [isBeer, setIsBeer] = useState()

    console.log(isBeer);

    const getPath = () => {
        path.includes('/beers') ? setIsBeer(true) : setIsBeer(false)
    }

    useEffect(() => {
        getPath();
    }, [])

    return (
        <div className={styles.beerPresentation_brewery}>
            <div className="container">
                <Grid container className={styles.beerPresentation_brewery_container} alignItems="center">
                    <Grid item xs={12} sm={5} className={styles.beerPresentation_brewery_container_logo}>
                        <figure>
                            <img src={`../img/breweries/logo-redimensionedGrand/${brewery_img}`} alt="" />
                        </figure>
                    </Grid>
                    <Grid item xs={12} sm={7} className={styles.beerPresentation_brewery_container_text}>
                        <p>Le lieu de brassage</p>
                        <hr className="beige" />
                        <h1>{brewery}</h1>
                        <span><p>{brewery_txt}</p></span>
                        {isBeer ?
                            <div className={styles.beerPresentation_brewery_container_text_btn}>
                                <Link href={`/breweries/${id}`}>
                                    <a className={`beigeButton ${styles.beigeButton}`}>Découvrir cette brasserie</a>
                                </Link>
                            </div>
                            :
                            null
                        }
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default BreweryTemplate

export function getServerSideProps(context) {
    return {
        props: { params: context.params }
    };
}
