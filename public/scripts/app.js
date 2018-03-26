'use strict';

console.log('Hi');

//JSX 

var tamplete = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Welcome to JSX...'
  ),
  ' ',
  React.createElement(
    'p',
    null,
    'new'
  )
);
// var tamplete = React.createElement(
//     "p",
//     null,
//     "Welcome to JSX"
//   );

ReactDOM.render(tamplete, document.getElementById('app'));
