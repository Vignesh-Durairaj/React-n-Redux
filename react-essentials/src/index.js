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

const listContent = React.createElement(
    'ul', 
    {}, 
    React.createElement(
        'li', 
        {}, 
        'Item one'
    )
);

ReactDOM.render(
    <div style={textStyle}>
        <h1>Hello World</h1>
        <p>Let's see some list of items</p>
    </div>, 
    document.getElementById('page-title'));
ReactDOM.render(listContent, document.getElementById('title-component'));
