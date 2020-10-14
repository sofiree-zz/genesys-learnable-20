import React, {Component} from 'react';
import Rectangle from "./images/Rectangle 36.png";
import Photo from "./images/Photo.png";
import Agora from "./images/agora.png";
import StartZone from "./images/startzone.png";
import Ignite from "./images/genesys ignite.png";
import Ville from "./images/codeville.png";
import Pink from "./images/pinkcode.png";
import Team from "./images/besteam.png";


import Subscribe from './Subscribe';

class HomePage extends React.Component{
    render(){
        return(
            <div>
                <div className="container">
                 {/* section called introduction */}
                    <section className="intro">
                        <p>
                            Genesy Provides Opportunities For Young
                            Nigerian Techies and Opportunities
                            To Grow And Innovate.
                        </p>
                        
                        <p>We understand that opportunities are 
                            scarece in these parts. We are either creating or exposing our 
                            people to these opportunities.
                        </p>

                        <aside><img id="first_image" src={Rectangle}/></aside>
                    </section>

                    {/* learnable details*/}
                    <section className="learnable">
                        <aside><img id="learn_able" src={Photo}/></aside>
                        <h3>Learnable</h3>
                        <p>
                            Every year, young Nigerians are launching
                            new careers in technology industry.
                            Find out how Genesy is helping them do it.
                        </p>
                        <a href="/Learnable">LEARN MORE</a>
                    </section>

                    {/* the agora details*/}
                    <section className="agora">
                        
                        <h3>Agora</h3>
                        <p>
                            We are reimagining the workplace and how
                            people work. Find out how our co-working
                            spaces can help you enjoy the work that you do.
                        </p>
                        <a href="#">LEARN MORE</a>
                        <aside><img id="the_agora" src={Agora} /></aside> 
                    </section>

                    {/* startzone details*/}
                    <section className="startZone">
                        <aside><img id="start_zone" src={StartZone} /></aside>
                        <h3>StartZone</h3>
                        <p>
                            The business environment is harsh for
                            early-stage businesses. We can help your
                            rise above it all.
                        </p>
                        <a href="#">HERE'S HOW</a>
                    </section>

                    {/* ignite, codeville and pinkcode details */}
                    <section className="others">
                        <aside>
                            {/* genesysignite imagery */}
                        <img id="ignite" src={Ignite} />
                        <a href="#">Genesys Ignite</a>

                        {/* codeville imagery */}
                        <img id="code_ville" src={Ville}/>
                        <a href="#">Codeville</a>

                        {/* summer code imagery */}
                        <img id="pink_" src={Pink}/>
                        <a href="#">Pink Summer of Code</a>
                        </aside>
                        
                        <h1>Other Things We Do</h1>
                    </section>

                    {/* showing the team */}
                    <section className="team">
                        <aside><img id="team_" src={Team}/></aside>
                        <h1>The Best Team In The World</h1>
                        <p>
                            The business environment is harsh
                            for early-stage businesses. We can help
                            you rise above it all.
                        </p>
                        <a href="#">SEE TEAM</a>
                    </section>
                    <Subscribe/>
                    {/* footer hold socials, more links etc.... */}          
                </div>                      
        </div>
        );
    }
}
export default HomePage;