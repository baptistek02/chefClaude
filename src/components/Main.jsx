import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"

export default function Main() {

    const [ingredients, setIngredients] = React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
    const [recipeShown, setRecipeShown] = React.useState(false)

    function ShowRecipe() {
        setRecipeShown(prev => !prev)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients( prevIngredients => [...ingredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form" >
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                 />
                <button>Add ingredient</button>       
            </form>
            
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} ShowRecipe={ShowRecipe}/>}

            {console.log(recipeShown)}

            {recipeShown && <ClaudeRecipe/>}
        </main>
    )
}