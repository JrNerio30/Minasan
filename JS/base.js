/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    RECIPES NAVIGATION MENU
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
const recipesNavMenus = document.querySelectorAll("nav.recipe-menus a");
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

// Recipe Contents
function  updateElement(element, content) {
  if (element) element.innerHTML = content;
};

// Recipe Time Formatter
function formatTime(minutes) {
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours} hour${hours > 1 ? "s" : ""} ${mins > 0 ? `${mins} minute${mins > 1 ? "s" : ""}` : ""}`;
  }
  return `${minutes} minute${minutes > 1 ? "s" : ""}`;
};

// List of Recipe Ingredients and Steps 
function populateList(parentElement, items, formatter) {
  parentElement.innerHTML = '';
  items.forEach(item => {
    const listItem = document.createElement("li");
    listItem.innerHTML = formatter(item);
    parentElement.appendChild(listItem);
  });
};

let isMetric = true;
/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
      SPAGHETTI CARBONARA
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
function spaghettiCarbonara() {
  const recipe = recipes[0][0];


  spaghettiCarbonaraImg.src = recipe.image;
  spaghettiCarbonaraImg.alt = "Spaghetti Carbonara on black bowl with a tomato on top.";

  updateElement(spaghettiCarbonaraName, recipe.name);
  updateElement(spaghettiCarbonaraLikes, `<i class="fa-solid fa-heart"></i> ${recipe.likes}`);
  updateElement(spaghettiCarbonaraDescription, recipe.description);
  updateElement(spaghettiCarbonaraCuisine, `<span>Cuisine:</span> ${recipe.cuisine}`);
  updateElement(spaghettiCarbonaraDifficulty, `<span>Difficulty:</span> ${recipe.difficulty}`);
  updateElement(spaghettiCarbonaraServings, `<span>Servings:</span> ${recipe.servings}`)

  updateElement(spaghettiCarbonaraPrep, `<span>Prep Time:</span> ${formatTime(recipe.prepTime)}`);
  updateElement(spaghettiCarbonaraCook, `<span>Cook Time:</span> ${formatTime(recipe.cookTime)}`);
  updateElement(spaghettiCarbonaraTotal, `<span>Total:</span> ${formatTime(recipe.totalTime)}`);


  // Recipe Ingredient Units Updater
  function updateIngredients() {
    populateList(spaghettiCarbonaraIngredients, recipe.ingredients, (ingredient) => {
      let amount = ingredient.amount;
      let unit = ingredient.unit;

      // Convert metric to imperial if needed
      if (!isMetric) {
        if (unit === "grams") {
          amount = (amount / 453.592).toFixed(2); // Convert grams to pounds
          unit = "lbs";
        } else if (unit === "ml") {
          amount = (amount / 236.588).toFixed(2); // Convert ml to cups
          unit = "cups";
        }
      }

      return `${amount} ${unit} of ${ingredient.item}`;
    });
  };

  const nutrition = recipe.nutritionalInfo;
  const updateNutrition = () => {
    updateElement(spaghettiCarbonaraCalories, `Calories <span>${nutrition.calories}</span>`);
    updateElement(spaghettiCarbonaraProtein, `Protein <span>${nutrition.protein}</span>`);
    updateElement(spaghettiCarbonaraCarbs, `Carbohydrates <span>${nutrition.carbohydrates}</span>`);
    updateElement(spaghettiCarbonaraFat, `Fat <span>${nutrition.fat}</span>`);
  };

  updateIngredients();

  updateElement(spaghettiCarbonaraCalories, `Calories <span>${nutrition.calories}</span>`);
  updateElement(spaghettiCarbonaraProtein, `Protein <span>${nutrition.protein}</span>`);
  updateElement(spaghettiCarbonaraCarbs, `Carbohydrates <span>${nutrition.carbohydrates}</span>`);
  updateElement(spaghettiCarbonaraFat, `Fat <span>${nutrition.fat}</span>`);

  populateList(spaghettiCarbonaraInstructions, recipe.instructions, (instruction) => 
    `<span>Step ${instruction.step}:</span> ${instruction.text}.`
  );

  updateElement(spaghettiCarbonaraTags, `<span>Tags:</span> ${recipe.tags.join(', ')}`);

  // Added event listener to double servings and update ingredients
  spaghettiCarbonaraDouble.addEventListener("click", () => {
    recipe.servings *= 2;
    recipe.ingredients.forEach((ingredient) => {
      ingredient.amount *= 2;
    });

    recipe.nutritionalInfo.calories *= 2;
    recipe.nutritionalInfo.protein *= 2;
    recipe.nutritionalInfo.carbohydrates *= 2;
    recipe.nutritionalInfo.fat *= 2;

    updateElement(spaghettiCarbonaraServings, `<span>Servings:</span> ${recipe.servings}`);
    updateIngredients();
    updateNutrition();
  });

  // Added event listener to toggle between metric and imperial units
  spaghettiCarbonaraUnits.addEventListener("click", () => {
    isMetric = !isMetric;
    updateIngredients();
  });
}

spaghettiCarbonara();


/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  ITALIAN SAUSAGE SPAGHETTI SQUASH
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
function iSSS() {
  const recipe = recipes[0][1];

  iSSSImg.src = recipe.image;
  iSSSImg.alt = "Italian Sausage Spaghetti Squash on a black bowl.";

  updateElement(iSSSName, recipe.name);
  updateElement(iSSSLikes, `<i class="fa-solid fa-heart"></i> ${recipe.likes}`);
  updateElement(iSSSDescription, recipe.description);
  updateElement(iSSSCuisine, `<span>Cuisine:</span> ${recipe.cuisine}`);
  updateElement(iSSSDifficulty, `<span>Difficulty:</span> ${recipe.difficulty}`);
  updateElement(iSSSServings, `<span>Servings:</span> ${recipe.servings}`);

  updateElement(iSSSPrep, `<span>Prep Time:</span> ${formatTime(recipe.prepTime)}`);
  updateElement(iSSSCook, `<span>Cook Time:</span> ${formatTime(recipe.cookTime)}`);
  updateElement(iSSSTotal, `<span>Total:</span> ${formatTime(recipe.totalTime)}`);

  // Recipe Ingredient Units Updater
  function updateIngredients() {
    populateList(iSSSIngredients, recipe.ingredients, (ingredient) => {
      let amount = ingredient.amount;
      let unit = ingredient.unit;

      // Convert metric to imperial if needed
      if (!isMetric) {
        if (unit === "grams") {
          amount = (amount / 453.592).toFixed(2); // Convert grams to pounds
          unit = "lbs";
        } else if (unit === "ml") {
          amount = (amount / 236.588).toFixed(2); // Convert ml to cups
          unit = "cups";
        }
      }

      return `${amount} ${unit} of ${ingredient.item}`;
    });
  };

  updateIngredients();

  const nutrition = recipe.nutritionalInfo;
  const updateNutrition = () => {
    
    updateElement(iSSSCalories, `Calories <span>${nutrition.calories}</span>`);
    updateElement(iSSSProtein, `Protein <span>${nutrition.protein}</span>`);
    updateElement(iSSSCarbs, `Carbohydrates <span>${nutrition.carbohydrates}</span>`);
    updateElement(iSSSFat, `Fat <span>${nutrition.fat}</span>`);
  };

  populateList(iSSSInstructions, recipe.instructions, (instruction) => 
    `<span>Step ${instruction.step}:</span> ${instruction.text}.`
  );

  updateElement(iSSSCalories, `Calories <span>${nutrition.calories}</span>`);
  updateElement(iSSSProtein, `Protein <span>${nutrition.protein}</span>`);
  updateElement(iSSSCarbs, `Carbohydrates <span>${nutrition.carbohydrates}</span>`);
  updateElement(iSSSFat, `Fat <span>${nutrition.fat}</span>`);

  updateElement(iSSSTags, `<span>Tags:</span> ${recipe.tags.join(', ')}`);

  // Added event listener to double servings and update ingredients
  iSSSDouble.addEventListener("click", () => {
    recipe.servings *= 2;
    recipe.ingredients.forEach((ingredient) => {
      ingredient.amount *= 2;
    });

    recipe.nutritionalInfo.calories *= 2;
    recipe.nutritionalInfo.protein *= 2;
    recipe.nutritionalInfo.carbohydrates *= 2;
    recipe.nutritionalInfo.fat *= 2;

    updateElement(iSSSServings, `<span>Servings:</span> ${recipe.servings} `);
    updateIngredients();
    updateNutrition();
  });

  // Added event listener to toggle between metric and imperial units
  iSSSUnits.addEventListener("click", () => {
    isMetric = !isMetric;
    updateIngredients();
  });
}

iSSS();

/* 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
      VEGAN MUSHROOM RAGOUT
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/
function veganMushroomRagout() {
  const recipe = recipes[0][2];

  veganMushroomRagoutImg.src = recipe.image;
  veganMushroomRagoutImg.alt = "Vegan Mushroom Ragu on red bowl that is surrounded with different ingredients.";

  updateElement(veganMushroomRagoutName, recipe.name);
  updateElement(veganMushroomRagoutLikes, `<i class="fa-solid fa-heart"></i> ${recipe.likes}`);
  updateElement(veganMushroomRagoutDescription, recipe.description);
  updateElement(veganMushroomRagoutCuisine, `<span>Cuisine:</span> ${recipe.cuisine}`);
  updateElement(veganMushroomRagoutDifficulty, `<span>Difficulty:</span> ${recipe.difficulty}`);
  updateElement(veganMushroomRagoutServings, `<span>Servings:</span> ${recipe.servings}`)

  updateElement(veganMushroomRagoutPrep, `<span>Prep Time:</span> ${formatTime(recipe.prepTime)}`);
  updateElement(veganMushroomRagoutCook, `<span>Cook Time:</span> ${formatTime(recipe.cookTime)}`);
  updateElement(veganMushroomRagoutTotal, `<span>Total:</span> ${formatTime(recipe.totalTime)}`);

  // Recipe Ingredient Units Updater
  function updateIngredients() {
    populateList(veganMushroomRagoutIngredients, recipe.ingredients, (ingredient) => {
      let amount = ingredient.amount;
      let unit = ingredient.unit;

      // Convert metric to imperial if needed
      if (!isMetric) {
        if (unit === "grams") {
          amount = (amount / 453.592).toFixed(2); // Convert grams to pounds
          unit = "lbs";
        } else if (unit === "ml") {
          amount = (amount / 236.588).toFixed(2); // Convert ml to cups
          unit = "cups";
        }
      }

      return `${amount} ${unit} of ${ingredient.item}`;
    });
  };

  updateIngredients();

  const nutrition = recipe.nutritionalInfo;
  const updateNutrition = () => {
  
    updateElement(veganMushroomRagoutCalories, `Calories <span>${nutrition.calories}</span>`);
    updateElement(veganMushroomRagoutProtein, `Protein <span>${nutrition.protein}</span>`);
    updateElement(veganMushroomRagoutCarbs, `Carbohydrates <span>${nutrition.carbohydrates}</span>`);
    updateElement(veganMushroomRagoutFat, `Fat <span>${nutrition.fat}</span>`);
  };

  populateList(veganMushroomRagoutInstructions, recipe.instructions, (instruction) => 
    `<span>Step ${instruction.step}:</span> ${instruction.text}.`
  );

  updateElement(veganMushroomRagoutCalories, `Calories <span>${nutrition.calories}</span>`);
  updateElement(veganMushroomRagoutProtein, `Protein <span>${nutrition.protein}</span>`);
  updateElement(veganMushroomRagoutCarbs, `Carbohydrates <span>${nutrition.carbohydrates}</span>`);
  updateElement(veganMushroomRagoutFat, `Fat <span>${nutrition.fat}</span>`);

  updateElement(veganMushroomRagoutTags, `<span>Tags:</span> ${recipe.tags.join(', ')}`);

  // Added event listener to double servings and update ingredients
  veganMushroomRagoutDouble.addEventListener("click", () => {
    recipe.servings *= 2;
    recipe.ingredients.forEach((ingredient) => {
      ingredient.amount *= 2;
    });

    recipe.nutritionalInfo.calories *= 2;
    recipe.nutritionalInfo.protein *= 2;
    recipe.nutritionalInfo.carbohydrates *= 2;
    recipe.nutritionalInfo.fat *= 2;

    updateElement(veganMushroomRagoutServings, `<span>Servings:</span> ${recipe.servings} `);
    updateIngredients();
    updateNutrition();
  });

  // Added event listener to toggle between metric and imperial units
  veganMushroomRagoutUnits.addEventListener("click", () => {
    isMetric = !isMetric;
    updateIngredients();
  });
}

veganMushroomRagout();

