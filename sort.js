let terra = {favoriteFood:'butter chicken', calories: 1200, cuisine:'Indian' };
let derrick = { favoriteFood: "Shrimp",  calories: 1000,   cuisine: 'Seafood'};
let chris = {favoriteFood: 'octopus', calories: 600,cuisine:'japanese'};
let paul = {favoriteFood:'shawarma', calories:1000, cuisine:'Mediterranean'};
let patrick = {favoriteFood: "mashed potatoes", calories: 400, cuisines: "german"};
let blaze = {favoriteFood:'chocolate anything', calories:1000000, cuisine: 'dessert'};
let christina = { favoriteFood: 'Pizza', calories: 800, cuisine: 'Italian' };
let honz = {favoriteFood: 'corndogs', calories: 500, cuisine: 'State Fair'};
let Pavel = {favoriteFood: 'Pad see ew', calories: 1000, cuisine: 'Thai'};
let shirene = {favoriteFood: "tacos", calories: 500, cuisine: "Persian"};
let Megan = { favoriteFood: "Hot Cheetos", calories: 500 , cuisine: "snack" };

let foodArr = [terra, derrick, chris, paul, patrick, blaze, christina, honz, Pavel, shirene,Megan];

//foodArr.sort((a,b)=> a.calories-b.calories);
//console.log(foodArr);

foodArr.sort((a,b)=>{ 
    if(a.favoriteFood.toLowerCase() > b.favoriteFood.toLowerCase()){
        return 1;
    }else if(a.favoriteFood.toLowerCase() < b.favoriteFood.toLowerCase()){
        return -1;
    }
        return 0;
    }

);
console.log(foodArr);


