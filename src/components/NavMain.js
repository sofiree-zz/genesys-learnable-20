import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const Navigation = () => {
    return(
        <div className="header">
            {/* header for mobile */}
         <img id="logo_" src="src/logo.svg" />

         {/* this image here is supposed to pop ou the nav below....??? toogle or something...*/}
            <img id="menu_" src="src/images/menu_24px.svg"/>
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