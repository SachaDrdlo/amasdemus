import { Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styles from '../../styles/components/Filters.module.scss';

export default function Filters({ types, parentCallback }) {
    const [opened, setOpened] = useState(false);
    const [beerFilters, setBeerFilters] = useState([]);

    const getFilters = (e) => {
        e.currentTarget.id === 'filtercross' ? setOpened(!opened) : null
    }

    const typeFilterMap = types.map((type) => {
        return(
            <div>
                <input type="checkbox" id={type.type}  name={type.type} onChange={() => parentCallback(type.type)}/>
                <label htmlFor={type.type}>{type.type}</label>
            </div>

        )
    })

    // TODO - MAP DES DIFFERENTS FILTRES A REVOIR DANS UNE PROCHAINE VERSION
    // --------------------------------------------------------------------------------------------

    // const locationFilterMap = locations.map((location) => {
    //     return(
    //         <div>
    //             <input type="checkbox" id={location.location} name={location.location}/>
    //             <label htmlFor={location.location}>{location.location}</label>
    //         </div>
    //     )
    // })

    // const flavourFilterMap = flavours.map((flavour) => {
    //     return(
    //         <div>
    //             <input type="checkbox" id={flavour.flavour} name={flavour.flavour}/>
    //             <label htmlFor={flavour.flavour}>{flavour.flavour}</label>
    //         </div>
    //     )
    // })

    useEffect(() => {
        document.body.classList.remove("filters__active", opened);
      },[opened])

    return (
        <div className="filters-lateralblock">
            <div className={styles.filters_container}>
                <div className={styles.filters_header}>
                    <button className={styles.filters_header_resetbtn} id="filterreset">
                        <img id="search" src="/img/icons/reset-icon.svg" alt=""/>
                        <p>Réinitialiser</p>
                    </button>
                    <button className={styles.filters_header_closebtn} id="filtercross"  onClick={(e) => getFilters(e)}>
                        <svg xmlns="http://www.w3.org/2000/svg"><path d="M20 4L4 20M4 4l16 16" /></svg>
                    </button>
                </div>
                <div>
                    <ul>
                        <li className={styles.filters_list_el}>
                            <div className={styles.filter}>
                                <button>Type de bières</button>
                                    {typeFilterMap}
                            </div>
                        </li>

                        {/* TODO - MAP DES DIFFERENTS FILTRES A REVOIR DANS UNE PROCHAINE VERSION
                        -------------------------------------------------------------------------------------------- */}
                        
                        {/* <li className={styles.filters_list_el}>
                            <div className={styles.filter}>
                                <button>Région</button>
                                    {locationFilterMap}
                            </div>
                        </li> */}

                        {/* <li className={styles.filters_list_el}>
                            <div className={styles.filter}>
                                <button>Notes / saveurs</button>
                                    {flavourFilterMap}
                            </div>
                        </li> */}
                    </ul>
                </div>
                {/* <button className={styles.filters_applybtn}>Appliquer les filtres</button> */}
            </div>
        </div>
    )
}

