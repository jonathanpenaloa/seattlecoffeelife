import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewDrinkPage from '../NewDrinkPage/NewDrinkPage';
import CoffeeListPage from '../CoffeeListPage/CoffeeListPage';
import NavBar from '../../components/NavBar/NavBar';
import * as coffeeAPI from '../../utilities/coffee-api';
import CoffeeDrinkDetail from '../../components/CoffeeDrinkDetail/CoffeeDrinkDetail';


export default function App() {
  const [user, setUser] = useState(getUser());
  

  const [hotDrinks, setHotDrinks] = useState([]);
  const [coldDrinks, setColdDrinks] = useState([]);



  useEffect(function() {
    async function getHotDrink() {
      const hot = await coffeeAPI.searchHot();
      setHotDrinks(hot);
    }
    getHotDrink();
  }, [])

  useEffect(function() {
    async function getColdDrink() {
      const cold = await coffeeAPI.searchCold();
      setColdDrinks(cold);
    }
    getColdDrink();
  }, [])

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/NewDrink" element={<NewDrinkPage />} />
            <Route path="/CoffeeDrinks" element={<CoffeeListPage hotDrinks={hotDrinks} coldDrinks={coldDrinks}/>} />
            <Route path="/CoffeeDrinks/:drinkId/:type" element={<CoffeeDrinkDetail hotDrinks={hotDrinks} coldDrinks={coldDrinks}/>} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
