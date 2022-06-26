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
//close window 

let closeBtn = document.querySelector('#close');
closeBtn.addEventListener('click', () => {
    document.querySelector('#app_window').classList.toggle('disabled');
})

//minimaze window
let minimazeBtn = document.querySelector('#minimaze');
minimazeBtn.addEventListener('click', (e) => {
    let window = document.querySelector('#app_window');
    window.classList.toggle('disabled');
    addToBar(e.target.textContent);
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
