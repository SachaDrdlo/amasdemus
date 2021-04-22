import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { StylesProvider } from '@material-ui/styles';
import Image from 'next/image'
import { Grid } from '@material-ui/core';
import Link from 'next/link'


const LogoTemplate = ({ id, img, name }) => {

    const router = useRouter();
    const [path, setPath] = useState(router.pathname)


    const getPathImg = () => {
        if (path === '/' || path === '/breweries') {
            return <img className='container_content_breweryImg' src={`https://sachadordolo.fr/amasdemus/admin/assets/img/breweries/${img}`} alt="" />
        } else if (path === '/beers' || path === '/beers/type/[type]' || path === '/search' || path === `/breweries/[id]` || path === `/breweries/beers/[id]` || path === `/beers/[id]`) {
            return <img className='container_content_beerImg' src={`https://sachadordolo.fr/amasdemus/admin/assets/img/beers/${img}`} alt="" />
        }

    }

    // Permet d'afficher soit bière soit brasserie en fonction de la page sur laquelle on est
    const getNameBtn = () => {
        const brewery = 'brasserie'
        const beer = 'bière'

        if (path === '/' || path === '/breweries') {
            return brewery
        } else if (path === '/beers' || path === '/beers/type/[type]' || path === '/search' || path === `/breweries/[id]` || path === `/breweries/beers/[id]` || path === `/beers/[id]`) {
            return beer
        }
    }

    const redirection = (path) => {
        if (path === '/' || path === '/breweries') {
            return `/breweries/${id}`
        } else if (path === '/beers' || path === '/beers/type/[type]' || path === '/search' || path === `/breweries/[id]` || path === `/breweries/beers/[id]` || path === `/beers/[id]`) {
            return `/beers/${id}`
        }
    }


    return (

        <Grid item xs={12} sm={6} md={4}>
            <div className="container_content">
                <figure>
                    {getPathImg()}
                </figure>
                <h3 className="container_content_title">{name}</h3>
                <Link href={redirection(path)}>
                    <a className={` bouton greenButton`}>Découvrir cette {getNameBtn()}</a>
                </Link>
            </div>
        </Grid>
    )
}

export default LogoTemplate
