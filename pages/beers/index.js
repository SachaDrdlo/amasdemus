import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Filters from '../components/Filters'

export default function Beers({data}){
    // const listTvShows = data.posts.edges.map((item) => {
    //     return(
    //         <li key={item.node.id}>
    //             <Link href={`/tvshows/${item.node.id}`}>
    //                 {item.node.title}
    //             </Link>
    //         </li>
    //     )
    // })
    return (
        <div>
            <Header />
            <Filters />
        </div>
    )
}