import React, { useEffect } from 'react'
import BeerInfos from '../components/BeerInfos'
import Header from '../components/Header'
import beers from '../../beers.json'

const beer = ({ data }) => {

    console.log(data);

    return (
        <div>
            <Header />
            <div>
                <BeerInfos
                    key={data.id}
                    name={data.name}
                    type={data.type}
                    level={data.level}
                    brewery={data.breweries}
                    desc_brewery={data.desc_brewery}
                    brewery_id={data.id_brewery}
                    flavours={data.flavours}
                    format={data.format}
                    glass={data.glass}
                    image={data.image}
                    img_brewery={data.img_brewery}
                    title={data.title}
                    description={data.description}
                />
            </div>

        </div>
    )
}

export default beer

export async function getServerSideProps(context) {
    const query = context.query.id;
    const res = await fetch(`http://sachadordolo.fr/amasdemus/admin/src/api/singleBeer.php?id=${query}`)
    const data = await res.json()

    return {
        props: {
            data,
        },
    }
}
