const ingredients = ['Картошка','Грибы','Чеснок','Помидоры','Зелень','Приправы',];

let ulList = document.getElementById("ingredients");
const foodIngredients = ingredients.map(ingredient => {
let item = document.createElement("li");
item.innerHTML = ingredient;
return item

});

ulList.append(...foodIngredients);
