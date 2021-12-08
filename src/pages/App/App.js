import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewDrinkPage from '../NewDrinkPage/NewDrinkPage';
import CoffeeListPage from '../CoffeeListPage/CoffeeListPage';
import * as coffeeAPI from '../../utilities/coffee-api';
import CoffeeDrinkDetail from '../../components/CoffeeDrinkDetail/CoffeeDrinkDetail';
import MyDrinkPage from '../MyDrinkPage/MyDrinkPage';
import NavBar from '../../components/NavBar/NavBar';




export default function App() {
  const [user, setUser] = useState(getUser());
  
  //hits api for the results of hot and cold drinks
  const [hotDrinks, setHotDrinks] = useState([]);
  const [coldDrinks, setColdDrinks] = useState([]);

  //making a list of drinks 
  const [addDrinks, setAddDrinks] = useState([]);

  const navigate = useNavigate();

  useEffect(function() {
    async function getHotDrink() {
      const hot = await coffeeAPI.searchHot();
      setHotDrinks(hot);
    }
    getHotDrink();
    async function getColdDrink() {
      const cold = await coffeeAPI.searchCold();
      setColdDrinks(cold);
    }
    getColdDrink();

    async function getMyDrinks() {
      const myDrinks = await coffeeAPI.getAll();
      console.log("HEllo",myDrinks);
      setAddDrinks(myDrinks);
    }
    getMyDrinks();
  }, [])

  async function addDrink(newDrink) {
    const newItem = await coffeeAPI.create(newDrink);
    setAddDrinks([newItem, ...addDrinks]);
    navigate('/MyDrinks');
  } 

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/NewDrink" element={<NewDrinkPage addDrink={addDrink}/>} />
            <Route path="/CoffeeDrinks" element={<CoffeeListPage hotDrinks={hotDrinks} coldDrinks={coldDrinks}/>} />
            <Route path="/CoffeeDrinks/:drinkId/:type" element={<CoffeeDrinkDetail hotDrinks={hotDrinks} coldDrinks={coldDrinks}/>} />
            <Route path="/MyDrinks" element={<MyDrinkPage addDrinks={addDrinks}/>} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
