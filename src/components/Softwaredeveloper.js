import React, {Component} from 'react';
import NavMain from './NavMain';
import Navhome from './Navhome';
import Cutout from "./images/Cutout 1.svg";
import Developer from "./images/devphoto.png";
import Subscribe from "./Subscribe";
import Footer from './Footer';
import Arrowsup from './Arrowup';

class Softwaredevs  extends React.Component{
    render(){
        return(
            <div>           
                <section className="hood" >
                    <div className="content">
                        <div className="dev_con1">
                            <div className="dev_note">
                            <h5>
                                The<br/>
                                Learnable<br/>
                                Software<br/>
                                developer
                            </h5>

                            <p>
                                Creativity means a lot to us. So we look for people who can think<br/>
                                both logistically and artistically, and who know that limits are<br/>
                                made to be pushed. We value skill and aptitude, but we honor<br/>
                                those who care about working with their team to add the<br/>
                                Genesys flavour to every project.<br/>
                                <br/> 
                                As a developer, being part of the team exposes you to a range of<br/>
                                diverse, like-minded talented people who are sure to make the<br/>
                                experience fun for you. You’ll get a shot at building amazing<br/>
                                things, developing yourself, learning on the job, while<br/>
                                exchanging healthy jokes and having random hangouts once in a while.
                            </p>
                            </div>
                            

                            <div className="cut_out1">
                                <img  src={Cutout}/>
                            </div>
                        </div>
                        
                        <div className="quote">
                            <q>
                                You are someone people<br/>can count on. Every day,<br/> 
                                you come in ready to make<br/>great things happen.
                            </q>
                        </div>

                        

                        <div className="dev_con2">
                            <div className="dev_" >
                                <img src={Developer}/>
                            </div>

                            <div className="dev_note_2">
                                <h6>We expect you to...</h6>
                                <p>
                                    Play nice with other people.<br/>
                                    <br/>
                                    Be an actively engaging person. That means you are present,<br/>
                                    motivated, and social. You know how to communicate effectively<br/>
                                    with your teammates. Love to code. You understand the basics of programming and<br/>
                                    object-oriented design and development.<br/>
                                    <br/>
                                    Have an eye for detail. Your keen observation helps you catch<br/>
                                    discrepancies and fix them quickly.<br/>
                                    <br/>
                                    Be innately curious. Your love for technology is insatiable, so<br/>
                                    you’re always researching and experimenting. Learning new<br/>
                                    technical skills while on the job is something you look forward to.<br/>
                                    <br/>
                                    Appreciate good design. You want to make something that<br/>
                                    doesn't just work flawlessly but looks amazing.
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    
                    
                </section>
                <Arrowsup/>
                <Subscribe/>
        </div>
        );
    }
}
export default Softwaredevs;