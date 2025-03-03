import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import {getRecipeFromMistral} from "/src/ai.js"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")

    async function ShowRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
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
            {recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>
    )
}