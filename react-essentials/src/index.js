import React, {Component} from 'react';
import {render} from 'react-dom';

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

class MessageComponent extends Component {
    getAchievement = () => {
        return this.props.countryData.country * 100 / this.props.countryData.target
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h3 style={{color:this.props.colour}}>
                    This is a custom component. {this.props.msg}. I hope you are {this.props.age} years old !
                </h3>
                And you have been to {this.props.countryData.country} many countries for a target of {this.props.countryData.target} and visited {this.props.countryData.temples} different temples.
                <br />
                Your target is achieved to {this.getAchievement()} %.
            </div>
        )
    }
}

render(
    <div style={textStyle}>
        <h1>Hello World</h1>
        <p>Let's see some list of items</p>
    </div>, 
    document.getElementById('page-title'));

render(<MessageComponent age={32} msg='Hello everyone' colour='green' countryData = {myData}/>, document.getElementById('custom-component'))
render(listContent, document.getElementById('title-component'));
