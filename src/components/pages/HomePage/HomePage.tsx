import React from 'react'
import './HomePage.css'
import { Header, Footer } from '../../index'
import {DiscoverdigitalArt, TrendingCollection, TopСreators, BrowseCategories} from './HomePageIndex'
const HomePage = () => {
  return (
    <>
    <main className='homeMain'>
      <Header/>
      <div className="HomePage">
          <DiscoverdigitalArt/>
          <TrendingCollection/>
          <TopСreators/>
          <BrowseCategories/> 
      </div>
      <Footer/>
    </main>
    </>
  )
}

export default HomePage