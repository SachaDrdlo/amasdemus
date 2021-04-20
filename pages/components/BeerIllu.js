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
                <Grid item xs={12} sm={6} className={styles.container_grid_illu}>
                    <figure>
<<<<<<< HEAD
                        <img className={styles.container_grid_illu_beer} src={`https://sachadordolo.fr/amasdemus/admin/assets/img/beers/${image}`} alt="" />
=======
                        <img className={styles.container_grid_illu_beer} src={`https://sachadordolo\.fr/amasdemus/admin/assets/img/beers/${image}`} alt="" />
>>>>>>> c2e331773b309b262acc797924a00d43227f690c
                        <img className={styles.container_grid_illu_blob} src="../img/blob.svg" alt="" />
                    </figure>
                </Grid>

                {/* CONDITION QUI PERMET DE CHECKER SI ON EST BIEN SUR LA HOME */}
                {isHome ?
                    <Grid item xs={12} sm={3} className={styles.container_grid_content}>
                        <p>La star de la semaine</p>
                        <hr className="green" />
                        <h1>{name}</h1>
                        <div></div>
                        <p>
                            <span>{type} - </span>
                            <span>{level}°</span>
                        </p>
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
