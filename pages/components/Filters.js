import { Grid } from '@material-ui/core';
import React from 'react';
import styles from '../../styles/components/Filters.module.scss';



export default function Filters() {
    return (
        <div className="container">
            <Grid container spacing={3} className={styles.filters}>
                    <Grid item xs={6} className={styles.filters_col}>
                        <div className={styles.filters_title}>
                            {/* <img src="../img/logos/horizontal-green.png" alt="" /> */}
                            <h2>Filtres</h2>
                        </div>
                    </Grid>
            </Grid>
        </div>
    )
}

