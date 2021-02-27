const itemEl = document.querySelectorAll('.item');
console.log('В списке 3 категории', itemEl);

const categoryItemEl = document.querySelector('.item');
const itemTitleEl = categoryItemEl.firstElementChild;
console.log(itemTitleEl);

const itemListEl = categoryItemEl.lastElementChild;
console.log(itemListEl);