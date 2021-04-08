import Head from 'next/head'
import styles from '../styles/components/Home.module.scss'
import Header from './components/Header'
import Navbar from './components/Navbar-bottom';
import HomePage from './components/HomePage'
import BeerIllu from './components/BeerIllu'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <HomePage />
      {/* <Navbar /> */}
      <Footer />
    </div>
  )
}
