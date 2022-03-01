import React,{ useEffect,useState } from "react";
import Recipe from "./Recipe";
import "./App.css";
import logo from './logo.svg';


const App = () => {

  const APP_ID = "f3671a36";
  const APP_KEY = "a8e1ee9ee7e52fdb95868ee44cc37d3b";
  
  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('chicken');


  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`); 
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    if(search != ''){
      setQuery(search);
      setSearch('');
    }else {
      setQuery('chicken');
      setSearch('');
    }
 
  }

    return <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <img src={logo} alt="logo" />
        <div className="search-wrap">
          <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
          <button className="search-button" type="submit">
            Search!
          </button>
        </div>
        <div></div>
      </form>
      <div className="recipes-container">
      {recipes.map(recipes => (
        <Recipe 
        key = {recipes.recipe.label}
        title = {recipes.recipe.label} 
        calories = {recipes.recipe.calories} 
        image = {recipes.recipe.image}
        ingredients = {recipes.recipe.ingredients}
        url = {recipes.recipe.url}
        />
      ))}
      </div>
    </div>
}

export default App;