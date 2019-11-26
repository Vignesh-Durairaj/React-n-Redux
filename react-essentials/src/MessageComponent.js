import React, {Component} from 'react';

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

export class MessageComponent extends Component {
    componentDidMount() {
        document.title = 'React Essentials';
        console.log('Component is mounted. And I changed the page title');
    }

    render() {
        console.log(this.props);
        return messageComponentGenerator(this.props);
    }
}

export default MessageComponent