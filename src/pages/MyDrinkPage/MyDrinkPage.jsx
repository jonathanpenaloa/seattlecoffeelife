import React from 'react';
import DrinkCard from '../../components/DrinkCard/DrinkCard';

export default function MyDrinkPage({addDrinks}) {

    console.log("WHAT?", addDrinks);

    const specialDrinks = addDrinks.map((drink) => <DrinkCard drink={drink} key={drink._id} />);
    return (
        <div>
            <h1>My Recepies List</h1>
            {specialDrinks}
        </div>
    );
}
