const refs = {
    input: document.querySelector('#validation-input'),
}

refs.input.addEventListener('blur', onInputCheckSymbolsQuantity);

function onInputCheckSymbolsQuantity(event) {
    console.log(event.currentTarget.value.length);
     
    if (event.currentTarget.value.length === Number(refs.input.dataset.length)) {
        refs.input.classList.remove('invalid');
        refs.input.classList.add('valid');
    } else {
        refs.input.classList.remove('valid');
        refs.input.classList.add('invalid');

    }
}

