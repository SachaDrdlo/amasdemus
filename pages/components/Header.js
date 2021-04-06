import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../../styles/components/Home.module.scss';

const Header = () => {

    // CONTRE LE "WINDOW IS NOT DEFINED"

    // if (typeof window === 'undefined') {
    //     global.window = {}
    // }

    const [opened, setOpened] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth)
    const breakpoint = 992;

    // CHECK LA LARGEUR DE LA PAGE

    // const getSearch = () => {
    //     setOpened(!opened);
    // }
    // const useWidth = () => {
    //     const handleResize = () => {
    //         setIsDesktop(window.innerWidth)
    //     }
    //     useEffect(() => {
    //         window.addEventListener('resize', handleResize);
    //         return () => {
    //             window.removeEventListener('resize', handleResize)
    //         }
    //     }, [handleResize])
    // }

    const getSearch = (e) => {
        e.currentTarget.id === 'search' ? setOpened(true) : e.currentTarget.id === 'cross' ? setOpened(false) : null
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