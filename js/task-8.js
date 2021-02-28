
const refs = {
    input: document.querySelector('#controls input'),
    renderBtn: document.querySelector('[data-action="render"]'),
    destroyBtn: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector('#boxes')
}

    refs.renderBtn.addEventListener("click", getAmount);
    refs.destroyBtn.addEventListener("click", destroyBoxes);

    function getAmount() {
        const amount = refs.input.value;
        createBoxes(amount);
    }
  
    function createBoxes(amount) {
        let size = 30;
        const addBoxes = document.createDocumentFragment();

    for (let i = 0; i < amount; i++) {
      const newSize = size + i * 10;
      const div = document.createElement("div");
      div.style.width = `${newSize}px`; 
      div.style.height = `${newSize}px`; 
      div.style.backgroundColor = `rgb( ${random()} , ${random()} , ${random()}`;
      
      addBoxes.appendChild(div);
    }
    boxes.appendChild(addBoxes);
  }

    function random() {
        return Math.floor(Math.random() * 256);
    }
  
    function destroyBoxes() {
        boxes.innerHTML = '';
    }
    
    
  
  