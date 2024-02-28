import React from 'react'
import './TrendingCollection.css'

import {TcCatMini1, TcDogBig, TcGrubBug, TcGrubmini1, TcHumanBug, TcHumanMini1, TcPerson1, TrendingCollectionCard} from './TrendingCollectionIndex'
const TrendingCollection = () => {
  return (
    <>
      <div className="trendingCollection">
      <div className='trendingCollection-title-dscr'>
          <h1 className="trendingCollection-title">Trending Collection</h1>
          <p className="trendingCollection-dscr">Checkout our weekly updated trending collection.</p>
        </div>
        <div className='trendingCollection-Card'>
          <TrendingCollectionCard big={TcDogBig} mini1={TcCatMini1} mini2={TcCatMini1} txtMini='1025k+' Ctcit='DSGN Animals' imgPerson={TcPerson1} person='MrFox'/>
          <TrendingCollectionCard big={TcGrubBug} mini1={TcGrubmini1} mini2={TcGrubmini1} txtMini='1025k+' Ctcit='Magic Mushrooms' imgPerson={TcPerson1} person='Shroomie'/>
          <TrendingCollectionCard big={TcHumanBug} mini1={TcHumanMini1} mini2={TcHumanMini1} txtMini='1025k+' Ctcit='Disco Machines' imgPerson={TcPerson1} person='BeKind2Robots'/>
        </div>
      </div>
    </>
  )
}

export default TrendingCollection