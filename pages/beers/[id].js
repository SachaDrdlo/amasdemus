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


    const beerDisplay = () => {
        return (
            <BeerInfos
                id={result.id}
                key={result.id}
                name={result.name}
                type={result.type}
                level={result.level}
                brewery={result.brewery}
                brewery_txt={result.brewery_txt}
                flavours={result.flavours}
                format={result.format}
                glass={result.glass}
                image={result.image}
                brewery_img={result.brewery_img}
                title={result.title}
                description={result.description}
                introduction={result.introduction}
            />
        )
    }

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
