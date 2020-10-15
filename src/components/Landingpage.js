import React, {Component} from 'react';

import Rectangle from "./images/Rectangle 36.png";
import Play from "./images/Playbutton.svg";
import Photo from "./images/Photo.png";
import Agora from "./images/agora.png";
import StartZone from "./images/startzone.png";
import Ignite from "./images/genesys ignite.png";
import Ville from "./images/codeville.png";
import Pink from "./images/pinkcode.png";
import Team from "./images/besteam.png";


import Subscribe from './Subscribe';
import Arrowsdown from './Arrowdown';
import Arrowsup from './Arrowup';

class HomePage extends React.Component{
    render(){
        return(
            <div>
                <div className="container">
                
                 {/* section called introduction */}
                    <section className="contain_1">
                      <div  className="intro">
                        <div className="intro_notes">
                            <p className="nOne">
                                Genesy Provides Opportunities For<br/> 
                                Young Nigerian Techies and Opportunities
                                To Grow And Innovate.
                            </p>
                            
                            <p className="nTwo">
                                We understand that opportunities are 
                                scarce in these parts. We<br/> 
                                are either creating or exposing our 
                                people to these<br/> opportunities.
                            </p>
                            </div>
                            
                            <Arrowsdown/>
                            <div className="image">
                               
                                <div className="img_con">
                                    <img src={Rectangle}/>
                                    {/* <button className="img2"><img src={Play}/></button>
                                    <p>#WeAreGenesys</p> */}

                                    <div className="img2">
                                    <img   src={Play}/>
                                    <p>#WeAreGenesys</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* learnable details*/}
                    <section className="learnable">
                        <div className="intro_notes2">
                            <img className="learn_img" src={Photo}/>

                            <div className="text_">
                            <h3>Learnable</h3>
                            <p>
                                Every year, young Nigerians are launching
                                new careers in technology<br/> 
                                industry.Find out how Genesy is helping them do it.
                            </p>
                            <a href="/Learnable">LEARN MORE</a>
                            </div>
                        </div>      
                    </section>

                    {/* the agora details*/}
                    <section className="agora">
                        <div className="intro_notes3">
                            <div className="text__">
                                <h3>Agora</h3>
                                <p>
                                    We are reimagining the workplace and how
                                    people work. Find out how our <br/>
                                    co-working spaces can help you enjoy the work that you do.
                                </p>
                                <a href="#">LEARN MORE</a>
                            </div>
                            <img className="the_agora" src={Agora} />
                        </div>
                        
                       
                    </section>

                    {/* startzone details*/}
                    <section className="startZone">
                        <div className="intro_notes4">
                            <img className="start_zone" src={StartZone} />

                            <div className="text___">
                            <h3>StartZone</h3>
                            <p>
                                The business environment is harsh for
                                early-stage businesses. We can help your
                                rise above it all.
                            </p>
                            <a href="#">HERE'S HOW</a>
                            </div>

                        </div>
                        
                        
                    </section>

                    {/* ignite, codeville and pinkcode details */}
                    <section className="others">
                        <div className="other_con">
                            <div className="other_photos">

                                {/* genesysignite imagery */}
                                <div className="ignite">
                                  <img src={Ignite} />
                                   <a href="#"><p>Genesys<br/>Ignite</p></a>
                                </div>

                                {/* codeville imagery */}
                                <div className="code_ville">
                                    <img src={Ville}/>
                                    <a href="#"><p>Codeville</p></a>
                                </div>

                                {/* summer code imagery */}
                                <div className="pink_">
                                    <img src={Pink}/>
                                    <a href="#"><p>Pink Summer<br/> of Code</p></a>
                                </div>      
                            </div>

                            <h3>Other Things We Do</h3>
                        </div>
                       
                    </section>

                    {/* showing the team */}
                    <section className="team">
                        <div className="intro_notes5">
                            <img className="team_" src={Team}/>
                            <div className="text____">
                                <h3>The Best Team In The World</h3>
                                <p>
                                    The business environment is harsh
                                    for early-stage businesses. We can help
                                    you rise above it all.
                                </p>
                                <a href="#">SEE TEAM</a>
                            </div>     
                        </div>
                        
                    </section>
                    <Arrowsup/>

                    <Subscribe/>
                    {/* footer hold socials, more links etc.... */}          
                </div>                      
        </div>
        );
    }
}
export default HomePage;