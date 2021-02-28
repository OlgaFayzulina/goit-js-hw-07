const valueRef = document.querySelector('#value');
const decrButtonRef = document.querySelector('[data-action="decrement"]');
const incrButtonRef = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const increment = () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    valueRef.textContent = counterValue
};

decrButtonRef.addEventListener('click', decrement);
incrButtonRef.addEventListener('click', increment);


