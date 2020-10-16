import React, {Component} from 'react';




class Subscription extends React.Component{
    render(){
        return(
            <div>
            
                <section className="subscribe">
                
                {/* option for subscriptions */}
                    <div className="subs">
                        
                            <p className="sub_link">
                                Stay up to date on what we<br/>
                                are doing and new learning<br/>
                                opportunities
                            </p>

                            

                            <form className="sub_form" >               
                                <div className="email_">
                                <input type="email" id="email" name="email" placeholder="Your Email"/>
                                <a href="#">View Privacy Policy</a> 
                                </div>                          
                            </form>                             
                    </div>
                     <input type="submit" id="subscribe" name="subscribe" value="SUBSCRIBE"/>   
                </section>
            </div>
            
        );
    }
}
export default Subscription;