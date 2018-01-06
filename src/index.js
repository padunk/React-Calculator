var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var App = require('./component/Calculator');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);