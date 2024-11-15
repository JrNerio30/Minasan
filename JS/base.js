function spaghettiCarbonara() {
  const spaghettiCarbonaraRecipe = recipes[0][0];
  spaghettiCarbonaraImg.src = spaghettiCarbonaraRecipe.image;
  spaghettiCarbonaraImg.alt = "Spaghetti Carbonara on black bowl with a tomato on top.";

  spaghettiCarbonaraName.innerHTML = spaghettiCarbonaraRecipe.name;
  spaghettiCarbonaraDescription.innerHTML = spaghettiCarbonaraRecipe.description;
  spaghettiCarbonaraDifficulty.innerHTML = `<span>Difficulty:</span> ${spaghettiCarbonaraRecipe.difficulty}`
  spaghettiCarbonaraCuisine.innerHTML = `<span>Cuisine:</span> ${spaghettiCarbonaraRecipe.cuisine}`

  spaghettiCarbonaraPrep.innerHTML = `<span>Prep Time:</span> ${spaghettiCarbonaraRecipe.prepTime} minutes`
  spaghettiCarbonaraCook.innerHTML = `<span>Cook Time:</span> ${spaghettiCarbonaraRecipe.cookTime} minutes`
  spaghettiCarbonaraTotal.innerHTML = `<span>Total:</span> ${spaghettiCarbonaraRecipe.totalTime} minutes`

  for(i = 0; i < spaghettiCarbonaraRecipe.ingredients.length; i++) {
    const listIngredients = document.createElement("li");
    const recipeData = spaghettiCarbonaraRecipe.ingredients[i];
    listIngredients.innerHTML = `${recipeData.amount} ${recipeData.unit} of ${recipeData.item}`;
    recipeIngredients.appendChild(listIngredients);
  }

  for(i = 0; i < spaghettiCarbonaraRecipe.instructions.length; i++) {
    const listIngredients = document.createElement("li");
    const recipeData = spaghettiCarbonaraRecipe.instructions[i];
    listIngredients.innerHTML = `<span>Step ${recipeData.step}:</span> ${recipeData.text}.`;
    recipeInstructions.appendChild(listIngredients);
  }

  const nutritionFacts = spaghettiCarbonaraRecipe.nutritionalInfo;

  spaghettiCarbonaraCalories.innerHTML = `Calories <span>${nutritionFacts.calories}</span>`
  spaghettiCarbonaraProtein.innerHTML = `Protein <span>${nutritionFacts.protein}</span>`
  spaghettiCarbonaraCarbs.innerHTML = `Carbohydrates <span>${nutritionFacts.carbohydrates}</span>`
  spaghettiCarbonaraFat.innerHTML = `Fat <span>${nutritionFacts.fat}</span>`

}
spaghettiCarbonara()

