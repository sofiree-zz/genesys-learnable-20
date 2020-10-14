import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';


class NavLearnable extends React.Component{
    render(){
        return(
            <div >
            
                <ul className="header2">
                    <li> <Link className="home" to = "/Learnable">Home</Link></li>
                    <li> <Link className="softwareDev" to = "/Softwaredeveloper">Software Developers</Link></li>
                    <li><Link className="productdesign" to="/Productdesigner">Product Designers</Link></li>
                    <li><Link className="apply" to="/Apply">Apply</Link></li>
                    <li><Link className="journal" to="/Journal">Journal</Link></li>
                    <li><Link className="faq" to="/Faq">FAQ</Link></li>
                </ul>
            </div>
        );
    }
}

export default withRouter(NavLearnable);