import React, {Component} from 'react';




class Subscription extends React.Component{
    render(){
        return(
            <div>          
                <section className="subscribe">    
                    <div className="subs">
                        
                            <p className="sub_link">
                                Stay up to date on what we<br/>
                                are doing and new learning<br/>
                                opportunities
                            </p>
                      
                            <div>
                                <form  >               
                                    <input type="email" id="email" name="email" placeholder="Your Email"/>
                                </form> 
                                <a href="#">View Privacy Policy</a>
                            </div>

                            <div>
                            <input type="submit" id="subscribe" name="subscribe" value="SUBSCRIBE"/>                       
                            </div>
                    </div>                   
                </section>
            </div>
            
        );
    }
}
export default Subscription;