import React from 'react';

let profileObj = {
    name: 'Al2',
    status: 'Studiing React',
    technoligy: 'awesome',

};




const Profile = () => {
    return (
        <div className='profile'>
            <h1>My profile</h1>
            <p>Author: {profileObj.name}. </p>
            <p>Doing: {profileObj.status}. </p>
            <p>How is it? - {profileObj.technoligy}! </p>
        </div>
    )
};


export default Profile;