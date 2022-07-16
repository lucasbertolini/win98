import calculator from './Elements/calculator.js';
import weatherApp from './Elements/weather.js';
import creadict from './Elements/credict.js';
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
startBtn.addEventListener('click', () => {
    document.querySelector('#start_menu').classList.toggle('disabled');
})

//always run this function for update the node from #window
export default function minimize() {
    let minimizeOption = [
        'window_weather_app',
        'window_calculator',
        'window_credict',
        'window_cep_app'

    ];

    for( let i = 0; i < minimizeOption.length; i++) {
        if(document.querySelector(`#${minimizeOption[i]}`)) {
            
            document.querySelector(`#${minimizeOption[i]}` ).addEventListener('click', (event) => {
                switch(event.target.id){
                    case 'minimaze_calculator' :
                        document.querySelector('#app_window_calculator').classList.add('disabled');
                        document.querySelector('#Calculator').classList.add('minimized');
                        break; 
                    
                    case 'minimaze_weather_app' : 
                        document.querySelector('#app_window_weather_app').classList.add('disabled');
                        document.querySelector('#Weather').classList.add('minimized');
                        break;
        
                    case 'minimaze_cep_app': 
                        document.querySelector('#app_window_cep_app').classList.add('disabled');
                        document.querySelector('#CEP_Search').classList.add('minimized');
                        break;
                    
                    case 'minimaze_credict': 
                        document.querySelector('#app_window_credict').classList.add('disabled');
                        document.querySelector('#Credict').classList.add('minimized');
                        break;     
                }
            })
        }else { 
           // console.log(`${minimizeOption[i]} not open or doesnt exist`);
        }
    };
}

//close window
document.querySelector('#desktop').addEventListener('click', (e) => {

    switch (e.target.id) {
        case 'close_calculator_button' :
            document.querySelector('#app_window_calculator').remove()
            document.querySelector('#open_pages').removeChild(document.querySelector('#Calculator'));
            break;
        case 'close_weather_app_button' :
            document.querySelector('#app_window_weather_app').remove();
            document.querySelector('#open_pages').removeChild(document.querySelector('#Weather'));
            break;
        case 'close_cep_app_button' :
            document.querySelector('#app_window_cep_app').remove();
            document.querySelector('#open_pages').removeChild(document.querySelector('#CEP_Search'));
            break;
        
        case 'close_credict_button' : 
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
            goUp();
            break;
        case 'start_menu_calculator':
            objectName = 'Calculator'
            calculator();
            closeStartMenu();
            addToBar(objectName);
            refresh(objectName);
            goUp();
            break

        case 'start_menu_cep_search':
            objectName = 'CEP_Search';
            cep();
            closeStartMenu();
            addToBar(objectName);
            refresh(objectName);
            break;

        case 'start_menu_credict': 
            objectName = 'Credict';
            creadict();
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
                    document.querySelector('#app_window_cep_app').classList.toggle('disabled');
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
                    document.querySelector('#app_window_credict').classList.toggle('disabled');
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

function goUp() {
    let windowOption = {

        windowName : [
            'app_window_calculator',
            'app_window_weather_app',
            'app_window_cep_app',
            'app_window_credict'
        ],
        tabName : [
            'calculator_tab',
            'weather_app_tab_header',
            'a',
            'a'
        ],
        keyName: [
            'calculator',
            'weather',
            'cep', 
            'credict'
        ]
    }
    for(let i = 0; i< windowOption.windowName.length; i++ ){
        if(document.querySelector(`#${windowOption.windowName[i]}`)) {
            document.querySelector(`#${windowOption.windowName[i]}`).addEventListener('click', (e) => {
                for(let ii = 0; ii< windowOption.tabName.length; ii++ ) {
                    if(document.querySelector(`#${windowOption.tabName[ii]}`)) {
                        
                        console.log(windowOption.tabName[i], e.target.id)
                        document.querySelector(`#${windowOption.windowName[i]}`).classList.toggle('ztop', e.target.id === windowOption.tabName[ii]);
                        
                    }
                }
            })
        }
    }
}