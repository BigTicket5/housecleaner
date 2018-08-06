import React from "react";
import {Route,Switch,Redirect} from "react-router-dom";
import UserPageLayout from './UserPageLayout';
import HomePage from '../pages/HomePage'
class MainPageLayout extends React.Component{
    render(){
        return(
            <div>
                <main>
                    <Switch>
                        <Route path="/" exact component = {HomePage}/>
                        <Route path="/users" component={UserPageLayout} />
                        <Redirect to="/" />
                    </Switch>
                </main>
            </div>
        )
    }
}

export default MainPageLayout;
