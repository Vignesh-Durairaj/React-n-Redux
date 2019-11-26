import React, {Component} from 'react';

export class FavouriteColourForm extends Component {
    state = {value : ""}

    newColour = e => this.setState({value : e.target.value})
    submitColour = event => {
        console.log(`New Colour : ${this.state.value}`);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.submitColour}>
                <label>Favourite Color : <input type="color" onChange={this.newColour}/></label>
                <button>Click</button>
            </form>
        )
    }
}

export default FavouriteColourForm