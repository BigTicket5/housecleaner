import React from "react";
import {Route} from 'react-router-dom';
import UserProfilePage from '../pages/UserProfilePage';

class UserPageLayout extends React.Component{
    render(){
        return(
            <div>
                <Route path="/user" component={UserProfilePage}/>
            </div>
        );
    }
}

export default UserPageLayout;