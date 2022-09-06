const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');
const getRecipes = document.querySelector('.recipe-btn')

//event listeners
searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
});
// getRecipes.addEventListener('click', () => {
//     mealDetailsContent.parentElement.classList.remove('showRecipe');
// });


// getRecipes.addEventListener('click', showRecipe);


// get meal list that matches with the ingredients
function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `
                <div class="meal-item" data-id = "${meal.idMeal}">
                <div class="meal-img">
                  <img src="${meal.strMealThumb}" alt="food" />
                </div>
                <div class="meal-name">
                  <h3>${meal.strMeal}</h3>
                  <a href="/" onClick={'Hello'} class="recipe-btn">Get Recipe</a>
                 
                </div>
              </div>
              `;
                });
                mealList.classList.remove('notFound');
            } else {
                html = "Sorry, we didn't find any meal for your ingredient!";
                mealList.classList.add('notFound');
            }

            mealList.innerHTML = html;
        });
}



// function getMealList() {
//     let searchInputTxt = document.getElementById('search-input').value.trim();
//     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//         })
// }
// getMealList();


// get recipe of the meal
function getMealRecipe(e) {
    e.preventDefault();
    if (e.target.classList.contains('recipe-btn')) {
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
            .then(response => response.json())
            .then(data => {
                let html = "";
                if (data.meals) {
                    data.meals.forEach(meal => {
                        html += `
                            <div class="meal-item" data-id = "${meal.idMeal}">
              <div class="meal-img">
                <img src="${meal.strMealThumb}" alt="food" />
              </div>
              <div class="meal-name">
                <h3>${meal.strMeal}</h3>               
              </div>
            </div> 
                            `;
                    });
                } else {
                    html = "Sorry, no meal found for the specific ingredient";
                }

                mealList.innerHTML = html;
            });
    }
}

function mealRecipeModal(meal) {
    console.log(meal);
    meal = meal[0];
    let html = `
    <h2 class="recipe-title">${meal.strMeal}</h2>
              <p class="recipe-category">${meal.strCategory}</p>
              <div class="recipe-instruct">
                <h3>Instructions:</h3>
                <p>${meal.strInstructions}</p>
              </div>
              <div class="recipe-meal-img">
                  <img src="{meal.strMealThumb}" alt="">
              </div>
              <div class="recipe-link">
                  <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
              </div>
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
}



var data = [
    {
        "idMeal": "52940",
        "strMeal": "Brown Stew Chicken",
        "strDrinkAlternate": null,
        "strCategory": "Chicken",
        "strArea": "Jamaican",
        "strInstructions": "Squeeze lime over chicken and rub well. Drain off excess lime juice.\r\nCombine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces. Cover and marinate at least one hour.\r\nHeat oil in a dutch pot or large saucepan. Shake off the seasonings as you remove each piece of chicken from the marinade. Reserve the marinade for sauce.\r\nLightly brown the chicken a few pieces at a time in very hot oil. Place browned chicken pieces on a plate to rest while you brown the remaining pieces.\r\nDrain off excess oil and return the chicken to the pan. Pour the marinade over the chicken and add the carrots. Stir and cook over medium heat for 10 minutes.\r\nMix flour and coconut milk and add to stew, stirring constantly. Turn heat down to minimum and cook another 20 minutes or until tender.",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg",
        "strTags": "Stew",
        "strYoutube": "https://www.youtube.com/watch?v=_gFB1fkNhXs",
        "strIngredient1": "Chicken",
        "strIngredient2": "Tomato",
        "strIngredient3": "Onions",
        "strIngredient4": "Garlic Clove",
        "strIngredient5": "Red Pepper",
        "strIngredient6": "Carrots",
        "strIngredient7": "Lime",
        "strIngredient8": "Thyme",
        "strIngredient9": "Allspice",
        "strIngredient10": "Soy Sauce",
        "strIngredient11": "Cornstarch",
        "strIngredient12": "Coconut Milk",
        "strIngredient13": "Vegetable Oil",
        "strIngredient14": "",
        "strIngredient15": "",
        "strIngredient16": "",
        "strIngredient17": "",
        "strIngredient18": "",
        "strIngredient19": "",
        "strIngredient20": "",
        "strMeasure1": "1 whole",
        "strMeasure2": "1 chopped",
        "strMeasure3": "2 chopped",
        "strMeasure4": "2 chopped",
        "strMeasure5": "1 chopped",
        "strMeasure6": "1 chopped",
        "strMeasure7": "1",
        "strMeasure8": "2 tsp",
        "strMeasure9": "1 tsp ",
        "strMeasure10": "2 tbs",
        "strMeasure11": "2 tsp",
        "strMeasure12": "2 cups ",
        "strMeasure13": "1 tbs",
        "strMeasure14": "",
        "strMeasure15": "",
        "strMeasure16": "",
        "strMeasure17": "",
        "strMeasure18": "",
        "strMeasure19": "",
        "strMeasure20": "",
        "strSource": "http://www.geniuskitchen.com/recipe/authentic-jamaican-brown-stew-chicken-347996",
        "strImageSource": null,
        "strCreativeCommonsConfirmed": null,
        "dateModified": null
    }
];

var meal = data[0];
var mealTitle = meal.strMeal;
var mealVideo = meal.strYoutube;
var mealInstructions = meal.strInstructions;

// var ingredients = [];
// var measures = [];

var listOfKeys = Object.keys(meal);
console.log(listOfKeys);

var listOfValues = Object.values(meal);
console.log(listOfValues);

// // function someThing(_abc) {


// //     let currentIngredient, currentMeasure;

// //     if (_abc.startsWith("strIngredient")) {
// //         currentIngredient = meal[_abc];
// //     }
// //     if (_abc.startsWith("strMeasure")) {
// //         currentMeasure = meal[_abc];
// //     }

// //     if (currentIngredient) {
// //         ingredients.push(currentIngredient);
// //     }
// // }
// // listOfKeys.map(someThing);

// // // console.log(ingredients);

// var abc = Object.keys(meal);
// let ingredients = [];
// let measures = [];

// // console.log(typeof abc, 'abc')
// function getRecipe() {

//     abc.map((_abc) => {

//         let currentIngredient;
//         let currentMeasure;

//         if (_abc.startsWith("strIngredient")) {

//             currentIngredient = meal[_abc]



//         } else if (_abc.startsWith("strMeasure")) {
//             currentMeasure = meal[_abc];


//         }

//         if (currentIngredient) {
//             ingredients.push(currentIngredient);
//             // console.log(ingredients)


//         };
//         if (currentMeasure) {
//             measures.push(currentMeasure);



//         };
//     });


//     getData(ingredients, measures)
// };
// // const getData = () =>


// function getData(ingredients, measures) {
//     const obj = {};
//     ingredients.forEach((item, index) => {
//         obj[item] = measures[index]


//     })
//     for (const [key, value] of Object.entries(obj)) {
//         console.log(key, value)
//     }
// };







// // ingredients.map((ingredient, index) => {
// //     console.log(ingredient)
// //     output[ingredient] = measures[index];
// // })
// // console.log({ ingredients, measures, output });


// // getRecipe()
// getData()
























