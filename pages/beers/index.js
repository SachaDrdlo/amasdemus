import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import styles from '../../styles/components/Beers.module.scss'
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
            </main>
        </div>
    )
}