import React, { Component } from 'react';
import PagesList from './pages_list'


class InputLine extends React.Component {

    state = {
      functionalValue: ''
    };

    dataFromInput = (a) => {
        console.log(a.target.value);
        this.setState({functionalValue: a.target.value});
    };

    render(){
        return (
            <div className ='inputLine'>
                <input
                    type="text"
                    onChange={this.dataFromInput}
                />
                <div>{this.state.functionalValue}</div>
                <PagesList passing={this.state.functionalValue}/>
            </div>
        )
    }
};

export default InputLine;
