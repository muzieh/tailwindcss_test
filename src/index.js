import _ from 'lodash';

function component() {
    const element = document.createElement('div');
    console.log('test');
    debugger;
    element.innerHTML = _.join(['Hello', 'webpackus'], ' ');

    return element;
}

document.body.appendChild(component());
