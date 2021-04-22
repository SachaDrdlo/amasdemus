import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import styles from '../../styles/components/BeerIllu.module.scss';
import Link from 'next/link'
import { useRouter } from 'next/router';

const BeerIllu = ({ id, image, name, type, level, children }) => {

    // CODE JS POUR CHECKER SI ON EST BIEN SUR LA HOME
    const router = useRouter()
    const path = router.asPath
    const [isHome, setIsHome] = useState()

    const getPath = () => {
        path === '/' ? setIsHome(true) : setIsHome(false)
    }

    useEffect(() => {
        getPath();
    }, [])


    return (
        <div className="container">
            <Grid container className={styles.container_grid} alignItems="center" justify="space-between" direction="row-reverse">
                <Grid item xs={12} sm={6}>
                    <div className={styles.container_grid_illu}>
                        <figure>
                            {router.pathname === '/' || router.pathname === '/beers/[id]'
                                ?
                                <img className={styles.container_grid_illu_beer} src={`https://sachadordolo.fr/amasdemus/admin/assets/img/beers/${image}`} alt="" />
                                : router.pathname === '/about'
                                    ?
                                    <img className={styles.container_grid_illu_beer} src={image} alt="" />
                                    :
                                    null
                            }
                            <img className={styles.container_grid_illu_blob} src="../img/blob.svg" alt="" />
                        </figure>
                    </div>
                </Grid>

                {/* CONDITION QUI PERMET DE CHECKER SI ON EST BIEN SUR LA HOME */}
                {isHome ?
                    <Grid item xs={12} sm={3} className={styles.container_grid_content}>
                        <div className="sectionblock-infos">
                            <h2 className="sectionblock-headtitle">La star du moment</h2>
                            <hr className="sectionblock-underline" />
                            <h3 className="sectionblock-title">{name}</h3>
                            <p>
                                <span>{type} - </span>
                                <span>{level}°</span>
                            </p>
                        </div>
                        <div className={styles.container_grid_content_button}>
                            <Link href={`/beers/${id}`}>
                                <a className='greenButton'>Découvrir cette bière</a>
                            </Link>
                        </div>
                    </Grid>
                    :
                    children
                }
            </Grid>
        </div>

    )
}

export default BeerIllu

export function getServerSideProps(context) {
    return {
        props: { params: context.params }
    };
}
