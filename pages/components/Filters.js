import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/components/Filters.module.scss';
import FiltersAccordion from './FiltersAccordion';

export default function Filters() {

    const [opened, setOpened] = useState(false);
    const breakpoint = 992;

    const getFilters = (e) => {
        e.currentTarget.id === 'filtercross' ? setOpened(!opened) : null
    }

    useEffect(() => {
        document.body.classList.remove("filters__active", opened);
      },[opened])
    return (
        <div className="filters-lateralblock">
            <div className={styles.filters_container}>
                <div className={styles.filters_header}>
                    <button className={styles.filters_header_resetbtn} id="filterreset">
                        <img id="search" src="/img/icons/reset-icon.svg" alt=""/>
                        <p>Réinitialiser</p>
                    </button>
                    <button className={styles.filters_header_closebtn} id="filtercross"  onClick={(e) => getFilters(e)}>
                        <svg xmlns="http://www.w3.org/2000/svg"><path d="M20 4L4 20M4 4l16 16" /></svg>
                    </button>
                </div>
                <FiltersAccordion />
                <button className={styles.filters_applybtn}>Appliquer les filtres</button>
            </div>    
        </div>
    )
}

