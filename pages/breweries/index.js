import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import styles from '../../styles/components/Breweries.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BrewerySuggestion from '../components/BrewerySuggestion';

export default function Breweries({ data }) {
    const breweries = data.breweries;
    return (
        <div>
            <Header />
            <main className="container">
                <ul className={styles.breweries}>
                    {breweries.map((brewery) => (
                        <li>
                            <BrewerySuggestion
                                key = {brewery.id}
                                id = {brewery.id}
                                name = {brewery.name}
                                image = {brewery.logo}
                            />
                        </li>
                    ))}
                </ul>
            </main>
            <Footer />
        </div>
    )
}

async function getBreweries() {
    const res = await fetch('http://sachadordolo.fr/amasdemus/admin/src/api/allBreweries.php')
    const data = await res.json()
    return data;
}

export async function getServerSideProps(){
    const data = await getBreweries();
    return {
        props: {
            data
        }
    }
}