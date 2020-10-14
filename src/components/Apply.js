import React, {Component} from 'react';
import NavMain from './NavMain';
import Navhome from './Navhome';
import Apply1 from "./images/apply1.png";
import Apply2 from "./images/apply2.png";
import Subscribe from './Subscribe';
import Footer from './Footer'; 

class Application extends React.Component{
    render(){
        return(
            <div>
                <div className="content3">
                    <section className="text_note">
                        <h2>Apply Your knowledge</h2>
                        <p>
                            Before you’re done with Learnable, you will apply everything 
                            you’ve learned. You’ll be part of a team made up of 2 designers 
                            and 4 developers. You’ll get to work alongside the Genesys team on projects 
                            and we’ll teach you how “the sauce” is made. By combining technology, design, and great ideas, 
                            your team will have the unique opportunity to collaborate with the Genesys team to bring your own 
                            concept to life, from the first pen sketches to the final functioning product. You’ll then get to show 
                            off your special project to everyone.
                        </p>
                    </section>
                        <img id="app_1" src={Apply1}/>
                    <div>
                        <img id="app_2" src={Apply2}/>
                        <section className="articles">
                            <article id="art_1">
                                <h3>How To Get In</h3>
                                We are very deliberate with our selection process. 
                                We are on a quest to find amazing people who are passionate 
                                about learning and growing their careers in the software industry. 
                                To this end, we have designed our selection process to help us get such people.
                            </article>

                            <article id="art_1">
                                <h3>Online Application</h3>
                                Introduce yourself to us by filling out our 
                                application form. When you’re done filling out the form, proceed to 
                                download our prep curriculum that contains everything you need to prepare 
                                for the physical and technical assessment.
                                <a href="#">APPLY HERE</a>
                            </article>

                            <article id="art_3">
                                <h3>Phone Call Interviews</h3>
                                We will reach out to you to discuss possible opportunities, ascertain 
                                where you fit in with us, and answer any questions you might have about the program. 
                                It’s supposed to be a chat, getting nervous defeats the aim.
                            </article>

                            <article id="art_4">
                                <h3>Final Assessment</h3>
                                At this stage, we’ll get to meet you in person for the first time. 
                                You’ll be invited to the hub for a physical assessment that includes a technical assessment, 
                                a psychometric test and a face-to-face chat with our team.
                            </article>

                            <article id="art_5">
                                <h3>Get In</h3>
                                If you make it to this stage, you can pack your bags and head down to the beautiful city of Enugu. 
                                We will join you on your journey to build that career of your dreams and 
                                provide all the help, support and love that we can muster along the way!
                            </article>

                        </section>
                    </div>    
                </div> 
                <Subscribe/>        
        </div>
        );
    }
}
export default Application;