import React from 'react';
import DrinkCard from '../../components/DrinkCard/DrinkCard';

export default function MyDrinkPage({addDrinks, deleteDrink }) {

    const specialDrinks = addDrinks.map((drink) => 
    <DrinkCard deleteDrink={deleteDrink} drink={drink} key={drink._id} />);
    
    return (
        <div>
            <h1>My Drink Recipe</h1>
            {specialDrinks}
        </div>
    );
}
