import React, { useState } from 'react'
import styles from '../../styles/components/Logo-template.module.scss';
import { useRouter } from 'next/router'
import { StylesProvider } from '@material-ui/styles';
import Image from 'next/image'
import { Grid } from '@material-ui/core';
import Link from 'next/link'


const Logo_template = ({ id, img_brewery, name_brewery }) => {

    const router = useRouter();
    const [path, setPath] = useState(router.pathname)


    // BASE A MODIFIER PLUS TARD --> permet d'afficher soit l'image de la brasserie soit l'image de la bière selon la page sur laquelle on est
    const getPathImg = () => {
        if (path === '/' || path === '/breweries') {
            return `http://sachadordolo.fr/amasdemus/admin/assets/img/breweries/${img_brewery}`
        } else if (path === '/beers') {
            return `../img/beers/redimensionedGrand/${image}`
        }
    }

    // A TESTER MDR JE SUIS ZINZIN --> Permet d'afficher soit bière soit brasserie en fonction de la page sur laquelle on est
    const getNameBtn = () => {
        const brewery = 'brasserie'
        const beer = 'bière'

        return path === '/' || '/breweries' ? brewery : path === '/beers' ? beer : null
    }


    return (

        <Grid item xs={12} sm={4} className={styles.breweries_container_content}>
            <figure>
                <img src={getPathImg()} />
            </figure>
            <h4>{name_brewery}</h4>
            <div className={styles.breweries_container_content_btn}>
                <Link href={`/breweries/${id}`}>
                    <a className={`greenButton ${styles.beigeButton}`}>Découvrir cette {getNameBtn()}</a>
                </Link>
            </div>
        </Grid>
    )
}

export default Logo_template
