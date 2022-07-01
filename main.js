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

//minimaze window
let minimazeBtn = document.querySelector('#minimaze');
minimazeBtn.addEventListener('click', (e) => {
    let window = document.querySelector('#app_window');
    window.classList.toggle('disabled');
    addToBar(e.target.textContent);
});

//open calulator window
let openCalculator = document.querySelector('#start_menu_calculator');
openCalculator.addEventListener('click', () => {

    document.querySelector('#app_window_calculator').classList.toggle('enable');
});

//close window
document.querySelector('#desktop').addEventListener('click', (e) => {

    switch (e.target.id) {
        case 'close_app_window_calculator':
            document.querySelector('#app_window_calculator').classList.remove('enable');    
            break;
        case 'close_weather' :
            document.querySelector('#app_window_weather').classList.add('disabled');
            break;
            default : 
            console.log(e.target.id);
            break;
    }
})
//close weather app window
let closeWeather = document.querySelector('#close_weather');
closeWeather.addEventListener('click', () => {
    
})
//start menu click
document.querySelector('#start_menu').addEventListener('click', () => {
    document.querySelector('#start_menu').classList.toggle('disabled');
})

function addToBar(nome) {
    obejctCreate(nome);
}

function obejctCreate(nome) {
    let appTab = document.createElement('div');
    appTab.setAttribute('class', 'app_tab');
    appTab.innerHTML = nome;
    document.querySelector('#start_button').appendChild(appTab);
}
