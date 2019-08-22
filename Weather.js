import React, { Component } from 'react';

const divStyle = {
    wordSpacing: '5px'
};

class Weather extends Component {


    state = {}
    render() {
        return (
            <div style={divStyle}>
                <p >Temperature:{(this.props.temperature - 273).toFixed(2)}</p>
                <p >City:{this.props.city}</p>
                <p >Country:{this.props.country}</p>
                <p >Humidity:{this.props.humidity}%</p>
                <p >Description:{this.props.temperature}</p>
            </div>
        );
    }
}

export default Weather;