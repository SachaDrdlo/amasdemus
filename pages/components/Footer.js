import React, { useState } from 'react'
import styles from '../../styles/components/Footer.module.scss';
import { Grid } from '@material-ui/core';
import Link from 'next/link'
import { useRouter } from 'next/router';

const Footer = () => {
    const router = useRouter()
    const [path, setPath] = useState(router.pathname)

    return (
        <div className={styles.footer}>
            <div className="container">
                <Grid container spacing={5} justify='space-between' className={styles.footer_container}>
                    <Grid item xs={12} md={3}>
                        <figure className={styles.footer_container_logo}>

                            { path === `/breweries/beers/[id]` ? <img src="../../img/logos/logo-vertical-green.svg" alt="" /> : <img src="../img/logos/logo-vertical-green.svg" alt="" />}
                        </figure>
                    </Grid>
                    <Grid item xs={12} md={4} className={styles.footer_container_text}>
                        <h3>Amas Demus</h3>
                        <p>Amas Demus est un projet proté par la convivialité, la passion de la boisson et l'amour de la découverte. Nous espérons que cette expérience vous plaira!</p>
                        <span>
                            <p>Etienne, Sacha et Julien</p>
                        </span>
                    </Grid>
                    <Grid item xs={12} md={3} className={styles.footer_container_navigation}>
                        <h3>Navigation</h3>
                        <nav>
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a href="">Accueil</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/beers">
                                        <a href="">Les bières</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/breweries">
                                        <a href="">Les brasseries</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        <a href="">A propos</a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </Grid>
                </Grid>
            </div>
        </div >
    )
}

export default Footer
