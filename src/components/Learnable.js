import React, {Component} from 'react';

import NavMain from './NavMain';
import NavHome from './NavHome';
import Video from "./images/learnablevideo.png";
import Play from "./images/Playbutton.svg";
import Cutout from "./images/Cutout 1.svg";
import Learn from "./images/unusual.png";
import Eligible from "./images/eligible.png";
import Culture from "./images/culture.png";
import Collage1 from "./images/phototile.png";
import Experts from "./images/expertphoto.png";
import Experts1 from "./images/expertphoto1.png";
import Experts2 from "./images/expertphoto2.png";
import Experts3 from "./images/expertphoto3.png";
import Experts4 from "./images/expertphoto4.png";
import Experts5 from "./images/expertphoto5.png";
import Collage2 from "./images/phototile2.png";

import Drop from "./images/dropdown.svg";
import Journal from "./images/journal.png";
import Journal1 from "./images/journal1.png";
import Journal2 from "./images/journal2.png";
import Journal3 from "./images/journal3.png";

import FastCompany from "./images/fastlogo.svg";
import Uxcompany from "./images/uxlogo.svg";
import Wired from "./images/wiredlogo.svg";
import Webvision from "./images/visionlogo.svg";
import Interaction from "./images/interactionSAlogo.svg";
import Subscribe from './Subscribe';
import ArrowDown from './ArrowDown';
import ArrowUp from './ArrowUp';
import Footer from './Footer';



