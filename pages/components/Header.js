import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../../styles/components/Home.module.scss';

const Header = () => {

    const [opened, setOpened] = useState(false);
    const breakpoint = 992;

    const getSearch = () => {
        setOpened(!opened);
    }

    return (
        <div className="container">
            <div className={styles.header_container}>
                <div className={styles.header_container_left}>
                    <div className={styles.header_container_left_logo}>
                        <Image src="/img/logos/horizontal-green.png" width={164} height={32} layout="responsive" alt="" />
                    </div>
                </div>
                <div xs={6} className={styles.header_container_right}>
                    <div className={`${styles.header_container_right_inputcontainer} ${opened ? styles.active : null}`}>
                        <img src="/img/icons/search-icon.svg" alt="" onClick={() => getSearch()} />
                        <input type="text" placeholder="rechercher une bière" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;