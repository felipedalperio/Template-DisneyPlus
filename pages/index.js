import Image from 'next/image'
import Menu from '../components/Menu'
import Header from '../components/Header'
import styles from '../styles/Home.module.scss'
import Posts from '../components/Posts'
import Planos from '../components/Planos'
import Posters from '../components/Posters'
import Devices from '../components/Devices'
import Duvidas from '../components/Duvidas'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
        <Menu/>
        <Header/>
        <Posts />
        <Planos/>
        <Posters/>
        <Devices/>
        <Duvidas/>
        <Footer/>
    </div>
  )
}
