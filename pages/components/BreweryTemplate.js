import React, { useState, useEffect } from 'react'
import styles from '../../styles/components/BeerInfos.module.scss';
import Link from 'next/link'
import { Grid } from '@material-ui/core';
import { useRouter } from 'next/router';

const BreweryTemplate = ({ img_brewery, brewery, desc_brewery, brewery_id }) => {

    const router = useRouter()
    const path = router.route
    const [isBeer, setIsBeer] = useState()

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
                            {router.pathname === '/beers/[id]'
                                ?
                                <img src={`https://sachadordolo.fr/amasdemus/admin/assets/img/breweries/${img_brewery}`} alt="" />
                                : router.pathname === '/about'
                                    ?
                                    <img src={img_brewery} alt="" />
                                    :
                                    null
                            }
                        </figure>
                    </Grid>
                    <Grid item xs={12} sm={7} className={styles.beerPresentation_brewery_container_text}>
                        <p>Le lieu de brassage</p>
                        <hr className="beige" />
                        <h1>{brewery}</h1>
                        <span><p>{desc_brewery}</p></span>
                        {isBeer ?
                            <div className={styles.beerPresentation_brewery_container_text_btn}>
                                <Link href={`/breweries/${brewery_id}`}>
                                    <a className={`beigeButton ${styles.beigeButton}`}>Découvrir cette brasserie</a>
                                </Link>
                            </div>
                            :
                            null
                        }
                    </Grid>
                </Grid>
            </div>
            <div className={styles.beerPresentation_brewery_illu}>
                <img className={styles.beerPresentation_brewery_illu_hop} src="../img/illus/hop-discover-illu.svg" alt="" />
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
