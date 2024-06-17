import React, { Fragment } from 'react'
import Header from '../components/header/Header'
 import Home from '../components/home/Home'
import About from '../components/about/About'
import Services from '../components/services/Services'
import Recommendation from '../components/recommendation/Recommendation'
import Article from '../components/articles/Article'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

const HomePage = () => {
  return (
    <Fragment>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Recommendation/>
      <Article/>
      <Contact/>
      <Footer/>
    </Fragment>
  )
}

export default HomePage