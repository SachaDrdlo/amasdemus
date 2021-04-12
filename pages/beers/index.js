import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import styles from '../../styles/components/Beers.module.scss'
import { Grid } from '@material-ui/core';
import Header from '../components/Header'
import Filters from '../components/Filters'

export default function Beers(){

    const [opened, setOpened] = useState(false);
    const breakpoint = 992;

    const getFilters = (e) => {
        e.currentTarget.id === 'filter' ? setOpened(!opened) : null
    }

    useEffect(() => {
        document.body.classList.add("filters");
        document.body.classList.add("filters__active", opened);
        
      },[opened])
   
    return (
        <div className={styles.beerspage}>
            <Header />
            <main>
                <div className={`${styles.filters_container} ${opened ? styles.filters_container_active : null}`}>
                    <div className="container">
                        <button id="filter" className={styles.filters_btn} onClick={(e) => getFilters(e)}>
                            <img src="/img/icons/filter-icon.svg" alt=""/>
                            <p>Filtres</p>
                        </button>
                    </div>
                </div>
                <Filters />
                <section>
                    <div className={styles.breweries}>
                        <div className="container">
                            <div className={styles.breweries_text}>
                                <p>Bières blondes</p>
                                <hr className="green" />
                                <h2>Belles blondes</h2>
                            </div>
                            <Grid container spacing={5} className={styles.breweries_container}>
                                
                            </Grid>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}