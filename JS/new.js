

// var data = [
//     {
//         "idMeal": "52940",
//         "strMeal": "Brown Stew Chicken",
//         "strDrinkAlternate": null,
//         "strCategory": "Chicken",
//         "strArea": "Jamaican",
//         "strInstructions": "Squeeze lime over chicken and rub well. Drain off excess lime juice.\r\nCombine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces. Cover and marinate at least one hour.\r\nHeat oil in a dutch pot or large saucepan. Shake off the seasonings as you remove each piece of chicken from the marinade. Reserve the marinade for sauce.\r\nLightly brown the chicken a few pieces at a time in very hot oil. Place browned chicken pieces on a plate to rest while you brown the remaining pieces.\r\nDrain off excess oil and return the chicken to the pan. Pour the marinade over the chicken and add the carrots. Stir and cook over medium heat for 10 minutes.\r\nMix flour and coconut milk and add to stew, stirring constantly. Turn heat down to minimum and cook another 20 minutes or until tender.",
//         "strMealThumb": "https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg",
//         "strTags": "Stew",
//         "strYoutube": "https://www.youtube.com/watch?v=_gFB1fkNhXs",
//         "strIngredient1": "Chicken",
//         "strIngredient2": "Tomato",
//         "strIngredient3": "Onions",
//         "strIngredient4": "Garlic Clove",
//         "strIngredient5": "Red Pepper",
//         "strIngredient6": "Carrots",
//         "strIngredient7": "Lime",
//         "strIngredient8": "Thyme",
//         "strIngredient9": "Allspice",
//         "strIngredient10": "Soy Sauce",
//         "strIngredient11": "Cornstarch",
//         "strIngredient12": "Coconut Milk",
//         "strIngredient13": "Vegetable Oil",
//         "strIngredient14": "",
//         "strIngredient15": "",
//         "strIngredient16": "",
//         "strIngredient17": "",
//         "strIngredient18": "",
//         "strIngredient19": "",
//         "strIngredient20": "",
//         "strMeasure1": "1 whole",
//         "strMeasure2": "1 chopped",
//         "strMeasure3": "2 chopped",
//         "strMeasure4": "2 chopped",
//         "strMeasure5": "1 chopped",
//         "strMeasure6": "1 chopped",
//         "strMeasure7": "1",
//         "strMeasure8": "2 tsp",
//         "strMeasure9": "1 tsp ",
//         "strMeasure10": "2 tbs",
//         "strMeasure11": "2 tsp",
//         "strMeasure12": "2 cups ",
//         "strMeasure13": "1 tbs",
//         "strMeasure14": "",
//         "strMeasure15": "",
//         "strMeasure16": "",
//         "strMeasure17": "",
//         "strMeasure18": "",
//         "strMeasure19": "",
//         "strMeasure20": "",
//         "strSource": "http://www.geniuskitchen.com/recipe/authentic-jamaican-brown-stew-chicken-347996",
//         "strImageSource": null,
//         "strCreativeCommonsConfirmed": null,
//         "dateModified": null
//     }
// ];

// var meal = data[0];
// var mealTitle = meal.strMeal;
// var mealVideo = meal.strYoutube;
// var mealInstructions = meal.strInstructions;

// // var ingredients = [];
// // var measures = [];

// // var listOfKeys = Object.keys(meal);
// // console.log(listOfKeys);

// // // var listOfValues = Object.values(meal);
// // // console.log(listOfValues);

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


// getRecipe()
// getData()
























