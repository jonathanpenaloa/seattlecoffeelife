import React from 'react';
import { useState } from 'react';
export default function NewDrinkPage({ addDrink }) {

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    Ingredients: ''
  });

function handleChange(evt) {
  const newFormData = {...formData, [evt.target.name]:evt.target.value};
  setFormData(newFormData);
}

function handleSubmmit(evt) {
  evt.preventDefault();
  addDrink(formData);
  setFormData({ name: "", description: "", Ingredients: ""});
}

  return (
    <div>
    <h1>NewDrinkPage</h1>
    <form action="submit">

      <label>Name</label>
        <input 
        value={formData.name}
        onChange={handleChange}  
        type="text"
        name="name"/>
      <br/>
      <label>Description</label>
        <input 
        value={formData.description}
        onChange={handleChange} 
        type="text"
        name="description"/>
      <br/>
      <label>Ingredients</label>
        <input 
        value={formData.Ingredients}
        onChange={handleChange} 
        type="text"
        name="Ingredients"/>
      <br/>
      <button 
      type="submit" 
      onClick={handleSubmmit}>Save your drink</button>
    </form>
    </div>
  );
}