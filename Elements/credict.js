import dragObject from "../dragObjects.js";
import minimize from "../main.js";
import { createDiv, createWindow } from "./window.js";

export default function creadict() {
    createWindow('Credict', 'credict');
    createDiv('window-body', document.querySelector('#window_credict'));
    let window_body = document.querySelector('#window-body');
    let text = [
        'I created this as my portfolio, hope you enjoy!!',
        'Iam a junior Front End Developer!!',
        'Technology used: HTML, CSS and JavaScript',
    ];
    for(let i = 0; i < text.length; i++) {
        let textP = document.createElement('p');
        textP.innerHTML = text[i];
        window_body.appendChild(textP);
    }
    let p = document.createElement('p');
    let gitLink = document.createElement('a');
    gitLink.innerHTML = 'jdan';
    gitLink.setAttribute('href','https://github.com/jdan');
    p.innerHTML = `Huuge thanks to ${gitLink} for the awesome CSS library`

    window_body.appendChild(p);

    let linkedin = document.createElement('a');
    linkedin.setAttribute('href','https://www.linkedin.com/in/lucas-bertolini/' )
    let name = document.createElement('p');
    name.innerHTML = `Coded by Lucas Bertolini ${linkedin}`
    window_body.appendChild(name);
    minimize();
    dragObject();
}
