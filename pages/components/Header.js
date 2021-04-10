import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../../styles/components/Home.module.scss';
import Link from 'next/link'
// import du fichier '../../styles/components/Header.module.scss'
// Enlever l'import du fichier '../../styles/components/Home.module.scss'

const Header = () => {

    const [opened, setOpened] = useState(false);
    const breakpoint = 992;

    const getSearch = (e) => {
        e.currentTarget.id === 'search' ? setOpened(true) : e.currentTarget.id === 'cross' ? setOpened(false) : null
    }

    return (
        <div className="container">
            <div className={styles.header_container}>
                <div className={styles.header_container_left}>
                    <div className={styles.header_container_left_logo}>
                        <Link href="/">
                            <a>
                                <Image src="/img/logos/logo-horizontal-green.svg" width={164} height={32} layout="responsive" alt="" />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={`${styles.header_container_search} ${opened ? styles.active : null}`}>
                    <div className={styles.header_container_search_inputcontainer}>
                        <img id="search" src="/img/icons/search-icon.svg" alt="" onClick={(e) => getSearch(e)} />
                        <input type="text" placeholder="Rechercher une bière..." />
                    </div>
                    <div className={`${styles.header_container_search_close} ${!opened ? styles.none : null}`}>
                        <img id="cross" className={`${styles.header_container_search_close_cross}`} src="/img/icons/close-icon.svg" alt="" onClick={(e) => getSearch(e)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;