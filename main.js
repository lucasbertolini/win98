import calculator from './Elements/calculator.js';
import weatherApp from './Elements/weather.js';
import { cep } from './Elements/cep.js';


let desktopClick = document.querySelector('body');

desktopClick.addEventListener('click', (e) => {
    let startBtn = document.querySelector('#start_menu'); 
    
    if(e.target.classList == 'desktop') {
        startBtn.classList = 'start_menu disabled';
    };
})

//click on start menu button to show hidden menu 
let startBtn = document.querySelector('#start_btn');
startBtn.addEventListener('click', () =>{
    document.querySelector('#start_menu').classList.toggle('disabled');
})

//always run this function for update the node from #window
export default function minimize() {
    let minimazeBtn = document.querySelectorAll('#window');
    for( let i = 0; i < minimazeBtn.length; i++) {
        minimazeBtn[i].addEventListener('click', (event) => {
            switch(event.target.id){
                case 'minimaze_calculator' :
                    document.querySelector('#app_window_calculator').classList.add('disabled');
                    document.querySelector('#Calculator').classList.add('minimized');
                break; 
                
                case 'minimaze_weather_app' : 
                    document.querySelector('#app_window_weather_app').classList.add('disabled');
                    document.querySelector('#Weather').classList.add('minimized');
                    break;
    
                case 'minimaze_cep': 
                    document.querySelector('#app_window_cep').classList.add('disabled');
                    document.querySelector('#CEP_Search').classList.add('minimized');
                    break;
                
                case 'minimize-credict' : 
                    document.querySelector('#app_window_credict').classList.add('disabled');
                    document.querySelector('#Credict').classList.add('minimized');
                    break;
            }
        })
    };
}

//close window
document.querySelector('#desktop').addEventListener('click', (e) => {

    switch (e.target.id) {
        case 'close_calculator_button':
            document.querySelector('#app_window_calculator').remove()
            document.querySelector('#open_pages').removeChild(document.querySelector('#Calculator'));
            break;
        case 'close_weather_app_button' :
            document.querySelector('#app_window_weather_app').remove();
            document.querySelector('#open_pages').removeChild(document.querySelector('#Weather'));
            break;
        case 'close_cep' :
            document.querySelector('#app_window_cep').remove();
            document.querySelector('#open_pages').removeChild(document.querySelector('#CEP_Search'));
            break;
        
        case 'close_credict' : 
            document.querySelector('#app_window_credict').remove();
            document.querySelector('#open_pages').removeChild(document.querySelector('#Credict'));
            break;
    }
});

//start menu click
let start_menu_button = document.querySelector('#start_menu');
start_menu_button.addEventListener('click', (e) => {

    //switch for each button inside start menu
    let objectName;
    switch (e.target.id) {
        case 'start_menu_weather':
            objectName = 'Weather'
            weatherApp();
            closeStartMenu();
            addToBar(objectName);
            refresh(objectName);
            break;
        case 'start_menu_calculator':
            objectName = 'Calculator'
            calculator();
            closeStartMenu();
            addToBar(objectName);
            refresh(objectName);
            break

        case 'start_menu_cep_search':
            objectName = 'CEP_Search';
            //document.querySelector('#app_window_cep').classList.add('enable');
            cep();
            closeStartMenu();
            addToBar(objectName);
            refresh(objectName);
            break;

        case 'start_menu_credict': 
            objectName = 'Credict';
            document.querySelector('#app_window_credict').classList.add('enable');
            closeStartMenu();
            addToBar(objectName);
            refresh(objectName);
            break;
        default:
            closeStartMenu();
            break;
    }
});

//refresh function for updates on page
let minimized = false;
function refresh (name) {
    //Click on Minimized to maximize
    let openTab = document.querySelector(`#${name}`);
    if(openTab == null ) return
        openTab.addEventListener('click', (e) => {
            switch (e.target.textContent) {
                case 'Calculator':
                    document.querySelector('#app_window_calculator').classList.toggle('disabled');
                    //when cliked on minimized tab at bottom you can maximize the window
                    if(!minimized) {
                        document.querySelector('#Calculator').classList.toggle('minimized');
                        minimized = true;
                    }else {
                        document.querySelector('#Calculator').classList.toggle('minimized');
                    }
                    minimized = true;
                    break;
                case 'CEP Search' :
                    document.querySelector('#app_window_cep').classList.toggle('enable');
                    //when cliked on minimized tab at bottom you can maximize the window
                    if(!minimized) {
                        document.querySelector('#CEP_Search').classList.toggle('minimized');
                        minimized = true;
                    }else {
                        document.querySelector('#CEP_Search').classList.toggle('minimized');
                    }
                    minimized = true;
                    break;
                case 'Weather' :
                    document.querySelector('#app_window_weather_app').classList.toggle('disabled');
                    //when cliked on minimized tab at bottom you can maximize the window
                    if(!minimized) {
                        document.querySelector('#Weather').classList.toggle('minimized');   
                        minimized = true;
                    }else {
                        document.querySelector('#Weather').classList.toggle('minimized');
                    }
                    minimized = true;                    
                    break;

                case 'Credict' :
                    document.querySelector('#app_window_credict').classList.toggle('enable');
                    //when cliked on minimized tab at bottom you can maximize the window
                    if(!minimized) {
                        document.querySelector('#Credict').classList.toggle('minimized');
                        minimized= true;
                    }else {
                        document.querySelector('#Credict').classList.toggle('minimized');
                    }
                    minimized = true;
                    break;
            }
        })
    }

function closeStartMenu() {
    document.querySelector('#start_menu').classList.toggle('disabled');
}

function addToBar(objName) {
    //create main div for tab to go
    let div = document.createElement('div');
    div.setAttribute('class', 'open_app_tab');
    div.setAttribute('id', objName);
    document.querySelector('#open_pages').appendChild(div);

    //create text element
    let text = document.createElement('span');
    text.textContent = objName.replace('_', ' ');
    div.appendChild(text);

}

function remove() {
     
}