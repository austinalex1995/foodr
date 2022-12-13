import React, { useState, useEffect } from "react";
import './Recipes.css';
import axios from './axios';

function Recipes() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('foodr/swiperight');
            setRecipes(req.data);
        }
        fetchData();
    }, []);

    return (
        <div className="recipes_container">

        </div>
    );
}

export default Recipes;