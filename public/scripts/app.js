'use strict';

console.log('Hi');

//JSX 

var tamplete = React.createElement(
  'p',
  null,
  'Welcome to JSX...'
);
// var tamplete = React.createElement(
//     "p",
//     null,
//     "Welcome to JSX"
//   );

ReactDOM.render(tamplete, document.getElementById('app'));
