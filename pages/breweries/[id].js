import React from 'react'
import { useRouter } from 'next/router'
// import BreweryInfos from '../components/BreweryInfos'

const Brewery = ({data}) => {

    console.log(data);

    return (
        <div>
            <h2>Hello</h2>
        </div>
    )
}

export default Brewery

export async function getServerSideProps(context) {
    const query = context.query.id;
    const res = await fetch(`http://sachadordolo.fr/amasdemus/admin/src/api/singleBrewery.php?id=${query}`)
    const data = await res.json()

    return {
        props: {
            data,
        },
    }
}

