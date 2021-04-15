import React, { useEffect } from 'react'
import BeerInfos from '../components/BeerInfos'
import Header from '../components/Header'
import beers from '../../beers.json'

const beer = ({ data }) => {

    // const router = useRouter()
    // const beerId = router.query.id
    // const result = beers.find((item) => {
    //     return item.id == beerId
    // })

    console.log(data);

    // const beerDisplay = () => {
    //     return (

    //     )
    // }

    return (
        <div>
            <Header />
            <div>
                <BeerInfos
                    id={data.id}
                    key={data.id}
                    name={data.name}
                    type={data.type}
                    level={data.level}
                    brewery={data.breweries}
                    brewery_txt={data.brewery_txt}
                    flavours={data.flavours}
                    format={data.format}
                    glass={data.glass}
                    image={data.image}
                    brewery_img={data.brewery_img}
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

// const getBeer = async (id) => {
//     const res = await fetch("http://sachadordolo.fr/amasdemus/admin/src/api/singleBeer.php?id=${id}", {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json"
//         }
//     });

//     const json = await res.json();
//     return json.data;
// }

// export const getServerSideProps = async ({ params }) => {
//     const data = await getBeer(params.id);

//     return {
//         props: {
//             data
//         }
//     }
// }
