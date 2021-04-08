import { Grid } from '@material-ui/core';
import { StylesProvider } from '@material-ui/styles'
import React from 'react'
import styles from '../../styles/components/Home.module.scss';
import Link from 'next/link'

const BeerIllu = ({ image, name, type, level }) => {
    return (
        <div className="container">
            <Grid container className={styles.container_grid} justify="space-between">
                <Grid item xs={12} sm={7} className={styles.container_grid_illu}>
                    <div className={styles.container_grid_illu_beer}>
                        <img src={`../img/beers/redimensionedGrand/${image}`} alt="" />
                    </div>
                    <div className={styles.container_grid_illu_blob}>
                        <img src="./img/blob.svg" alt="" />
                    </div>
                </Grid>
                <Grid item xs={12} sm={3} className={styles.container_grid_content}>
                    <p>La star de la semaine</p>
                    <hr className="green"/>
                    <h1>{name}</h1>
                    <div></div>
                    <p>
                        <span>{type} - </span>
                        <span>{level}°</span>
                    </p>
                    <div className={styles.container_grid_content_button}>
                        <Link href="/">
                            <a className={`orangeButton ${styles.orangeButton}`}>Découvrir cette bière</a>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </div>

    )
}

export default BeerIllu
