import React, {Components} from 'react';
import Down from "./images/arrowdown.svg";





class ArrowDown extends React.Component{
    render(){
        return(
            <div className="arr_con">
                {/* arrow taking you down to end of page */}
                <button className="down_arrow">
                    <img src={Down}/>
                </button>
            </div>
        );
    }
}

export default ArrowDown;