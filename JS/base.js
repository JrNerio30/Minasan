/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    RECIPES NAVIGATION MENU
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
const recipesNavMenus = document.querySelectorAll("div.recipe-menus a");
const recipeNav = [recipesMenu, recipeLinks];

recipeNav.forEach((hoverables) => {
  hoverables.addEventListener("mouseover", () => {
    recipeLinks.classList.add("active");
  
    recipesNavMenus.forEach((links) => {
      links.classList.add("active");
    });
  });
})

recipeNav.forEach((hoverables) => {
  hoverables.addEventListener("mouseout", () => {
    recipeLinks.classList.remove("active");
  
    recipesNavMenus.forEach((links) => {
      links.classList.remove("active");
    });
  });
})

/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
      SPAGHETTI CARBONARA
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
function spaghettiCarbonara() {
  const recipe = recipes[0][0];

  const updateElement = (element, content) => {
    if (element) element.innerHTML = content;
  };

  spaghettiCarbonaraImg.src = recipe.image;
  spaghettiCarbonaraImg.alt = "Spaghetti Carbonara on black bowl with a tomato on top.";

  updateElement(spaghettiCarbonaraName, recipe.name);
  updateElement(spaghettiCarbonaraLikes, `<i class="fa-solid fa-heart"></i> ${recipe.likes}`);
  updateElement(spaghettiCarbonaraDescription, recipe.description);
  updateElement(spaghettiCarbonaraCuisine, `<span>Cuisine:</span> ${recipe.cuisine}`);
  updateElement(spaghettiCarbonaraDifficulty, `<span>Difficulty:</span> ${recipe.difficulty}`);
  updateElement(spaghettiCarbonaraServings, `<span>Servings:</span> ${recipe.servings}`)
  updateElement(spaghettiCarbonaraPrep, `<span>Prep Time:</span> ${recipe.prepTime} minutes`);
  updateElement(spaghettiCarbonaraCook, `<span>Cook Time:</span> ${recipe.cookTime} minutes`);
  updateElement(spaghettiCarbonaraTotal, `<span>Total:</span> ${recipe.totalTime} minutes`);

  const populateList = (parentElement, items, formatter) => {
    parentElement.innerHTML = '';
    items.forEach(item => {
      const listItem = document.createElement("li");
      listItem.innerHTML = formatter(item);
      parentElement.appendChild(listItem);
    });
  };

  populateList(spaghettiCarbonaraIngredients, recipe.ingredients, (ingredient) => 
    `${ingredient.amount} ${ingredient.unit} of ${ingredient.item}`
  );

  populateList(spaghettiCarbonaraInstructions, recipe.instructions, (instruction) => 
    `<span>Step ${instruction.step}:</span> ${instruction.text}.`
  );

  const nutrition = recipe.nutritionalInfo;
  updateElement(spaghettiCarbonaraCalories, `Calories <span>${nutrition.calories}</span>`);
  updateElement(spaghettiCarbonaraProtein, `Protein <span>${nutrition.protein}</span>`);
  updateElement(spaghettiCarbonaraCarbs, `Carbohydrates <span>${nutrition.carbohydrates}</span>`);
  updateElement(spaghettiCarbonaraFat, `Fat <span>${nutrition.fat}</span>`);

  updateElement(spaghettiCarbonaraTags, `<span>Tags:</span> ${recipe.tags.join(', ')}`);
}

spaghettiCarbonara();


