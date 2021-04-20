import { Grid } from '@material-ui/core';
import { useEffect, useState, createContext, useContext } from 'react';
import styles from '../../styles/components/Filters.module.scss';
import FiltersAccordion from './FiltersAccordion';

export default function Filters({ types, locations, flavours, parentCallback }) {
    const [opened, setOpened] = useState(false);
    const [beerFilters, setBeerFilters] = useState([]);
    

    const breakpoint = 992;
    
    const getFilters = (e) => {
        e.currentTarget.id === 'filtercross' ? setOpened(!opened) : null
    }

    // const sendData = (props) => {
    //     props.parentCallback(beerFilters)
    // }
    
    // const handleFilterItem = (e) => {
    //     setBeerFilters([...beerFilters, e.target.id])
    //     // sendData(props)
    // }

    const typeFilterMap = types.map((type) => {
        return(
            <div>
                <input type="checkbox" id={type.type}  name={type.type} onChange={() => parentCallback(type.type)}/>
                <label htmlFor={type.type}>{type.type}</label>
            </div>
                
        )
    })

    const locationFilterMap = locations.map((location) => {
        return(
            <div>
                <input type="checkbox" id={location.location} name={location.location}/>
                <label htmlFor={location.location}>{location.location}</label>
            </div>
                
        )
    })

    const flavourFilterMap = flavours.map((flavour) => {
        return(
            <div>
                <input type="checkbox" id={flavour.flavour} name={flavour.flavour}/>
                <label htmlFor={flavour.flavour}>{flavour.flavour}</label>
            </div>
                
        )
    })

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
                                <button>Type</button>
                                {/* className={styles.filter_boxes} */}
                                    {typeFilterMap}
                                
                            </div>
                        </li>

                        <li className={styles.filters_list_el}>
                            <div className={styles.filter}> 
                                <button>Région</button>
                                {/* className={styles.filter_boxes} */}
                                    {locationFilterMap}
                                
                            </div>
                        </li>

                        <li className={styles.filters_list_el}>
                            <div className={styles.filter}> 
                                <button>Notes / saveurs</button>
                                {/* className={styles.filter_boxes} */}
                                    {flavourFilterMap}
                                
                            </div>
                        </li>
                        {/* <li className={styles.filters_list_el}>
                            <div className={styles.filter}>
                                   {types}
                                <button>Type</button>
                                <p className={styles.filter_boxes}>
                                {types}
                                </p>
                            </div>
                        </li> */}
                    </ul>
                </div>
                {/* <FiltersAccordion 
                    types = {types}
                    locations = {locations}
                    flavours = {flavours}
                /> */}
                <button className={styles.filters_applybtn}>Appliquer les filtres</button>
            </div>    
        </div>
    )
}

