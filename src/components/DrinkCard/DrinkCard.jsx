import React from 'react';
import { useParams } from 'react-router';
// import { Link } from 'react';
import './DrinkCard.css';

export default function DrinkCard({drink}) {
     
    // const [editDrink, seteditDrink] = useState({});


    return (
        <div className="Card">
        <h1>{drink.name}</h1>
        <hr />
        <h2>The Ingredients: <br/>{drink.Ingredients}</h2>
        <h3>{drink.description}</h3>
        </div>
    ); 
}