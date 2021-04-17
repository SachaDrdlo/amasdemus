import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import styles from '../../styles/components/Header.module.scss';
import Link from 'next/link'
import zIndex from '@material-ui/core/styles/zIndex';

const Header = ({ data, action = '/search' }) => {

    const preventDefault = f => e => {
        e.preventDefault()
        f(e)
    }

    const router = useRouter();
    const [query, setQuery] = useState('');
    const [opened, setOpened] = useState(false);
    const breakpoint = 992;


    const handleParam = setValue => e => setValue(e.target.value);

    const handleSubmit = preventDefault(() => {
        router.push({
            pathname: action,
            query: {
                value: query
            }
        })
    })

    const getSearch = (e) => {
        e.currentTarget.id === 'search' ? setOpened(true) : e.currentTarget.id === 'cross' ? setOpened(false) : null
    }

    // CHECK LA TAILLE DE LA PAGE
    const [width, setWidth] = useState(undefined);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth >= breakpoint ? true : false)
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    console.log(width);

    return (
        <div className={styles.header_container}>
            <div className={styles.header_container_left}>
                <div className={styles.header_container_left_logoContainer}>
                    <div className={styles.header_container_left_logoContainer_logo}>
                        <Link href="/">
                            <a>
                                <img src="/img/logos/logo-horizontal-green.svg" alt="" />
                            </a>
                        </Link>
                    </div>
                    {
                        typeof width !== 'undefined' ? (
                            width ? (
                                <div className={styles.header_container_left_logoContainer_link}>
                                    <nav>
                                        <ul>
                                            <li>
                                                <Link href="/">
                                                    <a>Accueil</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/beers">
                                                    <a>Bières</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/breweries">
                                                    <a>Brasseries</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/about">
                                                    <a>A propos</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            ) : null
                        ) : null
                    }
                </div>
            </div>

            <div className={`${styles.header_container_search} ${opened ? styles.active : null}`}>
                <div className={styles.header_container_search_inputcontainer}>
                    <img id='search' src="/img/icons/search-icon.svg" alt="" onClick={(e) => getSearch(e)} />
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Rechercher une bière..." value={query} onChange={handleParam(setQuery)} />
                    </form>
                </div>
                {typeof width !== 'undefined' ? (
                    !width ? (
                        <div className={`${styles.header_container_search_close} ${!opened ? styles.none : null}`}>
                            <img id="cross" className={`${styles.header_container_search_close_cross}`} src="/img/icons/close-icon.svg" alt="" onClick={(e) => getSearch(e)} />
                        </div>
                    ) : null
                ) : null
                }
            </div>
        </div>
    )
}

export default Header;