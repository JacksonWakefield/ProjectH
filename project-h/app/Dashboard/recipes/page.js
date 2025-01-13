import RecipeViewer from "@/components/page/dashboard/recipes/RecipeViewer";
import "./page.css";

    /*var retData = "hi";
    fetch("http://localhost:5000/api/data/get")
        .then((response) => response.json())
        .then((data) => {
            console.log("Data:");
            console.log(data);
            retData = data;
        });
    
    return retData;*/

async function fetchAllRecipes() {
    const res = await fetch('http://localhost:5000/api/data/get', {
        cache: 'no-store', // Ensures fresh data
    });
    
    if (!res.ok) {
        throw new Error('Failed to fetch recipes');
    }
    
    return res.json();
}

export default async function recipes(ctx){  

    const allRecipes = await fetchAllRecipes();

    return (
        <div className="recipe-wrapper">

            <RecipeViewer recipes={allRecipes}></RecipeViewer>

        </div>
    )
}