import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/components/Filters.module.scss';
// import FiltersAccordion from './FiltersAccordion';

export default function Filters() {

    const [opened, setOpened] = useState(true);
    const breakpoint = 992;

    const getFilters = (e) => {
        e.currentTarget.id === 'filtercross' ? setOpened(!opened) : null
    }

    useEffect(() => {
        document.body.classList.remove("filters__active", opened);
      },[opened])
    return (
        <div className="filters-lateralblock">
            <div className="container">
                <div className={styles.filters_container}>
                    <div className={styles.filters_close}>
                        <button className={styles.filters_close_btn} id="filtercross"  onClick={(e) => getFilters(e)}>
                            <svg className={styles.filters_close_img} xmlns="http://www.w3.org/2000/svg"><path d="M20 4L4 20M4 4l16 16" /></svg>
                        </button>
                    </div>

                    {/* <ul className={styles.filters_list}>
                        <li className={styles.filters_list_el}>Type</li>
                        <li className={styles.filters_list_el}>Provenance</li>
                        <li className={styles.filters_list_el}>Saveurs</li>
                    </ul> */}

                    {/* <FiltersAccordion /> */}
                    
                </div>    
            </div>
        </div>
    )
}

