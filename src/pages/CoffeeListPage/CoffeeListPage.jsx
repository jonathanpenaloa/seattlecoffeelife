import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
          <button type="submit"
          onClick={(evt) => handleShowHot(evt)}>Hot Coffee Drinks</button>
          {showHot && hotDrinks.map(h => 
          <Link to={`/CoffeeDrinks/${h.id}/hot`} 
          key={h.title}> 
          <div className="drink-card">
              <p>{h.title}</p>
          </div>
          </Link>)}
      </div>
      <div className="float-child">
          <button type="submit" 
          onClick={(evt) => handleShowCold(evt)}>Iced Drinks</button>
          {showCold && coldDrinks.map(c => 
          <Link to={`/CoffeeDrinks/${c.id}/cold`} 
          key={c.title}> 
          <div className="drink-card">
          <p>{c.title}</p>
          </div>
          </Link>)}
      </div>
    </main>
  );
}