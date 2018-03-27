'use strict';

var show = false;
var toggole = function toggole() {
    show = !show;
    render();
    console.log(show);
};

var render = function render() {
    var app = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Toggole Visibality'
        ),
        React.createElement(
            'button',
            { onClick: toggole },
            show ? 'Show' : 'Hiden'
        ),
        React.createElement(
            'p',
            null,
            show ? 'this text show here' : ''
        )
    );

    ReactDOM.render(app, document.getElementById('app'));
};
render();
