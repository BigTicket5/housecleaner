import React from "react";
import {Route,Switch,Redirect} from "react-router-dom";
import UserPageLayout from './UserPageLayout';
import ServicePageLayout from './ServicePageLayout';
import PrimaryMenu from './menus/PrimaryMenu';
import HomePage from '../pages/HomePage'
class MainPageLayout extends React.Component{
    render(){
        return(
            <div>
                <PrimaryMenu/>
                <main>
                    <Switch>
                        <Route path="/" exact component = {HomePage}/>
                        <Route path="/user" component={UserPageLayout} />
                        <Route path="/services" component = {ServicePageLayout}/>
                        <Redirect to="/" />
                    </Switch>
                </main>
            </div>
        )
    }
}

export default MainPageLayout;
