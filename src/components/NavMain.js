import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Logo from "./images/logo.svg";


const Navigation = () => {
    return(
        <div >
            {/* header for mobile */}
            <div className="header">
                <img id="logo_" src={Logo}/>
                <ul>
                    <li> <Link class="learnhome" to = "/Learnable">Learnable</Link></li>
                    <li><Link class="agora" to="/">Agora</Link></li>
                    <li><Link class="startzone" to="/">StartZone</Link></li>
                    <li><Link class="about" to="/">About</Link></li>
                    <li><Link class="contact" to="/">Contact</Link></li>
                    <li><Link class="devstudio" to="/">Dev Studio</Link></li>
                </ul>
            </div>                  
                <div>
                    <p>build a product with</p>
                    <button>DEVSTUDIO</button>
                </div>     
        </div>
    );
}

export default withRouter(Navigation);