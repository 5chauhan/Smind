import './coincards.css';
import React from 'react'

function CoinCards({Carddetails}) {
  const {name,fullName,price,dayChange,id} = Carddetails;
  return (
    <div className="coin-cards">
      <div className="coin-cards-sec"><h3>{name}</h3><h3>{fullName}</h3></div>
      <div className="coin-cards-sec"><h3>Current Price{price}</h3><h3>Change Price:  {dayChange}</h3></div>
    </div>
  )
}

export default CoinCards