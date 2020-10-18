import React, {Components} from 'react';

import Up from "./images/arrowup.svg";




class ArrowUp extends React.Component{
    render(){
        return(
            <div className="arr_con1">
                {/* arrow taking you back up the page */}
                <button className="up_arrow">
                    <img src={Up}/> 
                </button>
            </div>
        );
    }
}

export default ArrowUp;