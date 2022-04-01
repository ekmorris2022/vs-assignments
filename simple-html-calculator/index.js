const form = document.myForm
const add = form.children.add
const subtract = form.children.subtract
const multiply = form.children.multiply

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let result = 0;
    let p = document.createElement('p');

    if(e.submitter.name === 'add') {
        result = parseInt(add.children.firstNumber.value) + parseInt(add.children.secondNumber.value);
        p.textContent = `${add.children.firstNumber.value} + ${add.children.secondNumber.value} = ${result}`
        add.appendChild(p);
        
        add.children.firstNumber.value = '';
        add.children.secondNumber.value = '';
        
    }
    
    if(e.submitter.name === 'subtract') {
        result = parseInt(subtract.children.firstNumber.value) - parseInt(subtract.children.secondNumber.value);
        p.textContent = `${subtract.children.firstNumber.value} - ${subtract.children.secondNumber.value} = ${result}`
        subtract.appendChild(p);

        subtract.children.firstNumber.value = '';
        subtract.children.secondNumber.value = '';
    }

    if(e.submitter.name === 'multiply') {
        result = parseInt(multiply.children.firstNumber.value) * parseInt(multiply.children.secondNumber.value);
        p.textContent = `${multiply.children.firstNumber.value} * ${multiply.children.secondNumber.value} = ${result}`
        multiply.appendChild(p);
        
        multiply.children.firstNumber.value = '';
        multiply.children.secondNumber.value = '';
    }
})