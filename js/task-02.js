const ingredients = ['Картошка','Грибы','Чеснок','Помидоры','Зелень','Приправы',];

let ulList = document.getElementById("ingredients");
const foodIngredients = ingredients.map(ingredient => {
let items = document.createElement("li");
items.innerHTML = ingredient;
return items
});

ulList.append(...foodIngredients);
