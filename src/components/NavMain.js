import React,{Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import Logo from "./images/logo.svg";

class Navigation extends React.Component{
    render(){
        return(             
                    <header className="header1">
                        <div className="logo_"><img src={Logo}/></div>
                        <div className="nav">
                            <ul>
                                <li><Link className="learnhome" to = "/Learnable">Learnable</Link></li>
                                <li><Link className="agora" to="/">Agora</Link></li>
                                <li><Link className="startzone" to="/">StartZone</Link></li>
                                <li><Link className="about" to="/">About</Link></li>
                                <li><Link className="contact" to="/">Contact</Link></li>
                                <li><Link className="devstudio" to="/">Dev Studio</Link></li>
                            </ul>
                        </div>                  
                        <div className="sideheader">
                            <p>build a product with</p>
                            <button className="buttons">DEVSTUDIO</button>
                        </div> 
                   </header>                
            );
    }
}
export default  withRouter(Navigation); 