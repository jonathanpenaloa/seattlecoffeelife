import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router';

export default function CoffeeDrinkDetail({coldDrinks, hotDrinks}) {

    const [drink, setDrink] = useState(null);

    let { drinkId } = useParams();
    drinkId = parseInt(drinkId);

    const { type } = useParams();

    useEffect(function() {
        if(type === 'hot') {
            setDrink(hotDrinks.find(h => h.id === drinkId ))
        } 
        if(type === 'cold') {
            setDrink(coldDrinks.find(c => c.id === drinkId))
        } 
    },[]);

    return (
        <div>
            <h1>{drink && drink.title}</h1>
            <h2>Details:</h2>
            <p>{drink && drink.ingredients}</p>
            <p>{}</p>
            <p>{drink && drink.description}</p>
            {/* <Link>All Drinks</Link> */}
        </div>
    );
}