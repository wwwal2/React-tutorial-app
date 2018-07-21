import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <h1>HEADER</h1>
            <h1> Today is {JSON.stringify(new Date())}</h1>
        </div>
    )
};


export default Header;