/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  ITALIAN SAUSAGE SPAGHETTI SQUASH
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
function iSSS() {
  const recipe = recipes[0][1];

  const updateElement = (element, content) => {
    if (element) element.innerHTML = content;
  };

iSSSImg.src = recipe.image;
iSSSImg.alt = "Spaghetti Carbonara on black bowl with a tomato on top.";

  updateElement(iSSSName, recipe.name);
  updateElement(iSSSLikes, `<i class="fa-solid fa-heart"></i> ${recipe.likes}`);
  updateElement(iSSSDescription, recipe.description);
  updateElement(iSSSCuisine, `<span>Cuisine:</span> ${recipe.cuisine}`);
  updateElement(iSSSDifficulty, `<span>Difficulty:</span> ${recipe.difficulty}`);
  updateElement(iSSSServings, `<span>Servings:</span> ${recipe.servings}`)
  updateElement(iSSSPrep, `<span>Prep Time:</span> ${recipe.prepTime} minutes`);
  updateElement(iSSSCook, `<span>Cook Time:</span> ${recipe.cookTime} minutes`);
  updateElement(iSSSTotal, `<span>Total:</span> ${recipe.totalTime} minutes`);

  const populateList = (parentElement, items, formatter) => {
    parentElement.innerHTML = '';
    items.forEach(item => {
      const listItem = document.createElement("li");
      listItem.innerHTML = formatter(item);
      parentElement.appendChild(listItem);
    });
  };

  populateList(iSSSIngredients, recipe.ingredients, (ingredient) => 
    `${ingredient.amount} ${ingredient.unit} of ${ingredient.item}`
  );

  populateList(iSSSInstructions, recipe.instructions, (instruction) => 
    `<span>Step ${instruction.step}:</span> ${instruction.text}.`
  );

  const nutrition = recipe.nutritionalInfo;
  updateElement(iSSSCalories, `Calories <span>${nutrition.calories}</span>`);
  updateElement(iSSSProtein, `Protein <span>${nutrition.protein}</span>`);
  updateElement(iSSSCarbs, `Carbohydrates <span>${nutrition.carbohydrates}</span>`);
  updateElement(iSSSFat, `Fat <span>${nutrition.fat}</span>`);

  updateElement(iSSSTags, `<span>Tags:</span> ${recipe.tags.join(', ')}`);
}

iSSS();

/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
      VEGAN MUSHROOM RAGOUT
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
function veganMushroomRagout() {
  const recipe = recipes[0][2];

  const updateElement = (element, content) => {
    if (element) element.innerHTML = content;
  };

  veganMushroomRagoutImg.src = recipe.image;
  veganMushroomRagoutImg.alt = "Spaghetti Carbonara on black bowl with a tomato on top.";

  updateElement(veganMushroomRagoutName, recipe.name);
  updateElement(veganMushroomRagoutLikes, `<i class="fa-solid fa-heart"></i> ${recipe.likes}`);
  updateElement(veganMushroomRagoutDescription, recipe.description);
  updateElement(veganMushroomRagoutCuisine, `<span>Cuisine:</span> ${recipe.cuisine}`);
  updateElement(veganMushroomRagoutDifficulty, `<span>Difficulty:</span> ${recipe.difficulty}`);
  updateElement(veganMushroomRagoutServings, `<span>Servings:</span> ${recipe.servings}`)
  updateElement(veganMushroomRagoutPrep, `<span>Prep Time:</span> ${recipe.prepTime} minutes`);
  updateElement(veganMushroomRagoutCook, `<span>Cook Time:</span> ${recipe.cookTime} minutes`);
  updateElement(veganMushroomRagoutTotal, `<span>Total:</span> ${recipe.totalTime} minutes`);

  const populateList = (parentElement, items, formatter) => {
    parentElement.innerHTML = '';
    items.forEach(item => {
      const listItem = document.createElement("li");
      listItem.innerHTML = formatter(item);
      parentElement.appendChild(listItem);
    });
  };

  populateList(veganMushroomRagoutIngredients, recipe.ingredients, (ingredient) => 
    `${ingredient.amount} ${ingredient.unit} of ${ingredient.item}`
  );

  populateList(veganMushroomRagoutInstructions, recipe.instructions, (instruction) => 
    `<span>Step ${instruction.step}:</span> ${instruction.text}.`
  );

  const nutrition = recipe.nutritionalInfo;
  updateElement(veganMushroomRagoutCalories, `Calories <span>${nutrition.calories}</span>`);
  updateElement(veganMushroomRagoutProtein, `Protein <span>${nutrition.protein}</span>`);
  updateElement(veganMushroomRagoutCarbs, `Carbohydrates <span>${nutrition.carbohydrates}</span>`);
  updateElement(veganMushroomRagoutFat, `Fat <span>${nutrition.fat}</span>`);

  updateElement(veganMushroomRagoutTags, `<span>Tags:</span> ${recipe.tags.join(', ')}`);
}

veganMushroomRagout();

