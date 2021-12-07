import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CoffeeDrinkDetail from '../../components/CoffeeDrinkDetail/CoffeeDrinkDetail';

// import { checkToken } from '../../utilities/users-service';
// import { useParams } from "react-router-dom";
import './CoffeeListPage.css';

export default function CoffeeListPage({hotDrinks, coldDrinks}) {

  const [showHot, setShowHot] = useState(false);
  const [showCold, setShowCold] = useState(false);

  
  function handleShowHot(evt) {
    evt.preventDefault();
    setShowHot(!showHot)
  }
  function handleShowCold(evt) {
    evt.preventDefault();
    setShowCold(!showCold)
  }

  return (
    <main className="float-container">
      <div className="float-child">
        <h1>Choose Type</h1> 
          <button type="submit"
          onClick={(evt) => handleShowHot(evt)}>See Hot Coffee Drinks</button>
          {showHot && hotDrinks.map(h => 
          <Link to={`/CoffeeDrinks/${h.id}/hot`} 
          key={h.title}> 
          <p>{h.title}</p>
          </Link>)}
      </div>
      <div className="float-child">
          <h1>Choose Type</h1> 
          <button type="submit" 
          onClick={(evt) => handleShowCold(evt)}>See Iced Drinks</button>
          {showCold && coldDrinks.map(c => <Link to={`/CoffeeDrinks/${c.id}/cold`} key={c.title}> <div>{c.title}</div></Link>)}
      </div>
    </main>
  );
}