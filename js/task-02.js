const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulEl = document.querySelector('#ingredients')
const element = ingredients.map(option => {
  const ingredientsListEl = document.createEl('li')
  ingredientsListEl.textContent = option
  console.log(ingredientsListEl)
})
ulEl.append(...el)
