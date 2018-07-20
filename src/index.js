import React from 'react';
import ReactDOM from 'react-dom';

//COMPONENTS
import Header from './components/header';

const MyMessage = () => {
    return (
        <oneDivAllowed className = 'main'>     {/* className JSX = class HTML*/}
            <Header/>
        </oneDivAllowed>
    )
};
ReactDOM.render(<MyMessage/>, document.querySelector('#root'));

// const MyMessage2 = () => {
//     return React.createElement('h1', {className: 'al2'}, 'injecting element with pure JavaScript')
// };
// ReactDOM.render(<MyMessage2/>, document.querySelector('#root'));

// const MyMessage3 = () => {
//     return React.createElement('h1', {className: 'al2'}, React.createElement('div'))
// };
// ReactDOM.render(<MyMessage3/>, document.querySelector('#root'));