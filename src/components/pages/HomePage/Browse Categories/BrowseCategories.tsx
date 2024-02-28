import React from 'react'
import './BrowseCategories.css'
import {BrowseCategoriesCard, Art, BgArt, 
  Collectibles, BGCollectibles, Music, 
  BGMusic, Photography, BGPhotographt,
  Video, BGVideo, Utility, BGUtility,
  Sport, BGSport, VirtualWorlds, BGVirtualWorlds} from './BrowseCategoriesIndex'
const BrowseCategories = () => {
  return (
    <>
        <div className="browseCategories">
            <div className="browseCategories-title">
                <p>Browse Categories</p>
            </div>
            <div className="browseCategories-Cards">
                <BrowseCategoriesCard CategoryBackImg={BgArt} CategoryIcon={Art} CategoryName='Art'/>
                <BrowseCategoriesCard CategoryBackImg={BGCollectibles} CategoryIcon={Collectibles} CategoryName='Collectibles'/>
                <BrowseCategoriesCard CategoryBackImg={BGMusic} CategoryIcon={Music} CategoryName='Music'/>
                <BrowseCategoriesCard CategoryBackImg={BGPhotographt} CategoryIcon={Photography} CategoryName='Photography'/>
                
                <BrowseCategoriesCard CategoryBackImg={BGVideo} CategoryIcon={Video} CategoryName='Video'/>
                <BrowseCategoriesCard CategoryBackImg={BGUtility} CategoryIcon={Utility} CategoryName='Utility'/>
                <BrowseCategoriesCard CategoryBackImg={BGSport} CategoryIcon={Sport} CategoryName='Sport'/>
                <BrowseCategoriesCard CategoryBackImg={BGVirtualWorlds} CategoryIcon={VirtualWorlds} CategoryName='Virtual Worlds'/>
            </div>
        </div>
    </>
  )
}

export default BrowseCategories