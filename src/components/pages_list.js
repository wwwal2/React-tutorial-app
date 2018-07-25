import React, { Component } from 'react';


class PagesList extends React.Component {
    render(){
        return (
            <div className ='pagesList'>
                <h1> {this.props.passing} </h1>
            </div>
        )
    }
};


export default PagesList;
