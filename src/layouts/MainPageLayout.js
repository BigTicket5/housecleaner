import React from "react";
import {Route,Switch,Redirect,Link} from "react-router-dom";
import UserPageLayout from './UserPageLayout';
import ServicePageLayout from './ServicePageLayout';
import HomePage from '../pages/HomePage'
class MainPageLayout extends React.Component{
    render(){
        return(
            <div>
                <Link to="/">Home</Link>
                <Link to="/user">Profile</Link>
                <Link to="/services">Service</Link>
                <main>
                    <Switch>
                        <Route path="/" exact component = {HomePage}/>
                        <Route path="/services" component = {ServicePageLayout}/>
                        <Route path="/user" component={UserPageLayout} />
                        <Redirect to="/" />
                    </Switch>
                </main>
            </div>
        )
    }
}

export default MainPageLayout;
