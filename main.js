let desktopClick = document.querySelector('body')
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

let minimazeBtn = document.querySelectorAll('#window');
console.log(minimazeBtn)
for( let i = 0; i < minimazeBtn.length; i++) {
    minimazeBtn[i].addEventListener('click', (event) => {

        switch(event.target.id){
            case 'minimaze_calculator' :
                document.querySelector('#app_window_calculator').classList.remove('enable');
            break; 
            
            case 'minimaze_weather' : 
            document.querySelector('#app_window_weather').classList.remove('enable');
            break;

            case 'minimaze_cep': 
            document.querySelector('#app_window_cep').classList.remove('enable');
            break;
        
            default: 
                console.log(parent.includes('calculator'))
                break
        }
    })
};

//close window
document.querySelector('#desktop').addEventListener('click', (e) => {

    switch (e.target.id) {
        case 'close_app_window_calculator':
            document.querySelector('#app_window_calculator').classList.remove('enable');    
            break;
        case 'close_weather' :
            document.querySelector('#app_window_weather').classList.remove('enable');
            break;
        case 'close_cep' :
            document.querySelector('#app_window_cep').classList.remove('enable');
            break;

        default : 
            //console.log(e.target.id);
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
            document.querySelector('#app_window_weather').classList.add('enable');
            closeStartMenu();
            addToBar(objectName);
            refresh(objectName);
            break;
        case 'start_menu_calculator':
            objectName = 'Calculator'
            document.querySelector('#app_window_calculator').classList.add('enable');
            closeStartMenu();
            addToBar(objectName);
            refresh(objectName);
            break

        case 'start_menu_cep_search':
            objectName = 'CEP Search';
            document.querySelector('#app_window_cep').classList.add('enable');
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
function refresh (name) {
    //Click on Minimized to maximize
    let openTab = document.querySelector(`#${name}`);
    if(openTab == null ) return
    console.log(openTab.textContent);
    for( let i = 0; i < openTab.length; i++) {
        openTab[i].addEventListener('click', (e) => {
            switch (e.target.textContent) {
                case 'Calculator':
                    document.querySelector('#app_window_calculator').classList.add('enable');
                    break;
                case 'CEP Search' :
                    document.querySelector('#app_window_cep').classList.add('enable');
                    break;
                case 'Weather' :
                    document.querySelector('#app_window_weather').classList.add('enable');
                    break;
            }
        })
    }
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

    //create the text element
    let text = document.createElement('span');
    text.textContent = objName;
    div.appendChild(text);

}
