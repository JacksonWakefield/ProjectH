import "./RecipeViewer.css";

export default function RecipeViewer({ recipes }) {
    if (!Array.isArray(recipes) || recipes.length === 0) {
      return <p>No recipes available</p>; // Fallback for invalid or empty data
    }
  
    return (
      <div className="recipe-viewer-wrapper">
        <div className="recipe-viewer-background-card">
          <br />
          <p className="recipe-viewer-header">Recipes</p>
  
          {recipes.map((recipe, index) => (
            <div key={index} className="recipe-listing-wrapper">
              <p id={`recipe-${index}`} className="recipe-listing">{recipe[0]}</p>
              <div className="recipe-listing-seperator"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }