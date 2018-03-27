'use strict';

console.log('Hi');

//JSX 
var userName = 'MAhran';
var userAge = 37;
var userLocation = 'Berlin';
var user = {
    name: 'Mark',
    age: 33,
    location: 'Berlin',
    options: []

};
function getLocation(location) {
    if (location) {
        return location;
    }
    return 'Unkown';
}
var addOption = function addOption(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    console.log(option);
    if (option) {
        user.options.push(option);
        e.target.elements.option.value = '';
        console.log(user.options);
        renderApp();
    }
};
var removeAll = function removeAll() {
    user.options = [];
    renderApp();
};
var shouldToDO = function shouldToDO() {
    var rand = Math.floor(Math.random() * user.options.length);
    alert(user.options[rand]);
};
var renderApp = function renderApp() {
    var tamplete = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Indecisions App'
        ),
        React.createElement(
            'p',
            null,
            'Put your life in the hands of a computer'
        ),
        React.createElement(
            'p',
            null,
            user.options.length > 0 ? 'Here are your options' : 'no options'
        ),
        React.createElement(
            'p',
            null,
            'total number of options is ',
            user.options.length
        ),
        React.createElement(
            'button',
            { disabled: user.options.length === 0, onClick: shouldToDO },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            user.options.map(function (option, key) {
                return React.createElement(
                    'li',
                    { key: true },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: addOption },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                { type: 'submit' },
                'Add Option'
            )
        )
    );

    ReactDOM.render(tamplete, document.getElementById('app'));
};

renderApp();
