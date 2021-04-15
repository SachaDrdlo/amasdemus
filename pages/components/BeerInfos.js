import React from 'react'
import styles from '../../styles/components/BeerInfos.module.scss';
import { Grid } from '@material-ui/core';
import BeerIllu from './BeerIllu'
import BreweryTemplate from './BreweryTemplate'
import Link from 'next/link'
import BeerSuggestion from './BeerSuggestion';
import Footer from './Footer'
import BreweryInfos from './BreweryInfos';

const BeerInfos = ({ id, name, type, level, brewery, flavours, glass, brewery_img, brewery_txt, image, title, description }, props) => {
    return (
        <div className={styles.beerPresentation}>
            <div className="container">
                <Grid container justify="space-between" className={styles.beerPresentation_container}>
                    <Grid item xs={12} sm={5} className={styles.beerPresentation_container_img}>
                        <figure>
                            <img className={styles.beerPresentation_container_img_beer} src={`http://sachadordolo.fr/amasdemus/admin/assets/img/beers/${image}`} alt="" />
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
                                <li>{flavours}</li>
                            </ul>
                            <div className={styles.beerPresentation_container_text_list_flex}>
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
                    <span><p>{description}</p></span>
                </Grid>
                {props.children}
            </BeerIllu>

            <BreweryTemplate
                brewery_img={brewery_img}
                brewery={brewery}
                brewery_txt={brewery_txt}
            />
            {/* <BeerSuggestion/> */}
            <Footer />
        </div>
    )
}

export default BeerInfos

export function getServerSideProps(context) {
    return {
        props: { params: context.params }
    };
}
