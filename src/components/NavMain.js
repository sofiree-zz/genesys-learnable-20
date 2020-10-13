import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Logo from "./images/logo.svg";
import Burger from "./images/menu_24px.svg";

const Navigation = () => {
    return(
        <div className="header">
            {/* header for mobile */}
         <img id="logo_" src={Logo}/>

         {/* this image here is supposed to pop ou the nav below....??? toogle or something...*/}
            <img id="menu_" src={Burger}/>
                <nav>
                    <Link class="learnhome" to = "/Learnable">Learnable</Link>
                    <Link class="agora" to="/">Agora</Link>
                    <Link class="startzone" to="/">StartZone</Link>
                    <Link class="about" to="/">About</Link>
                    <Link class="contact" to="/">Contact</Link>
                    <Link class="devstudio" to="/">Dev Studio</Link>
                </nav>       
        </div>
    );
}

export default withRouter(Navigation);