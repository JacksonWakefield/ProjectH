"use client"

import {useState} from 'react';

export default function NewPage(){

    //const [test, setTest] = useState('');

    const [ingredientList, setIngredientList] = useState([]);
    const [currentIngredient, setCurrentIngredient] = useState("");

    const getIngredientList = () => {
        return ingredientList;
    };

    const handleSubmit = (event) => {
        //prevent reload
        event.preventDefault();

        //change state
        setIngredientList([...getIngredientList(), currentIngredient]);
        setCurrentIngredient("")
    };

    const buttonStyle = {
        border: '2px solid grey',
        borderRadius: '10px',
        padding: '4px'
    }

    return (
    <div className="pageWrapper">
        <h1>New Recipe:</h1>
        
        <form className="ingredientInput" onSubmit={handleSubmit}>
            <label>Ingredient 1:
                <input
                    type="text"
                    onChange={(e) => setCurrentIngredient(e.target.value)}
                    style={{border: "1px solid grey"}}
                ></input>
            </label> <br/>
            <button type="submit" style={buttonStyle}>Add Ingredient</button>
        </form>

        <p>{getIngredientList()}</p>
    </div>
    );
}