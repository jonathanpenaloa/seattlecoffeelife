import React, { useState } from 'react';
import { coffee } from '../../utilities/coffee-api';
// import { checkToken } from '../../utilities/users-service';


export default function CoffeeListPage({coffee, resultsHot, resultsCold}) {
  
  const [hotDrink, setHotDrink] = useState([]);
  const [coldDrink, setColdDrink] = useState([]);

  async function getHotDrink(evt) {
    evt.preventDefault();
    // setHotDrink(resultsHot);
    // console.log(setHotDrink);
    // resultsHot.map(h => <div> {h.title}</div> 
    const hot = await coffee.searchHot(hotDrink);
    setHotDrink(hot);
  }


  async function getColdDrink(evt) {
    evt.preventDefault();
    const cold = await coffee.searchCold(coldDrink);
    setColdDrink(cold);
  }

  return (
    <>
    {/* <CoffeeDrinkDetail /> */}
      <h1>Coffee Drinks</h1>

      <form onClick={getHotDrink}>
        <button type="submit" value={resultsHot}>Hot Drinks</button>
      </form>
      <form onClick={getColdDrink}>
       <button type="submit" value={resultsCold}>Cold Drinks</button>
      </form>

    </>
  );
}