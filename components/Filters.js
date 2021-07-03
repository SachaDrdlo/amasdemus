import { Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styles from '../styles/components/Filters.module.scss';

export default function Filters({ types, handleBeersFilterCallback, handleFiltersReset, isChecked, beerFilters }) {
    const [opened, setOpened] = useState(false);

    const getFilters = (e) => {
        e.currentTarget.id === 'filtercross' ? setOpened(!opened) : null
    }

    const typeFilterMap = types.map((type) => {
        return (
            <div className={styles.filter_box}>
                <input data-filter="filter" type="checkbox" id={type.id} name={type.type} onChange={() => handleBeersFilterCallback(type.type)} checked={beerFilters.includes(type.type)} />
                <label htmlFor={type.id}>{type.type}</label>
            </div>
        )
    })

    useEffect(() => {
        document.body.classList.remove("filters__active", opened);
    }, [opened])

    return (
        <div className="filters-lateralblock">
            <div className={styles.filters_container}>
                <div className={styles.filters_header}>
                    <button className={styles.filters_header_resetbtn} id="filterreset" onClick={(e) => handleFiltersReset(e)}>
                        <img id="search" src="/img/icons/reset-icon.svg" alt="" />
                        <p>Réinitialiser</p>
                    </button>
                    <button className={styles.filters_header_closebtn} id="filtercross" onClick={(e) => getFilters(e)}>
                        <svg xmlns="http://www.w3.org/2000/svg"><path d="M20 4L4 20M4 4l16 16" /></svg>
                    </button>
                </div>
                <div>
                    <ul>
                        <li className={styles.filters_list_el}>
                            <div className={styles.filter}>
                                <button>Type de bières</button>
                                <div className={styles.filter_boxes}>
                                    {typeFilterMap}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

