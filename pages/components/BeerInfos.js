import React from 'react'
import styles from '../../styles/components/Home.module.scss';
import { Grid } from '@material-ui/core';
import BeerIllu from './BeerIllu'
import Link from 'next/link'

const BeerInfos = ({ id, name, type, level, brewery, flavours, format, glass, brewery_img, brewery_txt, image, title, description, introduction }, props) => {



    return (
        <div className={styles.beerPresentation}>
            <div className="container">
                <Grid container justify="space-between" className={styles.beerPresentation_container}>
                    <Grid item xs={12} sm={5} className={styles.beerPresentation_container_img}>
                        <figure>
                            <img className={styles.beerPresentation_container_img_beer} src={`../img/beers/redimensionedGrand/${image}`} alt="" />
                            <img className={styles.beerPresentation_container_img_brewery} src={`../img/breweries/logo-redimensionedGrand/${brewery_img}`} alt="" />
                        </figure>
                    </Grid>
                    <Grid item xs={12} sm={5} className={styles.beerPresentation_container_text}>
                        <p>Bière {type}</p>
                        <hr className="green" />
                        <h3>{name}</h3>
                        <hr className="greenMaxWidth" />
                        <div className={styles.beerPresentation_container_text_list}>
                            <ul>
                                <h5>Degré</h5>
                                <li>{level}</li>
                            </ul>
                            <ul>
                                <h5>Provenance</h5>
                                <li>{brewery}</li>
                            </ul>
                            <ul>
                                <h5>Notes</h5>
                                <li>{flavours.join(', ')}</li>
                            </ul>
                            <div className={styles.beerPresentation_container_text_list_flex}>
                                <div className={styles.beerPresentation_container_text_list_flex_format}>
                                    <ul>
                                        <h5>Formats</h5>
                                        <li>{format.join(', ')}</li>
                                    </ul>
                                </div>
                                <div className={styles.beerPresentation_container_text_list_flex_glass}>
                                    <ul >
                                        <h5>Verre</h5>
                                        <li>{glass}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr className="greenMaxWidth" />
                    </Grid>
                </Grid>
            </div>
            {/* Appel au composant BeerIllu en utilisant les props pour wrap la grid item */}
            <BeerIllu
                image={image}
            >
                <Grid item xs={12} sm={6} className={styles.beerPresentation_container_infos_content}>
                    <p>{type}</p>
                    <h1>{title}</h1>
                    <span><p>{introduction}</p></span>
                </Grid>
                {props.children}
            </BeerIllu>

            <div className={styles.beerPresentation_brewery}>
                <div className="container">
                    <Grid container className={styles.beerPresentation_brewery_container} alignItems="center">
                        <Grid item xs={12} sm={5} className={styles.beerPresentation_brewery_container_logo}>
                            <figure>
                                <img src={`../img/breweries/logo-redimensionedPetit/${brewery_img}`} alt="" />
                            </figure>
                        </Grid>
                        <Grid item xs={12} sm={7} className={styles.beerPresentation_brewery_container_text}>
                            <p>Le lieu de brassage</p>
                            <hr className="beige" />
                            <h1>{brewery}</h1>
                            <span><p>{brewery_txt}</p></span>
                            <div className={styles.beerPresentation_brewery_container_text_btn}>
                                <Link href="/">
                                    <a className={`beigeButton ${styles.beigeButton}`}>Découvrir cette brasserie</a>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default BeerInfos
