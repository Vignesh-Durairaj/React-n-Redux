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

/* const title = React.createElement('label', {}, 'React Essentials')

const content = React.createElement(
    'h1', 
    {id:'title', className: 'header', style: textStyle}, 
    'Hello World'
); */

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
            <h3>{prop.name}</h3>
            <h5>City visited : {prop.city}</h5>
            <h6>And used {prop.ccy}</h6>
    <h6>Is travel fulfilled to satisfaction : {prop.fulfillment ? 'Yes' : 'No'}</h6>
            <hr />
        </section>
    )
}

const FutureTravels = () => <div><p>Future travel plans are in place</p></div>

class CountryListComponent extends React.Component {
    constructor() {
        super();
        console.log('Hi ! You can do something before the DOM elements are mounted.');
    }

    state = {
        budget: true,
        fulfilledTravel: true,
        isFutureTravelsAvailable: true, 
        data: [],
        loaded: true
    }

    componentDidUpdate() {
        console.log('Am about to refresh the component');
    }

    componentDidMount() {
        this.setState({loaded: false});
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(jsonData => this.setState({data: jsonData, loaded: true}));
    }

    toggleBudget = () => this.setState(prevState => ({
        budget: !prevState.budget
    }));

    render() {
        console.log(this.state);
        const {ctrys} = this.props;
        return (
            <div>
                {!this.state.loaded ? "loading ..." : 
                <div>
                    {this.state.data.map(product => {
                        return (
                            <div>
                                <b><u>Travel product on Sales</u></b>
                                <br />
                                <b>{product.name}</b>
                                <br />
                                <img src={product.image} height={100} alt={product.image_title}/>
                            </div>
                        )
                    })}
                </div>}
                <label>List of countries visited : </label>
                <hr />
                    {ctrys.map(
                        (ctry, i) => <Country 
                                        key={i}
                                        name={ctry.name} 
                                        city={ctry.city} 
                                        ccy={ctry.currency} 
                                        fulfillment={this.state.fulfilledTravel} />)}
                <h3>Enough money {this.state.budget ? '' : 'NOT'} available for next travel</h3>
                <button onClick={this.toggleBudget}>Click for Budget</button>
                {this.state.isFutureTravelsAvailable ? <FutureTravels /> : <div />}
            </div>
        )
    }
}

class MessageComponent extends Component {
    componentDidMount() {
        document.title = 'React Essentials';
        console.log('Component is mounted. And I changed the page title');
    }

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
    document.getElementById('page-header'));

render(<MessageComponent age={32} msg='Hello everyone' colour='green' countryData = {myData} countries = {countries} />, document.getElementById('custom-component'))
render(listContent, document.getElementById('title-component'));
render(<CountryListComponent ctrys = {countries} />, document.getElementById('country-list'));
