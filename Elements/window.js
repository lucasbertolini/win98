function createDiv(className, location, idName) {
    if(!idName) {
        idName = className
    }
    let div = document.createElement('div');
    div.setAttribute('class', className);
    location.appendChild(div);

}