import React from 'react';
import ReactDOM from 'react-dom';

let textStyle = {
    color: 'darkgreen'
  }

const title = React.createElement('label', {}, 'React Essentials')

const content = React.createElement(
    'h1', 
    {id:'title', className: 'header', style: textStyle}, 
    'Hello World'
);

ReactDOM.render(title, document.getElementById('page-title'));
ReactDOM.render(content, document.getElementById('title-component'));
