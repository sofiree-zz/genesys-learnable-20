import React from 'react';
import Dev from "./images/todevstud.png";
import Twitter from "./images/twitterVector.svg";
import Facebook from "./images/facebookVector.svg";
import LinkedIn from "./images/linkedin 1vec.svg";
import Instagram from "./images/instagram 1vec.svg";
import YouTube from "./images/youtube-logotype 1.svg";
import Vimeo from "./images/vimeo 1vec.svg";


const footer = () => {
    return(
        <footer className="footer_">
                <a href="#">BUILD SOFTWARE</a>
                <a href="#">DESIGN DIFFERENT</a>
                <a href="#">APPLY YOUR KNOWLEDGE</a>
                <a href="#">FAQ</a>

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

                <div>
                    <img src={Twitter}/>
                    <img src={Facebook}/>
                    <img src={LinkedIn}/>
                    <img src={Instagram}/>
                    <img src={YouTube}/>
                    <img src={Vimeo}/>                   
                </div>
            </footer>
    );
}

export default footer;