import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);
export default function GlobalState({children}){
    const [searchParam, setSearchParam] = useState('');
    const [recipeList, setRecipeList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [recipeDetails, setRecipeDetails] = useState(null);
    const [favoriteList, setFavoriteList] = useState([]);

    function handleAddToFav(getCurrentItem){
        const cpyIems = [...favoriteList];
        const idx = cpyIems.findIndex(item => item.recipe_id === getCurrentItem.recipe_id)
        if(idx === -1){
            cpyIems.push(getCurrentItem);
            setFavoriteList(cpyIems);
            console.log(favoriteList);
        }else{
            cpyIems.splice(idx);
            setFavoriteList(cpyIems);
        }
    }

    const navigate =  useNavigate()

    async function handleSubmit(event) {
        event.preventDefault();
        try{
            setLoading(true);
            const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchParam}`);
            const data = await response.json();
            setLoading(false);
            setRecipeList(data?.recipes);
            setSearchParam('');
            navigate('/');
        }catch(e){
            setLoading(false);
            setSearchParam('');
            console.log(e);
        }
    }
    return (<GlobalContext.Provider value={{searchParam, setSearchParam, handleSubmit, loading, recipeList, recipeDetails, setRecipeDetails, favoriteList, handleAddToFav}}>{children}</GlobalContext.Provider>);
}