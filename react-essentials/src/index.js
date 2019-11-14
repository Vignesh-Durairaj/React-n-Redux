import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement(
    'hi', 
    {id:'title', className: 'header'}, 
    'Hello World'
);

ReactDOM.render(title, document.getElementById('title-component'));
