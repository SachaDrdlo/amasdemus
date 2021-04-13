import React from 'react'
import { Grid } from '@material-ui/core';
import styles from '../../styles/components/Home.module.scss';
import BreweryTemplate from '../components/BreweryTemplate'
import Header from '../components/Header'
import Footer from '../components/Footer'

const BreweryInfos = ({ id, brewery, brewery_img, brewery_txt, brewery_region }) => {
    return (
        <div className={styles.breweryInfos}>
            <Header />
            <BreweryTemplate
                id={id}
                brewery_img={brewery_img}
                brewery={brewery}
                brewery_txt={brewery_txt}
            />
            <Footer />
        </div>
    )
}

export default BreweryInfos
