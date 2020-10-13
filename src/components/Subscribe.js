import React from 'react';
import Up from "./images/arrowup.svg";

const subscribe=()=>{
    return(
        <div>
             <img src={Up}/>
             {/* option for subscriptions */}
             <section className="subscribe">
               <p id="sub_link"><a href="#" >Stay up to date on what
                    we are doing and new learning opportunities</a></p>
               <form>
                   <input type="email" id="email" name="email" placeholder="Your Email"/>
                   <input type="submit" id="subscribe" name="subscribe" value="SUBSCRIBE"/>
               </form>
               <a href="#">View Privacy Policy</a>
            </section>
        </div>
    );
}

export default subscribe;