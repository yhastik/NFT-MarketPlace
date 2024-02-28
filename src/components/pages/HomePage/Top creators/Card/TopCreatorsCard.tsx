import React from 'react'
import './TopCreatorsCard.css'
interface TopCreatorsCard {
  Sales: string,
  PersonName: string,
  imgPerson: string,
  topIndex: string
}
const TopCreatorsCard = ({Sales, PersonName, imgPerson, topIndex}:TopCreatorsCard) => {
  return (
    <>
      <div className="topCreators-card">
        <div className="topCreators-index-circle">
          <p>{topIndex}</p>
        </div>
        <div className="topCreators-info">
          <div className="topCreators-person">
            <img src={imgPerson} alt="Person" />
          </div>
          <div className="topCreators-personName">
            <h2>{PersonName}</h2>
          </div>
          <div className="topCreators-Sales">
            <p><span>Total Sales: </span>{Sales}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopCreatorsCard