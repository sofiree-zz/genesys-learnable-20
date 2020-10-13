import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const navLearnable = () =>{
    return(
        <div className="header_">
            <nav>
                <Link class="home" to = "/Learnable">Home</Link>
                <Link class="softwareDev" to="/Softwaredeveloper">Software Developers</Link>
                <Link class="productdesign" to="/Productdesigner">Product Designers</Link>
                <Link class="apply" to="/Apply">Apply</Link>
                <Link class="journal" to="/">Journal</Link>
                <Link class="faq" to="/">FAQ</Link>
            </nav> 
        </div>
    );
}

export default withRouter(navLearnable);