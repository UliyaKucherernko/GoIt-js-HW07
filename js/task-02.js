const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsList = document.querySelector('#ingredients')
const element = ingredients.map(option => {
  const ingredientsListEl = document.createElement('li')
  ingredientsListEl.textContent = option
  console.log(ingredientsListEl)
  return ingredientsListEl
})
ingredientsList.append(...element)
