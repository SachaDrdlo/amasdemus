import React from 'react'
import styles from '../styles/components/BeerInfos.module.scss';
import { Grid } from '@material-ui/core';
import BeerIllu from './BeerIllu'
import BreweryTemplate from './BreweryTemplate'
import { useRouter } from 'next/router';

const BeerInfos = ({ name, type, level, brewery, flavours, glass, img_brewery, desc_brewery, brewery_id, image, title, description }, props) => {

    const router = useRouter()

    return (
        <div className={styles.beerPresentation}>
            <div className="container">
                <Grid container alignItems="center" justify="space-between" className={styles.beerPresentation_container}>
                    <Grid item xs={12} sm={5} className={styles.beerPresentation_container_img}>
                        <figure>
                            {router.pathname === '/beers/[id]'
                                ?
                                <>
                                    <img className={styles.beerPresentation_container_img_beer} src={`https://sachadordolo.fr/amasdemus/admin/assets/img/beers/${image}`} alt="" />
                                    <img className={styles.beerPresentation_container_img_brewery} src={`https://sachadordolo.fr/amasdemus/admin/assets/img/breweries/${img_brewery}`} alt="" />
                                </>
                                : router.pathname === '/about'
                                    ?
                                    <>
                                        <img className={styles.beerPresentation_container_img_beer} src={`${image}`} alt="" />
                                        <img className={styles.beerPresentation_container_img_brewery} src={`${img_brewery}`} alt="" />
                                    </>
                                    :
                                    null
                            }
                        </figure>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <div className="sectionblock-infos">
                            <p className="sectionblock-headtitle">Bière {type}</p>
                            <hr className="sectionblock-underline" />
                            <h1 className="sectionblock-title">{name}</h1>
                        </div>
                        {/* <hr className="greenMaxWidth" /> */}
                        <div className={styles.beerPresentation_container_listcontainer}>
                            <ul className={styles.beerPresentation_container_list}>
                                <li>
                                    <h2>Degré</h2>
                                    <p>{level}°</p>
                                </li>
                                <li>
                                    <h2>Provenance</h2>
                                    <p>{brewery}</p>
                                </li>
                                <li>
                                    <h2>Notes/ saveurs</h2>
                                    <p>{flavours}</p>
                                </li>
                                <li>
                                    <h2>Verre</h2>
                                    <p>{glass}</p>
                                </li>
                            </ul>
                        </div>
                        {/* <div> */}
                        {/* <div className={styles.beerPresentation_container_text_list_flex}>
                                <div className={styles.beerPresentation_container_text_list_flex_glass}>
                                    <ul >
                                        <h5>Verre</h5>
                                        <li>{glass}</li>
                                    </ul>
                                </div>
                            </div> */}

                    </Grid>
                </Grid>
            </div>
            {/* Appel au composant BeerIllu en utilisant les props pour wrap la grid item */}
            <BeerIllu
                image={image}
            >
                <Grid item xs={12} sm={6} className={styles.beerPresentation_container_infos_content}>
                    <div className="sectionblock-infos">
                        <p className="sectionblock-headtitle">Bière {type}</p>
                        <hr className="sectionblock-underline" />
                        <h2 className="sectionblock-title">{title}</h2>
                        <span><p>{description}</p></span>
                    </div>
                </Grid>
                {props.children}
            </BeerIllu>

            <BreweryTemplate
                brewery_id={brewery_id}
                img_brewery={img_brewery}
                brewery={brewery}
                desc_brewery={desc_brewery}
            />
        </div>
    )
}

export default BeerInfos

export function getServerSideProps(context) {
    return {
        props: { params: context.params }
    };
}
