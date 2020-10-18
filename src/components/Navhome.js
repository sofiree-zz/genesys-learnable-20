import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';


class NavHome extends React.Component{
    render(){
        return(
            <header className="header2">
                <div className="nav2">
                <ul>
                    <li> <Link className="sec_link" to = "/Learnable">Home</Link></li>
                    <li> <Link className="sec_link" to = "/SoftwareDeveloper">Software Developers</Link></li>
                    <li><Link className="sec_link" to="/ProductDesigner">Product Designers</Link></li>
                    <li><Link className="sec_link" to="/Apply">Apply</Link></li>
                    <li><Link className="sec_link" to="/Journal">Journal</Link></li>
                    <li><Link className="sec_link" to="/FAQ">FAQ</Link></li>
                </ul>
                </div>         
                
            </header>
        );
    }
}

export default withRouter(NavHome);