let desktopClick = document.querySelector('body')
desktopClick.addEventListener('click', (e) => {
    let startBtn = document.querySelector('#start_menu'); 
    
    if(e.target.classList == 'desktop') {
        startBtn.classList = 'start_menu disabled';
    };
})

//click on start menu button to show hidden menu 
let startBtn = document.querySelector('#start_btn');
startBtn.addEventListener('click', (event) =>{
    document.querySelector('#start_menu').classList.toggle('disabled');
})

let minimazeBtn = document.querySelectorAll('#minimaze');
for( let i = 0; i < minimazeBtn.length; i++) {
    minimazeBtn[i].addEventListener('click', () => {
        let parent = minimazeBtn[i].parentElement.parentElement.parentElement.className
        switch(parent) {

            case parent.includes('calculator') :
                console.log('ola')
            break;
        
            default: 
                console.log(parent)
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
})

//start menu click
let start_menu_button = document.querySelector('#start_menu');
start_menu_button.addEventListener('click', (e) => {

    //switch for each button inside start menu
    switch (e.target.id) {
        case 'start_menu_weather':

            document.querySelector('#app_window_weather').classList.add('enable');
            closeStartMenu();
            break;
        case 'start_menu_calculator':
            document.querySelector('#app_window_calculator').classList.add('enable');
            closeStartMenu();
            break

        case 'start_menu_cep_search':
            document.querySelector('#app_window_cep').classList.add('enable');
            closeStartMenu();
            break;
        default:
            closeStartMenu();
            break;
    }
});

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
