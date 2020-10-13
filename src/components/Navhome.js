import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const navLearnable = () =>{
    return(
        <div >
            
            <ul className="header_">
                <li> <Link class="home" to = "/Learnable">Home</Link></li>
                <li> <Link class="softwareDev" to = "/Softwaredeveloper">Software Developers</Link></li>
                <li><Link class="productdesign" to="/Productdesigner">Product Designers</Link></li>
                <li><Link class="apply" to="/Apply">Apply</Link></li>
                <li><Link class="journal" to="/Journal">Journal</Link></li>
                <li><Link class="faq" to="/Faq">FAQ</Link></li>
            </ul>
        </div>
    );
}

export default withRouter(navLearnable);