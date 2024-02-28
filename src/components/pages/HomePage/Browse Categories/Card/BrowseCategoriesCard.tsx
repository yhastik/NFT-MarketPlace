import React from 'react'
import './BrowseCategoriesCard.css'
interface BrowseCategoriesCard {
  CategoryIcon: string,
  CategoryName: string,
  CategoryBackImg: string
}
const BrowseCategoriesCard = ({CategoryIcon, CategoryBackImg, CategoryName}: BrowseCategoriesCard) => {
  return (
    <div className='BrowseCategoriesCard'>
      <div className="BrowseCategoriesCard-Title">
        <img className='backGr' src={CategoryBackImg} alt="BG" />
        <div className="BG"/>
        <img className='IconGr' src={CategoryIcon} alt="Icon" />

      </div>
      <div className="BrowseCategoriesCard-Footer">
        <p className="BrowseCategoriesCard-Footer-txt">{CategoryName}</p>
      </div>
    </div>
  )
}

export default BrowseCategoriesCard