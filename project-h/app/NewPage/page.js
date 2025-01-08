"use client"

import {useEffect, useState} from 'react';

export default function NewPage(){

    const [ingredientList, setIngredientList] = useState([]);

    const [currentIngredient, setCurrentIngredient] = useState("");
    const [currentRecipe, setCurrentRecipe] = useState("");

    const [allRecipes, setAllRecipes] = useState([]);
   

    const getIngredientList = () => {
        return ingredientList;
    };

    const getCurrentIngredient = () => {
        return currentIngredient;
    }

    const getCurrentRecipe = () => {
        return currentRecipe;
    }

    const handleGetAllRecipes = (event) => {
        //prevent reload
        event.preventDefault();

        //GET all data
        fetch("http://localhost:5000/api/data/get")
            .then((response) => response.json())
            .then((data) => {

                setAllRecipes(serializeData(data));
                console.log("Data:");
                console.log(data);
            })
    }

    const serializeData = (data) => {

        return data;
    }

    //Add single ingredient to client-side list
    const addIngredient = (event) => {
        //prevent reload
        event.preventDefault();

        //change state
        const currentIngredient_format = {Ingredient: getCurrentIngredient(), Recipe: getCurrentRecipe()};

        setIngredientList([...getIngredientList(), currentIngredient_format]);
        console.log("Added: " + getCurrentIngredient() + " to recipe");
        setCurrentIngredient("")
    };

    const handleSubmit = (event) => {
        //may remove later - redir to another page
        event.preventDefault();

        console.log("running now");

        //submit POST request for recipe
        fetch("http://localhost:5000/api/data/post",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(getIngredientList()),
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
        
        
        <form className="ingredientInput" onSubmit={addIngredient}>
            <label>New Recipe:
                <input
                    type="text"
                    onChange={(e) => setCurrentRecipe(e.target.value)}
                    style={{border: "1px solid grey"}}
                ></input>
            </label> <br/>

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

        <form className = "getRecipe" onSubmit={handleGetAllRecipes}>
            <button type="submit" style = {buttonStyle}>Regenerate Recipes</button>
        </form>
        <br/>
        <h1>Current Recipes</h1>
        {
            allRecipes.map((recipe, index) => {
                return (
                    <div key={String(index)}>
                        <h3>{recipe[1]}:</h3>
                        <p>{recipe[0]}</p>
                    </div>
                );
            })
        }
        
    </div>
    );
}