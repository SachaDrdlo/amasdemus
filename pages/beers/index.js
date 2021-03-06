import React from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import styles from '../../styles/components/Beers.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar-bottom';
import Filters from '../../components/Filters';
import LogoTemplate from '../../components/LogoTemplate';
export default function Beers({ blondBeers, tripleBeers, amberBeers, typesFilters, API_PATH }) {

	blondBeers = blondBeers.beers;
	tripleBeers = tripleBeers.beers;
	amberBeers = amberBeers.beers;

	const blondType = blondBeers[0].type;
	const tripleType = tripleBeers[0].type;
	const amberType = amberBeers[0].type;

	// Filters pannel opener
	const [opened, setOpened] = useState(false);
	const getFilters = (e) => {
		e.currentTarget.id === 'filter' ? setOpened(!opened) : null;
		document.body.classList.add('filters__active');
	};

	// Beer type filters array
	const [beerFiltersArray, setBeerFiltersArray] = useState([]);


	const handleTypeFilter = (typeFilter) => {
		// Copie du tableau de filtres
		const beerState = [...beerFiltersArray];

		// on check la correspondance entre le filtre envoyé par le click sur une des checkboxes
		// et la copie du tableau de filtres existant
		const filterIn = beerState.find((filter) => {
			return typeFilter == filter;
		});

		if (filterIn) {
			const remainingFilters = beerState.filter((item) => item !== filterIn);
			setBeerFiltersArray(remainingFilters);
		} else {
			setBeerFiltersArray([...beerFiltersArray, typeFilter]);
		}
	};

	// State contenant les bières
	const [beersFiltered, setBeersFiltered] = useState();

	async function getBeersByTypeFilter(filters) {
		const letFilterBeers = await fetch('https://sachadordolo.fr/amasdemus/admin/src/api/getBeersByTypeFilter.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=UTF-8',
				'Origin': 'https://amasdemus-psi.vercel.app/'
			},
			body: JSON.stringify({ filters })
		}).then((response) => response.json());

		setBeersFiltered(letFilterBeers);
	}

	useEffect(() => {
		document.body.classList.add('filters');
	}, []);

	// useEffect(
	// 	() => {
	// 		getBeersByTypeFilter(beerFiltersArray);
	// 	},
	// 	[beerFiltersArray]
	// );

	const filterBeers = (beerDataArray) => {
		if (beerFiltersArray.length > 0 && beerDataArray != undefined) {
			const beersFilteredList = beerDataArray.beers.map((beer) => {
				return <LogoTemplate
					key={beer.id}
					id={beer.id}
					img={beer.image}
					name={beer.name}
				/>;
			});
			return beersFilteredList;
		}
	};

	const blondList = blondBeers.map((blondBeer) => {
		return <LogoTemplate
			key={blondBeer.id}
			id={blondBeer.id}
			img={blondBeer.image}
			name={blondBeer.name}
		/>;
	});

	const tripleList = tripleBeers.map((tripleBeer) => {
		return <LogoTemplate
			key={tripleBeer.id}
			id={tripleBeer.id}
			img={tripleBeer.image}
			name={tripleBeer.name}
		/>;
	});

	const amberList = amberBeers.map((amberBeer) => {
		return <LogoTemplate
			key={amberBeer.id}
			id={amberBeer.id}
			img={amberBeer.image}
			name={amberBeer.name}
		/>;
	});

	const typesList = typesFilters.beers.map((type) => {
		return type;
	});

	// const [checked, setChecked] = useState()

	const handleTypeFiltersReset = () => {
		setBeerFiltersArray([])
	};

	const pageRender = (beerDataArray) => {
		if (beerFiltersArray.length > 0 && beerDataArray != undefined) {

			// return (
			// 	<section className={styles.beers_section}>
			// 		<div className="sectionblock-infos">
			// 			<p className="sectionblock-headtitle">Filtres</p>
			// 			<hr className="sectionblock-underline" />
			// 			<h2 className="sectionblock-title">{beerDataArray.itemCount} Bières trouvées</h2>
			// 		</div>
			// 		<Grid container item className={styles.breweries_container}>
			// 			{filterBeers(beersFiltered)}
			// 		</Grid>
			// 	</section>
			// );
		} else {
			return (
				<div>
					<section className="sectionblock">
						<div className="sectionblock-infos">
							<p className="sectionblock-headtitle">Bières blondes</p>
							<hr className="sectionblock-underline" />
							<h2 className="sectionblock-title">Belles blondes</h2>
						</div>
						<Grid container item className={styles.breweries_container}>
							{blondList}
						</Grid>
						<div className="beers-btn">
							<Link href={`/beers/type/${blondType}`}>
								<a className="discoverBtn">
									Découvrir les bières blondes
									<svg className="discover-arrow-svg" width="42" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M40.36 5.762H5.613l5.756-3.868c.642-.432.645-1.134.006-1.568-.64-.433-1.678-.435-2.32-.003L.482 6.085l-.002.001c-.64.432-.642 1.136 0 1.57h.002l8.572 5.763c.642.431 1.681.43 2.32-.004.64-.434.637-1.136-.005-1.567l-5.756-3.87H40.36c.907 0 1.641-.495 1.641-1.107s-.734-1.109-1.64-1.109z" /></svg>
								</a>
							</Link>
						</div>
					</section>
					<section className={styles.beers_section}>
						<div className="sectionblock-infos">
							<p className="sectionblock-headtitle">Bières triples</p>
							<hr className="sectionblock-underline" />
							<h2 className="sectionblock-title">Triples saveurs</h2>
						</div>
						<Grid container item className={styles.breweries_container}>
							{tripleList}
						</Grid>
						<div className='beers-btn'>
							<Link href={`/beers/type/${tripleType}`}>
								<a className="discoverBtn">
									Découvrir les bières triples
									<svg className="discover-arrow-svg" width="42" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M40.36 5.762H5.613l5.756-3.868c.642-.432.645-1.134.006-1.568-.64-.433-1.678-.435-2.32-.003L.482 6.085l-.002.001c-.64.432-.642 1.136 0 1.57h.002l8.572 5.763c.642.431 1.681.43 2.32-.004.64-.434.637-1.136-.005-1.567l-5.756-3.87H40.36c.907 0 1.641-.495 1.641-1.107s-.734-1.109-1.64-1.109z" /></svg>
								</a>
							</Link>
						</div>
					</section>
					<section className={styles.beers_section}>
						<div className="sectionblock-infos">
							<p className="sectionblock-headtitle">Bières ambrées</p>
							<hr className="sectionblock-underline" />
							<h2 className="sectionblock-title">Mousses d'ambre</h2>
						</div>
						<Grid container item className={styles.breweries_container}>
							{amberList}
						</Grid>
						<div className='beers-btn'>
							<Link href={`/beers/type/${amberType}`}>
								<a className="discoverBtn">
									Découvrir les bières ambrées
									<svg className="discover-arrow-svg" width="42" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M40.36 5.762H5.613l5.756-3.868c.642-.432.645-1.134.006-1.568-.64-.433-1.678-.435-2.32-.003L.482 6.085l-.002.001c-.64.432-.642 1.136 0 1.57h.002l8.572 5.763c.642.431 1.681.43 2.32-.004.64-.434.637-1.136-.005-1.567l-5.756-3.87H40.36c.907 0 1.641-.495 1.641-1.107s-.734-1.109-1.64-1.109z" /></svg>
								</a>
							</Link>
						</div>
					</section>
				</div>
			);
		}
	};

	return (
		<div className={styles.beerspage}>
			<Header />
			<main>
				<div className={`${styles.filters_container} ${opened ? styles.filters_container_active : null}`}>
					<div className="container">
						<button id="filter" className={styles.filters_btn} onClick={(e) => getFilters(e)}>
							<img src="/img/icons/filter-icon.svg" alt="" />
							<p>Filtres</p>
						</button>
					</div>
				</div>
				<Filters
					types={typesList}
					beerFiltersArray={beerFiltersArray}
					// isChecked = {checked}
					handleTypeFilterCallback={handleTypeFilter}
					handleTypeFiltersReset={handleTypeFiltersReset}
				/>
				<div className="container">
					{pageRender(beersFiltered)}
				</div>
			</main>
			<Footer />
			<Navbar />
		</div>
	);
}

export async function getServerSideProps() {
	const blonde = encodeURI('blonde');
	const triple = encodeURI('triple');
	const amber = encodeURI('ambrée');

	const blondRes = await fetch(`${process.env.API_PATH}selectBeersByType.php?selection="${blonde}"`);
	const blondBeers = await blondRes.json();

	const tripleRes = await fetch(`${process.env.API_PATH}selectBeersByType.php?selection="${triple}"`);
	const tripleBeers = await tripleRes.json();

	const amberRes = await fetch(`${process.env.API_PATH}selectBeersByType.php?selection="${amber}"`);
	const amberBeers = await amberRes.json();

	// APPEL FILTERS ITEMS

	const typeRes = await fetch(`${process.env.API_PATH}getFiltersTypeItem.php`);
	const typesFilters = await typeRes.json();
	return {
		props: {
			blondBeers,
			tripleBeers,
			amberBeers,
			typesFilters
		}
	};
}
