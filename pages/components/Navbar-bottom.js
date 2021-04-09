import React, { useEffect, useState } from 'react'
import styles from '../../styles/components/Home.module.scss';
import Link from 'next/link'

const Navbar = () => {

    // if (typeof window === 'undefined') {
    //     global.window = {}
    // }

    // const [isDesktop, setIsDesktop] = useState(window.innerWidth)
    // const breakpoint = 992


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

    return (
        <div className={`${styles.navbar_container}`}>
            <div className={styles.navbar_container_icons}>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">
                                <img src="../img/icons/home.svg" alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/beers">
                                <img src="../img/icons/beer.svg" alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/breweries">
                                <img src="../img/icons/breweries.svg" alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <img src="../img/icons/about.svg" alt="" />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
