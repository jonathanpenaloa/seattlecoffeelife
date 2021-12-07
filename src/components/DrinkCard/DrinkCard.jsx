import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react';

export default function DrinkCard({drink}) {    
    const { id } = useParams();

    return (
        <div>
        {drink.name}
        </div>
    ); 
}