import React, { useEffect } from 'react'
import BeerInfos from '../components/BeerInfos'
import Header from '../components/Header'
import beers from '../../beers.json'
import { useRouter } from 'next/router'

const beer = () => {

    const router = useRouter()
    const beerId = router.query.id
    const result = beers.find((item) => {
        return item.id == beerId
    })

    console.log(beerId);

    const beerDisplay = () => {
        return (
            <BeerInfos
                key={result.id}
                name={result.name}
                type={result.type}
                level={result.level}
                brewery={result.brewery}
                flavours={result.flavours}
                format={result.format}
                glass={result.glass}
                image={result.image}
                brewery_img={result.brewery_img}
            />
        )
    }

    console.log(result.id);

    return (
        <div>
            <Header />
            <div>
                {beerDisplay()}
            </div>

        </div>
    )
}

export default beer

export function getServerSideProps(context) {
    return {
        props: { params: context.params }
    };
}
