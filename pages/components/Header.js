import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../../styles/components/Home.module.scss';

const Header = () => {

    const [opened, setOpened] = useState(false);
    const breakpoint = 992;

    const getSearch = () => {
        // TODO : conditionner
        setOpened(true);
    }

    return (
        <div className="container">
            <div className={styles.header_container}>
                <div className={styles.header_container_left}>
                    <div className={styles.header_container_left_logo}>
                        <Image src="/img/logos/horizontal-green.png" width={164} height={32} layout="responsive" alt="" />
                    </div>
                </div>
                <div className={`${styles.header_container_search} ${opened ? styles.active : null}`}>
                    <div className={styles.header_container_search_inputcontainer}>
                        <img src="/img/icons/search-icon.svg" alt="" onClick={() => getSearch()} />
                        <input type="text" placeholder="Rechercher une bière..." />
                    </div>
                    <img className={styles.header_container_search_close} src="/img/icons/close-icon.svg" alt="" onClick={() => getSearch()} />
                </div>
            </div>
        </div>
    )
}

export default Header;