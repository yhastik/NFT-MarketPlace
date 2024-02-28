import React from 'react'
import './DiscoverdigitalArt.css'
import { Rocket, Person} from '../../../../img/img'
import SpaceWalk from './img/Image Placeholder.svg'

const DiscoverdigitalArt = () => {
  return (
    <>
        <main className='main'>
          <div className='dda'>
            <div className="discover-digital-art">
                <div className='dda-txt'>
                  <h1 className="dda-txt-title">
                    Discover <br/> digital art & Collect NFTs
                  </h1>
                  <p className="dda-txt-dscr">
                    NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
                  </p>
                </div>
                <div className="dda-infoAndBtn">
                  <button className='dda-btn'><img src={ Rocket } alt="Rocket" />Get Started</button>
                  <div className='dda-info'>
                    <p className="dda-info-sale dda-info-num"><span className="dda-sale dda-num">240k+</span>Total Sale</p>
                    <p className="dda-info-auctions dda-info-num"><span className="dda-auctions dda-num">100k+</span>Auctions</p>
                    <p className="dda-info-artists dda-info-num"><span className="dda-artists dda-num">240k+</span>Artists</p>
                  </div>
                </div>
            </div>
            <div className="space-walking">
              <div className="space-wlking-img">
                <img src={ SpaceWalk } alt="SpaceWalking"/>
                <div className="space-walking-info">
                  <p className="space-walking-info-title">
                    Space Walking
                  </p>
                  <p className="space-walking-info-person">
                    <p className="space-walking-person"><img src={ Person } alt=""/>Animakid</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
       
    </>
  )
}

export default DiscoverdigitalArt