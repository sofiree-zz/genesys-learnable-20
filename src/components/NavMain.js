import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const Navigation = () => {
    return(
        <div className="header">
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