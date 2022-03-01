import React, {} from 'react';

const Recipe = ({key,title,calories,image,ingredients,url}) => {

    const getMoreRecipeData = () => {
        
    }

    return(
        <div className="recipe">
            <div className="recipe-header">
            <div></div>
            <h1>{title}</h1>
            <a href={url} className="more-btn" target="_blank"></a>
            </div>
            <div className="recipe-container">
            <div className="recipe-fs">
            <ul>
                <h2 className="ingredients">Ingredients:</h2>
                {ingredients.map(ingredient => (
                    <li className="recipe-list-item">{ingredient.text}</li>
                ))}
            </ul>
            </div>
           

            <div className="recipe-img-c">
            <img src={image} alt="recipe" className="recipe-img"/>
            <p>{parseInt(calories)} calories. {ingredients.length} ingredients.</p>
            </div>
            </div>
        </div>
    );
}

export default Recipe;