import {createWindow, createDiv} from './window.js';
import weather from '../Projects/Tempo/main.js';
import dragObject from '../dragObjects.js';
import minimize from '../main.js';
export default function weatherApp() {

    createWindow('Weather', 'weather_app');
    createDiv('window-body', document.querySelector('#window'));
    let window_body = document.querySelector('#window-body');
    
    //create form for weather app
    let form = document.createElement('form');
    window_body.appendChild(form);
    
    //create section for input 
    let section = document.createElement('section');
    section.setAttribute('class', 'container');
    form.appendChild(section);
    
    //create input for text 
    let inputText = document.createElement('input');
    inputText.setAttribute('type', 'text');
    inputText.setAttribute('class', 'input');
    inputText.setAttribute('placeholder', 'Digite o nome da cidade!');
    inputText.setAttribute('id', 'input');
    section.appendChild(inputText);
    
    //create input button for submit
    let inputSubmit = document.createElement('input');
    inputSubmit.setAttribute('type','submit');
    inputSubmit.setAttribute('class', 'submit');
    inputSubmit.setAttribute('value', 'Procurar');
    section.appendChild(inputSubmit);
    
    //create div for showing results
    createDiv('tempo', window_body);
    weather();
    dragObject();
    minimize();
}    
