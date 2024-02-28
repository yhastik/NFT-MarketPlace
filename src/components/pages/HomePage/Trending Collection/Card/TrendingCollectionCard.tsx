import React from 'react'
import './TrendingCollectionCard.css'

interface TrendingCardProps {
    big: string,
    mini1: string,
    mini2: string,
    txtMini: string,
    Ctcit: string,
    imgPerson:string,
    person: string
}

const TrendingCard = ({big, mini1,mini2, txtMini, Ctcit, imgPerson, person}: TrendingCardProps) => {
  return (
    <>
        <div className="card-trending-c">
            <div className="big-img">
                <img src={big} alt="" />
            </div>
            <div className="mini-img">
                <img src={mini1} alt="mini-img"/>
                <img src={mini2} alt="mini-img"/>
                <div className="score-ctc-mini">{txtMini}</div>
            </div>
            <div className="card-trending-c-info">
                <h2 className="card-trading-c-info-title">{Ctcit}</h2>
                <p className="card-trading-c-info-person">
                    <img src={imgPerson} alt="" />
                    {person}
                </p>
            </div>
        </div>
    </>
  )
}

export default TrendingCard