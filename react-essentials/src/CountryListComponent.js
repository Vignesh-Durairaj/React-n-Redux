import React, {Component} from 'react';
import {PropTypes} from 'prop-types'

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

export class CountryListComponent extends Component {
    static defaultProps = {
        ctrys : [{"name": "India", "city": "Chennai", "currency": "Indian Rupee"}]
    }

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
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/5')
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
                <b><u>Travel product on Sales</u></b>
                {!this.state.loaded ? "loading ..." : 
                <div>
                    {this.state.data.map((product, j) => {
                        return (
                            <div key={j}>
                                <br />
                                <b>{product.name}</b>
                                <br />
                                <img src={product.image} height={100} alt={product.image_title}/>
                            </div>
                        )
                    })}
                </div>}
                <hr />
                <label><b><u>List of countries visited : </u></b></label>
                <br />
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

CountryListComponent.propTypes = {
    ctrys: PropTypes.array
}

Country.propTypes = {
    name: PropTypes.string,
    city: PropTypes.string,
    ccy: PropTypes.string, 
    fulfilledTravel: PropTypes.bool
}

export default CountryListComponent