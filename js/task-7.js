const refs = {
    inputRange: document.querySelector('#font-size-control'),
    inputText: document.querySelector('#text')
}

refs.inputRange.addEventListener('input', onInputChangeText);

function onInputChangeText(event) {
    console.log(event.currentTarget.value);
    refs.inputText.style.fontSize = event.currentTarget.value + 'px';
}


