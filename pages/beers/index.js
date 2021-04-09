import React from 'react'
import Link from 'next/link'
import styles from '../../styles/components/Beers.module.scss'
import Header from '../components/Header'
import Filters from '../components/Filters'

export default function Beers({}){


   
    return (
        <div className={styles.beerspage}>
            <Header />
            <main className="container">
                <div className={styles.filters_container}>
                    <button className={styles.filters_btn}>
                        <img id="search" src="/img/icons/filter-icon.svg" alt="" onClick={(e) => getSearch(e)} />
                        <p>Filtres</p>
                    </button>
                </div>
            </main>
        </div>
    )
}