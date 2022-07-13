createWindow('cep_app', 'cep');
createDiv('window-body', document.querySelector('#window'));

let window_body = document.querySelector('#window-body');

//create section for title
let section = document.createElement('section');
windows_body.appendChild(section);

//create p element for title
let title = document.createElement('p');
title.setAttribute('class', 'titulo');
title.innerHTML = 'Buscador de CEP';
section.appendChild(title);

//create form for inputs
let form = document.createElement('form');
window_body.appendChild(form);

//create div for inputs
createDiv('inputContainer', form);

//create input 
let inputText = document.createElement('input');
let inputAttributes = {
    text: {
        type: ['type','placeholder', 'id', 'class'],
        values: ['text', 'Digite o CEP', 'cepInput', 'cepInput']
    },
    submit: {
        type: ['type', 'value', 'id', 'class'],
        value: ['submit', 'Adicionar', 'adicionar', 'adicinarBtn'],
    }
    
}
for( let i = 0; i < inputAttributes.text.type.length; i++) {
    inputText.setAttribute(inputAttributes.type[i], inputAttributes.values[i]);
}
document.querySelector('`#inputContainer').appendChild(inputText);

//submit input 
let inputSubtmit = document.createElement('input');
for ( let i = 0; i < inputAttributes.submit.type.length; i++) {
    inputSubmit.setAttributeNS(inputAttributes.submit.type[i], inputAttributes.submit.value[i])
}

//error message 
let errorMessage = document.createElement('p');
errorMessage.setAttribute('id', 'mensagemErro');
errorMessage.setAttribute('class', 'mensagemErro');
form.appendChild(errorMessage);

//div for results 
createDiv('resultado', form);



