import React from 'react';
import {link, withRouter} from 'react-router-dom';

const Navigation = () => {
    return(
        <div className="header">
            <nav>
                <link class="learnhome" to = "/Learnable">Learnable</link>
                <link class="agora">Agora</link>
                <link class="startzone">StartZone</link>
                <link class="about">About</link>
                <link class="contact">Contact</link>
                <link class="devstudio">Dev Studio</link>
            </nav> 
        </div>
    );
}

export default withRouter(Navigation);