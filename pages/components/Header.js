import { Grid } from '@material-ui/core';
import React from 'react';
import styles from '../../styles/components/Home.module.scss';
// import du fichier '../../styles/components/Header.module.scss'
// Enlever l'import du fichier '../../styles/components/Home.module.scss'


const Header = () => {
    return (
        <div className="container">
            <Grid container spacing={3} className={styles.header_container}>
                    <Grid item xs={6} className={styles.header_container_left}>
                        <div className={styles.header_container_left_logo}>
                            <img src="../img/logos/horizontal-green.png" alt="" />
                        </div>
                    </Grid>
                    <Grid item xs={6} className={styles.header_container_right}>
                        <img src="../img/icons/search-icon.svg" alt="" />
                        <input type="text" placeholder="rechercher une bière" />
                    </Grid>
            </Grid>
        </div>
    )
}

export default Header;