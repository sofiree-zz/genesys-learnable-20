import React, {Component} from 'react';
import Dev from "./images/todevstud.png";
import Twitter from "./images/twitterVector.svg";
import Facebook from "./images/facebookVector.svg";
import LinkedIn from "./images/linkedin 1vec.svg";
import Instagram from "./images/instagram 1vec.svg";
import YouTube from "./images/youtube-logotype 1.svg";
import Vimeo from "./images/vimeo 1vec.svg";


class FooterNote extends React.Component{
    render(){
        return(
            <footer className="footer_">
                <a href="/Softwaredeveloper">BUILD SOFTWARE</a>
                <a href="/Productdesigner">DESIGN DIFFERENT</a>
                <a href="/Apply">APPLY YOUR KNOWLEDGE</a>
                <a href="/FAQ">FAQ</a>

                <img id="footer_img" src={Dev}/>

                <p>
                    Learnable is proud to be a collaborative
                    effort of all the arms of our product team
                </p>

                <a href="#" >HEAD TO DEVSTUDIO</a>

                <p>
                    Our Local campus center: Kilometer 7,
                    Enugu/Port Harcourt, Expressway,
                    Centenary City, Enugu, Nigeria.
                </p>

                <a href="#" >GET IN TOUCH</a>

                <div className="social_links">
                    <a id="twitter" href="#"><img src={Twitter}/></a>                   
                    <a id="facebook" href="#"><img src={Facebook}/></a>
                    <a id="linkedin" href="#"><img src={LinkedIn}/></a>
                    <a id="instagram" href="#"><img src={Instagram}/></a>
                    <a id="youtube" href="#"><img src={YouTube}/></a>
                    <a id="vimeo" href="#"><img src={Vimeo}/> </a>                  
                </div>
                <div><p>Genesys 2020    PRIVACY STATEMENT</p></div>
            </footer>
        );
    }
}
export default FooterNote;