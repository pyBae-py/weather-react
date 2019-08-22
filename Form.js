import React, { Component } from 'react';
import '../style.css';

class Form extends Component {
    state = {}
    render() {
        return (
            <div className="form">
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="City...."></input>
                    <input type="text" name="country" placeholder="Country...."></input>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Form;