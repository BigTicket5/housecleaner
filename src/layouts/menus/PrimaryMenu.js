import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class PrimaryMenu extends React.Component{
    state={
        anchorEl:null,
    };
    handleClick = event=>{
        this.setState({anchorEl:event.currentTarget});
    };
    handleClose = () =>{
        this.setState({anchorEl:null});
    };
    
    render(){
        const {anchorEl}  = this.state;
        return(
            <div>
                <Button aria-owns={anchorEl?'simple-menu':null} aria-haspopup = 'true' onClick={this.handleClick}>
                    Services
                </Button>
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

export default PrimaryMenu;