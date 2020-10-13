import React from 'react';

import NavMain from './NavMain';
import Navhome from './Navhome';
import Video from "./images/learnablevideo.png";
import Play from "./images/Playbutton.svg";
import Cutout from "./images/Cutout 1.svg";
import Learn from "./images/unusual.png";
import Eligible from "./images/eligible.png";
import Culture from "./images/culture.png";
import Collage1 from "./images/phototile.png";
import Experts from "./images/expertphoto.png";
import Collage2 from "./images/phototile2.png";
import Knowledge from "./images/knowledge.png";
import Drop from "./images/dropdown.svg";
import Journal from "./images/journal.png";
import FastCompany from "./images/fastlogo.svg";
import Uxcompany from "./images/uxlogo.svg";
import Wired from "./images/wiredlogo.svg";
import Webvision from "./images/visionlogo.svg";
import Interaction from "./images/interactionSAlogo.svg";
import Subscribe from './Subscribe';
import Footer from './Footer';

const learnableHomepage=()=>{
    return(
        <div>
            <Navhome/>
            <section>
{/* introduction to learnable */}
                <div>
                   
                    <h1>Coming Soon:<br/>Learnable '20</h1>
                    <p>
                        We've started taking in applications
                        for the next batch of learnable interns.
                        Applications are on till the 21st of Febuary<br/>
                        <br/>
                        Click link below to download
                    </p>
                    <a href="#">Learnable '20 Brochure</a>
                </div>            
            </section>
{/* everything is learnable */}
            <section>
                <div>
                    <div>
                        <h1>Everything Is Learnable</h1>
                        <p>
                            Learnable is the perfect product
                            development internship program brought
                            to you by Genesys.
                        </p>
                    </div>
                    
                    <div class="sphereofspheres">

                        <div class="circle1">
                            <div class="sphere1" >
                                <h3>Development</h3>
                                <p>What to expect</p>
                            </div>
                        </div>
                        
                        <div class="sphere2">
                            <div class="circle2">
                                <h3>Product Design</h3>
                                <p>What to expect</p>
                            </div>               
                        </div>
                    </div>                
                </div>        
            </section>
{/* learnable video */}
            <section>
                <img src={Video}/>
                <img class="play" src={Play}/>
            </section>
{/* stats */}
            <section>
                <div class="stats">
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
{/* we make people great */}
            <section>
                <div>
                    <div class="cutout">
                        <div>
                            <div>
                                <div>
                                    <img src={Cutout}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="textinfo">
                        <h2>We Make People Great</h2>
                        <p>As part of our calculated efforts to
                            contribute to the emerging knowledge and skill driven 
                            economy of Nigeria, Learnable is a 6-month product 
                            development training program with an
                            emphasis on software programming and product Design.
                            It is for outstanding yound individuals 
                            who are passionate about building a career
                            in the software industry.<br/>
                            <br/>
                            We primarily eductae and groom software Developersand designers, preparing them for the industry.
                        </p>
                    </div>
                </div>
            </section>
{/* unusal learning experience */}
            <section>
                <div>
                    <img src={Learn}/>
                </div>
                <div>
                    <h2>An Unusual Learning Experience</h2>
                    <p>
                        At Genesys, we believe in the learning
                        processes as much as we believe in the results. 
                        By applying a combination of active and social learning methodologies, 
                        we create an environment that involves the learner in the 
                        learning process while providing avenues for collaboration and peer-to-peer mentorship.<br/>
                        <br/>
                        Our methods over the years have helped
                        us discover ways to take education out of the classroom. 
                        We introduce our interns to learning by experimentation and problem-solving. 
                        To us, every task is an opportunity to learn.
                    </p>
                </div>
            </section>
{/* for developere */}
            <section>
                <div class="developers">
                <p>FOR DEVELOPERS</p>
                <h2>Learn to Build Software The Right Way</h2>
                <p>
                    We love to build stuff. Really awesome stuff. 
                    That’s why we have developed a learning program that will empower 
                    you to create amazing software the right way.<br/>
                    <br/>
                    We believe in learning through experimentation. 
                    Our aim is to nurture and grow bright young minds
                    from the get-go because that’s how our industry will thrive.  
                </p>
                <a href="#">LEARN MORE</a>
                </div>
                
                <div class="topics">
                    <div id="js"><p>Program with Javascript</p></div>
                    <div id="git"><p>Version Control with Git</p></div>
                    <div id="react_"><p>Web Devellopment with React</p></div>
                    <div id="node"><p>Building APIs with NodeJS</p></div>
                    <div id="mongo"><p>Managing Data with MongoDB</p></div>
                    <div id="heroku"><p>Deploying with Heroku</p></div>
                </div>               
            </section>
{/* for designers */}
            <section>
            <div class="designers">
                <p>FOR DESIGNERS</p>
                <h2>Design Different</h2>
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
                
                <div class="topics">
                    <div id="ui"><p>Design User Interface</p></div>
                    <div id="ux"><p>Craft User Experiences</p></div>
                    <div id="thinking"><p>Apply Design Thinking</p></div>
                    <div id="architecture"><p>Build Information Architecture</p></div>
                    <div id="copy_write"><p>Copy write for Projects</p></div>
                    <div id="brand"><p>Brand Products</p></div>
                </div>     
            </section>
{/* eligible? */}
            <section>
                <div>
                    <h2>Who Is Eligible?</h2>
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

                <img src={Eligible}/>
            </section>


{/* our culture */}
            <section>
                <div>
                    <img src={Culture}/> <img class="play" src={Play}/>
                </div>
                <div>
                    <h2>Our Culture</h2>
                    <p>
                        Our culture are the unspoken things that make us who we are at Genesys. To become one of us, you need to be like the rest of us. 
                        We believe that excellence is a culture, and we are committed to a philosophy of consistent improvement in everything we do. 
                        We are passionate, candid 
                        and we trust in the power of collaboration.  
                    </p>
                </div>
            </section>
{/* learning can be fun */}
            <section>
                <div>
                    <img src={Collage1}/>
                </div>
                <div>
                    <h2>Learning can Be Fun...</h2>
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
            </section>
{/* meet the experts */}
            <section>
                <div>
                    <div>
                        <h2>Learn From The Experts</h2>
                        <p>
                            As a learnable intern, you will be learning 
                            from the best software developers and product 
                            designers our industry has to offer. 
                            You will spend the first 3 months in the classroom 
                            with industry experts who have a wealth of experience 
                            from developing amazing products for various customers in our industry. 
                        </p>
                    </div>

                        <div class="experts">
                            <div id="num1">
                                <div>
                                    <div>
                                        <div><img src={Experts}/></div>
                                    </div>
                                </div>
                                <h6>Nnamdi</h6>
                                <p>Managing Director</p>
                            </div>

                            <div id="num2">
                                <div>
                                    <div>
                                        <div><img src={Experts}/></div>
                                    </div>
                                </div>
                                <h6>Nnamdi</h6>
                                <p>Managing Director</p>
                            </div>

                            <div id="num3">
                                <div>
                                    <div>
                                        <div><img src={Experts}/></div>
                                    </div>
                                </div>
                                <h6>Nnamdi</h6>
                                <p>Managing Director</p>
                            </div>

                            <div id="num4">
                                <div>
                                    <div>
                                        <div><img src={Experts}/></div>
                                    </div>
                                </div>
                                <h6>Nnamdi</h6>
                                <p>Managing Director</p>
                            </div>

                            <div id="num5">
                                <div>
                                    <div>
                                        <div><img src={Experts}/></div>
                                    </div>
                                </div>
                                <h6>Nnamdi</h6>
                                <p>Managing Director</p>
                            </div>

                            <div id="num6">
                                <div>
                                    <div>
                                        <div><img src={Experts}/></div>
                                    </div>
                                </div>
                                <h6>Nnamdi</h6>
                                <p>Managing Director</p>
                            </div>                           
                        </div>
                </div>
            </section>
{/*Anti classroom learning */}
            <section>
            <div>
                    <img src={Collage2}/>
                </div>
                <div>
                    <h2>Learning Doesn't Always Have To Be In The Classroom</h2>
                    <p>
                    We have designed other learning activities that aren’t classroom-based. 
                    You will learn how to be a better person, how to
                    have good conversations, how to work better with 
                    people and most importantly, how to lead other people. 
                    Hey! We’ll even teach you how to run a business during the Learnable Business Sessions.
                    </p>
                </div>
            </section>
{/*Apply Knowledge */}
<section>
                <div>
                    <img src={Knowledge}/>
                </div>
                <div>
                    <h2>Apply Your Knowledge</h2>
                    <p>
                        Before you’re done with Learnable, you will apply 
                        everything you’ve learned. You’ll be part of a team 
                        made up of 2 designers and 4 developers. You’ll get 
                        to work alongside the Genesys team on projects and 
                        we’ll teach you how “the sauce” is made. By combining 
                        technology, design, and great ideas, your team will 
                        have the unique opportunity to collaborate with the 
                        Genesys team to bring your own concept to life, from 
                        the first pen sketches to the final functioning product. 
                        You’ll then get to show off your special project to everyone.
                    </p>
                </div>
            </section>
{/* Frequent questions */}
            <section>
                <h2>FAQ</h2>
                <dl class="faq">
{/* faq 1 */}
                    <dt>
                        <button aria-expanded="false" aria-controls="faq1_ans">
                            How many people can attend a course? <img src={Drop}/> 
                        </button>
                    </dt>
                    <dd >
                        <p id="faq1_ans" class="ans">Only 30</p>
                    </dd>
{/* faq 2 */}
                    <dt>
                        <button aria-expanded="false" aria-controls="faq2_ans">
                            What's the learning experience like? <img src={Drop}/> 
                        </button>
                    </dt>
                    <dd >
                        <p id="faq2_ans" class="ans">Sophia</p>
                    </dd>
{/* faq 3 */}
                    <dt>
                        <button aria-expanded="false" aria-controls="faq3_ans">
                            Who are the coaches? <img src={Drop}/> 
                        </button>
                    </dt>
                    <dd >
                        <p id="faq3_ans" class="ans">Sophia</p>
                    </dd>
{/* faq 4 */}
                    <dt>
                        <button aria-expanded="false" aria-controls="faq4_ans">
                            How far in advance should we book? <img src={Drop}/> 
                        </button>
                    </dt>
                    <dd >
                        <p id="faq4_ans" class="ans">Sophia</p>
                    </dd>
{/* faq 5 */}
                    <dt>
                        <button aria-expanded="false" aria-controls="faq5_ans">
                            Can you customize your courses? <img src={Drop}/> 
                        </button>
                    </dt>
                    <dd >
                        <p id="faq5_ans" class="ans">Sophia</p>
                    </dd>
                </dl>  
                <a href="#">SEE ALL</a>             
            </section>
{/* Journal */}
            <section>
                <h2>Journal</h2>
                <a href="#">VIEW ALL</a>
                <div class="journal">
                    <div>
                        <img src={Journal}/>
                        <h6>INSPIRATION</h6>
                        <h2>Learn Design Thinking like a Pro and Build Projects that people will care about</h2>
                        <p>David Mong, Apr 9, 2020</p>
                    </div>
                    <div>
                        <img src={Journal}/>
                        <h6>INSPIRATION</h6>
                        <h2>Learn Design Thinking like a Pro and Build Projects that people will care about</h2>
                        <p>David Mong, Apr 9, 2020</p>
                    </div>
                    <div>
                        <img src={Journal}/>
                        <h6>INSPIRATION</h6>
                        <h2>Learn Design Thinking like a Pro and Build Projects that people will care about</h2>
                        <p>David Mong, Apr 9, 2020</p>
                    </div>
                    <div>
                        <img src={Journal}/>
                        <h6>INSPIRATION</h6>
                        <h2>Learn Design Thinking like a Pro and Build Projects that people will care about</h2>
                        <p>David Mong, Apr 9, 2020</p>
                    </div>
                </div>
            </section>
{/* mentions */}
            <section>
                <div>
                    <h2>Mentioned In</h2>
                    <div>
                        <div><img src={FastCompany}/> <img src={Uxcompany}/></div>
                        <div><img src={Wired}/> <img src={Webvision}/></div>
                        <div><img src={Interaction}/></div>
                    </div>
                </div>

            </section>
            <Subscribe/>
        </div>
    );
}

export default learnableHomepage;