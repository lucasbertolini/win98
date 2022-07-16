export function createDiv(className, location, idName) {

    let div = document.createElement('div');
    div.setAttribute('class', className);
    
    if(idName === undefined) {
        idName = className;
        div.setAttribute('id', idName);
        location.appendChild(div);
        return;
    }
    div.setAttribute('id', idName);
    location.appendChild(div);
}
function createButton(location , appName) {
    let buttonOptions = [
        'Minimize',
        'Maximize',
        'Close'
    ];
    let buttonId = [
        `minimaze_${appName}`,
        '', //maximize button not used yet
        `close_${appName}_button`
    ];
    for(let i =0; i < buttonOptions.length; i++){
        let button = document.createElement('button');
        button.setAttribute('aria-label', buttonOptions[i]);
        button.setAttribute('id', buttonId[i]);
        location.appendChild(button);
    };
};
//create default windows window for apps 
export function createWindow(windowName, appName) {
    let desktop = document.querySelector('#desktop');
    createDiv(`app_window ${appName}`,desktop, `app_window_${appName}`);
    createDiv(`window ${appName}_window`, document.querySelector(`#app_window_${appName}`), `window_${appName}`);
    createDiv('title-bar', document.querySelector(`#window_${appName}`), `${appName}_tab`);
    createDiv('title-bar-text', document.querySelector(`#${appName}_tab`), `title-bar-text-${appName}`);
    document.querySelector(`#title-bar-text-${appName}`).innerHTML = windowName;
    createDiv('title-bar-controls', document.querySelector(`#${appName}_tab`), `title-bar-controls-${appName}`);
    createButton(document.querySelector(`#title-bar-controls-${appName}`), appName);
};