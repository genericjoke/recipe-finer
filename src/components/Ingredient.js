import React from "react";
import { useState } from "react";

function Ingredient() {
    const [ingredient, updateIngredient] = useState("");

    function handleIngredient(input) {
        updateIngredient(input.target.value);
    }

    
    function handleIngredient(input) {
        updateIngredient(input.target.value);
    }


    return (
        <React.Fragment>
            <label>
                Ingredient
                <input
                    name="ingredient"
                    type="text"
                    onChange={handleIngredient}
                    value={ingredient} />
            </label>
            <br/>
        </React.Fragment>
    )
}
export default Ingredient;