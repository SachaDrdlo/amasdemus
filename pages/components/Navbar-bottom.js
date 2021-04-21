import React, { useEffect, useState } from 'react'
import styles from '../../styles/components/Navbar-bottom.module.scss';
import Link from 'next/link'
import { useRouter } from 'next/router';

const Navbar = () => {

    const router = useRouter()
    const [path, setPath] = useState(router.pathname)

    return (
        <div className={`${styles.navbar_container}`}>
            <div className={styles.navbar_container_icons}>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">
                                {path === `/breweries/beers/[id]` || `/beers/type/[type]` ? <img src="../../img/icons/home.svg" alt="" /> : <img src="../img/icons/home.svg" alt="" />}
                            </Link>
                        </li>
                        <li>
                            <Link href="/beers">
                                {path === `/breweries/beers/[id]` || `/beers/type/[type]` ? <img src="../../img/icons/beer.svg" alt="" /> : <img src="../img/icons/beer.svg" alt="" />}
                            </Link>
                        </li>
                        <li>
                            <Link href="/breweries">
                                {path === `/breweries/beers/[id]` || `/beers/type/[type]` ? <img src="../../img/icons/breweries.svg" alt="" /> : <img src="../img/icons/breweries.svg" alt="" />}
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                {path === `/breweries/beers/[id]` || `/beers/type/[type]` ? <img src="../../img/icons/about.svg" alt="" /> : <img src="../img/icons/about.svg" alt="" />}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
