import React from 'react';
import DrinkCard from '../../components/DrinkCard/DrinkCard';

export default function MyDrinkPage({addDrinks}) {

    console.log("WHAT?", {addDrinks});

    const specialDrink = addDrinks.map((drink, i) => <DrinkCard drink={drink} key={i} />);
    console.log("Special", specialDrink);
    return (
        <div>
            <h1>My Recepies List</h1>
            {specialDrink}
        </div>
    );
}
