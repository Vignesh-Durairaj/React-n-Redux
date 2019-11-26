import React, {Component} from 'react';
import {render} from 'react-dom';
import MessageComponent from './MessageComponent';
import CountryListComponent from './CountryListComponent';
import FavouriteColourForm from './FavouriteColourForm';


let countries = [
    {"name": "Hong Kong", "city": "HK Island", "currency": "Hong Kong Dollar"}, 
    {"name": "Singapore", "city": "Changi", "currency": "Singapore Dollar"}, 
    {"name": "China", "city": "Shenzhen", "currency": "Chinese Yuan"}, 
    {"name": "China", "city": "Guangzhou", "currency": "Chinese Yuan"}
]

let textStyle = {
    color: 'darkgreen'
}

let myData = {
    target: 10,
    country: 3, 
    temples: 12
}

const listContent = React.createElement(
    'ul', 
    {}, 
    React.createElement(
        'li', 
        {}, 
        'Item one'
    )
);

render(
    <div style={textStyle}>
        <h1>Hello World</h1>
        <p>Let's see some list of items</p>
    </div>, 
    document.getElementById('page-header'));

render(<MessageComponent age={32} msg='Hello everyone' colour='green' countryData = {myData} countries = {countries} />, document.getElementById('custom-component'))
render(listContent, document.getElementById('title-component'));
render(<CountryListComponent ctrys = {countries} />, document.getElementById('country-list'));
render(<FavouriteColourForm />, document.getElementById('favourite-colour'));
