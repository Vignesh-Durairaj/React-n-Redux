import React, {Component} from 'react';
import {render} from 'react-dom';

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

const getAchievement = (countryData) => {
    return countryData.country * 100 / countryData.target
}

const messageComponentGenerator = (propObject) => {
    return (
        <div>
            <h3 style={{color:propObject.colour}}>
                This is a custom component. {propObject.msg}. I hope you are {propObject.age} years old !
            </h3>
            And you have been to {propObject.countryData.country} many countries for a target of {propObject.countryData.target} and visited {propObject.countryData.temples} different temples.
            <br />
            Your target is achieved to {getAchievement(propObject.countryData)} %.
            <hr />
        </div>
    )
}

const Country = (prop) => {
    return (
        <section>
            <h3>{prop.name}</h3><hr />
            <h5>{prop.city}</h5><br />
            <h6>And used {prop.ccy}</h6>
        </section>
    )
}

const CountryListComponent = ({ctrys}) =>  {
    return (
        <div>
        <label>List of countries visited : </label>
        <br />
            {ctrys.map(
                ctry => <Country 
                            name={ctry.name} 
                            city={ctry.city} 
                            ccy={ctry.currency}/>)}
        </div>
    )
}

class MessageComponent extends Component {
    render() {
        console.log(this.props);
        return messageComponentGenerator(this.props);
    }
}

render(
    <div style={textStyle}>
        <h1>Hello World</h1>
        <p>Let's see some list of items</p>
    </div>, 
    document.getElementById('page-title'));

render(<MessageComponent age={32} msg='Hello everyone' colour='green' countryData = {myData} countries = {countries} />, document.getElementById('custom-component'))
render(listContent, document.getElementById('title-component'));
render(<CountryListComponent ctrys = {countries} />, document.getElementById('country-list'));
