import React from 'react'
import TopCreatorsCard from './Card/TopCreatorsCard'
import { Rocket, WomanPerson } from '../../../../img/img'

import './TopCreators.css'
const TopСreators = () => {
  return (
    <>
      <div className="topCreators">
        <div className="topCreators-header">
          <div className="topCreators-title-descr">
            <h1 className="topCreators-title">Top creators</h1>
            <p className="topCreators-descr">Checkout Top Rated Creators on the NFT Marketplace</p>
          </div>
          <div className="topCreators-button">
            <div className='topCreators-btn'><img src={ Rocket } alt="Rocket"/>View Rankings</div>
          </div>
        </div>
        <div className="topCreators-cards">
            <TopCreatorsCard Sales='34.53 ETH' PersonName='Keepitreal' imgPerson={WomanPerson} topIndex='1'/>
            <TopCreatorsCard Sales='34.53 ETH' PersonName='DigiLab' imgPerson={WomanPerson} topIndex='2'/>
            <TopCreatorsCard Sales='34.53 ETH' PersonName='GravityOne' imgPerson={WomanPerson} topIndex='3'/>
            <TopCreatorsCard Sales='34.53 ETH' PersonName='Juanie' imgPerson={WomanPerson} topIndex='4'/>
            <TopCreatorsCard Sales='34.53 ETH' PersonName='BlueWhale' imgPerson={WomanPerson} topIndex='5'/>
            <TopCreatorsCard Sales='34.53 ETH' PersonName='mr fox' imgPerson={WomanPerson} topIndex='6'/>
            <TopCreatorsCard Sales='34.53 ETH' PersonName='Shroomie' imgPerson={WomanPerson} topIndex='7'/>
            <TopCreatorsCard Sales='34.53 ETH' PersonName='robotica' imgPerson={WomanPerson} topIndex='8'/>
            <TopCreatorsCard Sales='34.53 ETH' PersonName='RustyRobot' imgPerson={WomanPerson} topIndex='9'/>
            <TopCreatorsCard Sales='34.53 ETH' PersonName='animakid' imgPerson={WomanPerson} topIndex='10'/>
            <TopCreatorsCard Sales='34.53 ETH' PersonName='Dotgu' imgPerson={WomanPerson} topIndex='11'/>
            <TopCreatorsCard Sales='34.53 ETH' PersonName='Ghiblier' imgPerson={WomanPerson} topIndex='12'/>
        </div>
      </div>
    </>
  )
}

export default TopСreators