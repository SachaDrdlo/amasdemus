import React from 'react'
import styles from '../../styles/components/BrewerySuggestion.module.scss';
import { Grid } from '@material-ui/core';
import Link from 'next/link'

// LES CHOSES A CHANGER : LES HREF DES LINK POUR CHAQUE BIERE

const BrewerySuggestion = ({ id, name, image }) => {
    return (
        <div className={styles.brewery}>
            <img className={styles.brewery_img} src={`https://sachadordolo.fr/amasdemus/admin/assets/img/breweries/${image}`} alt="" />
            <h2 className={styles.brewery_title}>{name}</h2>
            <Link href={`/breweries/${id}`}>
                <a className="greenButton">Découvrir cette brasserie</a>
            </Link>
        </div>

    )
}

export default BrewerySuggestion