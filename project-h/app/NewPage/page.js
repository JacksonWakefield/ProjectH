"use client"

import {useEffect, useState} from 'react';

export default function NewPage(){

    const [ingredientList, setIngredientList] = useState([]);
    const [currentIngredient, setCurrentIngredient] = useState("");

    const getIngredientList = () => {
        return ingredientList;
    };

    const addIngredient = (event) => {
        //prevent reload
        event.preventDefault();

        //change state
        setIngredientList([...getIngredientList(), currentIngredient]);
        setCurrentIngredient("")
    };

    const handleSubmit = (event) => {
        //may remove later - redir to another page
        event.preventDefault();

        console.log("running now");

        //submit POST request for recipe
        fetch("http://localhost:5000/api/data/post",{
            method: 'POST',
            body: JSON.stringify({
                "Ingredient":"hello",
                "Recipe": "world"
            })
        }).then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
    }

    /*useEffect(
        () => {
            fetch("http://localhost:5000/api/data/get")
            .then((response) => response.json())
            .then((data) => {
                console.log("Data:");
                console.log(data);
            })
        }
    )*/

    const buttonStyle = {
        border: '2px solid grey',
        borderRadius: '10px',
        padding: '4px'
    }

    return (
    <div className="pageWrapper">
        <h1>New Recipe:</h1>
        
        <form className="ingredientInput" onSubmit={addIngredient}>
            <label>Ingredient 1:
                <input
                    type="text"
                    onChange={(e) => setCurrentIngredient(e.target.value)}
                    style={{border: "1px solid grey"}}
                ></input>
            </label> <br/>
            <button type="submit" style={buttonStyle}>Add Ingredient</button>
        </form>

        <form className = "recipeSubmit" onSubmit={handleSubmit}>
            <button type="submit" style = {buttonStyle}>Submit Recipe</button>
        </form>
        

        <p>{getIngredientList()}</p>
    </div>
    );
}