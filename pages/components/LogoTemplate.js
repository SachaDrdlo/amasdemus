import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { StylesProvider } from '@material-ui/styles';
import Image from 'next/image'
import { Grid } from '@material-ui/core';
import Link from 'next/link'


const LogoTemplate = ({ id, img, name }) => {

    const router = useRouter();
    const [path, setPath] = useState(router.pathname)


    // BASE A MODIFIER PLUS TARD --> permet d'afficher soit l'image de la brasserie soit l'image de la bière selon la page sur laquelle on est
    const getPathImg = () => {
        if (path === '/' || path === '/breweries') {
            return <img className='container_content_breweryImg' src={`http://sachadordolo.fr/amasdemus/admin/assets/img/breweries/${img}`} alt="" />
        } else if (path === '/beers' || path === '/search' || path === `/breweries/[id]` || path === `/beers/[id]`) {
            return <img className='container_content_beerImg' src={`http://sachadordolo.fr/amasdemus/admin/assets/img/beers/${img}`} alt="" />
        }
        
    }

    // Permet d'afficher soit bière soit brasserie en fonction de la page sur laquelle on est
    const getNameBtn = () => {
        const brewery = 'brasserie'
        const beer = 'bière'

        if (path === '/' || path === '/breweries') {
            return brewery
        } else if (path === '/beers' || path === '/search' || path === `/breweries/[id]` || path === `/beers/[id]`) {
            return beer
        }
        // return path === '/' || path === '/breweries' ? brewery : path === '/beers' || path === '/search' ? beer : null
    }

    // const redirection = path === '/' || path === '/breweries' ? `/breweries/${id}` : path === '/beers' || path === '/search' ? `/beers/${id}` : null
    
    const redirection = (path) => {
        if (path === '/' || path === '/breweries') {
            return `/breweries/${id}`
        } else if (path === '/beers' || path === '/search' || path === `/breweries/[id]` || path === `/beers/[id]`) {
            return `/beers/${id}`
        }
    }


    return (

        <Grid item xs={12} sm={6} md={4} className='container_content'>
            <figure>
                {getPathImg()}
            </figure>
            <h3>{name}</h3>
            <div className='container_content_btn'>
                <Link href={redirection(path)}>
                    <a className={`greenButton`}>Découvrir cette {getNameBtn()}</a>
                </Link>
            </div>
        </Grid>
    )
}

export default LogoTemplate
