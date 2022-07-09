function createDiv(className, location, idName) {

    let div = document.createElement('div');
    div.setAttribute('class', className);
    if(!idName) {
        idName = className
        div.setAttribute('id', idName);
    }
    location.appendChild(div);
}
function createButton(location) {
    let buttonOptions = [
        'Minimize',
        'Maximize',
        'Close'
    ];
    let buttonId = [
        'minimaze_calculator',
        '',
        'close_app_window_calculator'
    ];
    for(let i =0; i < buttonOptions.length; i++){
        let button = document.createElement('button');
        button.setAttribute('aria-label', buttonOptions[i]);
        button.setAttibute('id', buttonId[i]);
        location.appendChild(button);
    };
};
function createWindow(windowName, appName) {
    let desktop = document.querySelector('#dektop')
    createDiv(`app_window ${appName}`,desktop, `app_window_${appName}`);
    createDiv(`window ${appName}_window`, document.querySelector(`#app_window_${appName}`), 'window');
    createDiv('title-bar', document.querySelector('#window'), `${appName}_tab`);
    createDiv('title-bar-text', document.querySelector(`#${appName}_tab`));
    document.querySelector('#title-bar-text').innerHTML = windowName;
    createDiv('title-bar-controls', document.querySelector(`#${appName}_tab`));
    createButton(document.querySelector('#title-bar-controls'));
};