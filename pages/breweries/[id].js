import React from 'react'
import beers from '../../beers.json'
import { useRouter } from 'next/router'
import BreweryInfos from '../components/BreweryInfos'

const brewery = () => {

    const router = useRouter()
    const beerId = router.query.id
    const result = beers.find((item) => {
        return item.id == beerId
    })

    const breweryDisplay = () => {
        return (
            <BreweryInfos
                key={result.id}
                brewery={result.brewery}
                brewery_img={result.brewery_img}
                brewery_txt={result.brewery_txt}
            />
        )
    }

    return (
        <div>
            {breweryDisplay()}
        </div>
    )
}

export default brewery

export function getServerSideProps(context) {
    return {
        props: { params: context.params }
    };
}

