import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Header from './components/Header'

const search = ({ data }) => {
    return (
        <div>
            <Header />
            {data.beers.map((beer) => {
                return (
                    <div>
                        <h1>{beer.name}</h1>
                        <p>{beer.breweries}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default search

export async function getServerSideProps(context) {
    const query = context.query.value
    const res = await fetch(`http://sachadordolo.fr/amasdemus/admin/src/api/searchBeer.php?search=${query}`)
    const data = await res.json()

    return {
        props: {
            data,
        },
    }
}
