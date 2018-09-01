import React from 'react';
// import Header from './Header';
import Profile from './Profile';
import AddProfile from './AddProfile';


export default class ProfileManagerApp extends React.Component {

    render() {
        return(
            <div>
                <div className="container">
                    <Profile />
                </div>
                <div className="container">
                    <AddProfile />
                </div>
            </div>
        );

    }


}