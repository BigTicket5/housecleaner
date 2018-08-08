import React from 'react';
import {Link} from 'react-router-dom';

class HeaderMenu extends React.Component{
    render(){
        return(
            <div>
                <div><Link to="/">Home</Link></div>
                <div>
                    <Link to="/services/houseclean">House Clean</Link>
                    <Link to="/services/TVmounting">TV Mounting</Link>
                    </div>
                <div><Link to="/user">Profile</Link></div>
            </div>
        );
    }
}

export default HeaderMenu;