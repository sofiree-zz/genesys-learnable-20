import React, {Component} from 'react';
import Up from "./images/arrowup.svg";


class Subscription extends React.Component{
    render(){
        return(
            <div className="subscribe">
                <img src={Up}/>
                {/* option for subscriptions */}
                <section className="subs">
                    <p id="sub_link"><a href="#" >Stay up to date on what
                        we are doing and new learning opportunities</a></p>
                    <form className="sub_form">
                        <input type="email" id="email" name="email" placeholder="Your Email"/>
                        <input type="submit" id="subscribe" name="subscribe" value="SUBSCRIBE"/>
                    </form>
                    <a href="#">View Privacy Policy</a>
                </section>
            </div>
        );
    }
}
export default Subscription;