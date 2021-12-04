import React, { useEffect, useState } from 'react';
import * as coffeeAPI from '../../utilities/coffee-api';
// import { checkToken } from '../../utilities/users-service';
// import CoffeeDrinkDetail from '../../components/CoffeeDrinkDetail/CoffeeDrinkDetail';


export default function CoffeeListPage() {
  
  const [hotDrink, setHotDrink] = useState([]);
  const [coldDrink, setColdDrink] = useState([]);

  // async function getHotDrink(evt) {
  //   console.log(resultsHot);
  //   evt.preventDefault();
  //   // setHotDrink(resultsHot);
  //   // console.log(setHotDrink);
  //   // resultsHot.map(h => <div> {h.title}</div> 
  //   const hot = await coffeeAPI.searchHot(resultsHot);
  //   console.log(hot);
  //   setHotDrink(hot);
  // }

  // useEffect(function() {
    async function getHotDrink(evt) {
      evt.preventDefault();
      const hot = await coffeeAPI.searchHot();
      setHotDrink(hot);
    }
    // getHotDrink();
  // }, []);


  async function getColdDrink(evt) {
    evt.preventDefault();
    const cold = await coffeeAPI.searchCold();
    setColdDrink(cold);
  }

  return (
    <>
    {/* <CoffeeDrinkDetail /> */}
      <h1>Coffee Drinks</h1>

      <form >
        <button onClick={(evt) => getHotDrink(evt)}>Hot Drinks</button>
      </form>

      <form onClick={getColdDrink}>
       <button onClick={(evt) => getColdDrink(evt)}>Cold Drinks</button>
      </form>

    </>
  );
}