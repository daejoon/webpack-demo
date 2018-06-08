import _ from 'lodash';
import './style.css';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to out existing div.
    var myIcon = new Image();

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());