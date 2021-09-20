let terra = {
  favoriteFood: "butter chicken",
  calories: 1200,
  cuisine: "Indian",
};
let derrick = { favoriteFood: "Shrimp", calories: 1000, cuisine: "Seafood" };
let chris = { favoriteFood: "octopus", calories: 600, cuisine: "Seafood" };
let paul = {
  favoriteFood: "shawarma",
  calories: 1000,
  cuisine: "Mediterranean",
};
let patrick = {
  favoriteFood: "mashed potatoes",
  calories: 400,
  cuisine: "german",
};
let blaze = {
  favoriteFood: "chocolate anything",
  calories: 1000000,
  cuisine: "Snack",
};
let christina = { favoriteFood: "Pizza", calories: 800, cuisine: "Italian" };
let honz = { favoriteFood: "corndogs", calories: 500, cuisine: "Snack" };
let Pavel = { favoriteFood: "Pad see ew", calories: 1000, cuisine: "Thai" };
let shirene = { favoriteFood: "tacos", calories: 500, cuisine: "Persian" };
let Megan = { favoriteFood: "Hot Cheetos", calories: 500, cuisine: "Snack" };

let foodArr = [
  terra,
  derrick,
  chris,
  paul,
  patrick,
  blaze,
  christina,
  honz,
  Pavel,
  shirene,
  Megan,
];

let acc = 0;
for (let item of foodArr) {
  acc += item.calories;
}
//console.log(acc);

let totalCalories = foodArr.reduce((acc, item) => {
  return acc + item.calories;
}, 0);
//console.log(totalCalories);

//Food Categories
let foodGenres = {};
for (let item of foodArr) {
  if (!foodGenres[item.cuisine]) {
    foodGenres[item.cuisine] = [item];
  } else {
    foodGenres[item.cuisine].push(item);
  }
}
//console.log(foodGenres);

let reducedFoodGenres = foodArr.reduce((acc, item)=>{
    if (!acc[item.cuisine]) {
        acc[item.cuisine] = [];
      } 
    acc[item.cuisine].push(`food:${item.favoriteFood}, calories:${item.calories}`);     
    return acc;
},{})
console.log(reducedFoodGenres);