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
import MyDrinkPage from '../MyDrinkPage/MyDrinkPage';



export default function App() {
  const [user, setUser] = useState(getUser());
  
  //hits api for the results of hot and cold drinks
  const [hotDrinks, setHotDrinks] = useState([]);
  const [coldDrinks, setColdDrinks] = useState([]);

  //making a list of drinks 
  const [addDrinks, setAddDrinks] = useState([]);

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

  console.log("Creat Func",addDrinks);



  async function addDrink(post) {
    const newItem = await coffeeAPI.create(post);
    setAddDrinks(newItem);
    console.log("What is in here?", newItem);
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
            <Route path="/MyDrink" element={<MyDrinkPage addDrinks={addDrinks}/>} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
