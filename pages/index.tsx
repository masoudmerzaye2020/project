import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Hero from '../section/Hero'
import Carousel from '../section/Carousel'
import Learn from '../section/Learn'
import Crypto from '../section/Crypto'
import Deep from '../section/Deep'
import Smartfeed from '../section/Smartfeed'
import Carouselcard from '../section/Carouselcard'
import Footer from '../components/Footer'
import Reactmotion from '../section/Reactmotion'
import Welcome from '../section/Welcome'


const Home: NextPage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
   <Carousel/>
 {/*    <Crypto/>  */}
   <Learn/>
   
  <Deep/>
     <Smartfeed/>
 {/*    <Carouselcard/> */}
 {/*   <Reactmotion/>   */}
    <Footer/> 
{/*     <Welcome/> */}
 
   
 
    </>
  )
}

export default Home