class Learnable extends React.Component{
    render(){
        return(
            <div>
             <NavHome/> 
                <section className="intro_learn">
    {/* introduction to learnable */}
                    <div className="learn1">                    
                        <h3>Coming Soon: Learnable '20</h3>
                        <p>
                            We've started taking in applications
                            for the next batch of learnable<br/>
                            interns. Applications are on till the 21st of Febuary   
                        </p>
                    </div>  
                    <div className="learn2">
                    <p>Click link below to download</p>
                     <a href="#">Learnable '20 Brochure</a>
                    </div>          
                </section>
{/* everything is learnable */}
                <section className="every_thing">
                    <div className="desc_con">
                        <div className="description">
                            <h3>Everything<br/> Is Learnable</h3>
                            <p>
                                Learnable is the perfect product<br/>
                                development internship program brought
                                to<br/>
                                you by Genesys.
                            </p>
                        </div>
                    </div>
{/* stats */}
                    <section className="stats">
                        <div className="stat_of_stat">
                            <div>
                                <h2>305</h2>
                                <p>Young Software<br/>Developers Trained</p>
                            </div>
                            <div>
                                <h2>2100</h2>
                                <p>Tech<br/>Enthusiats</p>
                            </div>
                            <div>
                                <h2>8</h2>
                                <p>StartUps<br/>Incubated</p>
                            </div>
                            <div>
                                <h2>250</h2>
                                <p>Small Businesses<br/>Supported</p>
                            </div>
                        </div>             
                    </section>  
{/* learnable video */}
                        <section className="video">
                        
                            <div className="image__"> 
                            <ArrowDown/>
                                <div className="img_con2">
                               
                                    <img className="vid_1" src={Video}/>
                                   
                                    <div className="img3">
                                    <img   src={Play}/>
                                    <p>Discover the Learnable Experience</p>
                                    </div>
                                    
                                </div> 
                            </div>

                            <div className="sphereofspheres">

                                <div className="sphere1">
                                  
                                        <a href="#"><h6>Development</h6></a>
                                        <p>What to expect</p>
                                   
                                </div>                        
                                <div className="sphere2">
                                   
                                        <a href="#"><h6>Product Design</h6></a>
                                        <p>What to expect</p>
                                   
                                </div>
                            </div>                               
                        </section>                                             
                </section>



{/* we make people great */}
                <section className="great_people">
                    <div className="intro_notes6">     
                        <div class="textinfo">
                            <h3>We Make People Great</h3>
                            <p>As part of our calculated efforts to
                                contribute to the emerging<br/>knowledge and skill driven 
                                economy of Nigeria, Learnable is a <br/>6-month product 
                                development training program with an
                                emphasis<br/>on software programming and product Design.
                                It is for outstanding <br/>yound individuals 
                                who are passionate about building a career
                                in the software industry.<br/>
                                <br/>
                                We primarily educate and groom software Developers<br/>and designers, preparing them for the industry.
                            </p>
                        </div>
                        <div className="cutout">
                            <div className="cut_out">
                                    <div className="cutimg">
                                        <img  src={Cutout}/>
                                    </div>
                            </div>
                        </div>
                    </div>
                </section>

{/* unusal learning experience */}
                <section className="unusual">
                    <div className="intro_notes7">
                        
                            <img className="unusual_img" src={Learn}/>
                        
                        <div className="text_____">
                            <h3>An Unusual Learning Experience</h3>
                            <p>
                                At Genesys, we believe in the learning
                                processes as much as we believe in<br/>the results. 
                                By applying a combination of active and social learning methodologies,<br/>
                                we create an environment that involves the learner in the 
                                learning process<br/>while providing avenues for collaboration and peer-to-peer mentorship.<br/>
                                <br/>
                                Our methods over the years have helped
                                us discover ways to take education<br/>out of the classroom. 
                                We introduce our interns to learning by experimentation<br/>and problem-solving. 
                                To us, every task is an opportunity to learn.
                            </p>
                        </div>
                    </div>
                    
                </section>

{/* for developers */}
                <section className="for_developers">
                    <div className="developers">
                        <div className="text_note">
                            <h6>FOR DEVELOPERS</h6>
                            <h3>Learn to Build Software The Right Way</h3>
                            <p>
                                We love to build stuff. Really awesome stuff. 
                                That’s why we<br/>have developed a learning program that will empower 
                                you to create amazing software the right way.<br/>
                                <br/>
                                We believe in learning through experimentation. 
                                Our aim is to<br/> nurture and grow bright young minds
                                from the get-go because<br/>that’s how our industry will thrive.  
                            </p>
                            <a href="#">LEARN MORE</a>
                        </div>
                        
                        <div class="topics">
                            <div className="js_"><p>Program with Javascript</p></div>
                            <div className="git_"><p>Version Control with Git</p></div>
                            <div className="react_"><p>Web Development with React</p></div>
                            <div className="node_"><p>Building APIs with NodeJS</p></div>
                            <div className="mongo_"><p>Managing Data with MongoDB</p></div>
                            <div className="heroku_"><p>Deploying with Heroku</p></div>
                        </div>  
                    </div>              
                </section>

{/* for designers */}
                <section className="for_designers"> 
                    <div className="designers">
                        <div className="topics">
                            <div className="ui_"><p>Design User Interface</p></div>
                            <div className="ux_"><p>Craft User Experiences</p></div>
                            <div className="thinking"><p>Apply Design Thinking</p></div>
                            <div className="architecture"><p>Build Information Architecture</p></div>
                            <div className="copy_write"><p>Copy write for Projects</p></div>
                            <div className="brand"><p>Brand Products</p></div>
                        </div>    
                        <div className="text_note_">
                            <h6>FOR DESIGNERS</h6>
                            <h3>Design Different</h3>
                            <p>
                                We love to make things work perfectly. 
                                That’s why our design learning path exposes you to the science of
                                user-oriented design.<br/>
                                <br/>
                                Design is at the heart of everything 
                                we do at Genesys. Right from the start of the program, 
                                you’ll get your hands dirty as you get practically involved in 
                                the world’s most modern design concepts. At Genesys, we’re building designers who put the users first.
                            </p>
                            <a href="#">LEARN MORE</a>
                        </div> 
                    </div>     
                </section>

{/* eligible? */}
                <section className="eligible">
                    <div className="intro_notes10">
                        <div className="text______">
                            <h3>Who Is Eligible?</h3>
                            <p>
                            To be a participant of lernable, you need to be a young and passionate person interested in launching a super tech career. 
                            You will need to have foundational knowledge in whatever 
                            learning path you are applying for and be available for the six month duration of the program.<br/>
                            <br/>
                            To become a part of the Genesys family, 
                            you must express some of the qualities we consider important. 
                            You are someone that takes responsibilities and initiatives. 
                            You will also express the ability to produce quality stuff in good time with high consistency.   
                            </p>
                        </div>

                        <img className="eligible_" src={Eligible}/>
                    </div>
                    
                </section>

{/* our culture */}
                <section className="culture">
                    <div className="intro_notes8">
                             
                            
                            {/* <div className="cul_con"> */}
                            <img className="culture_" src={Culture}/>
                               <img className="play_"  src={Play}/>
                            {/* </div> */}
                        
                        <div className="text_______">
                            <h3>Our Culture</h3>
                            <p>
                                Our culture are the unspoken things that make us who we are at <br/>Genesys. To become one of us, you need to be like the rest of us.<br/> 
                                We believe that excellence is a culture, and we are committed to a philosophy<br/> of consistent improvement in everything we do. 
                                We are<br/> passionate, candid 
                                and we trust in the power of collaboration.  
                            </p>
                        </div>
                    </div>
                </section>

{/* learning can be fun */}
                <section className="learn_fun">
                    <div className="intro_notes9">                       
                        <div className="text________">
                            <h3>Learning can Be Fun...</h3>
                            <p>
                                We believe learning should be a fun experience. 
                                For this reason, we don’t do all the learning in the classroom.<br/>
                                <br/>
                                The Learnable experience can not be complete without 
                                the bag of fun times which you’ll have. 
                                To us, every task is an opportunity to have some fun. But we 
                                do well to throw in a good number of activities to add to this. 
                                You will find yourself partaking in a lot of healthy activities
                                such as cooking, sports, music, hangouts, and even random dates.<br/>
                                <br/>
                                Trust us when we say we know how to have fun.
                            </p>              
                        </div>
                        <img className="fun_" src={Collage1}/>
                    </div>
                    
                </section>

{/* meet the experts */}
            <section className="meet">
                <div className="meet_con">
                    <div className="experts">
                            <div className="num1">
                                <div>                                  
                                    <div><img src={Experts}/></div>                                   
                                </div>
                                <h6>Nnamdi</h6>
                                <p>Managing Director</p>
                            </div>

                            <div className="num2">
                                <div>                                 
                                    <div><img src={Experts1}/></div>                                   
                                </div>
                                <h6>Ositadinma</h6>
                                <p>Learnable<br/>Coordinator</p>
                            </div>

                            <div className="num3">
                                <div>                                    
                                    <div><img src={Experts2}/></div>                                   
                                </div>
                                <h6>Idowu</h6>
                                <p>Scrum Professional</p>
                            </div>

                            <div className="num4">
                                <div>                                 
                                    <div><img src={Experts3}/></div>                                 
                                </div>
                                <h6>Ezra</h6>
                                <p>Ass. Learnable<br/>Coordinator</p>
                            </div>

                            <div className="num5">
                                <div>                                  
                                    <div><img src={Experts4}/></div>                                   
                                </div>
                                <h6>David</h6>
                                <p>Desing Lead</p>
                            </div>

                            <div className="num6">
                                <div>                                   
                                    <div><img src={Experts5}/></div>                                   
                                </div>
                                <h6>Emmanuel</h6>
                                <p>Software Lead</p>
                            </div>                           
                    </div>
                    <div className="note"> 
                        <h3>Learn From The Experts</h3>
                        <p>
                            As a learnable intern, you will be learning 
                            from the best software developers and product 
                            designers our industry has to offer. 
                            You will spend the first 3 months in the classroom 
                            with industry experts who have a wealth of experience 
                            from developing amazing products for various customers in our industry. 
                        </p>
                    </div>                   
                </div>
            </section>

{/*Anti classroom learning */}
                <section className="anti_class">
                    <div className="intro_notes9">
                        <div className="text________">
                            <h3>Learning Doesn't Always Have To Be In The Classroom</h3>
                            <p>
                            We have designed other learning activities that aren’t <br/>classroom-based. 
                            You will learn how to be a better person, how to<br/>
                            have good conversations, how to work better with 
                            people and most<br/> importantly, how to lead other people. 
                            Hey! We’ll even teach you <br/>how to run a business during the Learnable Business Sessions.
                            </p>
                        </div>
                        <img className="anti_" src={Collage2}/>
                    </div>
                    
                </section>

{/*Apply Knowledge */}
            <section className="learnable_1">
                <div className="intro_notes2">
                    <img className="learn_img" src={Culture}/>
                    <div className="text_">
                    <h2>Apply Your Knowledge</h2>
                    <p>
                        Before you’re done with Learnable, you will apply 
                        everything you’ve<br/> learned. You’ll be part of a team 
                        made up of 2 designers and 4<br/> developers. You’ll get 
                        to work alongside the Genesys team on<br/> projects and 
                        we’ll teach you how “the sauce” is made. By combining<br/> 
                        technology, design, and great ideas, your team will 
                        have the unique<br/>opportunity to collaborate with the 
                        Genesys team to bring your own<br/>concept to life, from 
                        the first pen sketches to the final functioning<br/>product. 
                        You’ll then get to show off your special project to everyone.
                    </p>
                    <a href="#">GET STARTED</a>
                </div>
                </div>
               
            </section>

{/* Frequent questions */}
            <section className="frequent">
                <div className="freq_con">
                <h2>FAQ</h2>
                <dl className="asked_questions_">
                    {/* faq 1 */}
                    <dt aria-expanded="false" aria-controls="faq1_ans">
                                    How many people can attend a course? <img src={Drop}/>   
                            </dt>
                            <dd id="faq1_ans" class="ans" > </dd>
                            <hr/>
    {/* faq 2 */}
                            <dt aria-expanded="false" aria-controls="faq2_ans">
                                 What's the learning experience like? <img src={Drop}/>      
                            </dt>
                            <dd id="faq2_ans" class="ans" ></dd>
                            <hr/>
    {/* faq 3 */}
                            <dt aria-expanded="false" aria-controls="faq3_ans">
                                    Who are the coaches? <img src={Drop}/> 
                            </dt>
                            <dd id="faq3_ans" class="ans"> </dd>
                            <hr/>
    {/* faq 4 */}
                            <dt aria-expanded="false" aria-controls="faq3_ans">
                               How far in advance should I book? <img src={Drop}/> 
                            </dt>
                            <dd id="faq3_ans" class="ans"> </dd>   
                            <hr/>
    {/* faq 5 */}
                            <dt aria-expanded="false" aria-controls="faq3_ans">
                                CAn you customize your coourses? <img src={Drop}/> 
                            </dt>
                            <dd id="faq3_ans" class="ans"> </dd>  
                            <hr/>

                            <a href="#">SEE ALL</a> 
                </dl>  
               

                </div>
                           
            </section>

{/* Journal */}
            <section className="journals">
                <div className="journ_con">
                    <div>
                    <h2>Journal</h2>
                    <a href="#">VIEW ALL</a>
                    </div>
                    
                    <div className="journal">
                        <div className="j1">
                            <img src={Journal}/>
                            <a href="#"><h6>INSPIRATION</h6></a>
                            <h4>Learn Design Thinking like a Pro and Build Projects that people will care about</h4>
                            <p>David Mong, Apr 9, 2020</p>
                        </div>
                        <div className="j1">
                            <img src={Journal1}/>
                            <a href="#"><h6>INSPIRATION</h6></a>
                            <h4>Learn Design Thinking like a Pro and Build Projects that people will care about</h4>
                            <p>David Mong, Apr 9, 2020</p>
                        </div>
                        <div className="j1">
                            <img src={Journal2}/>
                            <a href="#"><h6>INSPIRATION</h6></a>
                            <h4>Learn Design Thinking like a Pro and Build Projects that people will care about</h4>
                            <p>David Mong, Apr 9, 2020</p>
                        </div>
                        <div className="j1">
                            <img src={Journal3}/>
                            <a href="#"><h6>INSPIRATION</h6></a>
                            <h4>Learn Design Thinking like a Pro and Build Projects that people will care about</h4>
                            <p>David Mong, Apr 9, 2020</p>
                        </div>
                    </div>
                </div>
                
            </section>

{/* mentions */}
            <section className="mentions">
                
                    <h2>Mentioned In</h2>
                    <div className="mention">
                        <img src={FastCompany}/> <img src={Uxcompany}/>
                        <img src={Wired}/> <img src={Webvision}/>
                        <img src={Interaction}/>
                    </div>
            </section>
            <ArrowUp/>
            <Subscribe/>
        </div>
        );
    }
}
export default Learnable;