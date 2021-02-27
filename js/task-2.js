const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientContainerEl = document.querySelector('#ingredients');

  const items = ingredients.map(name => {
    const ingredientItemEl = document.createElement('li');
    ingredientItemEl.textContent = name;

    return ingredientItemEl;
  });
  
  console.log(items);

  ingredientContainerEl.append(...items);