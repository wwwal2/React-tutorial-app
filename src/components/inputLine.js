import React, { Component } from 'react';


class InputLine extends React.Component {

    state = {
      functionalValue: 'Search'
    };

    dataFromInput = (a) => {
        console.log(a.target.value);
    };

    render(){
        return (
            <div className ='inputLine'>
                <input
                    type="text"
                    onChange={(insertedValue) => this.dataFromInput(insertedValue)}
                />
                <div>{console.log(this.state.functionalValue)}</div>
            </div>
        )
    }
};

export default InputLine;
