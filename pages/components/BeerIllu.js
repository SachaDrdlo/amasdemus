import { StylesProvider } from '@material-ui/styles'
import React from 'react'
import styles from '../../styles/components/Home.module.scss';

const BeerIllu = ({image, title}) => {
    return (
        <div className={styles.container_illu}>
            <div className={styles.container_illu_img}>
                <h1>{title}</h1>
                <img src={`../img/beers/redimensionedGrand/${image}`} alt="" />
                <img src="" alt="" />
            </div>

        </div>
    )
}

export default BeerIllu
